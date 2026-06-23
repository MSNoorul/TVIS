import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t, lang, toggle } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/about", label: t.nav.about },
    { to: "/products", label: t.nav.products },
    { to: "/services", label: t.nav.services },
    { to: "/projects", label: t.nav.projects },
    { to: "/brands", label: t.nav.brands },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container flex items-center justify-between h-18 py-3">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary bg-secondary"
                    : "text-foreground/75 hover:text-primary hover:bg-secondary/60"
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium text-foreground/75 hover:text-primary hover:bg-secondary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "العربية" : "English"}
          </button>
          <Button asChild variant="default" className="hidden md:inline-flex bg-gradient-brand hover:opacity-95 shadow-card-soft">
            <Link to="/contact">{t.nav.cta}</Link>
          </Button>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2.5 rounded-md text-sm font-medium",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => { toggle(); setOpen(false); }}
              className="px-4 py-2.5 rounded-md text-sm font-medium text-start text-foreground/80 inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {lang === "en" ? "العربية" : "English"}
            </button>
            <Button asChild className="mt-2 bg-gradient-brand">
              <Link to="/contact" onClick={() => setOpen(false)}>{t.nav.cta}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
