export const metadata = {
  title: "Privacy Policy | Decision Lab",
  description:
    "Learn how Decision Lab handles user data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Privacy Policy</h1>

        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab is designed to minimize data collection. We only process what is required to
          deliver simulation responses and maintain service quality.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">What We Collect</h2>
        <p className="mb-6 text-[#4f5e7c]">
          We do not require account creation for basic use. Text submitted into simulations may be
          processed to generate outputs. Avoid entering personal identifiers or highly sensitive data.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Cookies and Analytics</h2>
        <p className="mb-6 text-[#4f5e7c]">
          We may use analytics or advertising tools that rely on cookies to measure traffic and improve
          the product experience.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Third-Party Processing</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Simulation requests may be processed by external model providers. Those providers may handle
          submitted text under their own terms and privacy policies.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Data Safety Guidance</h2>
        <p className="text-[#4f5e7c]">
          Do not submit legal IDs, medical records, payment information, or private account credentials.
        </p>
      </section>
    </main>
  );
}
