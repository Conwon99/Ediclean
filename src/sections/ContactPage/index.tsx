import { META_AREA_PHRASE } from "@/constants/site";
import { locations } from "@/data/locations";

/** Extra blocks below the main quote form on `/contact/` — areas served, map placeholder, trust line. */
export const ContactPageSupplement = () => {
  return (
    <>
      <section className="border-t border-neutral-200 bg-neutral-50 py-12 md:py-16">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">Areas we serve</h2>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Not sure if we cover your postcode? Call us — we&apos;ll confirm straight away. Browse location pages for{" "}
            <a href="/locations/" className="font-medium text-cta-dark underline hover:no-underline">
              towns across Edinburgh and the Lothians
            </a>
            .
          </p>
          <ul className="mt-8 columns-2 gap-x-8 gap-y-2 text-sm text-neutral-800 sm:columns-3 md:columns-4">
            {locations.map((loc) => (
              <li key={loc.slug} className="break-inside-avoid py-1">
                <a href={`/${loc.slug}/`} className="hover:text-cta-dark hover:underline">
                  {loc.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-[1204px] px-5 md:px-8">
          <h2 className="font-heading text-2xl font-bold uppercase text-black md:text-3xl">Find us</h2>
          <p className="mt-3 max-w-2xl text-neutral-600">
            Add a Google Maps embed for your registered office or typical service centre when you&apos;re ready (e.g. EH10
            area). Until then, use the map placeholder below.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-inner">
            <div className="flex min-h-[280px] flex-col items-center justify-center gap-3 px-6 py-12 text-center text-neutral-500">
              <p className="text-sm font-medium uppercase tracking-wide">Map embed placeholder</p>
              <p className="max-w-md text-sm leading-relaxed">
                Paste your Google Maps iframe (service area or registered office) when ready — keeps this page fast until configured.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-100 py-10">
        <div className="mx-auto max-w-[1204px] px-5 text-center md:px-8">
          <p className="text-[15px] font-medium text-neutral-800 md:text-base">
            Fully insured · Free quotes · Professional exterior cleaning · {META_AREA_PHRASE}
          </p>
        </div>
      </section>
    </>
  );
};
