export const metadata = {
  title: "Terms of Service | Decision Lab",
  description:
    "Terms and conditions for using Decision Lab decision simulations.",
};

export default function TermsPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Terms of Service</h1>

        <p className="mb-6 text-[#4f5e7c]">
          By using Decision Lab, you agree to these terms.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Informational Tool Only</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Simulation outputs are informational. They are not legal, medical, financial, or therapeutic advice.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">User Responsibility</h2>
        <p className="mb-6 text-[#4f5e7c]">
          You remain fully responsible for decisions and actions taken based on the content produced.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Acceptable Use</h2>
        <p className="mb-6 text-[#4f5e7c]">
          You agree not to misuse the service, attempt abuse of system endpoints, or submit unlawful content.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Service Availability</h2>
        <p className="text-[#4f5e7c]">
          Features may change over time. We may update or discontinue parts of the service without prior notice.
        </p>
      </section>
    </main>
  );
}
