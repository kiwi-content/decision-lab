import Tool from "./Tool";

export const metadata = {
  title: "Should I Throw This Away? | Declutter Decision Tool",
  description:
    "A simple declutter decision simulator to help you decide what to keep or throw away.",
};

export default function Page() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-6xl px-6 py-8 sm:px-10 sm:py-10">
      <Tool />

      <div className="mx-auto mt-14 max-w-4xl space-y-8 pb-8">

        <h2 className="display-font text-3xl font-bold uppercase text-[#1a1627]">
          Should I Throw This Away?
        </h2>

        <p className="text-[#3f3750]">
          Deciding whether you should throw something away is often harder than it seems.
          Many items carry emotional attachment, memories, or a “just in case” mindset.
          This declutter decision tool helps you think clearly before making that choice.
        </p>

        <h3 className="display-font text-2xl font-semibold uppercase text-[#1a1627]">
          How to Decide What to Throw Away
        </h3>

        <p><strong className="text-[#1f1a2d]">How do I know if I should throw something away?</strong></p>
        <p className="text-[#4a425d]">
          Use a simple filter: function, frequency, and replacement cost. If it has
          no clear purpose, you have not used it in 12 months, and replacing it is
          easy, it is usually safe to let go.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret throwing it away?</strong></p>
        <p className="text-[#4a425d]">
          For high-uncertainty items, use a 30-day holding box. If you do not reach
          for it during that period, regret risk is low. This creates proof, not just
          guesswork.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I throw something away if I feel guilty?</strong></p>
        <p className="text-[#4a425d]">
          Guilt is common with gifts or expensive purchases, but it is not a storage
          strategy. Keep items that actively serve your current life, not past
          versions of yourself.
        </p>

        <p><strong className="text-[#1f1a2d]">Is decluttering good for mental health?</strong></p>
        <p className="text-[#4a425d]">
          For many people, yes. Less visual noise reduces decision fatigue and makes
          routines easier to maintain. The key is steady progress, not one extreme
          cleanout.
        </p>

        <p><strong className="text-[#1f1a2d]">How often should I declutter?</strong></p>
        <p className="text-[#4a425d]">
          Do light weekly resets and one deeper seasonal review each quarter. Frequent
          small sessions are more sustainable than marathon sessions once a year.
        </p>

        <p><strong className="text-[#1f1a2d]">What is the best declutter rule?</strong></p>
        <p className="text-[#4a425d]">
          Combine three rules: one-year use rule, one-in/one-out for crowded categories,
          and container limits (each shelf or drawer has a fixed capacity). Together
          they prevent clutter from returning.
        </p>

      </div>
      </section>
    </main>
  );
}
