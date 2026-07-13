import { handleContactHttpRequest } from '../server/contactLogic.js';

export const config = { api: { bodyParser: false } };

export default async function handler(req: any, res: any): Promise<void> {
  await handleContactHttpRequest(req, res);
}
