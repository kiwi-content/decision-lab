"use client";

import Link from "next/link";
import DecisionTool from "../components/DecisionTool";

export default function BreakUpTool() {
  return (
    <DecisionTool
      category="Relationship Lab"
      title="Should I Break Up?"
      subtitle="Evaluate emotional health and long-term compatibility."
      placeholder="How long have you been together? What keeps going wrong? Have you tried to fix it, and what happened?"
      toolSlug="break-up"
    >
      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">
          When Is It Time to Break Up?
        </h2>

        <p className="text-[#413a52]">
          Ending a relationship is one of the hardest personal decisions.
          Consider emotional safety, communication patterns, and shared goals.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should break up?</strong></p>
        <p className="text-[#4a425d]">
          Pay attention to repeated patterns: unresolved conflict, emotional
          disrespect, fear of honesty, and shrinking self-esteem. If repair attempts
          keep failing, that is stronger evidence than temporary good days.
        </p>

        <p><strong className="text-[#1f1a2d]">Is staying together for comfort a bad idea?</strong></p>
        <p className="text-[#4a425d]">
          Comfort is valuable, but it should not replace compatibility. If you stay
          mainly to avoid grief, you may trade short-term relief for long-term
          resentment.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I break up if I still love them?</strong></p>
        <p className="text-[#4a425d]">
          Possibly. Love can coexist with incompatibility around trust, life goals,
          communication, or safety. Ask whether this relationship helps both of you
          grow or keeps both of you stuck.
        </p>

        <p><strong className="text-[#1f1a2d]">Is breaking up selfish?</strong></p>
        <p className="text-[#4a425d]">
          Not when done with honesty and care. Staying in a relationship you no longer
          believe in can be more harmful than a respectful, clear ending.
        </p>

        <p><strong className="text-[#1f1a2d]">How do I break up kindly?</strong></p>
        <p className="text-[#4a425d]">
          Be direct, private, and specific without attacking character. Use short
          statements, avoid mixed messages, and set clear boundaries about future
          contact so healing can begin.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret breaking up?</strong></p>
        <p className="text-[#4a425d]">
          Regret is common in the first weeks because the routine changed. Give
          yourself a no-contact reflection window, review why you left, and evaluate
          patterns rather than isolated memories.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/text-my-ex" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Text My Ex?
          </Link>
        </p>
      </div>
    </DecisionTool>
  );
}
