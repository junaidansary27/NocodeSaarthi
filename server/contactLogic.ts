import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export interface EnquiryInput {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

export interface ContactResult {
  status: number;
  body: { ok: boolean; message: string; errors?: Record<string, string> };
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, '..', 'data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
const EMAIL_LOG_FILE = path.join(DATA_DIR, 'email-log.txt');

const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function stripHtml(input: string): string {
  return input.replace(/<[^>]*>/g, '');
}

function sanitize(input: string): string {
  const stripped = stripHtml(input);
  const cleaned = Array.from(stripped)
    .filter((ch) => {
      const code = ch.codePointAt(0) ?? 0;
      return code >= 32 && code !== 127;
    })
    .join('');
  return cleaned.trim().slice(0, 5000);
}

export function validateEnquiry(data: Partial<EnquiryInput>): Record<string, string> {
  const errors: Record<string, string> = {};
  const name = (data.name ?? '').toString().trim();
  const mobile = (data.mobile ?? '').toString().trim();
  const email = (data.email ?? '').toString().trim();
  const message = (data.message ?? '').toString().trim();

  if (name.length < 2 || name.length > 80) {
    errors.name = 'Please enter your name (2-80 characters).';
  }
  const digits = mobile.replace(/\D/g, '');
  if (!/^[+]?[\d\s()-]{6,}$/.test(mobile) || digits.length < 7 || digits.length > 15) {
    errors.mobile = 'Enter a valid mobile number (7-15 digits, international).';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 120) {
    errors.email = 'Enter a valid email address.';
  }
  if (message.length < 10 || message.length > 2000) {
    errors.message = 'Message must be 10-2000 characters.';
  }
  return errors;
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  hits.push(now);
  submissions.set(ip, hits);
  return hits.length > RATE_LIMIT_MAX;
}

async function saveEnquiry(record: unknown): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    let list: unknown[] = [];
    try {
      const raw = await fs.readFile(ENQUIRIES_FILE, 'utf8');
      list = JSON.parse(raw || '[]');
      if (!Array.isArray(list)) list = [];
    } catch {
      list = [];
    }
    list.push(record);
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf8');
    } catch (err) {
      console.error('[contact] Failed to persist enquiry:', err);
    }
  }

async function sendEmail(to: string, record: { name: string; mobile: string; email: string; message: string; submittedAt: string }): Promise<boolean> {
  const host = process.env.CONTACT_SMTP_HOST;
  const user = process.env.CONTACT_SMTP_USER;
  const pass = process.env.CONTACT_SMTP_PASS;
  const from = process.env.CONTACT_SMTP_FROM ?? 'no-reply@nocodesaarthi.com';

  const subject = 'New Contact Enquiry - Nocode Saarthi';
  const text =
    'New enquiry received\n\n' +
    'Name: ' + record.name + '\n' +
    'Mobile: ' + record.mobile + '\n' +
    'Email: ' + record.email + '\n' +
    'Message: ' + record.message + '\n' +
    'Submitted: ' + record.submittedAt + '\n';

  if (!host || !user || !pass) {
    console.log('[contact] SMTP not configured. Enquiry email would be sent to ' + to + ':\n' + text);
    try {
      await fs.mkdir(DATA_DIR, { recursive: true });
      await fs.appendFile(EMAIL_LOG_FILE, '\n--- ' + record.submittedAt + ' (to ' + to + ') ---\n' + text, 'utf8');
    } catch (err) {
      console.error('[contact] Failed to write email log:', err);
    }
    return true;
  }

  try {
    const nodemailer = await import('nodemailer');
    const port = Number(process.env.CONTACT_SMTP_PORT ?? '587');
    const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    await transporter.sendMail({ from, to, subject, text });
    return true;
  } catch (err) {
    console.error('[contact] Failed to send email:', err);
    return false;
  }
}

export async function processContact(
  raw: Partial<EnquiryInput> & { _ip?: string },
  options?: { toEmail?: string }
): Promise<ContactResult> {
  const ip = (raw._ip ?? 'unknown').toString();

  if (isRateLimited(ip)) {
    return {
      status: 429,
      body: { ok: false, message: 'Too many requests. Please try again later.' },
    };
  }

  const errors = validateEnquiry(raw);
  if (Object.keys(errors).length > 0) {
    return { status: 400, body: { ok: false, message: 'Please fix the highlighted fields.', errors } };
  }

  const record = {
    name: sanitize(String(raw.name)),
    mobile: sanitize(String(raw.mobile)),
    email: sanitize(String(raw.email)),
    message: sanitize(String(raw.message)),
    submittedAt: new Date().toISOString(),
  };

  const toEmail = options?.toEmail ?? process.env.CONTACT_TO_EMAIL ?? 'your-email@example.com';
  await saveEnquiry(record);
  const sent = await sendEmail(toEmail, record);

  if (!sent) {
    return {
      status: 502,
      body: { ok: false, message: 'We received your enquiry but could not send the notification email. We will follow up.' },
    };
  }

  return {
    status: 200,
    body: { ok: true, message: 'Thank you! Your enquiry has been received. We will respond within 12 hours.' },
  };
}

export async function handleContactHttpRequest(
  req: { method?: string; on?: (event: string, cb: (chunk: unknown) => void) => void; socket?: { remoteAddress?: string } },
  res: { statusCode: number; setHeader: (k: string, v: string) => void; end: (data?: string) => void }
): Promise<void> {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ ok: false, message: 'Method Not Allowed' }));
    return;
  }

  const chunks: Buffer[] = [];
  await new Promise<void>((resolve) => {
    req.on?.('data', (c: unknown) => chunks.push(Buffer.from(c as Uint8Array)));
    req.on?.('end', () => resolve());
    setTimeout(resolve, 10000);
  });

  let payload: Partial<EnquiryInput> & { _ip?: string } = {};
  try {
    payload = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
  } catch {
    payload = {};
  }
  payload._ip = req.socket?.remoteAddress ?? 'unknown';

  const result = await processContact(payload);
  res.statusCode = result.status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(result.body));
}
