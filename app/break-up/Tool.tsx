"use client";

import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Should I Break Up? | Relationship Decision Simulator",
  description:
    "Analyze emotional health, compatibility, and long-term impact before ending a relationship.",
};

export default function BreakUp() {
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
        object: "Break Up",
        story: situation,
        tool: "break-up",
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const [decision, explanation] = result.split("\n");

  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Should I Break Up?
        </h1>
        <p className="text-lg text-gray-600">
          Evaluate emotional health and long-term compatibility.
        </p>
      </div>

      <div className="max-w-2xl mx-auto border p-6 rounded-lg">
        <textarea
          placeholder="Describe your relationship situation..."
          className="w-full border p-3 mb-4 h-24"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-3"
        >
          Run Simulation
        </button>

        {loading && <p className="mt-4 text-gray-500">Analyzing...</p>}

        {result && !loading && (
          <div className="mt-6 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-2">{decision}</h2>
            <p className="text-gray-700">{explanation}</p>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto mt-20 space-y-6">
        <h2 className="text-2xl font-bold">
          When Is It Time to Break Up?
        </h2>

        <p>
          Ending a relationship is one of the hardest personal decisions.
          Consider emotional safety, communication patterns, and shared goals.
        </p>

        <h3 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h3>

        <p><strong>How do I know if I should break up?</strong></p>
        <p>If communication repeatedly fails and emotional health declines, reassess the relationship.</p>

        <p><strong>Is staying together for comfort a bad idea?</strong></p>
        <p>Comfort alone is not a strong foundation for long-term happiness.</p>

        <p><strong>Should I break up if I still love them?</strong></p>
        <p>Love alone may not resolve compatibility issues.</p>

        <p><strong>Is breaking up selfish?</strong></p>
        <p>Ending a relationship respectfully can be healthy for both people.</p>

        <p><strong>How do I break up kindly?</strong></p>
        <p>Communicate clearly and honestly without blaming.</p>

        <p><strong>What if I regret breaking up?</strong></p>
        <p>Regret can happen, but clarity often grows with time.</p>

        <p className="mt-6 text-sm">
          Related:
          <Link href="/move" className="underline ml-1">
            Should I Move?
          </Link>
        </p>
      </div>

    </main>
  );
}
