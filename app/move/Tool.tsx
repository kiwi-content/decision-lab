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
    <main className="min-h-screen bg-white text-black px-6 py-16">

      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Should I Move?
        </h1>
        <p className="text-lg text-gray-600">
          Evaluate opportunity, cost, and long-term life impact.
        </p>
      </div>

      <div className="max-w-2xl mx-auto border p-6 rounded-lg">
        <textarea
          placeholder="Describe your relocation situation..."
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
          Should You Move to Another City?
        </h2>

        <p>
          Moving is a major life transition. Consider career opportunity,
          financial cost, social support, and lifestyle changes.
        </p>

        <h3 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h3>

        <p><strong>How do I know if I should move?</strong></p>
        <p>Compare opportunity, cost, and long-term lifestyle benefits.</p>

        <p><strong>Is moving to another city worth it?</strong></p>
        <p>If career or quality-of-life gains outweigh disruption, it may be worthwhile.</p>

        <p><strong>How stressful is moving?</strong></p>
        <p>Moving can be stressful, but structured planning reduces risk.</p>

        <p><strong>Should I move for a job opportunity?</strong></p>
        <p>Evaluate salary, growth potential, and personal support systems.</p>

        <p><strong>How much savings should I have before moving?</strong></p>
        <p>Experts recommend covering at least 3 months of expenses.</p>

        <p><strong>What are signs I should stay?</strong></p>
        <p>If your current environment aligns with your goals, reconsider relocation.</p>

        <p className="mt-6 text-sm">
          Back to:
          <Link href="/" className="underline ml-1">
            Decision Lab
          </Link>
        </p>
      </div>

    </main>
  );
}
