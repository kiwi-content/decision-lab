"use client";

import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Should I Quit My Job? | Career Decision Simulator",
  description:
    "Evaluate financial stability, stress level, and long-term growth before quitting your job.",
};

export default function QuitMyJob() {
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
        object: "Quit My Job",
        story: situation,
        tool: "quit-my-job",
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
        <h1 className="text-4xl font-bold mb-4">Should I Quit My Job?</h1>
        <p className="text-lg text-gray-600">
          Evaluate risk, stability, and long-term impact.
        </p>
      </div>

      <div className="max-w-2xl mx-auto border p-6 rounded-lg">
        <textarea
          placeholder="Describe your situation..."
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
        <h2 className="text-2xl font-bold">When Should You Quit Your Job?</h2>

        <p>
          Quitting your job is a major life decision. Consider financial
          security, stress levels, growth opportunities, and long-term goals.
        </p>

        <h3 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h3>

        <p><strong>How do I know if I should quit my job?</strong></p>
        <p>Consider financial stability, growth opportunities, and long-term goals.</p>

        <p><strong>Is it risky to quit without another job lined up?</strong></p>
        <p>Yes, unless you have sufficient savings or a clear alternative plan.</p>

        <p><strong>Should I quit if I’m unhappy at work?</strong></p>
        <p>Unhappiness alone may not justify quitting without a strategy.</p>

        <p><strong>How much savings should I have before quitting?</strong></p>
        <p>Many experts recommend 3–6 months of living expenses.</p>

        <p><strong>Can quitting a job hurt my career?</strong></p>
        <p>It depends on timing and how you explain the decision.</p>

        <p><strong>What are signs I should stay?</strong></p>
        <p>If the role still offers growth and aligns with your goals, reconsider leaving.</p>

      </div>
    </main>
  );
}
