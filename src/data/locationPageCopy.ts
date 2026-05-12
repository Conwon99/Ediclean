/**
 * Unique, indexable copy for location landing pages.
 * Combines region context (climate, transport, housing) with per-slug template rotation.
 */

import type { Location, LocationRegionId } from "./locations";
import { LOCATION_REGION_ORDER } from "./locations";

function hashSlug(s: string, salt = ""): number {
  const t = s + salt;
  let h = 0;
  for (let i = 0; i < t.length; i++) {
    h = (h << 5) - h + t.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], slug: string, salt: string): T {
  if (arr.length === 0) throw new Error("pick: empty array");
  return arr[hashSlug(slug, salt) % arr.length];
}

function regionTitle(regionId: LocationRegionId): string {
  return LOCATION_REGION_ORDER.find((r) => r.id === regionId)?.title ?? "";
}

/** "Morningside, Bruntsfield and Marchmont" style */
export function formatNeighborhoodList(location: Location): string {
  const n = location.neighborhoods ?? [];
  if (n.length === 0) return `the ${location.name} area`;
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

function ph(
  text: string,
  location: Location,
  extra: Record<string, string> = {},
): string {
  const n = location.neighborhoods ?? [];
  const map: Record<string, string> = {
    name: location.name,
    n1: n[0] ?? "nearby areas",
    n2: n[1] ?? "surrounding streets",
    n3: n[2] ?? "the next town along",
    nearby: formatNeighborhoodList(location),
    region: regionTitle(location.regionId),
    ...extra,
  };
  return text.replace(/\{(\w+)\}/g, (_, k) => map[k] ?? `{${k}}`);
}

export const CLIMATE_LINES: Record<LocationRegionId, string[]> = {
  edinburgh: [
    "Haar rolling in off the Forth keeps {name} rooflines damp, so moss, algae and black streaks can settle before the surface fully dries.",
    "Easterlies driving rain across Edinburgh hit {name} gables hard, especially on shaded rear elevations where render and PVC stay wet.",
    "North-facing sandstone around {name} takes freeze-thaw seriously; trapped moisture behind moss and lichen can make small defects worse.",
    "Street trees and sheltered gardens around {name} feed gutters with leaves while prolonged spring damp keeps patios slick underfoot.",
    "Salt spray near the Forth can dull glass, fascias and low walls around {name}; a gentle clean cuts through film without harsh blasting.",
    "Pentland shelter changes how rain dries in {name}, with south-side roofs staying clean on one face while shaded pitches green up quickly.",
  ],
  midlothian: [
    "Pentlands run-off and valley damp around {name} keep roofs and paving wet after heavy rain, giving moss a long window to take hold.",
    "Spring damp lingers around {name}, especially near tree cover and burn corridors where gutters fill fast and render dries slowly.",
    "Cold air can settle overnight in Midlothian streets like {name}, so freeze-thaw on shaded render and sandstone rewards regular upkeep.",
    "Wind-driven rain off open ground reaches {name} rear elevations quickly; algae often appears first on north and east-facing walls.",
    "Harled and monocouche homes around {name} can hold green staining after wet spells if softwashing is left too long.",
    "Driveways around {name} collect fine silt from nearby routes and gardens, turning slippery when damp weather hangs around.",
  ],
  "east-lothian": [
    "Forth shoreline humidity and haar around {name} help algae settle on render, fascias and glass faster than homeowners expect.",
    "Salt-laced breezes near {name} leave a film on PVC and windows, especially after easterlies push rain onto front elevations.",
    "Open East Lothian skies do not always dry shaded sides of {name} homes; north-facing roofs still grow moss after damp spells.",
    "Sand and fine grit carried inland from beaches and John Muir Country Park can settle on patios, sills and low render around {name}.",
    "Freeze-thaw on coastal stonework around {name} is tougher when lichen holds moisture in small cracks and joints.",
    "Tree-lined roads and coastal gardens near {name} send leaves into gutters just as autumn rain starts testing the downpipes.",
  ],
  "west-lothian": [
    "Avon valley frost pockets and colder mornings around {name} keep north-facing roofs damp, so moss and lichen linger after winter.",
    "Rain moving along the M8 and M9 corridors can leave {name} render and paving wet for days, particularly on shaded driveways.",
    "Forth-side humidity near {name} dulls glass and PVC, while road grit builds up quickly on low walls and garage aprons.",
    "Conservation stonework and newer render sit side by side around {name}; both need careful cleaning when algae starts binding moisture.",
    "Spring damp around {name} feeds green growth on roof edges, gutters and garden paving before summer foot traffic exposes it.",
    "Freeze-thaw around {name} is harder on pitted concrete and older stone when organic growth traps water against the surface.",
  ],
};

export const TRANSPORT_LINES: Record<LocationRegionId, string[]> = {
  edinburgh: [
    "We plan {name} work around the A720 City Bypass and cross-city traffic, so arrival windows stay realistic even on school-run streets.",
    "Edinburgh Trams to Newhaven and the main bus corridors shape our routing near {name}; we batch nearby calls to keep travel sensible.",
    "Tighter streets around {nearby} are familiar ground, so we bring hose runs and ground protection suited to rear gardens and shared access.",
    "If you are near the A1 or west-side routes from {name}, mention parking and lane access when booking so the crew brings the right setup.",
    "ScotRail station traffic and match-day movement near parts of Edinburgh are built into ETA texts for {name} jobs.",
  ],
  midlothian: [
    "The A720, A701 and A702 links make {name} straightforward to route with nearby calls, without pushing travel cost onto one customer.",
    "We often pair {name} with {n1} and {n2}, keeping roof, gutter and driveway jobs grouped by access rather than postcode guesswork.",
    "Midlothian estates can have tight parking courts; for {name}, we ask about access early and bring hose lengths to suit.",
    "Routes from Edinburgh into {name} are planned around commuter peaks, so you get a sensible arrival rather than a vague all-day slot.",
    "If your {name} property backs onto a lane or shared green, we factor that into runoff and ladder setup before the visit.",
  ],
  "east-lothian": [
    "The A1 corridor helps us group {name} jobs with {n1} and {n2}, keeping travel efficient for coastal and inland calls.",
    "We allow for rail crossings and town-centre pinch points around {name}, then text if traffic shifts the window.",
    "Coastal streets near {name} can be tight for vans in summer, so access notes help us protect driveways and neighbouring cars.",
    "When we route from Edinburgh out to {name}, we bring enough hose and water planning for longer garden plots and rear elevations.",
    "East Lothian days often stack along beach, town and village calls; {name} slots are booked with that geography in mind.",
  ],
  "west-lothian": [
    "M8, M9 and A89 access makes {name} a practical visit from Edinburgh, especially when paired with {n1} and {n2}.",
    "Forth Road Bridge and Queensferry Crossing traffic is built into our timing for {name}, so access delays are not a surprise.",
    "We plan {name} jobs around school streets, station traffic and newer estate layouts where parking courts need a tighter footprint.",
    "If your {name} driveway slopes toward the house, we bring recovery mats and angle cleaning runs before starting.",
    "West Lothian routes let us batch roofline and gutter work from {nearby}, keeping the day efficient and the quote fair.",
  ],
};

export const HOME_STYLE_LINES: Record<LocationRegionId, string[]> = {
  edinburgh: [
    "Victorian sandstone tenements and bay villas near {name} need careful rinsing around window heads, pointing and shared closes.",
    "1930s bungalows around {nearby} often have broad roof faces and deep gutters; we clear valleys before runoff marks the fascias.",
    "Conservation-area stonework in pockets of {name} needs low-pressure cleaning and chemistry matched to the surface.",
    "Modern infill homes around {name} often use render panels that show green staining quickly on shaded sides.",
    "Bay windows and garden walls around {nearby} create awkward ladder angles, so crews pad contact points and protect stone edges.",
    "PVC soffits and fascias in {name} brighten noticeably when paired with gutter clearing and a pure-water window pass.",
  ],
  midlothian: [
    "Modern monocouche estates around {name} respond best to softwashing and controlled rinsing, not harsh pressure.",
    "Harled new-builds near {nearby} need dwell time and gentle washdown so water is not driven behind the coating.",
    "Older cottages and stone villas around {name} get a substrate check before pressure touches paving or walls.",
    "Driveways in {name} often slope toward drains or door thresholds, so we manage runoff before surface cleaning starts.",
    "Tree-lined Midlothian gardens around {nearby} mean gutters need hand checks where leaf litter wedges behind joints.",
    "Bungalows and family homes in {name} often hide porch and garage gutters from the street; inspection photos help prioritise them.",
  ],
  "east-lothian": [
    "Conservation-area stonework around {name} needs a lighter touch, especially where salt air and lime mortar meet.",
    "Harled homes near {nearby} can mark quickly after easterly rain; softwashing lifts algae without chewing the finish.",
    "Coastal villas and newer developments around {name} often need PVC, window and render cleaning together to remove salt film.",
    "Long garden drives near {name} collect sand, leaf litter and tyre grit; rotary cleaning keeps the finish even.",
    "Bay-fronted homes around {nearby} need care at sills and window heads so dirty rinse water does not track over clean glass.",
    "Roof pitches around {name} often grow moss on the sheltered side first, even when the street-facing slope still looks fine.",
  ],
  "west-lothian": [
    "Linlithgow-style stone and conservation streets near {name} need gentle rinses and careful checks around older pointing.",
    "Modern estates around {nearby} often use monocouche or painted render that benefits from softwash rather than pressure.",
    "Driveways in {name} pick up road film from commuter routes; a proper wash clears joints and drainage channels together.",
    "Detached homes and bungalows around {name} can have long gutter runs, so one blocked outlet can back water up several metres.",
    "Newer harled properties near {nearby} need controlled rinse patterns to avoid streaking below vents and sills.",
    "Forth-side homes around {name} often pair PVC cleaning with window work because salt film settles on both.",
  ],
};

export const LOCAL_LANDMARK_ANGLES: Record<LocationRegionId, string[]> = {
  edinburgh: [
    "Pentland Hills shelter changes drying patterns around {name}; roofs can look clear from the street while shaded rear pitches hold moss.",
    "Holyrood and Arthur's Seat winds push rain across exposed Edinburgh elevations, so {name} gables need more than a cosmetic rinse.",
    "Forth shoreline humidity reaches homes from {name} toward {n1}, leaving PVC and glass dull after haar-heavy weeks.",
    "Tree-lined streets around {nearby} shed leaves straight into gutters each autumn; manual clearing catches what vacuum-only work misses.",
    "Conservation streets and shared access near {name} reward crews who protect stonework, neighbours and narrow pavements from the start.",
  ],
  midlothian: [
    "Pentlands run-off and burn corridors influence damp around {name}, so patios and gutters often need attention after long wet spells.",
    "Homes toward {n1} and {n2} can sit in colder pockets overnight; north-facing render stays green unless treated properly.",
    "Midlothian commuter routes bring road film onto low walls and driveways near {name}; detergent pre-soak makes the clean last longer.",
    "Wooded edges near {nearby} drop leaf litter and pollen onto rooflines, so paired gutter and fascia cleans work well.",
    "Open ground around {name} lets easterlies hit rear elevations, where algae can build up before the front of the house shows it.",
  ],
  "east-lothian": [
    "John Muir Country Park sand and coastal grit are part of East Lothian life; around {name}, they settle on paving, glass and low render.",
    "The Forth shoreline keeps humidity high from {name} toward {n1}, which is why algae returns fastest on shaded walls.",
    "Easterlies off the coast drive rain onto exposed elevations near {name}; softwashing tackles the staining without damaging render.",
    "Beach traffic and town-centre parking around {nearby} shape how we schedule, protect hoses and keep neighbours moving.",
    "Historic stone and sea air near {name} need conservation-minded cleaning, especially around sills, steps and garden walls.",
  ],
  "west-lothian": [
    "Avon valley frost pockets around {name} make winter damp linger, especially on roofs and paving that face away from the sun.",
    "Forth bridge access affects timing for {name}; we plan visits around the main crossings so quote slots stay realistic.",
    "Commuter roads through {nearby} bring road film onto driveways and PVC, so pre-soak and controlled rinse matter.",
    "Linlithgow and village stonework near {name} needs care around older mortar before pressure or treatment is chosen.",
    "Newer estates around {name} often have shaded side paths and rear patios where algae survives long after front paving dries.",
  ],
};

/** Compact hero intro with local service keywords. */
export function getLocationHeroParagraphs(location: Location): string[] {
  const nearby = location.neighborhoods?.length
    ? ` Covering ${formatNeighborhoodList(location)} and nearby areas.`
    : "";

  return [
    `Expert exterior cleaning in ${location.name}: roof steam cleaning, render softwashing, driveway cleaning, gutter cleaning, PVC cleaning and window cleaning.${nearby}`,
  ];
}

/** “Why choose us” block */
export function getLocationChooseUsParagraphs(location: Location): string[] {
  return [
    ph(pick(TRANSPORT_LINES[location.regionId], location.slug, "choose-trans"), location),
    ph(pick(HOME_STYLE_LINES[location.regionId], location.slug, "choose-home"), location),
  ];
}

/** Services section intros */
export function getLocationServicesSectionParagraphs(location: Location): string[] {
  return [
    ph(
      pick(
        [
          "Every property is different, but the pattern around {name} repeats: wet winters, dusty summers, and organic growth that loves damp shade on north faces.",
          "We keep language simple—if you're in {name}, you're probably tired of moss dropping into the driveway and gutters that gurgle after every downpour.",
          "Local weather doesn't negotiate: algae on render, slipped moss on tiles, and patio film are normal maintenance items here — not “you've neglected the place”.",
          "Most {name} customers want two things: work done safely at height, and results that last longer than a quick blast with a rental pressure washer.",
        ],
        location.slug,
        "svcintro-a",
      ),
      location,
    ),
    ph(
      pick(
        [
          "Below is what we actually deliver—each card links to a dedicated page for {name} with pricing context and photos from similar homes.",
          "Tap through for roof, render, driveway, gutter, PVC and window pages tailored to {name}; you'll see how we sequence treatments for local materials.",
          "Pick the job that matches what you're seeing outside today — we'll confirm access, water and waste handling before we book a date.",
          "If you're unsure what's urgent, start with gutters and roofline inspection; blockages upstream cause the expensive damp issues people miss until skirting boards stain.",
        ],
        location.slug,
        "svcintro-b",
      ),
      location,
    ),
  ];
}

/** Opening story paragraphs for detailed content (below reviews) */
export function getLocationOpeningParagraphs(location: Location): string[] {
  return [
    ph(pick(CLIMATE_LINES[location.regionId], location.slug, "open-a"), location),
    ph(
      pick(
        [
          "We're not here to upsell mystery chemicals—just honest exterior cleaning that fits how homes in {name} actually weather.",
          "Quote us photos from the ground if you like; we'll tell you what's algae versus cement staining before we book equipment.",
          "Insurance, method statements and neighbour-friendly setup matter on tight {name} streets—we bring mats, signage and controlled rinse plans as standard.",
          "Most people call after a storm or when the in-laws comment on the driveway—either way, we'll prioritise safety on ladders and roofline work.",
        ],
        location.slug,
        "open-b",
      ),
      location,
    ),
    ph(
      pick(
        [
          "Scroll on for service-by-service detail—each section is written for {name}, not copy-pasted from a national franchise page.",
          "If you share a gable or close with {nearby}, mention it when booking—we often coordinate access politely with neighbours when gutters share a fall.",
          "Postcode notes help us bring the right softwash batch and enough hose for rear gardens off back lanes.",
        ],
        location.slug,
        "open-c",
      ),
      location,
    ),
  ];
}

/** “Why exterior cleaning matters in {name}” — local knowledge */
export function getLocationLocalKnowledgeParagraphs(location: Location): string[] {
  return [
    ph(pick(LOCAL_LANDMARK_ANGLES[location.regionId], location.slug, "lk-lm"), location),
    ph(pick(HOME_STYLE_LINES[location.regionId], location.slug, "lk-home"), location),
    ph(pick(TRANSPORT_LINES[location.regionId], location.slug, "lk-trans"), location),
  ];
}

export function getLocationGalleryImageIndex(locationSlug: string): number {
  return (hashSlug(locationSlug, "gal-img") % 6) + 1;
}

/** Unique meta description (~150–160 chars) */
export function getLocationMetaDescription(location: Location): string {
  return `Exterior cleaning in ${location.name}, Edinburgh area: roof steam, render softwash, driveways, gutters, PVC and windows. Free quote.`;
}
