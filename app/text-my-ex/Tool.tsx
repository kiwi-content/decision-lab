"use client";

import Link from "next/link";
import DecisionTool from "../components/DecisionTool";

export default function TextMyExTool() {
  return (
    <DecisionTool
      category="Relationship Lab"
      title="Should I Text My Ex?"
      subtitle="Analyze emotional risk and timing before reaching out."
      placeholder="When did you break up? Who ended it, and why? What are you hoping to get from reaching out?"
      toolSlug="text-my-ex"
    >
      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">Should You Text Your Ex?</h2>

        <p className="text-[#413a52]">
          Deciding whether to text your ex can be emotionally complicated.
          Timing, emotional vulnerability, and your true intention all matter.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">Is it a good idea to text my ex?</strong></p>
        <p className="text-[#4a425d]">
          It can be, but only if your goal is clear. If you are seeking reassurance,
          trying to stop loneliness, or hoping for a specific response, wait until
          your emotions settle and you can accept any outcome.
        </p>

        <p><strong className="text-[#1f1a2d]">How long should I wait before texting my ex?</strong></p>
        <p className="text-[#4a425d]">
          A practical baseline is at least 30 days of no contact after a breakup,
          longer if the ending was intense. The better signal is emotional readiness:
          you can send one message without spiraling about the reply.
        </p>

        <p><strong className="text-[#1f1a2d]">Will texting my ex reopen emotional wounds?</strong></p>
        <p className="text-[#4a425d]">
          Yes, especially when unresolved conflict or mixed signals remain. Before
          reaching out, ask yourself whether you have support in place if the response
          is cold, delayed, or absent.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I text my ex for closure?</strong></p>
        <p className="text-[#4a425d]">
          Usually, no. Closure from an ex is unpredictable. A healthier approach is
          to write what you wish you could say, identify what you need to release,
          and then decide whether contact still serves you.
        </p>

        <p><strong className="text-[#1f1a2d]">Is texting my ex a sign of weakness?</strong></p>
        <p className="text-[#4a425d]">
          No. What matters is intention and boundaries. A short, respectful message
          can be healthy; repeated messaging to reduce anxiety usually leads to regret.
        </p>

        <p><strong className="text-[#1f1a2d]">What if my ex doesn&apos;t respond?</strong></p>
        <p className="text-[#4a425d]">
          Treat non-response as a complete answer, not a puzzle to solve. Do not send
          follow-ups for 7 days. Use that space to refocus on routines, friends, and
          your own healing plan.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/break-up" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Break Up?
          </Link>
        </p>
      </div>
    </DecisionTool>
  );
}
