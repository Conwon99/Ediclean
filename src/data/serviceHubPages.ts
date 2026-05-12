/**
 * Category-style hub pages linking clusters of core services (Prompt 4-style internal linking).
 */

import { META_AREA_PHRASE } from "@/constants/site";

export type HubServiceLink = {
  slug: string;
  title: string;
  shortLine: string;
};

export type ServiceHubDefinition = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  intro: string[];
  whyLocal: string;
  links: HubServiceLink[];
};

export const exteriorRooflineHub: ServiceHubDefinition = {
  slug: "exterior-roofline-cleaning",
  path: "/exterior-roofline-cleaning/",
  metaTitle: `Roofline Exterior Cleaning Edinburgh | Roof, Gutters & PVC`,
  metaDescription: `Roof steam cleaning, gutter clearing and PVC fascias across ${META_AREA_PHRASE}. Free quotes from EdiClean — moss, leaks and dull white PVC solved safely.`,
  heroTitle: "Roofline exterior cleaning",
  heroSubtitle: "Roofs, rainwater goods & white PVC across Edinburgh and the Lothians",
  intro: [
    `When moss sits on slates and tiles, or gutters choke with leaves, water gets pushed somewhere it shouldn't — into loft spaces, down walls and over paths. Our roofline-focused work tackles that stack together: safe roof steam cleaning to lift moss and algae, gutter clearing so rainwater runs again, and PVC white cleaning so fascias and soffits match the effort you've put into the roof.`,
    `Across ${META_AREA_PHRASE}, coastal haar, tree cover and shaded pitches all mean rooflines stay damp longer than homeowners expect. We plan access safely, explain what we're seeing from the roof edge, and quote clearly before we start.`,
  ],
  whyLocal: `Edinburgh-style sandstone terraces, villa roofs and estate gutters all behave differently in wind and rain than uniform new builds. Working locally means we know when a roof needs gentle steam versus when gutters simply need a thorough clear-out — and we combine visits where it saves you time and scaffolding calls.`,
  links: [
    {
      slug: "roof-steam-cleaning",
      title: "Roof steam cleaning",
      shortLine: "Moss and algae removal without reckless high pressure.",
    },
    {
      slug: "gutter-cleaning",
      title: "Gutter cleaning",
      shortLine: "Leaves and debris cleared so rainwater drains properly.",
    },
    {
      slug: "pvc-white-cleaning",
      title: "PVC white cleaning",
      shortLine: "Fascias, soffits and gutter whites brightened safely.",
    },
  ],
};

export const exteriorFacadesGroundHub: ServiceHubDefinition = {
  slug: "exterior-facades-ground-cleaning",
  path: "/exterior-facades-ground-cleaning/",
  metaTitle: `Facades, Driveways & Glass Edinburgh | Exterior Cleaning`,
  metaDescription: `Render softwashing, driveway pressure washing and window cleaning across ${META_AREA_PHRASE}. Refresh walls, entrances and glass — free quotes.`,
  heroTitle: "Facades, driveways & glass",
  heroSubtitle: "Rendered walls, entrances and windows across Edinburgh and the Lothians",
  intro: [
    `Green staining on render, algae on patio slabs and smeared glass all hit curb appeal before you've touched the garden. This cluster covers the surfaces visitors see first: softwashed render that lifts contamination without blasting mortar joints, driveway and patio cleaning that restores grip and colour, and window cleaning that finishes the picture.`,
    `We treat each substrate with the right method — softwash chemistry and rinsing for walls, controlled pressure or rotary work for paving where appropriate, and pure-water or traditional techniques for glass depending on access and your preference.`,
  ],
  whyLocal: `Haar, traffic film and garden shade show up differently in Portobello than in Penicuik. Local experience means realistic timelines for drying, honest expectations on stain removal, and advice on maintenance cycles that suit your street — not a generic national franchise script.`,
  links: [
    {
      slug: "render-softwashing",
      title: "Render softwashing",
      shortLine: "Algae and dirt lifted from render without harsh pressure.",
    },
    {
      slug: "driveway-cleaning",
      title: "Driveway cleaning",
      shortLine: "Block paving, concrete and patios cleaned and revived.",
    },
    {
      slug: "window-cleaning",
      title: "Window cleaning",
      shortLine: "Residential and commercial glass for a clear finish.",
    },
  ],
};

export const serviceHubList = [exteriorRooflineHub, exteriorFacadesGroundHub];
