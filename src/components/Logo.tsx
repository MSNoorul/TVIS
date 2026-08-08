import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import navIcon from "@/assets/tvis-logo.png";

export const Logo = ({ inverted = false }: { inverted?: boolean }) => {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className=" bg-white  rounded-xl flex items-center justify-center">
          <img src={navIcon} alt="TVIS Logo" className="" />
        </div>
      </div>
      <div className="leading-tight hidden">
        <div className={`font-display font-extrabold text-xl tracking-tight ${inverted ? "text-primary-foreground" : "text-primary"}`}>TVIS</div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${inverted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {t.footer.tagline}
        </div>
      </div>
    </Link>
  );
};
