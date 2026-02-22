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
            <Link href="/" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              Home
            </Link>
            <Link href="#simulators" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              Simulators
            </Link>
            <Link href="/methodology" className="rounded-full border border-[#80caff] bg-white px-4 py-2 hover:bg-[#f3f9ff]">
              Method
            </Link>
          </nav>
        </header>

        <div className="mb-8 fade-in-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#5d92d8]">
            Run your decision before you live it
          </p>
          <h1 className="display-font text-5xl font-extrabold uppercase leading-[0.92] text-[#1d2440] sm:text-7xl lg:text-8xl">
            We&apos;ll Decide
            <br />
            For You.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-[#4f5e7c] sm:text-xl">
            You&apos;ve been going back and forth long enough. Describe your situation and get a straight answer.
          </p>
        </div>

        <div id="simulators" className="grid gap-5 md:grid-cols-2 scroll-mt-20">
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

        <div className="mt-10 fade-in-up flex justify-center">
          <div className="relative max-w-xl w-full rounded-2xl border border-[#ffe878] bg-[#fffdf0] p-6 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b28b00]">
              Someone actually submitted this.
            </p>
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#b28b00]">
              Should I Throw This Away? — Steve Perry&apos;s autographed Transformers T-shirt (1984)
            </p>
            <p className="mb-4 text-sm italic text-[#6b6040] leading-relaxed">
              &ldquo;In 1984, when I was 4 years old, I was wearing my favorite Transformers T-shirt when I saw my favorite singer, Steve Perry of Journey. I asked him to sign my T-shirt, and he did. He wrote, &quot;I love Transformers. They are my favorite toys. Don&apos;t stop believing! - Steve Perry.&quot; Then, he said, &quot;There, I signed your fucking shirt. Now get the hell away from me, you stupid kid!&quot; I was so excited that I kept the shirt and wore it often without washing it. Now the shirt is old and smells terrible. People often visit my home, and say, &quot;What&apos;s that awful smell?&quot; Then, I show them the shirt, and they feel sick and leave my house. I wore the shirt to work last week, and my boss fired me because the shirt smelled so bad. I really love the shirt, but it&apos;s causing me problems.&rdquo;
            </p>
            <div className="border-t border-[#ffe878] pt-4 space-y-2">
              <p className="display-font text-2xl font-bold uppercase text-[#1d2440]">Throw it away.</p>
              <p className="text-sm text-[#4f5e7c]">
                The shirt has become a physical and social biohazard that has already cost you your professional livelihood and support system.
              </p>
              <p className="text-xs text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">
                You may experience a temporary sense of grief or loss regarding the unique physical connection to your 1984 childhood memory.
              </p>
              <p className="text-xs font-semibold text-[#2a7d5c]">
                Next: Take a high-resolution photograph of the signature to preserve the memory, then seal the shirt in a trash bag and remove it from your home immediately.
              </p>
            </div>
            <Link
              href="/throw-away"
              className="mt-4 inline-block text-xs font-semibold text-[#b28b00] underline decoration-[#ffe878] underline-offset-2 hover:text-[#1d2440] transition-colors"
            >
              Try it yourself →
            </Link>
          </div>
        </div>

        <footer className="mt-10 border-t border-[#80caff]/50 pt-5 text-xs text-[#6a89c4] sm:text-sm">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link href="/about" className="underline decoration-[#80caff] underline-offset-2">About</Link>
            <Link href="/methodology" className="underline decoration-[#80caff] underline-offset-2">Methodology</Link>
            <Link href="/contact" className="underline decoration-[#80caff] underline-offset-2">Contact</Link>
            <Link href="/privacy" className="underline decoration-[#80caff] underline-offset-2">Privacy</Link>
            <Link href="/terms" className="underline decoration-[#80caff] underline-offset-2">Terms</Link>
          </div>
        </footer>
      </section>
    </main>
  );
}
