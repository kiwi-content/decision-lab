"use client";

import Link from "next/link";
import DecisionTool from "../components/DecisionTool";

export default function MoveTool() {
  return (
    <DecisionTool
      category="Relocation Lab"
      title="Should I Move?"
      subtitle="Evaluate opportunity, cost, and long-term life impact."
      placeholder="Where are you moving from and to? What's the main reason you're considering the move? What would you be leaving behind?"
      toolSlug="move"
    >
      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">
          Should You Move to Another City?
        </h2>

        <p className="text-[#413a52]">
          Moving is a major life transition. Consider career opportunity,
          financial cost, social support, and lifestyle changes.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should move?</strong></p>
        <p className="text-[#4a425d]">
          Build a weighted score for career upside, cost of living, support system,
          and day-to-day lifestyle. If one city wins across your top three priorities,
          the decision is usually clearer.
        </p>

        <p><strong className="text-[#1f1a2d]">Is moving to another city worth it?</strong></p>
        <p className="text-[#4a425d]">
          It is worth it when the long-term gain is concrete, not vague. Define what
          success looks like in 12 months: income, commute, social life, and health.
          If those metrics improve, the disruption may be justified.
        </p>

        <p><strong className="text-[#1f1a2d]">How stressful is moving?</strong></p>
        <p className="text-[#4a425d]">
          Stress is high but manageable with planning. Reduce pressure by breaking it
          into phases: housing, budget, logistics, and social setup, each with a
          timeline and backup option.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I move for a job opportunity?</strong></p>
        <p className="text-[#4a425d]">
          Compare total compensation after taxes and housing, not just salary. Also
          check role quality, manager fit, promotion path, and whether the move
          improves your weekly quality of life.
        </p>

        <p><strong className="text-[#1f1a2d]">How much savings should I have before moving?</strong></p>
        <p className="text-[#4a425d]">
          A strong target is 4 to 6 months of expenses plus one-time moving costs,
          deposits, and setup purchases. This buffer prevents bad short-term decisions
          under financial pressure.
        </p>

        <p><strong className="text-[#1f1a2d]">What are signs I should stay?</strong></p>
        <p className="text-[#4a425d]">
          Stay if your current city already supports your goals, relationships, and
          mental bandwidth. If you are moving mainly to escape a temporary problem,
          solve that first before relocating.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/quit-my-job" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Quit My Job?
          </Link>
        </p>
      </div>
    </DecisionTool>
  );
}
