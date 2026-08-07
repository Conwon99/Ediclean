import type { Location } from "./locations";
import type { Service } from "./services";
import {
  BUSINESS_NAME,
  GBP_PRIMARY_CATEGORY_LABEL,
  SERVICE_REGION_SHORT,
  SITE_TITLE_AREA,
} from "../constants/site";

const SERVICE_META: Record<string, string> = {
  "roof-steam-cleaning":
    "Safe roof steam cleaning and roof soft washing in Edinburgh and the Lothians. Moss and algae removal without high pressure. Get a free EdiClean quote.",
  "render-softwashing":
    "Render, roughcast and pebbledash softwashing in Edinburgh and the Lothians. Remove algae, staining and dirt without harsh pressure. Free quote.",
  "driveway-cleaning":
    "Driveway cleaning in Edinburgh and the Lothians. Pressure washing for block paving, concrete, patios and paths. Free quote.",
  "gutter-cleaning":
    "Gutter cleaning in Edinburgh and the Lothians. Clear leaves, debris and blockages, plus fascia and soffit cleaning, to keep rainwater flowing. Free quote.",
  "pvc-white-cleaning":
    "PVC white cleaning in Edinburgh and the Lothians. Fascias, soffits and gutters cleaned safely for a brighter finish. Free quote.",
  "window-cleaning":
    "Window cleaning in Edinburgh and the Lothians. Reliable residential and commercial window washing for clear glass. Free quote.",
  "moss-removal":
    "Moss and algae removal in Edinburgh and the Lothians. Safe, low-pressure clearing for roofs, patios and driveways. Free EdiClean quote.",
  "patio-cleaning":
    "Patio cleaning in Edinburgh and the Lothians. Pressure washing for slabs, monoblock and decking that lifts algae and moss. Free quote.",
};

export function getHomeTitle(): string {
  return `${GBP_PRIMARY_CATEGORY_LABEL} ${SITE_TITLE_AREA} | ${BUSINESS_NAME}`;
}

export function getHomeDescription(): string {
  return `Professional exterior cleaning across ${SERVICE_REGION_SHORT}. Roof steam cleaning, render softwashing, driveways, gutters, PVC and windows. Fully insured. Free quotes.`;
}

export function getServiceTitle(service: Service): string {
  return `${service.title} in ${SITE_TITLE_AREA} | ${BUSINESS_NAME}`;
}

export function getServiceMetaDescription(service: Service): string {
  return SERVICE_META[service.slug] ?? `${service.title} across Edinburgh and the Lothians. Get a free quote from EdiClean.`;
}

export function getLocationTitle(location: Location): string {
  return `Exterior Cleaning in ${location.name} | ${BUSINESS_NAME}`;
}

export function getLocationServiceTitle(location: Location, service: Service): string {
  return `${service.title} in ${location.name} | ${BUSINESS_NAME}`;
}

export function getLocationServiceMetaDescription(
  location: Location,
  service: Service,
): string {
  return `${service.title} in ${location.name}, Edinburgh area. Roof, render, driveway, gutter, PVC and window cleaning from EdiClean. Free quote.`;
}
