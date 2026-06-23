// Stylized brand wordmarks rendered with each partner's signature color & type treatment.
// These are not the official trademarked logos — they are color-accurate wordmark cards
// suitable for "authorised partner" presentation.

export interface BrandMark {
  name: string;
  bg: string;
  fg: string;
  /** Optional second line / strap */
  strap?: string;
  /** Tracking style: tight | wide */
  tracking?: "tight" | "wide" | "normal";
  /** Font weight */
  weight?: 600 | 700 | 800 | 900;
  /** Italic */
  italic?: boolean;
  /** Optional simple shape glyph */
  glyph?: "dot" | "square" | "bars" | "drop" | "wave";
  glyphColor?: string;
}

export const brands: BrandMark[] = [
  { name: "Grundfos", bg: "#FFFFFF", fg: "#E2231A", weight: 800, tracking: "tight", glyph: "drop", glyphColor: "#E2231A" },
  { name: "KSB", bg: "#009640", fg: "#FFFFFF", weight: 900, tracking: "wide" },
  { name: "WILO", bg: "#FFFFFF", fg: "#009640", weight: 900, tracking: "wide", glyph: "wave", glyphColor: "#009640" },
  { name: "EBARA", bg: "#FFFFFF", fg: "#005BAC", weight: 900, tracking: "wide" },
  { name: "PENTAX", bg: "#000000", fg: "#FFFFFF", weight: 800, tracking: "wide" },
  { name: "Lowara", bg: "#FFFFFF", fg: "#0033A0", weight: 800, italic: true, tracking: "tight" },
  { name: "Pedrollo", bg: "#FFFFFF", fg: "#E30613", weight: 800, italic: true, tracking: "tight" },
  { name: "Calpeda", bg: "#003DA5", fg: "#FFFFFF", weight: 800, tracking: "tight" },
  { name: "Shakti", bg: "#FFFFFF", fg: "#1F3A93", weight: 800, tracking: "tight", strap: "Pumping Life", glyph: "drop", glyphColor: "#1F3A93" },
  { name: "General Pumps", bg: "#FFFFFF", fg: "#0E4D92", weight: 800, tracking: "tight", strap: "España" },
  { name: "Schneider Electric", bg: "#3DCD58", fg: "#FFFFFF", weight: 800, tracking: "tight" },
  { name: "ABB", bg: "#FF000F", fg: "#FFFFFF", weight: 900, tracking: "wide" },
  { name: "SIEMENS", bg: "#FFFFFF", fg: "#009999", weight: 700, tracking: "wide" },
  { name: "LS Electric", bg: "#FFFFFF", fg: "#0033A0", weight: 800, tracking: "tight", glyph: "square", glyphColor: "#E30613" },
  { name: "GE", bg: "#3A36DB", fg: "#FFFFFF", weight: 900, tracking: "tight", italic: true },
  { name: "EATON", bg: "#003366", fg: "#FFFFFF", weight: 900, tracking: "wide" },
  { name: "legrand", bg: "#FFFFFF", fg: "#000000", weight: 800, tracking: "tight", glyph: "square", glyphColor: "#E30613" },
  { name: "Weidmüller", bg: "#FFFFFF", fg: "#E2001A", weight: 800, tracking: "tight" },
];
