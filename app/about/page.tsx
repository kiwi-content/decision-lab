import Link from "next/link";

export const metadata = {
  title: "About Decision Lab",
  description:
    "Decision Lab is an AI-powered decision simulation platform focused on structured risk analysis and rational clarity before major life decisions.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">About Decision Lab</h1>

      <p className="mb-4">
        Decision Lab is an AI-powered decision simulation platform designed to
        help you think more clearly before making important life choices.
      </p>

      <p className="mb-4">
        We do not tell you what to do. We structure your thinking.
      </p>
      <p className="mb-6">
        Learn more about our structured framework on the{" "}
        <Link href="/methodology" className="underline">
          Methodology page
        </Link>.
      </p>
      <p className="mb-8">
        Unlike generic advice platforms, Decision Lab focuses on structured
        risk analysis, trade-off evaluation, and scenario simulation to help
        you understand consequences before you act.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Decision Lab Exists
      </h2>

      <p className="mb-4">
        Important life decisions are often made under emotional pressure and
        incomplete risk assessment. Decision Lab introduces structured
        reasoning into emotionally charged situations.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        How Our Simulation Works
      </h2>

      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Risk vs Benefit analysis</li>
        <li>Short-term vs Long-term consequences</li>
        <li>Emotional impulse vs Rational positioning</li>
        <li>Reversibility of the decision</li>
        <li>Financial, psychological, and social impact review</li>
      </ul>

      <p className="mb-6">
        The output is intentionally concise — because clarity does not require
        excessive explanation.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        What Decision Lab Is Not
      </h2>

      <p className="mb-4">
        Decision Lab does not provide legal, medical, or financial investment
        advice. All simulations are informational tools designed to support
        structured thinking.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Our Long-Term Vision
      </h2>

      <p>
        We aim to build a scalable library of structured decision simulations
        across career, relationships, and life transitions.
      </p>
    </main>
  );
}
