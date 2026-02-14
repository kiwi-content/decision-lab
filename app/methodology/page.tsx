import Link from "next/link";

export const metadata = {
  title: "Decision Methodology | Decision Lab",
  description:
    "Understand the structured risk analysis framework behind Decision Lab simulations. We evaluate trade-offs, reversibility, and long-term impact before generating outputs.",
};

export default function MethodologyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Decision Methodology
      </h1>

      <p className="mb-6">
        Decision Lab simulations are built on a structured analytical framework.
        We do not generate emotional reassurance. We evaluate decision variables.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Core Evaluation Framework
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Risk vs Benefit comparison</li>
        <li>Short-term vs Long-term consequence mapping</li>
        <li>Emotional impulse vs Rational positioning</li>
        <li>Reversibility of the decision</li>
        <li>Financial, psychological, and social impact analysis</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Risk-Based Simulation Model
      </h2>

      <p className="mb-4">
        Each tool categorizes input signals into structured variables.
        Instead of offering advice, we simulate likely outcomes based on
        risk exposure and decision timing.
      </p>

      <p className="mb-6">
        Outputs are intentionally concise. The objective is clarity,
        not persuasion.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What We Prioritize
      </h2>

      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Minimizing irreversible damage</li>
        <li>Reducing regret probability</li>
        <li>Highlighting hidden trade-offs</li>
        <li>Separating emotional urgency from strategic timing</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Important Disclaimer
      </h2>

      <p>
        Decision Lab provides structured simulations for informational purposes only.
        We do not provide legal, medical, or licensed financial advice.
        Final decisions remain the responsibility of the user.
      </p>
      <p className="mt-6">
        To understand the purpose behind this framework, visit our{" "}
        <Link href="/about" className="underline">
          About page
        </Link>.
      </p>
    </main>
  );
}
