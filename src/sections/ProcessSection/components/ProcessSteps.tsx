import { ProcessCard } from "@/sections/ProcessSection/components/ProcessCard";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
        imageAlt="Book and get a quote"
        title="01. Book & get a quote."
        description="Contact us to discuss your exterior cleaning needs. We'll provide a free quote and schedule a convenient time. A deposit may be required to secure your booking—we'll confirm when you get in touch."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
        imageAlt="We come to you"
        title="02. We come to you."
        description="We bring our equipment and expertise to your property. Roof cleaning, render softwashing, driveway, gutter, PVC and window cleaning—all carried out at your home or business with minimal disruption."
      />
      <ProcessCard
        imageUrl="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
        imageAlt="Payment and completion"
        title="03. Payment & completion."
        description="Payment can be settled at the time of service or as agreed. We'll leave your property looking its best. Timings and prices depend on the size and condition of the job—we'll keep you informed throughout."
      />
    </div>
  );
};
