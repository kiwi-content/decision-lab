"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

const MAX_STORY_LENGTH = 5000;

interface DecisionToolProps {
  category: string;
  title: string;
  subtitle?: string;
  placeholder: string;
  toolSlug: string;
  hasObjectField?: boolean;
  objectPlaceholder?: string;
  children: ReactNode;
}

export default function DecisionTool({
  category,
  title,
  subtitle,
  placeholder,
  toolSlug,
  hasObjectField,
  objectPlaceholder,
  children,
}: DecisionToolProps) {
  const [object, setObject] = useState("");
  const [situation, setSituation] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);
  const [copied, setCopied] = useState(false);

  const isValid = hasObjectField
    ? object.trim() && situation.trim()
    : situation.trim();

  const handleSubmit = async () => {
    setTouched(true);
    if (!isValid) return;

    setLoading(true);
    setResult("");
    setError("");

    try {
      const res = await fetch("/api/decide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          object: hasObjectField ? object : title,
          story: situation,
          tool: toolSlug,
        }),
      });

      if (!res.ok) {
        if (res.status === 429) {
          throw new Error("Too many requests. Please wait a minute and try again.");
        }
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleReset = () => {
    setObject("");
    setSituation("");
    setResult("");
    setError("");
    setTouched(false);
    setCopied(false);
  };

  const handleCopyResult = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may not be available
    }
  };

  const lines = result ? result.split("\n").filter((l) => l.trim() !== "") : [];
  const decision = lines[0] ?? "";
  const reason = lines[1] ?? "";
  const caution = lines[2] ?? "";
  const nextStep = lines[3] ?? "";

  const storyField = hasObjectField ? situation : situation;
  const charCount = storyField.length;

  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
        <div className="sticky top-0 z-10 flex items-center justify-between bg-[#fffff5]/90 backdrop-blur-sm border-b border-[#80caff]/30 -mx-6 sm:-mx-10 px-6 sm:px-10 py-3 mb-8">
          <Link href="/" className="text-xs font-bold uppercase tracking-[0.2em] text-[#5d92d8] hover:text-[#1d2440] transition-colors">
            &larr; Decision Lab
          </Link>
          {(result || situation || object) && (
            <button
              onClick={handleReset}
              className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
            >
              Try Again
            </button>
          )}
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center fade-in-up">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-black/50">{category}</p>
          <h1 className="display-font mb-4 text-4xl font-extrabold uppercase text-[#1a1627] sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base text-[#504760] sm:text-lg">{subtitle}</p>
          )}
        </div>

        <div className="card-pop mx-auto max-w-3xl bg-white p-6 sm:p-7">
          {hasObjectField && (
            <input
              type="text"
              placeholder={objectPlaceholder ?? "Object name"}
              aria-label="Object name"
              className={`lab-input mb-4 ${touched && !object.trim() ? "border-red-400" : ""}`}
              value={object}
              onChange={(e) => setObject(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          )}

          <label htmlFor="situation-input" className="sr-only">
            Describe your situation
          </label>
          <textarea
            id="situation-input"
            placeholder={placeholder}
            maxLength={MAX_STORY_LENGTH}
            className={`lab-input mb-1 h-28 resize-none ${touched && !situation.trim() ? "border-red-400" : ""}`}
            value={situation}
            onChange={(e) => setSituation(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <p className="mb-3 text-right text-xs text-black/30">
            {charCount.toLocaleString()}/{MAX_STORY_LENGTH.toLocaleString()}
          </p>

          {touched && !isValid && (
            <p className="mb-3 -mt-2 text-xs text-red-500">
              {hasObjectField
                ? "Please fill in both fields before running."
                : "Please describe your situation before running."}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            aria-busy={loading}
            className="lab-btn disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="inline-flex items-center gap-2" role="status">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Analyzing...
              </span>
            ) : "Run Simulation"}
          </button>

          {error && (
            <p className="mt-4 text-sm font-semibold text-red-600" role="alert">{error}</p>
          )}

          {result && !loading && (
            <div className="mt-6 rounded-2xl border border-black/10 bg-[#f7f4fc] p-5 text-left space-y-3" aria-live="polite">
              <h2 className="display-font mb-1 text-3xl font-bold uppercase text-[#1a1627]">{decision}</h2>
              {reason && <p className="text-[#413a52]">{reason}</p>}
              {caution && (
                <p className="text-sm text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">{caution}</p>
              )}
              {nextStep && (
                <p className="text-sm font-semibold text-[#2a7d5c]">Next: {nextStep}</p>
              )}
              <button
                onClick={handleCopyResult}
                className="mt-2 rounded-full border border-[#80caff] bg-white px-4 py-1.5 text-xs font-semibold text-[#5d92d8] hover:bg-[#f3f9ff] transition-colors"
              >
                {copied ? "Copied!" : "Copy Result"}
              </button>
            </div>
          )}
        </div>

        {children}
      </section>
    </main>
  );
}
