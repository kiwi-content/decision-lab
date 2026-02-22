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
          If you have not used the item in over a year and it does not serve your
          current lifestyle, it may be time to let it go.
        </p>

        <p><strong className="text-[#1f1a2d]">What if I regret throwing it away?</strong></p>
        <p className="text-[#4a425d]">
          If the item is inexpensive or easy to replace, the risk of regret is low.
          Most regret comes from emotional attachment rather than practical loss.
        </p>

        <p><strong className="text-[#1f1a2d]">Should I throw something away if I feel guilty?</strong></p>
        <p className="text-[#4a425d]">
          Guilt alone is not a strong reason to keep something. Evaluate usefulness
          and whether it supports your present needs.
        </p>

        <p><strong className="text-[#1f1a2d]">Is decluttering good for mental health?</strong></p>
        <p className="text-[#4a425d]">
          Yes. Removing unnecessary clutter can reduce stress and improve focus
          by creating a more organized environment.
        </p>

        <p><strong className="text-[#1f1a2d]">How often should I declutter?</strong></p>
        <p className="text-[#4a425d]">
          Many people declutter once or twice per year. Seasonal reviews help
          maintain clarity and prevent accumulation.
        </p>

        <p><strong className="text-[#1f1a2d]">What is the best declutter rule?</strong></p>
        <p className="text-[#4a425d]">
          A common rule is the “one year rule.” If you haven’t used it in the past
          year, it may not be essential.
        </p>

      </div>
      </section>
    </main>
  );
}
