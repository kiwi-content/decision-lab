import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Text My Ex? 60-Second Decision Tool | Decision Lab",
  description:
    "Use a 60-second decision tool to decide whether texting your ex is a good idea right now. Get a clearer yes or no before you hit send.",
  alternates: {
    canonical: "/text-my-ex",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I text my ex after no contact?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the tool to weigh your intent, emotional stability, and likely response quality before restarting contact.",
      },
    },
    {
      "@type": "Question",
      name: "What if I only want closure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Closure texts often reopen conflict. This tool helps you check whether reaching out creates resolution or more emotional cost.",
      },
    },
    {
      "@type": "Question",
      name: "When should I avoid texting my ex?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Avoid contact when there is manipulation, harassment, or safety risk. In those cases, prioritize boundaries and support.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Tool />
    </>
  );
}
