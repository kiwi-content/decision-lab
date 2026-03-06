import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Break Up? 60-Second Relationship Decision Tool | Decision Lab",
  description:
    "Use a practical 60-second tool to decide whether to stay, set boundaries, or break up with more clarity and less regret.",
  alternates: {
    canonical: "/break-up",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I know if I should break up?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check recurring patterns, value alignment, trust, and whether repair attempts are realistic in your current situation.",
      },
    },
    {
      "@type": "Question",
      name: "Should I break up now or wait?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing depends on emotional safety, logistical readiness, and whether waiting improves clarity or only prolongs harm.",
      },
    },
    {
      "@type": "Question",
      name: "Can this tool replace counseling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is an informational decision aid. For safety, abuse, or severe mental health concerns, seek licensed support.",
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
