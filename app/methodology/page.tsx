import Link from "next/link";

export const metadata = {
  title: "How It Works | Decision Lab",
  description:
    "Type your dilemma. Get a straight answer. Here's exactly how Decision Lab thinks through your mess so you don't have to.",
};

export default function MethodologyPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">How It Works</h1>

        <p className="mb-8 text-lg text-[#4f5e7c]">
          You type your messy situation. We give you a straight answer.
          No &ldquo;it depends,&rdquo; no &ldquo;follow your heart.&rdquo; Here&apos;s what happens behind the scenes.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Step 1: You Describe Your Situation</h2>
        <p className="mb-8 text-[#4f5e7c]">
          Pick a simulator and tell us what&apos;s going on. Be as honest as you want &mdash; the more
          detail you give, the sharper the answer. Nobody&apos;s judging. This isn&apos;t therapy,
          it&apos;s a decision tool.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Step 2: We Break Down Your Mess</h2>
        <p className="mb-4 text-[#4f5e7c]">
          Your situation gets analyzed across five dimensions:
        </p>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li><strong>What happens next?</strong> &mdash; Short-term vs. long-term consequences</li>
          <li><strong>Can you undo it?</strong> &mdash; Some decisions are one-way doors. We flag those.</li>
          <li><strong>What&apos;s the worst case?</strong> &mdash; How bad it gets if things go wrong</li>
          <li><strong>Does it match what you actually want?</strong> &mdash; Not what you think you should want</li>
          <li><strong>Can you actually do it?</strong> &mdash; Money, time, energy &mdash; the real constraints</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Step 3: We Give You a Straight Answer</h2>
        <p className="mb-4 text-[#4f5e7c]">
          Based on your situation, you get one of three answers:
        </p>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li><strong>Do it.</strong> &mdash; The upside is clear and the risk is manageable.</li>
          <li><strong>Don&apos;t do it.</strong> &mdash; The downside is too high or the timing is wrong.</li>
          <li><strong>Wait.</strong> &mdash; Not enough information, or waiting costs you nothing.</li>
        </ul>
        <p className="mb-8 text-[#4f5e7c]">
          Every answer comes with a reason why, the emotional trade-off you should expect,
          and a concrete next step. No fluff.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">What We Don&apos;t Do</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>We don&apos;t sugarcoat. If the answer is uncomfortable, you&apos;ll still hear it.</li>
          <li>We don&apos;t pretend to be your therapist, lawyer, or financial advisor.</li>
          <li>We don&apos;t store your submissions. Your crisis is your business.</li>
        </ul>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">One More Thing</h2>
        <p className="mb-8 text-[#4f5e7c]">
          This is a thinking tool, not a life coach. If your situation involves legal, medical,
          or financial risk, talk to an actual professional. We&apos;re good at clarity &mdash;
          not at replacing experts.
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Start With a Tool</h2>
        <p className="mb-4 text-[#4f5e7c]">Choose the simulator that matches your current decision:</p>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>
            <Link href="/text-my-ex" className="underline decoration-[#80caff] underline-offset-2">
              Should I Text My Ex?
            </Link>
          </li>
          <li>
            <Link href="/break-up" className="underline decoration-[#80caff] underline-offset-2">
              Should I Break Up?
            </Link>
          </li>
          <li>
            <Link href="/quit-my-job" className="underline decoration-[#80caff] underline-offset-2">
              Should I Quit My Job?
            </Link>
          </li>
          <li>
            <Link href="/move" className="underline decoration-[#80caff] underline-offset-2">
              Should I Move?
            </Link>
          </li>
          <li>
            <Link href="/throw-away" className="underline decoration-[#80caff] underline-offset-2">
              Should I Throw It Away?
            </Link>
          </li>
        </ul>

        <p className="text-[#4f5e7c]">
          Want to know why we built this?{" "}
          <Link href="/about" className="underline decoration-[#80caff] underline-offset-2">
            Read our story
          </Link>.
        </p>
        <p className="mt-4">
          <Link href="/" className="text-[#4f5e7c] underline decoration-[#80caff] underline-offset-2">
            Back to Home
          </Link>
        </p>
      </section>
    </main>
  );
}
