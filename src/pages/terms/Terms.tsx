import { Helmet } from 'react-helmet-async';

export default function Terms() {
  return (
    <div className="pt-24 min-h-screen px-6 py-16 max-w-4xl mx-auto font-sans leading-relaxed text-soft-gray space-y-6">
      <Helmet>
        <title>Terms & Conditions | Nocode Saarthi</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 className="font-serif font-bold text-3xl md:text-4xl text-warm-ivory mb-2">Terms & Conditions</h1>
      <p className="text-xs text-brand-orange font-mono">Last Updated: June 30, 2026</p>

      <div className="h-px bg-white/8 my-6" />

      <h2 className="text-xl font-bold text-warm-ivory mt-8">1. Project Engagements</h2>
      <p className="text-sm md:text-base">
        All scope estimates, timeline deliverables, and project kickoff deposits are defined in separate technical Master Services Agreements (MSA) and Statements of Work (SOW). Intake forms submitted on the site act as requests for proposals, not binding commitments.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">2. Safe Gateway Payments</h2>
      <p className="text-sm md:text-base">
        Consultation sessions, deposit retainers, and custom milestone invoices processed via Stripe/Razorpay on our portal are subject to transaction fees determined by the gateways. Refunds for consultation sessions are only issued if requested 24 hours prior to the call.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">3. Intellectual Property</h2>
      <p className="text-sm md:text-base">
        Clients retain 100% ownership of custom databases, code repositories, and visual configurations built for them upon settlement of milestone invoices. Nocode Saarthi retains rights over pre-built structural blocks and baseline library automation scripts.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">4. Liability Exclusions</h2>
      <p className="text-sm md:text-base">
        We configure API filters and error traps to ensure stability. However, Nocode Saarthi is not responsible for outages caused by third-party SaaS tools rate limits, database outages, or model API updates.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">5. Governing Law</h2>
      <p className="text-sm md:text-base">
        These terms are governed and construed in accordance with the laws of India, under NCR Delhi jurisdiction.
      </p>
    </div>
  );
}
