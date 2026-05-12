import { ServiceCard } from "./components/ServiceCard";
import { services } from "@/data/services";

const ICON_URL = "https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg";

export const ServicePageServices = () => {
  return (
    <section className="bg-white box-border caret-transparent pb-[60px] md:pb-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-[740px] gap-y-4">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                Browse our services.
              </h2>
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div
              role="list"
              className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-7 mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4 md:mt-14"
            >
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  href={`/${service.slug}/`}
                  imageUrl={service.imageUrl}
                  imageSizes="(max-width: 767px) 100vw, 740px"
                  title={service.title}
                  description={service.shortDescription}
                  iconUrl={ICON_URL}
                  iconAlt="Icon"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
