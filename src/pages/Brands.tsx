import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { BrandLogoCard } from "@/components/BrandLogoCard";
import { brands } from "@/data/brands";

const Brands = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-gradient-brand text-primary-foreground py-20">
        <div className="container max-w-3xl animate-fade-up">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">Partners</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">{t.brands.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">{t.brands.subtitle}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Pumps · Electrical · Automation"
            title="Authorised channel for global leaders"
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {brands.map((b, i) => (
              <BrandLogoCard key={i} brand={b} />
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-muted-foreground max-w-2xl mx-auto">
            All trademarks, names and logos are the property of their respective owners and are used here
            to indicate the brands TVIS supplies and supports.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Brands;
