import aboutData from "./about.json";
import { Award, Users, Eye, Target, type LucideIcon } from "lucide-react";
import type { Lang } from "@/i18n/translations";

const iconMap: Record<string, LucideIcon> = { award: Award, users: Users, eye: Eye, target: Target };

export interface AboutIntro {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
}

export interface AboutPillar {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const getAboutIntro = (lang: Lang): AboutIntro =>
  lang === "ar" ? aboutData.intro_ar : aboutData.intro_en;

export const getAboutPillars = (lang: Lang): AboutPillar[] =>
  aboutData.pillars.map((p) => ({
    icon: iconMap[p.icon],
    title: lang === "ar" ? p.title_ar : p.title_en,
    body: lang === "ar" ? p.body_ar : p.body_en,
  }));
