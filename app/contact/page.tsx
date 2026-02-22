export const metadata = {
  title: "Contact | Decision Lab",
  description:
    "Contact Decision Lab for inquiries, feedback, or partnership requests.",
};

export default function ContactPage() {
  return (
    <main className="stage-bg min-h-screen px-4 py-6 sm:px-10 sm:py-10">
      <section className="panel-shell mx-auto max-w-4xl bg-[#fffff5] px-6 py-10 sm:px-10">
        <h1 className="display-font mb-6 text-4xl font-bold uppercase text-[#1d2440]">Contact</h1>

        <p className="mb-4 text-[#4f5e7c]">
          We welcome product feedback, bug reports, and collaboration inquiries.
        </p>

        <p className="mb-6 text-[#4f5e7c]">
          Email: <span className="font-semibold text-[#1d2440]">decisionlab.platform@gmail.com</span>
        </p>

        <h2 className="mb-3 text-2xl font-semibold text-[#1d2440]">Best Way to Reach Us</h2>
        <ul className="mb-8 list-disc space-y-2 pl-6 text-[#4f5e7c]">
          <li>Use a clear subject line with your request type</li>
          <li>Include relevant URL or screenshot for bug reports</li>
          <li>Include timeline and scope for partnership requests</li>
        </ul>

        <p className="text-sm text-[#6a7b9d]">Typical response time: 3 to 5 business days.</p>
      </section>
    </main>
  );
}
