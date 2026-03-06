import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Move? 60-Second Relocation Decision Tool | Decision Lab",
  description:
    "Use a fast decision tool to weigh cost, commute, lifestyle, and timing so you can decide whether moving now is the right call.",
  alternates: {
    canonical: "/move",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I move for a new job offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compare compensation, housing costs, commute, long-term growth, and downside if the role does not work out.",
      },
    },
    {
      "@type": "Question",
      name: "How much savings should I have before moving?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A practical baseline is enough runway for upfront move costs plus several months of living expenses in the new location.",
      },
    },
    {
      "@type": "Question",
      name: "What if I just want a fresh start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A move can help, but unresolved patterns often follow. Use the tool to separate location problems from life-structure problems.",
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
