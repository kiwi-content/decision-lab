"use client";

import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Should I Text My Ex? | Relationship Decision Simulator",
  description:
    "Analyze emotional risk and timing before texting your ex. A free decision simulator to help you think clearly.",
};

export default function TextMyEx() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!situation) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/decide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        object: "Text My Ex",
        story: situation,
        tool: "text-my-ex",
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const [decision, explanation] = result.split("\n");

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
      <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Relationship Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">Should I Text My Ex?</h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Analyze emotional risk and timing before reaching out.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="Describe your situation..."
          className="lab-input mb-4 h-28 resize-none"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          Run Simulation
        </button>

        {loading && <p className="mt-4 text-sm font-semibold text-[#4f4762]">Analyzing...</p>}

        {result && !loading && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left">
            <h2 className="display-font mb-2 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
            <p className="text-[#413a52]">{explanation}</p>
          </div>
        )}
      </div>

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
        <p className="text-[#4a425d]">It depends on your emotional stability and the reason for reaching out.</p>

        <p><strong className="text-[#1f1a2d]">How long should I wait before texting my ex?</strong></p>
        <p className="text-[#4a425d]">Many relationship experts suggest waiting until emotions have settled.</p>

        <p><strong className="text-[#1f1a2d]">Will texting my ex reopen emotional wounds?</strong></p>
        <p className="text-[#4a425d]">It can, especially if closure has not been fully processed.</p>

        <p><strong className="text-[#1f1a2d]">Should I text my ex for closure?</strong></p>
        <p className="text-[#4a425d]">Closure often comes from within rather than from the other person.</p>

        <p><strong className="text-[#1f1a2d]">Is texting my ex a sign of weakness?</strong></p>
        <p className="text-[#4a425d]">No, but motivation matters. Be honest about your intention.</p>

        <p><strong className="text-[#1f1a2d]">What if my ex doesn’t respond?</strong></p>
        <p className="text-[#4a425d]">Non-response is also information and should be emotionally prepared for.</p>


        <p className="mt-6 text-sm text-[#4a425d]">
          Related:
          <Link href="/quit-my-job" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Should I Quit My Job?
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
