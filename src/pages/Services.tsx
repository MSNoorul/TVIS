import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { Wrench, ShieldCheck, Cpu, Hammer, PanelsTopLeft, Plug } from "lucide-react";
import panelImg from "@/assets/control-panel.jpg";

const icons = [ShieldCheck, Wrench, Hammer, Cpu, PanelsTopLeft, Plug];

const Services = () => {
  const { t } = useLanguage();

  return (
    <Layout>
      <section className="bg-gradient-brand text-primary-foreground py-20">
        <div className="container max-w-3xl animate-fade-up">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">Capabilities</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">{t.services.title}</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">{t.services.subtitle}</p>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.services.items.map((s, i) => {
            const Icon = icons[i] ?? Wrench;
            return (
              <div
                key={i}
                className="group relative bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-all overflow-hidden"
              >
                <div className="absolute top-0 end-0 w-32 h-32 bg-gradient-brand opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity" />
                <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-5 shadow-card-soft">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gradient-soft hidden">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={panelImg}
            alt="Custom electrical control panel"
            className="rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <SectionHeading
            eyebrow="Beyond Pumps"
            title="Electrical, mechanical & integrated solutions"
            subtitle="Bus-bar riser systems, internal & emergency lighting, standby generators, UPS, FM-200 & deluge fire systems, plumbing, drainage and complete system integration — all delivered by a single accountable partner."
          />
        </div>
      </section>
    </Layout>
  );
};

export default Services;
