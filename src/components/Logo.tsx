import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import navIcon from "@/assets/tvis-logo-nobg.png";

export const Logo = ({
  inverted = false,
  withBackground = false,
}: {
  inverted?: boolean;
  withBackground?: boolean;
}) => {
  const { t } = useLanguage();
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        <div className={cn("flex items-center justify-center", withBackground && "bg-white rounded-xl")}>
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
