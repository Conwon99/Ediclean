import { PHONE_DISPLAY, PHONE_E164 } from "@/constants/site";

export const FinalPhoneCta = () => {
  return (
    <section className="bg-cta-dark text-white box-border py-12 md:py-16">
      <div className="mx-auto max-w-[1204px] px-5 md:px-8 text-center">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Ready for a free quote?
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-white/90 text-[15px] leading-6 md:text-base">
          Call now or send a message — we&apos;ll confirm coverage and pricing with no obligation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${PHONE_E164}`}
            className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-semibold text-cta-dark shadow-lg transition hover:bg-neutral-100"
          >
            <svg className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {PHONE_DISPLAY}
          </a>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            Message us
          </a>
        </div>
      </div>
    </section>
  );
};
