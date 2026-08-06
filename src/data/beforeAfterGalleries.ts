import type { BeforeAfterPair } from "@/sections/CoreValuesSection/components/BeforeAfterSlideshow";

/**
 * Real before/after photo pairs per service slug, shown as a slideshow on the
 * "Why Choose" section in place of the static hero image.
 *
 * TODO: Ediclean doesn't yet have dedicated before/after render-softwashing photo
 * pairs in its portfolio (only a single in-progress action shot). Add a
 * "render-softwashing" entry here once real before/after photos are available —
 * ExteriorWhyChooseSection will automatically pick them up and swap in the
 * slideshow. Left empty for now rather than pointing at fabricated image paths.
 */
export const beforeAfterGalleries: Record<string, BeforeAfterPair[]> = {};

export function getBeforeAfterGallery(serviceSlug: string): BeforeAfterPair[] | undefined {
  return beforeAfterGalleries[serviceSlug];
}
