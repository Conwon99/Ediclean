import {
  GBP_PRIMARY_CATEGORY_LABEL,
  META_AREA_PHRASE,
  PHONE_DISPLAY,
  PHONE_E164,
  SITE_TITLE_AREA,
} from "@/constants/site";

function phoneGtag(label: string) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
    (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "phone_hero", {
      event_category: "Phone",
      event_label: label,
    });
  }
}

export const HeroText = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow max-w-[650px]">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
        <h1 className="text-[44px] font-bold box-border caret-transparent blur-0 leading-[52px] md:text-7xl md:leading-[80px] font-heading normal-case">
          <span className="block">
            {GBP_PRIMARY_CATEGORY_LABEL.charAt(0).toUpperCase()}
            {GBP_PRIMARY_CATEGORY_LABEL.slice(1)} in{" "}
            <span className="text-blue-300">{SITE_TITLE_AREA}</span>
          </span>
        </h1>
        <p className="text-base box-border caret-transparent blur-0 leading-[26px] md:text-lg font-figtree">
          Roof steam cleaning, render softwashing, driveway, gutter, PVC and window cleaning — safe, professional service across {META_AREA_PHRASE}.
        </p>
      </div>

      <div className="items-center box-border caret-transparent gap-x-3 flex blur-0 flex-wrap gap-y-3 mt-6 md:gap-x-4 md:gap-y-4 md:mt-7">
        <a
          href={`tel:${PHONE_E164}`}
          onClick={() => phoneGtag("hero")}
          className="text-black items-center bg-white box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border border-white/90 pl-1 pr-6 py-1 rounded-[100px] border-solid hover:bg-neutral-100 transition"
        >
          <span className="text-white items-center bg-blue-600 flex h-12 justify-center w-12 overflow-hidden rounded-[50%] shrink-0">
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </span>
          <span className="relative text-sm font-medium leading-5 z-[2] md:text-base md:leading-6">Call {PHONE_DISPLAY}</span>
        </a>

        <a
          href="/contact/"
          onClick={() => {
            if (typeof window !== "undefined" && (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag) {
              (window as unknown as { gtag: (...a: unknown[]) => void }).gtag("event", "quoteButton_hero", {
                event_category: "CTA",
                event_label: "Hero Section",
              });
            }
          }}
          className="text-white items-center bg-cta box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark hover:text-black"
        >
          <span className="relative text-sm font-medium leading-5 z-[2] md:text-base md:leading-6">BOOK NOW</span>
          <span className="text-white items-center bg-blue-600 flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
            <img
              src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
              alt=""
              className="h-3.5 w-3.5"
              style={{ filter: "brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)" }}
            />
          </span>
        </a>
      </div>

      <div
        className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/25 pt-5 text-[13px] leading-snug text-white/90 md:text-sm md:gap-x-6"
        aria-label="Trust signals"
      >
        <span className="flex items-center gap-1.5">
          <span className="text-emerald-300" aria-hidden>
            ✓
          </span>
          Fully insured
        </span>
        <span className="hidden sm:inline text-white/40" aria-hidden>
          |
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-emerald-300" aria-hidden>
            ✓
          </span>
          Free quotes
        </span>
        <span className="hidden sm:inline text-white/40" aria-hidden>
          |
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-emerald-300" aria-hidden>
            ✓
          </span>
          Edinburgh &amp; Lothians coverage
        </span>
      </div>
    </div>
  );
};
