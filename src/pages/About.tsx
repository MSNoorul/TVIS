import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { Target, Eye, Award, Users, Download } from "lucide-react";
import companyProfile from "@/data/companyProfile.json";

const About = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Award,
      title: "Quality",
      body: "We deliver high-quality pump systems backed by deep technical expertise and strong global manufacturer partnerships, trusted for precise selection and reliable support.",
    },
    {
      icon: Users,
      title: "Partnership",
      body: "Our partner network with major global brands gives us dedicated sales, technical, and electrical support — ensuring fast response in critical situations.",
    },
    {
      icon: Eye,
      title: "Vision",
      body: "To be a trusted pump supplier known for quality, innovation, and smart investments supporting long-term reliability and service excellence.",
    },
    {
      icon: Target,
      title: "Mission",
      body: "To deliver reliable, high-quality pump solutions with great service and support, meeting every customer need through trusted products.",
    },
  ];

  return (
    <Layout>
      <section className="relative bg-gradient-brand text-primary-foreground py-20 sm:py-28">
        <div className="container">
          <div className="max-w-3xl animate-fade-up">
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">
              {t.aboutPreview.eyebrow}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              {t.aboutPreview.title}
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85 leading-relaxed">
              {t.aboutPreview.body}
            </p>
            {companyProfile.pdf && (
              <Button asChild size="lg" variant="secondary" className="mt-8">
                <a href={companyProfile.pdf} download="TVIS-Overview.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download TVIS Overview
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gradient-soft">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow=""
            title="Why We're Your Best Choice"
            subtitle="We supply high-quality water pump systems supported by deep technical expertise and strong collaborations with global manufacturers — from precise product selection to responsive after-sales service."
          />

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="h-full flex flex-col bg-card rounded-2xl p-7 border border-border hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-5 shrink-0">
                  <p.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-lg text-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;