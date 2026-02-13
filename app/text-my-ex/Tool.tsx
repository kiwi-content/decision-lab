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
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Should I Text My Ex?</h1>
        <p className="text-lg text-gray-600">
          Analyze emotional risk and timing before reaching out.
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
        <h2 className="text-2xl font-bold">Should You Text Your Ex?</h2>

        <p>
          Deciding whether to text your ex can be emotionally complicated.
          Timing, emotional vulnerability, and your true intention all matter.
        </p>

        <h3 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h3>

        <p><strong>Is it a good idea to text my ex?</strong></p>
        <p>It depends on your emotional stability and the reason for reaching out.</p>

        <p><strong>How long should I wait before texting my ex?</strong></p>
        <p>Many relationship experts suggest waiting until emotions have settled.</p>

        <p><strong>Will texting my ex reopen emotional wounds?</strong></p>
        <p>It can, especially if closure has not been fully processed.</p>

        <p><strong>Should I text my ex for closure?</strong></p>
        <p>Closure often comes from within rather than from the other person.</p>

        <p><strong>Is texting my ex a sign of weakness?</strong></p>
        <p>No, but motivation matters. Be honest about your intention.</p>

        <p><strong>What if my ex doesn’t respond?</strong></p>
        <p>Non-response is also information and should be emotionally prepared for.</p>


        <p className="mt-6 text-sm">
          Related:
          <Link href="/quit-my-job" className="underline ml-1">
            Should I Quit My Job?
          </Link>
        </p>
      </div>
    </main>
  );
}
