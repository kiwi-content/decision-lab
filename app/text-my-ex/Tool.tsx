"use client";

import { useState } from "react";
import Link from "next/link";

export default function TextMyEx() {
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSubmit = async () => {
    setTouched(true);
    if (!situation.trim()) return;

    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch("/api/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          object: "Text My Ex",
          story: situation,
          tool: "text-my-ex",
        }),
      });

      if (!res.ok) {
        throw new Error("Server error. Please try again.");
      }

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSituation("");
    setResult("");
    setError("");
    setTouched(false);
  };

  const lines = result ? result.split("\n").filter((l) => l.trim() !== "") : [];
  const decision = lines[0] ?? "";
  const reason = lines[1] ?? "";
  const caution = lines[2] ?? "";
  const nextStep = lines[3] ?? "";

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-[#fffff5]/90 backdrop-blur-sm border-b border-[#80caff]/30 -mx-6 sm:-mx-10 px-6 sm:px-10 py-3 mb-8">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5d92d8] hover:text-[#1d2440] transition-colors">
            ← Decision Lab
          </Link>
          <button
            onClick={handleReset}
            className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
          >
            Try Again
          </button>
        </div>
      <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Relationship Lab</p>
        <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">Should I Text My Ex?</h1>
        <p className="text-base text-[#504760] sm:text-lg">
          Analyze emotional risk and timing before reaching out.
        </p>
      </div>

      <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
        <textarea
          placeholder="When did you break up? Who ended it, and why? What are you hoping to get from reaching out?"
          className={`lab-input mb-4 h-28 resize-none ${touched && !situation.trim() ? "border-red-400" : ""}`}
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
        {touched && !situation.trim() && (
          <p className="mb-3 -mt-2 text-xs text-red-500">Please describe your situation before running.</p>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="lab-btn disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Analyzing...
            </span>
          ) : "Run Simulation"}
        </button>

        {error && (
          <p className="mt-4 text-sm font-semibold text-red-600">{error}</p>
        )}

        {result && !loading && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left space-y-3">
            <h2 className="display-font mb-1 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
            {reason && <p className="text-[#413a52]">{reason}</p>}
            {caution && (
              <p className="text-sm text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">{caution}</p>
            )}
            {nextStep && (
              <p className="text-sm font-semibold text-[#2a7d5c]">Next: {nextStep}</p>
            )}
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

        <p><strong className="text-[#1f1a2d]">What if my ex doesn't respond?</strong></p>
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
      </section>
    </main>
  );
}
