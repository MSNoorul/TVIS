import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { BrandLogoCard } from "@/components/BrandLogoCard";
import { brands, type BrandMark } from "@/data/brands";
import { Droplet, Zap, Settings2 } from "lucide-react";

const categoryOrder: BrandMark["category"][] = ["pumps", "electrical", "mechanical"];
const categoryIcons = { pumps: Droplet, electrical: Zap, mechanical: Settings2 };

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
            eyebrow={t.brands.heading.eyebrow}
            title={t.brands.heading.title}
          />
          <div className="mt-14">
            {categoryOrder.map((cat) => {
              const CategoryIcon = categoryIcons[cat];
              return (
                <div key={cat} className="mb-16 last:mb-0">
                  <div className="flex items-center gap-3 mb-6">
                    <CategoryIcon className="w-5 h-5 text-accent" />
                    <h3 className="font-display font-bold text-lg text-primary">{t.brands.categories[cat]}</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {brands
                      .filter((b) => b.category === cat)
                      .map((b, i) => (
                        <BrandLogoCard key={i} brand={b} />
                      ))}
                  </div>
                </div>
              );
            })}
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
