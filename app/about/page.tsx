import Link from "next/link";

export const metadata = {
  title: "About Decision Lab",
  description:
    "Decision Lab is an AI-powered decision simulation platform focused on structured risk analysis and rational clarity before major life decisions.",
};

export default function AboutPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">About Decision Lab</h1>

        <p className="mb-4 text-[#4f5e7c]">
          Decision Lab helps people think clearly before making emotionally heavy life choices.
          We focus on structure, trade-offs, and practical next steps rather than generic advice.
        </p>

        <p className="mb-8 text-[#4f5e7c]">
          Our principle is simple: we do not decide for you. We help you evaluate your options
          with better framing so your final decision is intentional, not reactive.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Why This Exists</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Important choices are often made in stress, uncertainty, or urgency. In those moments,
          people need a structured way to slow down, compare outcomes, and spot blind spots.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">What We Evaluate</h2>
        <ul className="mb-6 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Short-term relief vs long-term consequences</li>
          <li>Risk level and reversibility of each option</li>
          <li>Emotional motivation vs practical feasibility</li>
          <li>Financial, social, and mental load impact</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">What We Are Not</h2>
        <p className="mb-6 text-[#4f5e7c]">
          Decision Lab is an informational tool, not a substitute for licensed legal, medical,
          therapy, or financial professionals.
        </p>

        <p className="text-[#4f5e7c]">
          For details on the framework, visit{" "}
          <Link href="/methodology" className="underline decoration-[#80caff] underline-offset-2">
            Methodology
          </Link>.
        </p>
      </section>
    </main>
  );
}
