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
    <div className="mx-auto mb-12 max-w-3xl fade-in-up">
      <div className="mb-6 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">Declutter Lab</p>
        <h1 className="display-font text-4xl font-extrabold uppercase leading-tight text-[#1a1627] sm:text-5xl">
        Should I Throw This Away?
        </h1>
      </div>

      <div className="card-pop bg-white p-6 sm:p-7">
        <input
          type="text"
          placeholder="Object name"
          className="lab-input mb-4"
          value={object}
          onChange={(e) => setObject(e.target.value)}
        />

        <textarea
          placeholder="Describe the situation..."
          className="lab-input mb-4 h-28 resize-none"
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="lab-btn"
        >
          Get Decision
        </button>

        {loading && (
          <p className="mt-4 text-sm font-semibold text-[#4f4762]">Analyzing...</p>
        )}

        {result && !loading && (
          <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left">
            <h2 className="display-font mb-2 text-3xl font-bold uppercase text-[#1a1627]">
              {decision}
            </h2>
            <p className="text-[#413a52]">
              {explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
