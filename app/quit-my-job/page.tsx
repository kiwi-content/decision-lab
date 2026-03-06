import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Quit My Job? 60-Second Career Decision Tool | Decision Lab",
  description:
    "Use a practical decision tool to weigh runway, burnout, growth, and downside risk before deciding whether to quit your job.",
  alternates: {
    canonical: "/quit-my-job",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I quit my job without another offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That depends on financial runway, health impact, and job market conditions. This tool helps you weigh those trade-offs quickly.",
      },
    },
    {
      "@type": "Question",
      name: "How much emergency savings do I need before quitting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A common benchmark is several months of essential expenses, adjusted for your hiring timeline and fixed obligations.",
      },
    },
    {
      "@type": "Question",
      name: "Is burnout a good enough reason to quit now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Burnout can justify immediate change when health risk is rising. The tool helps compare immediate exit against safer transition plans.",
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
