import brandsData from "./brands.json";

export interface BrandMark {
  name: string;
  category: "pumps" | "electrical" | "mechanical";
  logo: string;
}

export const brands: BrandMark[] = brandsData.brands as BrandMark[];
