import Link from "next/link";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for real-life choices.",
};

export default function Home() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl bg-[#0f1d2d] px-6 py-7 sm:px-10 sm:py-10">
        <header className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#cfe8ff]">
            Decision Lab
          </p>
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#d4e6ff] sm:text-sm">
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">Home</span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">Simulators</span>
            <span className="rounded-full border border-white/20 bg-white/5 px-4 py-2">Method</span>
          </nav>
        </header>

        <div className="mb-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="fade-in-up">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#98c8ff]">
              Run your decision before you live it
            </p>
            <h1 className="display-font text-5xl font-extrabold uppercase leading-[0.92] text-[#e6f2ff] sm:text-7xl lg:text-8xl">
              Decision
              <br />
              Intelligence
            </h1>
            <p className="mt-6 max-w-2xl text-sm text-[#b9d3ef] sm:text-base">
              Simulate hard choices with structured prompts. Evaluate emotion, risk,
              timing, and long-term impact before acting.
            </p>
          </div>

          <aside className="card-pop fade-in-up bg-[#0c1b2c] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9ccfff]">Signal Summary</p>
            <dl className="mt-4 space-y-4 text-sm text-[#d5e9ff]">
              <div className="flex items-center justify-between">
                <dt>Relationship scenarios</dt>
                <dd className="font-bold text-[#6ef2c7]">2 tools</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Career and relocation</dt>
                <dd className="font-bold text-[#56d5ff]">2 tools</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt>Declutter utility</dt>
                <dd className="font-bold text-[#7ea6ff]">1 tool</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Link href="/text-my-ex" className="card-pop fade-in-up bg-[#12253a] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9fcfff]">Relationship</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#edf6ff]">Should I Text My Ex?</h2>
            <p className="mt-3 text-sm text-[#bad5ee]">Assess emotional risk, readiness, and communication intent.</p>
          </Link>

          <Link href="/quit-my-job" className="card-pop fade-in-up bg-[#102133] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9fcfff]">Career</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#edf6ff]">Should I Quit My Job?</h2>
            <p className="mt-3 text-sm text-[#bad5ee]">Balance runway, stress, growth potential, and downside risk.</p>
          </Link>

          <Link href="/break-up" className="card-pop fade-in-up bg-[#12253a] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9fcfff]">Relationship</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#edf6ff]">Should I Break Up?</h2>
            <p className="mt-3 text-sm text-[#bad5ee]">Review recurring patterns, compatibility, and future alignment.</p>
          </Link>

          <Link href="/move" className="card-pop fade-in-up bg-[#102133] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9fcfff]">Relocation</p>
            <h2 className="display-font text-3xl font-bold leading-tight text-[#edf6ff]">Should I Move?</h2>
            <p className="mt-3 text-sm text-[#bad5ee]">Model opportunity, cost shifts, and quality-of-life tradeoffs.</p>
          </Link>
        </div>

        <div className="mt-5">
          <Link href="/throw-away" className="card-pop fade-in-up block bg-[#12253a] p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#9fcfff]">Declutter</p>
            <h2 className="display-font text-3xl font-bold text-[#edf6ff]">Should I Throw This Away?</h2>
            <p className="mt-3 text-sm text-[#bad5ee]">Separate practical utility from attachment to declutter cleanly.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
