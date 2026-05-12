/**
 * JSON-LD for individual service URLs (Service + FAQPage from serviceDetails).
 */

import {
  BUSINESS_NAME,
  META_AREA_PHRASE,
  REGISTERED_LOCALITY,
  REGISTERED_REGION,
  SITE_URL,
} from "@/constants/site";
import type { Service } from "@/data/services";
import { getServiceDetail } from "@/data/serviceDetails";

function faqPageFromPairs(items: { question: string; answer: string }[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getServiceOfferJsonLd(service: Service): Record<string, unknown> {
  const url = `${SITE_URL}/${service.slug}/`;
  const detail = getServiceDetail(service.slug);
  const description =
    detail?.heroDescription ?? `${service.title} across ${META_AREA_PHRASE}. ${service.shortDescription}`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${service.title} — ${BUSINESS_NAME}`,
    serviceType: service.title,
    description,
    url,
    provider: { "@id": `${SITE_URL}/#localbusiness` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Edinburgh" },
      { "@type": "AdministrativeArea", name: "Midlothian" },
      { "@type": "AdministrativeArea", name: "East Lothian" },
      { "@type": "AdministrativeArea", name: "West Lothian" },
      { "@type": "Place", name: REGISTERED_LOCALITY },
      { "@type": "Place", name: REGISTERED_REGION },
    ],
  };
}

/** Combined JSON-LD scripts for a service landing page (`/${slug}/`). */
export function getServicePageExtraJsonLd(service: Service): Record<string, unknown>[] {
  const detail = getServiceDetail(service.slug);
  const out: Record<string, unknown>[] = [getServiceOfferJsonLd(service)];
  if (detail?.faqs?.length) {
    out.push(faqPageFromPairs(detail.faqs));
  }
  return out;
}
