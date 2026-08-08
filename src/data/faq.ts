export interface FaqCta {
  label: string;
  href: string;
}

export interface FaqEntry {
  id: string;
  category: "company" | "products" | "services" | "contact";
  question: string;
  answer: string;
  relatedIds: string[];
  cta?: FaqCta;
}

export const starterQuestionIds: string[] = [
  "company-overview",
  "products-overview",
  "services-overview",
  "contact-overview",
];

export const faqEntries: FaqEntry[] = [
  {
    id: "company-overview",
    category: "company",
    question: "What does TVIS do?",
    answer:
      "TVIS (Technical Value Infrastructure Solution) is a Saudi trading & contracting company. We supply high-quality water pumps and complete pump systems from trusted global manufacturers, trade electrical & mechanical materials, and deliver full E&M contracting services — backed by 10+ years serving Riyadh and Buraidah.",
    relatedIds: ["sectors-served", "company-experience", "contact-overview"],
  },
  {
    id: "sectors-served",
    category: "company",
    question: "Which industries do you serve?",
    answer:
      "We serve 8 major sectors: Industrial Operations, Residential & Domestic, Agricultural & Irrigation, Commercial Building Services, Wastewater & Sewage, Groundwater Extraction, Pools & Wellness, and Hot/Chilled & Circulation Water systems.",
    relatedIds: ["products-overview", "services-overview"],
  },
  {
    id: "company-experience",
    category: "company",
    question: "How long has TVIS been operating?",
    answer:
      "Our team has actively served clients in Riyadh and Buraidah for more than 10 years, delivering pump solutions, technical support and industrial services. Today, with an updated commercial registration, we continue that same trusted journey with expanded capabilities and partnerships.",
    relatedIds: ["company-overview", "contact-overview"],
  },
  {
    id: "products-overview",
    category: "products",
    question: "What products do you supply?",
    answer:
      "A comprehensive pump portfolio: vertical inline, end suction, split casing and submersible pumps, fire pump sets, booster and pressure systems, induction motors, and pressure/expansion tanks — 20+ product types for residential, commercial and heavy industrial use.",
    relatedIds: ["product-brands", "product-fire-pumps", "services-overview"],
  },
  {
    id: "product-brands",
    category: "products",
    question: "Which pump brands do you carry?",
    answer:
      "We're an authorised channel for global pump manufacturers including Grundfos, Xylem, KSB, Ebara, Wilo, Sulzer, Goulds Pumps (ITT), Armstrong, Pedrollo and more, plus major electrical brands like Siemens, Schneider Electric and ABB for control components.",
    relatedIds: ["products-overview", "contact-overview"],
  },
  {
    id: "product-fire-pumps",
    category: "products",
    question: "Do you supply fire-fighting pump sets?",
    answer:
      "Yes — Horizontal Split Case and Electrical Fire Pumpsets in both UL/FM and Non-UL/FM configurations, used in commercial complexes, high-rise buildings, petrochemical sites, airports, ports and power stations.",
    relatedIds: ["products-overview", "service-installation"],
  },
  {
    id: "services-overview",
    category: "services",
    question: "What services do you offer?",
    answer:
      "Full lifecycle support: Inspection & Testing, Installation & Commissioning, Maintenance & On-site Service, Workshop Repair, Water Pump Systems & Booster Solutions, Control Panel Solutions, and broader Electrical & Mechanical contracting.",
    relatedIds: ["service-maintenance", "service-installation", "service-control-panels"],
  },
  {
    id: "service-maintenance",
    category: "services",
    question: "Do you provide maintenance and on-site support?",
    answer:
      "Yes — scheduled maintenance for large industrial and commercial pumping stations. Our technicians come to your site instead of shipping pumps to a workshop, cutting downtime. Heavily damaged pumps can also be brought in for full workshop repair.",
    relatedIds: ["services-overview", "contact-overview"],
  },
  {
    id: "service-installation",
    category: "services",
    question: "How does pump installation work?",
    answer:
      "Installation is carried out strictly to manufacturer standards by certified technicians. Once testing & commissioning is complete, you receive a full test report and a valid warranty certificate, with scheduling coordinated around your project.",
    relatedIds: ["services-overview", "get-quote"],
  },
  {
    id: "service-control-panels",
    category: "services",
    question: "Do you build control panels?",
    answer:
      "Yes — main power, deep well, water transfer, booster, chilled water and lift station panels, plus UL/FM and Non-UL/FM fire fighting panels, built as DOL, PLC, Star-Delta, VFD/VSD or soft-starter configurations.",
    relatedIds: ["services-overview", "product-brands"],
  },
  {
    id: "contact-overview",
    category: "contact",
    question: "How can I reach TVIS?",
    answer:
      "Call us at +966 568262257 or email sales-services@tvis24.com. We have offices in Riyadh and Buraidah, Saudi Arabia.",
    relatedIds: ["get-quote", "service-maintenance"],
    cta: { label: "Open Contact Page", href: "/contact" },
  },
  {
    id: "get-quote",
    category: "contact",
    question: "How do I request a quote?",
    answer:
      "Use our Contact page to send project details — pumps, services or panels you need — and one of our engineers will follow up. You can also reach us directly by phone or email for urgent requests.",
    relatedIds: ["contact-overview"],
    cta: { label: "Request a Quote", href: "/contact" },
  },
];

export const getFaqEntry = (id: string): FaqEntry | undefined =>
  faqEntries.find((entry) => entry.id === id);
