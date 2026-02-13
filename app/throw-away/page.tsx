import Tool from "./Tool";

export const metadata = {
  title: "Should I Throw This Away? | Declutter Decision Tool",
  description:
    "A simple declutter decision simulator to help you decide what to keep or throw away.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-16">
      <Tool />

      {/* SEO Content */}
      <div className="max-w-3xl mx-auto mt-20 space-y-8 px-6 pb-20">

        <h2 className="text-3xl font-bold">
          Should I Throw This Away?
        </h2>

        <p>
          Deciding whether you should throw something away is often harder than it seems.
          Many items carry emotional attachment, memories, or a “just in case” mindset.
          This declutter decision tool helps you think clearly before making that choice.
        </p>

        <h3 className="text-2xl font-semibold">
          How to Decide What to Throw Away
        </h3>

        <p><strong>How do I know if I should throw something away?</strong></p>
        <p>
          If you have not used the item in over a year and it does not serve your
          current lifestyle, it may be time to let it go.
        </p>

        <p><strong>What if I regret throwing it away?</strong></p>
        <p>
          If the item is inexpensive or easy to replace, the risk of regret is low.
          Most regret comes from emotional attachment rather than practical loss.
        </p>

        <p><strong>Should I throw something away if I feel guilty?</strong></p>
        <p>
          Guilt alone is not a strong reason to keep something. Evaluate usefulness
          and whether it supports your present needs.
        </p>

        <p><strong>Is decluttering good for mental health?</strong></p>
        <p>
          Yes. Removing unnecessary clutter can reduce stress and improve focus
          by creating a more organized environment.
        </p>

        <p><strong>How often should I declutter?</strong></p>
        <p>
          Many people declutter once or twice per year. Seasonal reviews help
          maintain clarity and prevent accumulation.
        </p>

        <p><strong>What is the best declutter rule?</strong></p>
        <p>
          A common rule is the “one year rule.” If you haven’t used it in the past
          year, it may not be essential.
        </p>

      </div>
    </main>
  );
}
