import { Helmet } from 'react-helmet-async';

export default function Privacy() {
  return (
    <div className="pt-24 min-h-screen px-6 py-16 max-w-4xl mx-auto font-sans leading-relaxed text-soft-gray space-y-6">
      <Helmet>
        <title>Privacy Policy | Nocode Saarthi</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1 className="font-serif font-bold text-3xl md:text-4xl text-warm-ivory mb-2">Privacy Policy</h1>
      <p className="text-xs text-brand-orange font-mono">Last Updated: June 30, 2026</p>

      <div className="h-px bg-white/8 my-6" />

      <h2 className="text-xl font-bold text-warm-ivory mt-8">1. Information Collection</h2>
      <p className="text-sm md:text-base">
        We collect requirements data and personal details (like name, company, and email) that you submit via our Project Discovery Intake forms, Careers application forms, and Payment configurations. This data is exclusively used to draft scope proposals and schedule technical audit sessions.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">2. Data Security & Storage</h2>
      <p className="text-sm md:text-base">
        All intake details are encrypted in transit using SSL/TLS 256-bit standards. We store database information in secure cloud nodes managed by Supabase, protected with role-based access rules. We do not sell or leak client email details to third-party marketing services.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">3. Cookies & Analytics</h2>
      <p className="text-sm md:text-base">
        We utilize minimal analytics cookies to optimize page load performance, track form validation errors, and check general click ratios. You can configure your browser to reject all local tracking cookies.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">4. Payment Gateways</h2>
      <p className="text-sm md:text-base">
        Credit card billing and UPI QR actions are processed securely via merchant gateway APIs (Stripe and Razorpay). Nocode Saarthi does not store card numbers or banking passwords on its servers.
      </p>

      <h2 className="text-xl font-bold text-warm-ivory mt-8">5. Contact Information</h2>
      <p className="text-sm md:text-base">
        For inquiries regarding data removal, please contact our privacy compliance desk at: <span className="text-brand-orange">hello@nocodesaarthi.com</span>
      </p>
    </div>
  );
}
