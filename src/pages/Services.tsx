import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Wrench,
  ShieldCheck,
  Hammer,
  Activity,
  Droplets,
  PanelsTopLeft,
  Plug,
  Check,
  ChevronRight,
  MessageSquare,
  PenTool,
  Calculator,
  Briefcase,
  Ruler,
  HardHat,
  Headset,
  Settings,
  ClipboardCheck,
  BadgeCheck,
} from "lucide-react";
import panelImg from "@/assets/control-panel.jpg";

// 1:1 with 'services.items' in src/i18n/translations.ts — same order, same length.
const icons = [ShieldCheck, Wrench, Activity, Hammer, Droplets, PanelsTopLeft, Plug];

// 1:1 with 'services.process.items' in src/i18n/translations.ts — same order, same length.
const processIcons = [
  MessageSquare,
  PenTool,
  Calculator,
  Briefcase,
  Ruler,
  HardHat,
  Headset,
  Settings,
  ClipboardCheck,
  BadgeCheck,
];

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
              <Dialog key={i}>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="group relative text-start w-full bg-card rounded-2xl p-7 border border-border hover:shadow-elegant transition-all overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="absolute top-0 end-0 w-32 h-32 bg-gradient-brand opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity" />
                    <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-5 shadow-card-soft">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-primary mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-accent">
                      {t.services.viewDetails}
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[85vh] p-0 gap-0 flex flex-col">
                  <div className="overflow-y-auto p-6">
                    <DialogHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand text-primary-foreground flex items-center justify-center mb-3 shadow-card-soft">
                        <Icon className="w-5 h-5" />
                      </div>
                      <DialogTitle className="font-display text-2xl text-primary">{s.title}</DialogTitle>
                      <DialogDescription className="text-base">{s.body}</DialogDescription>
                    </DialogHeader>
                    {i === 6 && (
                      <img
                        src={panelImg}
                        alt=""
                        className="rounded-xl w-full aspect-[16/7] object-cover mt-4"
                        loading="lazy"
                      />
                    )}
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mt-4">
                      {s.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container">
          <SectionHeading eyebrow="Approach" title={t.services.process.title} align="center" />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 mt-10">
            {t.services.process.items.map((label, i) => {
              const Icon = processIcons[i] ?? Settings;
              return (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
