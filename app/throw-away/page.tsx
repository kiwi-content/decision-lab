import type { Metadata } from "next";
import Tool from "./Tool";

export const metadata: Metadata = {
  title: "Should I Throw It Away? 60-Second Keep-or-Toss Tool | The Decision Lab",
  description:
    "Decide in 60 seconds whether to keep, donate, recycle, or discard with a practical decision tool.",
  alternates: {
    canonical: "/throw-away",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I decide whether to keep or throw something away?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Score practical use, replacement cost, emotional value, and storage burden to make a keep-or-toss decision quickly.",
      },
    },
    {
      "@type": "Question",
      name: "What if the item has sentimental value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Preserve the memory first with a photo or note, then decide if the physical object still deserves space in your life.",
      },
    },
    {
      "@type": "Question",
      name: "Should I donate, recycle, or trash it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If usable, donate. If material is recyclable, recycle. If neither applies and health risk is high, discard responsibly.",
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
