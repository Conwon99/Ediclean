import { META_AREA_PHRASE, SERVICE_REGION_SHORT, SITE_TITLE_AREA } from "@/constants/site";

type Props = {
  serviceTitle: string;
};

export const ServicePageCostSection = ({ serviceTitle }: Props) => {
  return (
    <section className="bg-neutral-100 box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase text-black">
          {serviceTitle} cost in {SITE_TITLE_AREA}
        </h2>
        <div className="mt-6 space-y-4 text-[15px] leading-7 text-neutral-700 md:text-base md:leading-8 max-w-3xl">
          <p>
            Pricing depends on your property size, access, how dirty the surfaces are, and whether we combine{" "}
            {serviceTitle.toLowerCase()} with other exterior work. We always give a{" "}
            <strong className="font-semibold text-neutral-900">clear written quote before we start</strong> — no hidden
            fees and no surprise add-ons.
          </p>
          <p>
            Homes in {SERVICE_REGION_SHORT} vary from compact terraces to large detached houses; weather, trees and
            shade also affect how long a job takes. Tell us your postcode and what you need — we&apos;ll confirm whether
            we cover your area across {META_AREA_PHRASE} and schedule a visit or estimate.
          </p>
          <p>
            Prefer a ballpark? <a href="/contact/" className="font-medium text-cta-dark underline hover:no-underline">Message us</a>{" "}
            or call — we&apos;ll ask the right questions and explain what affects the price for your job.
          </p>
        </div>
      </div>
    </section>
  );
};
