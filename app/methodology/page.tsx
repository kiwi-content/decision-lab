import Link from "next/link";

export const metadata = {
  title: "Decision Methodology | Decision Lab",
  description:
    "Understand the structured risk analysis framework behind Decision Lab simulations. We evaluate trade-offs, reversibility, and long-term impact before generating outputs.",
};

export default function MethodologyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Decision Methodology</h1>

        <p className="mb-6 text-[#4f5e7c]">
          Every simulator uses the same framework so results stay consistent across different
          life decisions. The goal is clarity through structured comparison, not emotional persuasion.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Core Lens</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>What are the likely outcomes in 1 week, 3 months, and 1 year?</li>
          <li>Which option creates irreversible downside?</li>
          <li>Which risks are acceptable and which are not?</li>
          <li>Which choice aligns with your stated values and constraints?</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Decision Process</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Parse your context into concrete decision variables</li>
          <li>Compare upside and downside for each option</li>
          <li>Assess timing, reversibility, and regret risk</li>
          <li>Return a concise recommendation with rationale</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">What We Prioritize</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Reducing avoidable harm</li>
          <li>Improving long-term fit over short-term relief</li>
          <li>Making trade-offs visible before action</li>
          <li>Supporting clear, accountable decisions</li>
        </ul>

        <p className="text-[#4f5e7c]">
          For product purpose and scope, see{" "}
          <Link href="/about" className="underline decoration-[#80caff] underline-offset-2">
            About
          </Link>.
        </p>
      </section>
    </main>
  );
}
