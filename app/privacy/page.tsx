export const metadata = {
  title: "Privacy Policy | Decision Lab",
  description:
    "Learn how Decision Lab handles user data and privacy.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        Decision Lab respects your privacy.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Information We Collect
      </h2>

      <p className="mb-6">
        We do not require account registration. Information submitted through
        simulations is processed temporarily to generate results.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Cookies & Analytics
      </h2>

      <p className="mb-6">
        We may use analytics tools and advertising services (such as Google
        AdSense) that collect anonymous usage data via cookies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Third-Party Services
      </h2>

      <p className="mb-6">
        Decision Lab uses external AI APIs to generate simulation results.
        These services may process submitted text to provide responses.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        Your Responsibility
      </h2>

      <p>
        Please avoid submitting sensitive personal information.
      </p>
    </main>
  );
}
