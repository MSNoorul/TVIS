import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2 space-y-4">
          <Logo inverted />
          <p className="text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            {t.hero.subtitle}
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/60">
            {t.nav.contact}
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <span>{t.contact.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <a href={`mailto:${t.contact.email}`} className="hover:text-accent transition-colors">
                {t.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-widest text-primary-foreground/60">
            {t.nav.home}
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/about", label: t.nav.about },
              { to: "/products", label: t.nav.products },
              { to: "/services", label: t.nav.services },
              { to: "/projects", label: t.nav.projects },
              { to: "/brands", label: t.nav.brands },
              { to: "/contact", label: t.nav.contact },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-primary-foreground/85 hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container py-5 text-xs text-primary-foreground/60 flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} TVIS Trading & Contracting. {t.footer.rights}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </div>
    </footer>
  );
};
