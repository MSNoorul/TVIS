import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Eye, Award, Users } from "lucide-react";
import installImg from "@/assets/install-pumpsystem-1.jpg";

const About = () => {
  const { t } = useLanguage();

  const pillars = [
    { icon: Eye, title: "Vision", body: "To be a trusted pump supplier known for quality, innovation, and smart investments that support long-term reliability and service excellence." },
    { icon: Target, title: "Mission", body: "To deliver reliable, high-quality pump solutions with great service and support, meeting customer needs through trusted products." },
    { icon: Award, title: "Quality", body: "Premium global brands, certified workmanship and rigorous testing on every system we deliver." },
    { icon: Users, title: "Partnership", body: "A dedicated technical and electrical support network responding fast — even in critical downtime situations." },
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-brand text-primary-foreground py-20 sm:py-28">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">{t.aboutPreview.eyebrow}</div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {t.aboutPreview.title}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">{t.aboutPreview.body}</p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={installImg}
            alt="Installed pump system"
            className="rounded-2xl shadow-elegant w-full aspect-[4/3] object-cover"
            loading="lazy"
          />
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Strategic Strengths"
              title="Built on partnerships and technical depth"
              subtitle="One of our key strengths is our robust partner network. We collaborate with major global brands, offering dedicated sales, technical and electrical support across all product lines — from system design and product selection to post-installation service and emergency response."
            />
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gradient-soft">
        <div className="container">
          <SectionHeading align="center" eyebrow="What drives us" title="Vision, mission & values" />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <div key={i} className="bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
