export const metadata = {
  title: "Terms of Service | Decision Lab",
  description:
    "Terms and conditions for using Decision Lab decision simulations.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-6">
        By using Decision Lab, you agree to the following terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Informational Use Only
      </h2>

      <p className="mb-6">
        Decision Lab provides structured decision simulations for informational
        purposes only. Results do not constitute legal, medical, financial, or
        professional advice.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        User Responsibility
      </h2>

      <p className="mb-6">
        Users are solely responsible for decisions made based on simulation
        outputs.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Service Availability
      </h2>

      <p>
        We may modify or discontinue services at any time without prior notice.
      </p>
    </main>
  );
}
