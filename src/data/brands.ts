// Official partner logos, sourced from the TVIS company overview:
// p.11 "Our Global Manufacturing Partners" (pumps), p.12 electrical portfolio brand
// partners, p.14 "Our Global Partners" (mechanical/piping).
// All trademarks, names and logos are the property of their respective owners.

import grundfos from "@/assets/brands/pumps/grundfos.png";
import xylem from "@/assets/brands/pumps/xylem.png";
import ksb from "@/assets/brands/pumps/ksb.png";
import ebara from "@/assets/brands/pumps/ebara.png";
import wilo from "@/assets/brands/pumps/wilo.png";
import sulzer from "@/assets/brands/pumps/sulzer.png";
import gouldsPumps from "@/assets/brands/pumps/goulds_pumps.png";
import samnan from "@/assets/brands/pumps/samnan.png";
import armstrong from "@/assets/brands/pumps/armstrong.png";
import dpPumps from "@/assets/brands/pumps/dp_pumps.png";
import pedrollo from "@/assets/brands/pumps/pedrollo.png";
import homa from "@/assets/brands/pumps/homa.png";
import generalPumps from "@/assets/brands/pumps/general_pumps.png";
import shakti from "@/assets/brands/pumps/shakti.png";
import fujikaPumps from "@/assets/brands/pumps/fujika_pumps.png";

import schneiderElectric from "@/assets/brands/electrical/schneider_electric.png";
import siemens from "@/assets/brands/electrical/siemens.png";
import abb from "@/assets/brands/electrical/abb.png";
import rockwellAutomation from "@/assets/brands/electrical/rockwell_automation.png";
import danfoss from "@/assets/brands/electrical/danfoss.png";
import eaton from "@/assets/brands/electrical/eaton.png";
import ls from "@/assets/brands/electrical/ls.png";
import ge from "@/assets/brands/electrical/ge.png";

import victaulic from "@/assets/brands/mechanical/victaulic.png";
import jazeeraSteel from "@/assets/brands/mechanical/jazeera_steel.png";
import nkk from "@/assets/brands/mechanical/nkk.png";
import wika from "@/assets/brands/mechanical/wika.png";
import winters from "@/assets/brands/mechanical/winters.png";
import crane from "@/assets/brands/mechanical/crane.png";
import hitachi from "@/assets/brands/mechanical/hitachi.png";
import kitz from "@/assets/brands/mechanical/kitz.png";
import conexBanninger from "@/assets/brands/mechanical/conex_banninger.png";
import mueller from "@/assets/brands/mechanical/mueller.png";
import pegler from "@/assets/brands/mechanical/pegler.png";
import bothWell from "@/assets/brands/mechanical/both_well.png";
import leide from "@/assets/brands/mechanical/leide.png";
import benkan from "@/assets/brands/mechanical/benkan.png";
import ulma from "@/assets/brands/mechanical/ulma.png";
import ombValves from "@/assets/brands/mechanical/omb_valves.png";
import interpipe from "@/assets/brands/mechanical/interpipe.png";
import avk from "@/assets/brands/mechanical/avk.png";
import pkValveEngineering from "@/assets/brands/mechanical/pk_valve_engineering.png";
import claVal from "@/assets/brands/mechanical/cla_val.png";
import outokumpu from "@/assets/brands/mechanical/outokumpu.png";
import shurjoint from "@/assets/brands/mechanical/shurjoint.png";
import watts from "@/assets/brands/mechanical/watts.png";
import kofco from "@/assets/brands/mechanical/kofco.png";
import virajProfiles from "@/assets/brands/mechanical/viraj_profiles.png";

export interface BrandMark {
  name: string;
  category: "pumps" | "electrical" | "mechanical";
  logo: string;
}

export const brands: BrandMark[] = [
  // Pumps — Global Manufacturing Partners
  { name: "Grundfos", category: "pumps", logo: grundfos },
  { name: "Xylem", category: "pumps", logo: xylem },
  { name: "KSB", category: "pumps", logo: ksb },
  { name: "EBARA", category: "pumps", logo: ebara },
  { name: "WILO", category: "pumps", logo: wilo },
  { name: "Sulzer", category: "pumps", logo: sulzer },
  { name: "Goulds Pumps", category: "pumps", logo: gouldsPumps },
  { name: "Samnan", category: "pumps", logo: samnan },
  { name: "Armstrong", category: "pumps", logo: armstrong },
  { name: "dp pumps", category: "pumps", logo: dpPumps },
  { name: "Pedrollo", category: "pumps", logo: pedrollo },
  { name: "Homa", category: "pumps", logo: homa },
  { name: "General Pumps", category: "pumps", logo: generalPumps },
  { name: "Shakti", category: "pumps", logo: shakti },
  { name: "Fujika", category: "pumps", logo: fujikaPumps },

  // Electrical Portfolio brand partners
  { name: "Schneider Electric", category: "electrical", logo: schneiderElectric },
  { name: "Siemens", category: "electrical", logo: siemens },
  { name: "ABB", category: "electrical", logo: abb },
  { name: "Rockwell Automation", category: "electrical", logo: rockwellAutomation },
  { name: "Danfoss", category: "electrical", logo: danfoss },
  { name: "Eaton", category: "electrical", logo: eaton },
  { name: "LS Electric", category: "electrical", logo: ls },
  { name: "GE", category: "electrical", logo: ge },

  // Mechanical / Global Partners — pipes, flanges, fittings, valves, fasteners, gaskets
  { name: "Victaulic", category: "mechanical", logo: victaulic },
  { name: "Jazeera Steel", category: "mechanical", logo: jazeeraSteel },
  { name: "NKK", category: "mechanical", logo: nkk },
  { name: "WIKA", category: "mechanical", logo: wika },
  { name: "Winters", category: "mechanical", logo: winters },
  { name: "Crane", category: "mechanical", logo: crane },
  { name: "Hitachi", category: "mechanical", logo: hitachi },
  { name: "KITZ", category: "mechanical", logo: kitz },
  { name: "Conex Bänninger", category: "mechanical", logo: conexBanninger },
  { name: "Mueller", category: "mechanical", logo: mueller },
  { name: "Pegler", category: "mechanical", logo: pegler },
  { name: "Both Well", category: "mechanical", logo: bothWell },
  { name: "Leide", category: "mechanical", logo: leide },
  { name: "Benkan", category: "mechanical", logo: benkan },
  { name: "ULMA", category: "mechanical", logo: ulma },
  { name: "OMB Valves", category: "mechanical", logo: ombValves },
  { name: "Interpipe", category: "mechanical", logo: interpipe },
  { name: "AVK", category: "mechanical", logo: avk },
  { name: "PK Valve & Engineering", category: "mechanical", logo: pkValveEngineering },
  { name: "CLA-VAL", category: "mechanical", logo: claVal },
  { name: "Outokumpu", category: "mechanical", logo: outokumpu },
  { name: "Shurjoint", category: "mechanical", logo: shurjoint },
  { name: "WATTS", category: "mechanical", logo: watts },
  { name: "Kofco", category: "mechanical", logo: kofco },
  { name: "Viraj Profiles", category: "mechanical", logo: virajProfiles },
];
