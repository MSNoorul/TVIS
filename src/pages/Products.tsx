import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { Check } from "lucide-react";
import { productImages } from "@/data/productImages";

const Products = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-gradient-brand text-primary-foreground py-20">
        <div className="container max-w-3xl animate-fade-up">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">Catalog</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">{t.products.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">{t.products.subtitle}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.products.items.map((p, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary">
                <img
                  src={productImages[i]}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-primary mb-3">{p.name}</h3>
                <ul className="space-y-2">
                  {p.apps.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
