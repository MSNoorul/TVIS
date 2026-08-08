import { Layout } from "@/components/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeading } from "@/components/SectionHeading";
import { useLanguage } from "@/i18n/LanguageContext";
import { MapPin, Calendar, Wrench } from "lucide-react";
import projectsData from "@/data/projects.json";

interface Project {
  img: string;
  category: string;
  title: string;
  location: string;
  year: string;
  scope: string[];
}

const projects: Project[] = projectsData.projects;

// const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
const categories = ["All"];

import { useState } from "react";

const Projects = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <SEO
        title="Completed Pump & E&M Projects | TVIS Saudi Arabia"
        description="Case studies of pump systems, control panels and mechanical-electrical installations completed by TVIS across Riyadh, Buraidah and Saudi Arabia."
        path="/projects"
      />
      <section className="bg-gradient-brand text-primary-foreground py-20">
        <div className="container max-w-3xl animate-fade-up">
          <div className="text-xs font-semibold tracking-[0.22em] uppercase text-accent mb-3">Case Studies</div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold">Completed Projects</h1>
          <p className="mt-5 text-lg text-primary-foreground/85">
            A selection of pump systems, control panels, and full mechanical-electrical installations
            delivered by TVIS across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Filter pills */}
      <section className="py-4 border-b border-border bg-gradient-soft  sticky top-[65px] z-30 backdrop-blur-md bg-background/85">
        <div className="container">
          <div className="flex gap-2overflow-x-auto hide-scrollbar pb-2 -mx-1 px-1">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary shadow-card-soft"
                    : "bg-card text-foreground/70 border-border hover:border-primary/40 hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={i}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(i % 6) * 60}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-secondary relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-3 start-3 px-2.5 py-1 rounded-md bg-background/95 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-primary">
                  {p.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-display font-bold text-base sm:text-lg text-primary leading-snug mb-3 min-h-[3rem]">
                  {p.title}
                </h2>
                <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {p.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    {p.year}
                  </span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex items-center gap-1.5 mb-2 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">
                    <Wrench className="w-3 h-3" /> Scope
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.scope.map((s, j) => (
                      <span
                        key={j}
                        className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[11px] font-medium"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="rounded-3xl bg-gradient-brand p-10 sm:p-14 text-center shadow-elegant">
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground">
              {t.cta.title}
            </h3>
            <p className="mt-3 text-primary-foreground/85 max-w-xl mx-auto">{t.cta.body}</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
