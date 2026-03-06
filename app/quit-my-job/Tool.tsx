"use client";

import Link from "next/link";
import DecisionTool from "../components/DecisionTool";

export default function QuitMyJobTool() {
  return (
    <DecisionTool
      category="Career Lab"
      title="Should I Quit My Job?"
      subtitle="Evaluate risk, stability, and long-term impact."
      placeholder="How long have you been at this job? What's pushing you to leave? Do you have savings or another offer lined up?"
      toolSlug="quit-my-job"
    >
      <div className="mx-auto mt-14 max-w-4xl space-y-6">
        <h2 className="display-font text-2xl font-bold uppercase text-[#1a1627]">When Should You Quit Your Job?</h2>

        <p className="text-[#413a52]">
          Quitting your job is a major life decision. Consider financial
          security, stress levels, growth opportunities, and long-term goals.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          Frequently Asked Questions
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should quit my job?</strong></p>
        <p className="text-[#4a425d]">
          Look for persistent patterns, not bad weeks. Strong signals include chronic
          burnout, no path to growth, values misalignment, and no realistic internal
          fix after direct conversations with your manager.
        </p>

        <p><strong className="text-[#1f1a2d]">Is it risky to quit without another job lined up?</strong></p>
        <p className="text-[#4a425d]">
          Yes. Reduce risk by calculating your monthly burn rate, securing at least
          4 to 6 months of runway, and planning health insurance and job-search
          timeline before giving notice.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I quit if I&apos;m unhappy at work?</strong></p>
        <p className="text-[#4a425d]">
          Unhappiness matters, but diagnose the source first. If the problem is role
          fit or team dynamics, a transfer or scope change may solve it faster than
          resigning without a plan.
        </p>

        <p><strong className="text-[#1f1a2d]">How much savings should I have before quitting?</strong></p>
        <p className="text-[#4a425d]">
          Use tiers: 3 months is minimum, 6 months is safer, and 9 months is ideal
          in slower hiring markets. Include debt payments, insurance, and emergency
          costs, not just rent and food.
        </p>

        <p><strong className="text-[#1f1a2d]">Can quitting a job hurt my career?</strong></p>
        <p className="text-[#4a425d]">
          It can if the story is unclear. Protect your narrative by framing the move
          around growth, impact, and fit. Leave professionally and preserve references.
        </p>

        <p><strong className="text-[#1f1a2d]">What are signs I should stay?</strong></p>
        <p className="text-[#4a425d]">
          Stay if there is real mentorship, clear progression, manageable stress, and
          compensation trending in the right direction. If those are improving, waiting
          3 to 6 months may produce a better exit.
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
