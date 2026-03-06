import Link from "next/link";
import Script from "next/script";
import ChickenLottie from "./ChickenLottie";

export const metadata = {
  title: "Should I Text My Ex, Break Up, Move, or Quit My Job? | Decision Lab",
  description:
    "Use fast decision tools for relationships, relocation, career choices, and decluttering. Get a clear next step in about 60 seconds.",
  alternates: {
    canonical: "/",
  },
};

const trustSignals = [
  {
    label: "No signup",
    detail: "Jump straight into a tool without making an account.",
  },
  {
    label: "About 60 seconds",
    detail: "Short flows built to get you to a recommendation fast.",
  },
  {
    label: "Private by default",
    detail: "No inbox, no profile, and no need to share more than you want.",
  },
  {
    label: "Clear next step",
    detail: "Each tool gives you a verdict, the risk, and what to do next.",
  },
];

export default function Home() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <Script
        src="https://unpkg.com/@lottiefiles/dotlottie-wc@0.9.3/dist/dotlottie-wc.js"
        type="module"
        strategy="afterInteractive"
      />
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

        <div className="hero-lockup mb-8 fade-in-up">
          <p className="hero-kicker mb-3 text-sm font-semibold uppercase tracking-widest text-[#5d92d8]">
            60-second decision tools for real-life choices.
          </p>
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title display-font text-5xl font-extrabold uppercase leading-[0.92] text-[#1d2440] sm:text-7xl lg:text-8xl">
                Should I Text
                <br />
                My Ex?
              </h1>
              <p className="hero-subtitle mt-4 max-w-3xl text-base text-[#4f5e7c] sm:text-xl">
                Break up, move, quit your job, or throw it away? Pick a tool below and get a clear next step in about 60 seconds.
              </p>
            </div>
            <ChickenLottie className="hero-chicken" size={156} />
          </div>
        </div>

        <div className="mb-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="fade-in-up rounded-[1.35rem] border border-[#80caff]/45 bg-white/82 px-4 py-4 shadow-[0_10px_24px_rgba(30,55,88,0.06)]"
            >
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#5d92d8]">{signal.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#4f5e7c]">{signal.detail}</p>
            </div>
          ))}
        </div>

        <div id="simulators" className="grid gap-5 md:grid-cols-2 scroll-mt-20">
          <Link href="/text-my-ex" className="card-pop fade-in-up group flex h-full flex-col bg-[#f893e1]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#7d68cc]">Relationship</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Text My Ex?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Assess emotional risk, readiness, and communication intent.</p>
            <span className="card-cta mt-6">Open tool 💌</span>
          </Link>

          <Link href="/quit-my-job" className="card-pop fade-in-up group flex h-full flex-col bg-[#80caff]/30 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#5d92d8]">Career</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Quit My Job?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Balance runway, stress, growth potential, and downside risk.</p>
            <span className="card-cta mt-6">Open tool 💼</span>
          </Link>

          <Link href="/break-up" className="card-pop fade-in-up group flex h-full flex-col bg-[#a180ff]/24 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#6d59be]">Relationship</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Break Up?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Review recurring patterns, compatibility, and future alignment.</p>
            <span className="card-cta mt-6">Open tool 💔</span>
          </Link>

          <Link href="/move" className="card-pop fade-in-up group flex h-full flex-col bg-[#91e5b3]/28 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#2a9f76]">Relocation</p>
            <h2 className="display-font text-4xl font-bold leading-tight text-[#1d2440]">Should I Move?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Model opportunity, cost shifts, and quality-of-life tradeoffs.</p>
            <span className="card-cta mt-6">Open tool 📦</span>
          </Link>
        </div>

        <div className="mt-5">
          <Link href="/throw-away" className="card-pop fade-in-up group flex h-full flex-col bg-[#ffe878]/42 p-6">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-[#b28b00]">Declutter</p>
            <h2 className="display-font text-4xl font-bold text-[#1d2440]">Should I Throw It Away?</h2>
            <p className="mt-3 text-xl text-[#4f5e7c]">Separate practical utility from attachment to declutter cleanly.</p>
            <span className="card-cta mt-6">Open tool 🧹</span>
          </Link>
        </div>

        <div className="mt-10 space-y-6">
          <div className="fade-in-up flex justify-center">
            <div className="relative max-w-xl w-full rounded-2xl border border-[#ffe878] bg-[#fffdf0] p-6 shadow-md -rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b28b00]">
                Someone actually submitted this.
              </p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#b28b00]">
                Should I Throw It Away? — Steve Perry&apos;s autographed Transformers T-shirt (1984)
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

          <div className="fade-in-up flex justify-center">
            <div className="relative max-w-xl w-full rounded-2xl border border-[#f3a8ce] bg-[#fff6fb] p-6 shadow-md rotate-1 hover:rotate-0 transition-transform duration-300">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b04f7f]">
                Someone actually submitted this.
              </p>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#b04f7f]">
                Should I Text My Ex? — Lois Lane asking if Clark is Superman
              </p>
              <p className="mb-4 text-sm italic text-[#69485b] leading-relaxed">
                &ldquo;Dear Decision Lab, My name is Lois, and I am writing to you about my ex-boyfriend, Clark. I met him at work. The first few months of our relationship were great. He seemed to be everything I wanted in a boyfriend -- kind, honest, smart, responsible. I loved him. Then, he started behaving strangely. The first sign of strange behavior came when we went out to dinner to introduce him to my parents. We were at a fancy restaurant, having a great conversation, when Clark suddenly left to go to the restroom. He was gone for a very long time. My parents got tired and went home. Finally, after 3 hours, Clark returned to the restaurant covered in smoke with burns on his body. I asked what happened, and Clark apologized and told me that he had to poop and fart badly, so he was in the restroom for a long time. As he was on the toilet, he tried to smoke a cigarette to relieve stress, but when he attempted to light the cigarette, the fire from the lighter and the gas from his farts caused a massive explosion, covering his body with smoke and burning him. His story seemed crazy. I had never seen Clark smoke before, and no one can fart that powerfully. Still, I accepted his apology. But one month later, Clark did something, perhaps, even stranger. We were at my sister&apos;s wedding. Just as the ceremony was about to begin, Clark said he had to use the toilet and sprinted out of the building. He missed the entire wedding ceremony and arrived at the after-party two hours later, completely covered in water. I asked what happened, and Clark apologized and told me that he pooped so much that he clogged the toilet, causing the restroom to flood, covering him with water, and forcing him to swim to safety. This time, I could not forgive him. I thought he must be crazy. He embarrassed me and my entire family. My parents were furious. My sister was crying. I told Clark to go away and never speak to me again. After apologizing to my sister and family, I spent the next few weeks in disbelief, often crying. I wondered how I got in a relationship with such a crazy person. But this afternoon, I discovered something shocking. I found a bag of clothes that Clark left at my house. In it, there was a blue and red spandex suit and a red cape -- something a superhero would wear. I checked the internet and found that the night Clark returned from the toilet covered in smoke was the same night that Superman saved 50 people from a burning apartment building. I did more research and found that the day Clark embarrassed me at my sister&apos;s wedding was the same day that Superman saved 42 people from a ship that sank just off the coast. I think Clark might not be crazy after all. I think he might be a hero. I think he might be Superman. And, I think I still love him. Should I text Clark to ask if he is Superman? Sincerely, Lois Lane&rdquo;
              </p>
              <div className="border-t border-[#f3a8ce] pt-4 space-y-2">
                <p className="display-font text-2xl font-bold uppercase text-[#1d2440]">Wait.</p>
                <p className="text-sm text-[#4f5e7c]">
                  You must reconcile your anger over his humiliating excuses with the realization that he was likely prioritizing the safety of others over your relationship.
                </p>
                <p className="text-xs text-[#7a6890] border-l-2 border-[#c0a8e0] pl-3">
                  Directly texting about a secret identity creates a permanent digital record that could compromise his safety and lead him to distance himself permanently.
                </p>
                <p className="text-xs font-semibold text-[#2a7d5c]">
                  Next: Spend time today deciding if you are truly prepared for a life of being second priority to his responsibilities before you initiate contact.
                </p>
              </div>
              <Link
                href="/text-my-ex"
                className="mt-4 inline-block text-xs font-semibold text-[#b04f7f] underline decoration-[#f3a8ce] underline-offset-2 hover:text-[#1d2440] transition-colors"
              >
                Try it yourself →
              </Link>
            </div>
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
