"use client";

import { useState } from "react";

export default function Tool() {
  const [object, setObject] = useState("");
  const [story, setStory] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!object || !story) return;

    setLoading(true);
    setResult("");

    const res = await fetch("/api/decide", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        object,
        story,
        tool: "throw-away",
      }),
    });

    const data = await res.json();
    setResult(data.result);
    setLoading(false);
  };

  const parts = result ? result.split("\n") : [];
  const decision = parts[0];
  const explanation = parts[1];

  return (
    <div className="max-w-2xl mx-auto text-center mb-12">
      <h1 className="text-4xl font-bold mb-4">
        Should I Throw This Away?
      </h1>

      <div className="border p-6 rounded-lg">
        <input
          type="text"
          placeholder="Object name"
          className="w-full border p-3 mb-4"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />

        <textarea
          placeholder="Describe the situation..."
          className="w-full border p-3 mb-4 h-24"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-black text-white p-3"
        >
          Get Decision
        </button>

        {loading && (
          <p className="mt-4 text-gray-500">Analyzing...</p>
        )}

        {result && !loading && (
          <div className="mt-6 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-2">
              {decision}
            </h2>
            <p className="text-gray-700">
              {explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
