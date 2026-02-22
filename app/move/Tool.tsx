"use client";

import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Should I Move? | Relocation Decision Simulator",
  description:
    "Compare opportunity, cost, and life impact before deciding to move to a new city.",
};

export default function Move() {
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
        object: "Move",
        story: situation,
        tool: "move",
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
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Relocation Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
          Should I Move?
        </h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Evaluate opportunity, cost, and long-term life impact.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="Describe your relocation situation..."
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
        <p className="text-[#4a425d]">Compare opportunity, cost, and long-term lifestyle benefits.</p>

        <p><strong className="text-[#1f1a2d]">Is moving to another city worth it?</strong></p>
        <p className="text-[#4a425d]">If career or quality-of-life gains outweigh disruption, it may be worthwhile.</p>

        <p><strong className="text-[#1f1a2d]">How stressful is moving?</strong></p>
        <p className="text-[#4a425d]">Moving can be stressful, but structured planning reduces risk.</p>

        <p><strong className="text-[#1f1a2d]">Should I move for a job opportunity?</strong></p>
        <p className="text-[#4a425d]">Evaluate salary, growth potential, and personal support systems.</p>

        <p><strong className="text-[#1f1a2d]">How much savings should I have before moving?</strong></p>
        <p className="text-[#4a425d]">Experts recommend covering at least 3 months of expenses.</p>

        <p><strong className="text-[#1f1a2d]">What are signs I should stay?</strong></p>
        <p className="text-[#4a425d]">If your current environment aligns with your goals, reconsider relocation.</p>

        <p className="mt-6 text-sm text-[#4a425d]">
          Back to:
          <Link href="/" className="ml-1 underline decoration-[#66c6ff] decoration-2 underline-offset-2">
            Decision Lab
          </Link>
        </p>
      </div>
      </section>
    </main>
  );
}
