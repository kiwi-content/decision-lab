import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Text My Ex? 60-Second Decision Tool | Decision Lab",
  description:
    "It's 2 AM and you're about to type \"I miss you\" — don't. Take 60 seconds to check if it's real feelings or just loneliness. This free tool helps you decide before you regret it tomorrow.",
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
