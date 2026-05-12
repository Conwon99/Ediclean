import {
  BUSINESS_NAME,
  FACEBOOK_PROFILE_URL,
  GOOGLE_REVIEWS_URL,
  META_AREA_PHRASE,
  REGISTERED_POSTCODE,
  REGISTERED_REGION,
  REGISTERED_LOCALITY,
  REGISTERED_STREET,
} from "@/constants/site";

export const AboutPageEeat = () => {
  return (
    <div className="border-t border-neutral-200 bg-neutral-50">
      <section className="mx-auto max-w-[1204px] px-5 py-14 md:px-8 md:py-20">
        <h2 className="font-heading text-2xl font-bold uppercase tracking-tight text-black md:text-3xl">
          How {BUSINESS_NAME} got started
        </h2>
        <div className="prose prose-neutral mt-6 max-w-3xl text-[15px] leading-7 text-neutral-700 md:text-base md:leading-8">
          {/* Replace with your authentic story: why exterior cleaning, connection to Edinburgh & the Lothians, what customers say sets you apart. Target ~150–200 words. */}
          <p>
            This section is ready for your real narrative — how you got into exterior cleaning, why you serve{" "}
            {META_AREA_PHRASE}, and what clients should expect when they book {BUSINESS_NAME}. Authentic detail here
            supports trust with both visitors and search engines.
          </p>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-14 md:py-16">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Watch our introduction
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Drop an iframe below when you have a clip — optional but recommended for local E-E-A-T.
          </p>
          <div className="mt-8 flex aspect-video max-w-3xl items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-100 text-center text-sm text-neutral-500">
            Video embed placeholder
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Licensed, insured & guaranteed
          </h2>
          <ul className="mt-8 grid gap-6 text-[15px] leading-7 text-neutral-700 sm:grid-cols-2 md:text-base md:leading-8">
            <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="font-semibold text-black">Insurance</span>
              <p className="mt-2">
                {/* Add insurer level / policy summary when you want it public */}
                Fully insured for exterior cleaning work. Ask when booking — we can confirm details for homeowners and
                landlords.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="font-semibold text-black">Licences / certifications</span>
              <p className="mt-2">
                {/* List Working at Height / IPAF / industry certs here */}
                Add relevant certifications or memberships — keeps this section factual and easy to verify.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="font-semibold text-black">Years in business</span>
              <p className="mt-2">
                Long-standing exterior cleaning experience across {META_AREA_PHRASE}. References available on request.
              </p>
            </li>
            <li className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <span className="font-semibold text-black">Registered address</span>
              <p className="mt-2">
                {REGISTERED_STREET}, {REGISTERED_LOCALITY}, {REGISTERED_POSTCODE}, {REGISTERED_REGION}. Mobile service —
                we come to your property.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-14 md:py-16">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Find us on Google
          </h2>
          <p className="mt-3 max-w-2xl text-neutral-700">
            Read reviews and see updates on our{" "}
            <a href={GOOGLE_REVIEWS_URL} className="font-medium text-cta-dark underline hover:no-underline" target="_blank" rel="noopener noreferrer">
              Google Business Profile
            </a>
            . You can also paste Google&apos;s reviews embed iframe into the placeholder box below when you want reviews inline.
          </p>
          <div className="mt-8 rounded-2xl border border-dashed border-neutral-300 bg-white p-10 text-center text-sm text-neutral-500">
            Optional GBP reviews embed — paste Google&apos;s embed code when you want it inline on this page.
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-14 md:pb-20 md:pt-16">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Follow us
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-600">
            Only link profiles you actively maintain.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={FACEBOOK_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-cta-dark hover:text-cta-dark"
            >
              Facebook
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-800 transition hover:border-cta-dark hover:text-cta-dark"
            >
              Google Business Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
