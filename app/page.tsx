import Link from "next/link";

export const metadata = {
  title: "Decision Lab | Life Decision Simulators",
  description:
    "Run your decision before you live it. Free decision simulators for real-life choices.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black px-6 py-20">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">
          Decision Lab
        </h1>
        <p className="text-lg text-gray-600">
          Run your decision before you live it.
        </p>
      </div>

      {/* Tool Grid */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        <Link href="/throw-away" className="border p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-semibold mb-2">
            Should I Throw This Away?
          </h2>
          <p className="text-gray-600">
            Declutter decision simulator.
          </p>
        </Link>

        <Link href="/text-my-ex" className="border p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-semibold mb-2">
            Should I Text My Ex?
          </h2>
          <p className="text-gray-600">
            Relationship timing simulator.
          </p>
        </Link>

        <Link href="/quit-my-job" className="border p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-semibold mb-2">
            Should I Quit My Job?
          </h2>
          <p className="text-gray-600">
            Career risk simulator.
          </p>
        </Link>

        <Link href="/break-up" className="border p-6 hover:bg-black hover:text-white transition">
          <h2 className="text-2xl font-semibold mb-2">
            Should I Break Up?
          </h2>
          <p className="text-gray-600">
            Relationship clarity simulator.
          </p>
        </Link>

        <Link href="/move" className="border p-6 hover:bg-black hover:text-white transition md:col-span-2">
          <h2 className="text-2xl font-semibold mb-2">
            Should I Move?
          </h2>
          <p className="text-gray-600">
            Relocation impact simulator.
          </p>
        </Link>

      </div>

    </main>
  );
}
