import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Wrench, Cpu, Droplets, Factory, Sprout, Building2, Waves, Snowflake, Pickaxe, Bath } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-pumproom.jpg";
import productsCollection from "@/assets/products-collection.jpg";
import installImg from "@/assets/Gemini_Generated_Image_uj2pt7uj2pt7uj2p.png";

const sectorIcons = [Factory, Building2, Sprout, Building2, Waves, Pickaxe, Bath, Snowflake];

const Home = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="TVIS pump room with industrial pump systems"
            className="w-full h-full object-cover animate-slow-zoom"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative container py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 text-xs font-medium tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t.hero.eyebrow}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {t.hero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-cta text-accent-foreground hover:opacity-95 shadow-glow">
                <Link to="/products">
                  {t.hero.ctaPrimary} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/15 hover:text-primary-foreground">
                <Link to="/contact">{t.hero.ctaSecondary}</Link>
              </Button>
            </div>
          </div>

          <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {[
              { v: t.hero.stat1, l: t.hero.stat1Label },
              { v: t.hero.stat2, l: t.hero.stat2Label },
              { v: t.hero.stat3, l: t.hero.stat3Label },
            ].map((s, i) => (
              <div key={i} className="rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/15 p-5">
                <div className="text-2xl font-display font-extrabold text-primary-foreground">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-primary-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-brand opacity-10 rounded-2xl blur-xl" />
            <img
              src={installImg}
              alt="Installed TVIS pump system with control panel"
              className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -end-6 hidden md:block bg-card rounded-xl shadow-card-soft p-5 border border-border max-w-[220px]">
              <ShieldCheck className="w-7 h-7 text-accent mb-2" />
              <div className="text-sm font-semibold text-primary">Certified Engineering</div>
              <div className="text-xs text-muted-foreground mt-1">UL/FM compliant fire pump sets and code-aligned installations.</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow={t.aboutPreview.eyebrow}
              title={t.aboutPreview.title}
              subtitle={t.aboutPreview.body}
            />
            <div className="mt-8">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">{t.aboutPreview.cta} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 sm:py-24 bg-gradient-soft">
        <div className="container">
          <SectionHeading align="center" title={t.sectors.title} subtitle={t.sectors.subtitle} />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {t.sectors.items.map((label, i) => {
              const Icon = sectorIcons[i] ?? Droplets;
              return (
                <div
                  key={i}
                  className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-card-soft transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4 group-hover:bg-gradient-brand group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-semibold text-foreground leading-snug">{label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 sm:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading title={t.services.title} subtitle={t.services.subtitle} />
            <Button asChild variant="ghost" className="self-start text-primary hover:text-accent">
              <Link to="/services">{t.services.title} <ArrowRight className="w-4 h-4 ms-1 rtl:rotate-180" /></Link>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.items.slice(0, 6).map((s, i) => {
              const Icons = [Wrench, ShieldCheck, Cpu, Wrench, Cpu, ShieldCheck];
              const Icon = Icons[i] ?? Wrench;
              return (
                <div key={i} className="group relative bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 end-0 w-32 h-32 bg-gradient-brand opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-5 shadow-card-soft">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 sm:p-14 shadow-elegant">
            <div className="absolute inset-0 opacity-10">
              <img src={productsCollection} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="relative grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground leading-tight">
                  {t.cta.title}
                </h3>
                <p className="mt-3 text-primary-foreground/85 max-w-xl">{t.cta.body}</p>
              </div>
              <div className="md:justify-self-end">
                <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow">
                  <Link to="/contact">{t.cta.button} <ArrowRight className="w-4 h-4 ms-2 rtl:rotate-180" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
