interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "start" | "center";
}

export const SectionHeading = ({ eyebrow, title, subtitle, align = "start" }: Props) => (
  <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">
        {eyebrow}
      </div>
    )}
    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);
