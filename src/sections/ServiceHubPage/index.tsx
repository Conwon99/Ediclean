import type { ServiceHubDefinition } from "@/data/serviceHubPages";
import { BUSINESS_NAME } from "@/constants/site";

type Props = { hub: ServiceHubDefinition };

export const ServiceHubPageContent = ({ hub }: Props) => {
  return (
    <>
      <section className="relative overflow-hidden bg-neutral-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-neutral-900 to-neutral-950" />
        <div className="relative mx-auto max-w-[1204px] px-5 py-20 md:px-8 md:py-28">
          <p className="mb-3 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wide">
            Service hub
          </p>
          <h1 className="font-heading text-4xl font-bold uppercase leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
            {hub.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85 md:text-xl">{hub.heroSubtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-neutral-900 shadow-lg transition hover:bg-neutral-100"
            >
              Free quote
            </a>
            <a href="/services/" className="inline-flex items-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white hover:bg-white/10">
              All services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <div className="max-w-3xl space-y-5 text-[15px] leading-7 text-neutral-700 md:text-base md:leading-8">
            {hub.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <h2 className="mt-14 font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Why local expertise matters
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-7 text-neutral-700 md:text-base md:leading-8">{hub.whyLocal}</p>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-14 md:py-20">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">Services in this group</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Jump straight to a service page — each opens with how we work and pricing factors for your property.
          </p>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {hub.links.map((item) => (
              <li key={item.slug}>
                <a
                  href={`/${item.slug}/`}
                  className="flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-cta-dark hover:shadow-md"
                >
                  <span className="font-heading text-lg font-bold uppercase text-black">{item.title}</span>
                  <span className="mt-3 flex-1 text-sm leading-relaxed text-neutral-600">{item.shortLine}</span>
                  <span className="mt-4 text-sm font-semibold text-cta-dark">Learn more →</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-14 md:pb-20">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">
            Back to {BUSINESS_NAME}
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-700">
            Explore every area we cover on the{" "}
            <a href="/locations/" className="font-medium text-cta-dark underline hover:no-underline">
              locations hub
            </a>
            , or return to the{" "}
            <a href="/" className="font-medium text-cta-dark underline hover:no-underline">
              homepage
            </a>{" "}
            for an overview of exterior cleaning across Edinburgh and the Lothians.
          </p>
        </div>
      </section>
    </>
  );
};
