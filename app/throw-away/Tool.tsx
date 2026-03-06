"use client";

import Link from "next/link";
import DecisionTool from "../components/DecisionTool";

export default function ThrowAwayTool() {
  return (
    <DecisionTool
      category="Declutter Lab"
      title="Should I Throw It Away?"
      placeholder="When did you last use it? Why are you hesitating to throw it away?"
      toolSlug="throw-away"
      hasObjectField
      objectPlaceholder="Object name"
    >
      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">
          Should You Throw It Away?
        </h2>

        <p className="text-[#413a52]">
          Decluttering is not just about physical space. It is about deciding what
          deserves a place in your life right now.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should throw something away?</strong></p>
        <p className="text-[#4a425d]">
          Ask three questions: Have I used this in the past year? Would I buy it again today?
          Does keeping it cost me energy, space, or clarity? If the answer to all three is no,
          it is probably time to let it go.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret throwing it away?</strong></p>
        <p className="text-[#4a425d]">
          Regret is common but rarely lasting. If the item can be replaced for under $30,
          the cost of keeping it in your mental load may already exceed its value.
          For sentimental items, consider photographing before discarding.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I throw it away if I feel guilty?</strong></p>
        <p className="text-[#4a425d]">
          Guilt usually means the item was a gift or represents an identity you once held.
          Acknowledge that, then separate sentiment from utility. Keeping something out of guilt
          rarely honors either the item or the person who gave it.
        </p>

        <p><strong className="text-[#1f1a2d]">Is decluttering good for mental health?</strong></p>
        <p className="text-[#4a425d]">
          Research consistently links cluttered environments to higher cortisol and lower
          focus. Clearing physical space often creates mental space. Start with one small
          category rather than an entire room to see results without overwhelm.
        </p>

        <p><strong className="text-[#1f1a2d]">How often should I declutter?</strong></p>
        <p className="text-[#4a425d]">
          A light pass every season works for most people. A deeper review once a year,
          ideally around a move, change of season, or major life transition, prevents
          accumulation from resetting your progress.
        </p>

        <p><strong className="text-[#1f1a2d]">What is the best rule for deciding what to keep?</strong></p>
        <p className="text-[#4a425d]">
          The most practical rule: keep it if it is useful right now or genuinely irreplaceable.
          The 30-day box method also works well — box it, set a date, and if you never opened it,
          let it go without second-guessing.
        </p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/move" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Move?
          </Link>
        </p>
      </div>
    </DecisionTool>
  );
}
