import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className="w-10 h-10 rounded-lg bg-gradient-brand shadow-card-soft flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2C8 8 5 11 5 15a7 7 0 0 0 14 0c0-4-3-7-7-13z" />
          </svg>
        </div>
      </div>
      <div className="leading-tight">
        <div className={`font-display font-extrabold text-xl tracking-tight ${inverted ? "text-primary-foreground" : "text-primary"}`}>TVIS</div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${inverted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {t.footer.tagline}
        </div>
      </div>
    </Link>
  );
};
