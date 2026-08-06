/**
 * Production site and business identifiers — single source for Layout, forms, sitemap.
 * Must match the canonical hostname from hosting (https, and apex vs www) plus vercel.json / static/_redirects.
 */
export const SITE_URL = "https://edicleanexteriorcleaning.co.uk";
export const BUSINESS_NAME = "EdiClean Exterior Cleaning";
export const PHONE_E164 = "+447886083152";
export const PHONE_DISPLAY = "07886 083152";

/** Registered / correspondence address (no door number). */
export const REGISTERED_STREET = "Morningside Road";
export const REGISTERED_LOCALITY = "Morningside";
export const REGISTERED_REGION = "Edinburgh";
export const REGISTERED_POSTCODE = "EH10";
export const REGISTERED_GEO = {
  latitude: "55.9270",
  longitude: "-3.2070",
} as const;

/** Short phrase for hero / CTAs (visible copy). */
export const AREA_TAGLINE =
  "Edinburgh, Midlothian, East Lothian & West Lothian";

/** Meta descriptions / SEO-friendly coverage phrase. */
export const META_AREA_PHRASE =
  "Edinburgh, Midlothian, East Lothian and West Lothian";

/**
 * Align visible H1/title meta with Google Business Profile primary category wording.
 * Update if your GBP primary category label changes.
 */
export const GBP_PRIMARY_CATEGORY_LABEL = "Exterior cleaning service";

/** Region shorthand for body copy (hero sublines, FAQs, etc.). */
export const SERVICE_REGION_SHORT = "Edinburgh & the Lothians";

/** Used in `<title>` tags and the homepage H1 highlight — short, no "& the Lothians". */
export const SITE_TITLE_AREA = "Edinburgh";

/** Formspree form URL (quote / contact submissions). */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlgzzlab";

/**
 * Public enquiries email for Contact page mailto. Leave empty to hide the email row.
 */
export const CONTACT_EMAIL = "";

/** Typical response time note shown near the contact form. */
export const CONTACT_EMAIL_RESPONSE_NOTE =
  "We reply within 24 hours during the working week.";

/** Google Business Profile link (reviews / profile). */
export const GOOGLE_REVIEWS_URL = "https://share.google/WHM6HVMqy1SvwnkkX";

/** Facebook profile (footer + schema sameAs). */
export const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/profile.php?id=61593170122023";
