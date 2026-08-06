export type RecentJob = {
  before: string;
  after: string;
  alt: string;
};

/**
 * Real before/after job photo pairs per service slug, shown in the Recent Jobs strip.
 *
 * TODO: Ediclean doesn't yet have real distinct before/after job photos for
 * render softwashing in its portfolio. Add a "render-softwashing" entry here
 * once real photos from completed jobs are available — RecentJobsSection
 * silently renders nothing for slugs without an entry, so it's safe to leave
 * this empty rather than shipping fabricated "recent job" photos.
 */
export const recentJobs: Record<string, RecentJob[]> = {};

export function getRecentJobs(serviceSlug: string): RecentJob[] | undefined {
  return recentJobs[serviceSlug];
}
