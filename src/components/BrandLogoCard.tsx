import type { BrandMark } from "@/data/brands";

export const BrandLogoCard = ({ brand }: { brand: BrandMark }) => {
  return (
    <div
      className="group relative h-28 sm:h-32 rounded-xl overflow-hidden border border-border bg-white shadow-card-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center p-5"
      title={brand.name}
    >
      <img
        src={brand.logo}
        alt={brand.name}
        className="max-h-full max-w-full object-contain"
        loading="lazy"
      />
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-xl" />
    </div>
  );
};
