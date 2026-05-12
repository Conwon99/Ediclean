import { AREA_TAGLINE } from "@/constants/site";

export type HomeFaqItem = { question: string; answer: string };

export const homeFaqItems: HomeFaqItem[] = [
  {
    question: "What areas do you cover?",
    answer: `We cover ${AREA_TAGLINE}, including the towns listed on our areas page. Get in touch to confirm we cover your postcode.`,
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer roof steam cleaning, render softwashing, driveway cleaning, gutter cleaning, PVC cleaning, and window cleaning. All our exterior cleaning is done at your property—we're fully mobile.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill in the contact form or call us. We'll give you a free quote based on your property and the work you need. No obligation.",
  },
  {
    question: "Do you remove moss and algae from roofs?",
    answer:
      "Yes. Our roof steam cleaning safely removes moss, algae, and dirt from tiles and slates. We use methods that protect your roof and extend its life.",
  },
  {
    question: "Do you bring your own equipment and water?",
    answer:
      "Yes. We bring our own equipment and, where needed, water supply so we can work at your property with minimal disruption to you.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. We're fully insured. We're happy to confirm details when you book.",
  },
];

export function getHomeFaqPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
