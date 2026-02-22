import Link from "next/link";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for real-life choices.",
};

export default function Home() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl bg-[#fffff5] px-6 py-7 sm:px-10 sm:py-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="rounded-full border border-[#80caff] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5884c8]">
            Decision Lab
          </p>
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#6a89c4] sm:text-sm">
            <span className="rounded-full border border-[#80caff] bg-white px-4 py-2">Home</span>
            <span className="rounded-full border border-[#80caff] bg-white px-4 py-2">Simulators</span>
            <span className="rounded-full border border-[#80caff] bg-white px-4 py-2">Method</span>
          </nav>
        </header>

        <div className="mb-8 fade-in-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#5d92d8]">
            Run your decision before you live it
          </p>
          <h1 className="display-font text-5xl font-extrabold uppercase leading-[0.92] text-[#1d2440] sm:text-7xl lg:text-8xl">
            Decide
            <br />
            With Clarity
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#4f5e7c] sm:text-xl">
            Work through hard choices with a human-centered lens. Weigh emotion,
            risk, timing, and long-term impact before you take action.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/text-my-ex" className="card-pop fade-in-up bg-[#f893e1]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7d68cc]">Relationship</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Text My Ex?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Assess emotional risk, readiness, and communication intent.</p>
          </Link>

          <Link href="/quit-my-job" className="card-pop fade-in-up bg-[#80caff]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#5d92d8]">Career</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Quit My Job?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Balance runway, stress, growth potential, and downside risk.</p>
          </Link>

          <Link href="/break-up" className="card-pop fade-in-up bg-[#a180ff]/24 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#6d59be]">Relationship</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Break Up?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Review recurring patterns, compatibility, and future alignment.</p>
          </Link>

          <Link href="/move" className="card-pop fade-in-up bg-[#91e5b3]/28 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2a9f76]">Relocation</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Move?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Model opportunity, cost shifts, and quality-of-life tradeoffs.</p>
          </Link>
        </div>

        <div className="mt-5">
          <Link href="/throw-away" className="card-pop fade-in-up block bg-[#ffe878]/42 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b28b00]">Declutter</p>
            <h2 className="display-font text-4xl font-bold text-[#1d2440]">Should I Throw This Away?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Separate practical utility from attachment to declutter cleanly.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
