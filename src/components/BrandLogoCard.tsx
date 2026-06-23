import type { BrandMark } from "@/data/brands";

const Glyph = ({ kind, color }: { kind?: BrandMark["glyph"]; color?: string }) => {
  if (!kind) return null;
  const c = color ?? "currentColor";
  switch (kind) {
    case "dot":
      return <span className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />;
    case "square":
      return <span className="w-3 h-3" style={{ background: c }} />;
    case "drop":
      return (
        <svg width="18" height="22" viewBox="0 0 24 28" fill={c} aria-hidden="true">
          <path d="M12 0C8 7 3 12 3 18a9 9 0 0 0 18 0c0-6-5-11-9-18z" />
        </svg>
      );
    case "wave":
      return (
        <svg width="22" height="14" viewBox="0 0 32 16" fill="none" stroke={c} strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M2 11c4-6 8-6 12 0s8 6 16 0" />
        </svg>
      );
    case "bars":
      return (
        <span className="inline-flex items-end gap-0.5 h-4">
          <span className="w-1 h-2" style={{ background: c }} />
          <span className="w-1 h-3" style={{ background: c }} />
          <span className="w-1 h-4" style={{ background: c }} />
        </span>
      );
  }
};

export const BrandLogoCard = ({ brand }: { brand: BrandMark }) => {
  const trackingClass =
    brand.tracking === "wide"
      ? "tracking-[0.18em]"
      : brand.tracking === "tight"
      ? "tracking-tight"
      : "";
  return (
    <div
      className="group relative h-28 sm:h-32 rounded-xl overflow-hidden border border-border shadow-card-soft hover:shadow-elegant transition-all duration-300 flex items-center justify-center px-5"
      style={{ background: brand.bg }}
      title={brand.name}
    >
      <div className="flex items-center gap-2.5">
        <Glyph kind={brand.glyph} color={brand.glyphColor} />
        <div className="flex flex-col leading-none">
          <span
            className={`font-display ${trackingClass} ${brand.italic ? "italic" : ""} text-xl sm:text-2xl`}
            style={{ color: brand.fg, fontWeight: brand.weight ?? 800 }}
          >
            {brand.name}
          </span>
          {brand.strap && (
            <span
              className="text-[10px] uppercase tracking-[0.2em] mt-1 opacity-80"
              style={{ color: brand.fg }}
            >
              {brand.strap}
            </span>
          )}
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-xl" />
    </div>
  );
};
