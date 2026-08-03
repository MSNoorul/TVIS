import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import navIcon from "@/assets/tvis-icon-only.png";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className=" bg-white w-10 h-10 rounded-xl flex items-center justify-center">
          <img src={navIcon} alt="TVIS Logo" className="w-10 h-10" />
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
