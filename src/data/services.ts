/**
 * Service slug and display data for location-service pages and service grids.
 */

import { META_AREA_PHRASE } from "@/constants/site";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
};

export const services: Service[] = [
  {
    slug: "roof-steam-cleaning",
    title: "Roof Steam Cleaning",
    shortDescription:
      `Safe roof steam cleaning and roof soft washing for homes and businesses across ${META_AREA_PHRASE}. Professional moss removal from roof and algae removal from roof tiles. Roof cleaning and moss treatment for lasting results.`,
    imageUrl: "/portfolio/roofclean1.jpg",
  },
  {
    slug: "render-softwashing",
    title: "Render Softwashing",
    shortDescription:
      "We provide render, roughcast and pebbledash cleaning and softwashing services across Edinburgh & the Lothians to give your wall exteriors a brand new finish without the damage of pressure washing. Get your free quote today",
    imageUrl: "/portfolio/render-softwash.jpg",
  },
  {
    slug: "driveway-cleaning",
    title: "Driveway Cleaning",
    shortDescription:
      "Driveway cleaning, pressure washing and driveway restoration. Professional patio and driveway cleaning with pressure washing services.",
    imageUrl: "/portfolio/driveway-cleaning.jpg",
  },
  {
    slug: "gutter-cleaning",
    title: "Gutter Cleaning",
    shortDescription:
      `Gutter cleaning and gutter maintenance across ${META_AREA_PHRASE}. Expert gutter clearing service, fascia and soffit cleaning, and gutter inspection and cleaning.`,
    imageUrl: "/portfolio/gutter-cleaning.webp",
  },
  {
    slug: "pvc-white-cleaning",
    title: "PVC White Cleaning",
    shortDescription:
      "PVC white cleaning specialists: PVC fascias, soffit and gutter cleaning. Professional fascia and soffit cleaning and PVC restoration.",
    imageUrl: "/portfolio/pvc-clean.jpg",
  },
  {
    slug: "window-cleaning",
    title: "Window Cleaning",
    shortDescription:
      "Residential and commercial window cleaning. Professional window washing for sparkling results every time.",
    imageUrl: "/portfolio/window-cleaning.jpg",
  },
  {
    slug: "moss-removal",
    title: "Moss & Algae Removal",
    shortDescription:
      `Specialist moss and algae removal for roofs, patios and driveways across ${META_AREA_PHRASE}. We clear moss safely from slate, tile and concrete without damaging the surface, and can apply a treatment to slow regrowth.`,
    imageUrl: "/portfolio/roofclean1.jpg",
  },
  {
    slug: "patio-cleaning",
    title: "Patio Cleaning",
    shortDescription:
      `Patio cleaning and pressure washing for slabs, monoblock and decking. We lift algae, moss and grime from patios across ${META_AREA_PHRASE}, leaving outdoor spaces safe and ready to use.`,
    imageUrl: "/portfolio/pressure-washing.jpg",
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
