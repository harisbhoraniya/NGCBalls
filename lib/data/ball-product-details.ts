// lib/data/ball-product-details.ts
//
// Detailed "spec sheet" content for individual ball product pages.
// Reconciled against NGC_CATALOGUE_-_BALLS.pdf (Ferrous + Non-Ferrous Metals sections).

export interface CompositionRow {
  element: string;
  value?: string;      // single-grade format
  values?: string[];    // multi-grade format — aligned index-for-index with product.gradeColumns
}

export interface MechanicalPropertyRow {
  property: string;
  value: string;
}

export interface HardnessRow {
  key: string;
  value?: string;
  values?: string[]; // multi-grade format, aligned with product.gradeColumns
}
export interface BallProductDetail {
  slug: string;
  name: string;
  category: "ferrous" | "non-ferrous";
  image: string;
  imageAlt: string;
  material: string;
  generalInfo: string;
  internationalEquivalents?: string; // NEW — separate from applications
  applications?: string; // now optional — not every product has a PDF "Applications" line
  chemicalComposition: CompositionRow[];
  mechanicalProperties?: MechanicalPropertyRow[];
  hardness?: HardnessRow[];
  sizeRange?: string; // optional — Brass Balls panel doesn't show this
  standardGrades?: string; // optional — Brass Balls panel doesn't show this
  hasPdf: boolean;
  gradeColumns?: string[]; // e.g. ["420", "420C"] — when present, composition/hardness rows render as a per-grade table

  minimumCaseDepth?: {
    ballDia: string;
    caseDepth: string;
  }[];

  crushingLoads?: {
    ballDia?: string;
    diaInch?: string;
    diaMm?: string;
    loadKg: string;
  }[];
}

export const ballProductDetails: Record<string, BallProductDetail> = {
  "alloy-20-balls": {
    slug: "alloy-20-balls",
    name: "Alloy 20 Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/alloy.jfif",
    imageAlt: "Alloy 20 ball",
    material: "Alloy 20 (Carpenter 20)",
    generalInfo:
      "Alloy 20 is a nickel-iron-chromium austenitic alloy that was developed for maximum resistance to acid attack, specifically sulfuric acid. This super alloy has excellent resistance to general corrosion, pitting, and crevice corrosion in chemicals containing chlorides and sulfuric, phosphoric, and nitric acids. It also contains niobium for stabilization against sensitization and resultant intergranular corrosion. Special Bearings, Pumps and Valves, in all applications where high wear, corrosion and temperature resistance are demanded.",

    chemicalComposition: [
      { element: "Ni", value: "32.00 – 38.00%" },
      { element: "Fe", value: "Balance" },
      { element: "Cr", value: "19.0 – 21.0%" },
      { element: "Cu", value: "3.0 – 4.0%" },
      { element: "Mo", value: "2.0 – 3.0%" },
      { element: "Nb", value: "8 × C – 1.0% Max" },
      { element: "C", value: "0.07% Max" },
      { element: "Mn", value: "2.0% Max" },
      { element: "P", value: "0.045% Max" },
      { element: "S", value: "0.035% Max" },
      { element: "Si", value: "1.0% Max" },
    ],
    mechanicalProperties: [
      { property: "Tensile Strength (Min.)", value: "80 ksi" },
      { property: "Yield Strength (0.2% Offset)", value: "35 ksi" },
      { property: "Elongation (Min.)", value: "30%" },
      { property: "Reduction of Area (Min.)", value: "50%" },
    ],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "25, 40, 60, 100, 200.",
    hasPdf: true,
  },

  "brass-balls": {
    slug: "brass-balls",
    name: "Brass Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Brass_Ball.jpg",
    imageAlt: "Brass Balls",
    material: "Brass (C26000, C27000, C28000)",
    generalInfo:
      "Brass balls show fair mechanical performance, good corrosion resistance, and excellent electrical properties. They generate low friction. Special Valves, Industrial Pumps and Valves, Electronic Devices, Safety Switches, Heating Units, Appliances, and Furniture Rails. They are used in the Automotive, Electronic, and Petrochemical Industry.",

    gradeColumns: ["C26000", "C27000", "C28000"],
    chemicalComposition: [
      { element: "Cu", values: ["68.50 – 71.50%", "63.00 – 68.50%", "59.00 – 63.00%"] },
      { element: "Zn", values: ["Balance", "Balance", "Balance"] },
      { element: "Pb", values: ["0.070% Max", "0.090% Max", "0.090% Max"] },
      { element: "Fe", values: ["0.050% Max", "0.070% Max", "0.070% Max"] },
    ],
    hardness: [
      {
        key: "Hardness",
        value: "75–87 HRB",
      },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "500–600 Mpa" },
      { property: "Density", value: "8.49 g/cm³" },
    ],
    hasPdf: true,
  },

  "copper-balls": {
    slug: "copper-balls",
    name: "Copper Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Copper_Ball.jpg",
    imageAlt: "Copper Balls",
    material: "Pure Copper",
    generalInfo:
      "Nearly pure copper balls offering good mechanical strength, excellent corrosion resistance, and outstanding thermal and electrical conductivity. Small additions of alloying elements such as chromium (Cr), zirconium (Zr), silver (Ag), cadmium (Cd), magnesium (Mg), and tin (Sn) enhance the mechanical properties. Copper balls are used in Galvanic Applications and in the field of Electronic Industry.",

    chemicalComposition: [
      { element: "Cu", value: "99.900% Min" },
      { element: "Other", value: "0.010% Max" },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "220–320 Mpa" },
      { property: "Density", value: "8.91 g/cm³" },
    ],
    hardness: [
      {
        key: "Hardness",
        value: "40-120 HV",
      },
    ],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    hasPdf: true,
  },

  "monel-k500-balls": {
    slug: "monel-k500-balls",
    name: "Monel K 500 Alloy Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Monel_K_500.webp",
    imageAlt: "Monel K 500 Alloy Balls",
    material: "Monel K-500 Alloy",
    generalInfo:
      "Monel K-500 is a nickel-copper precipitation-hardening alloy offering higher hardness and load-bearing capacity than Monel 400 while maintaining the same corrosion resistance. Balls are provided in the passivated condition. Special Pumps and Valves. Used in the Paper, Chemical, Electronic, Pharmaceutical, Naval, Oil and Gas, and Textile industries.",

    chemicalComposition: [
      { element: "C", value: "0.25% Max" },
      { element: "Si", value: "0.50% Max" },
      { element: "Mn", value: "1.50% Max" },
      { element: "S", value: "0.010% Max" },
      { element: "Ni", value: "63.00–70.00%" },
      { element: "Cu", value: "27.00–33.00%" },
      { element: "Ti", value: "0.35–0.85%" },
      { element: "Al", value: "2.30–3.15%" },
      { element: "Fe", value: "2.00% Max" },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "920–1020 Mpa" },
      { property: "Density", value: "8.42 g/cm³" },
    ],
    hardness: [{ key: "Hardness", value: "75-90 HRB" }],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    hasPdf: true,
  },

  // ═══════════════════════ FERROUS ═══════════════════════

  "low-carbon-steel-ball-aisi-1010": {
    slug: "low-carbon-steel-ball-aisi-1010",
    name: "Low Carbon Steel Balls – AISI 1010",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/low_Carbon.jpg",
    imageAlt: "Low carbon steel ball, case hardened",
    material: "Carbon Steel (AISI 1010)",
    generalInfo:
      "Balls of this type are generally used in applications where there are only moderate loads and slow rotating parts, for example Castors, Conveyors and Non-Precision Bearings. The main feature of this type of ball is the carburised case with a soft core, giving resistance to surface wear.",
    internationalEquivalents: "AISI 1010, JIS SWRM 12, EN32 ASTM A/29, Wks 1.0010",
    chemicalComposition: [
      { element: "C", value: "0.10–0.15%" },
      { element: "Mn", value: "0.30–0.60%" },
      { element: "P", value: "0.045% Max" },
      { element: "S", value: "0.045% Max" },
      { element: "Si", value: "0.01–0.4% Max" },
    ],

    mechanicalProperties: [
      // { property: "Hardness", value: "HRc 60 min" },
      { property: "Tensile Strength", value: "53,000 psi" },
      { property: "Yield Strength", value: "44,000 psi" },
      { property: "Density", value: "0.284 lbs/cu.in" },
    ],
    hardness: [
      {
        key: "Hardness",
        value: "60 min HRc",
      },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    minimumCaseDepth: [
      { ballDia: "1.5mm–2mm", caseDepth: "0.4mm" },
      { ballDia: "2.1mm–3mm", caseDepth: "0.5mm" },
      { ballDia: "3.1mm–4.5mm", caseDepth: "0.6mm" },
      { ballDia: "4.6mm–5.5mm", caseDepth: "0.8mm" },
      { ballDia: "5.6mm–6.5mm", caseDepth: "0.9mm" },
      { ballDia: "6.6mm–9.5mm", caseDepth: "1.1mm" },
      { ballDia: "9.5mm–11mm", caseDepth: "1.4mm" },
      { ballDia: "11.1mm–12.5mm", caseDepth: "1.7mm" },
      { ballDia: "12.6mm–14mm", caseDepth: "1.8mm" },
      { ballDia: "14.1mm–19mm", caseDepth: "1.9mm" },
      { ballDia: "19.1mm–38mm", caseDepth: "2.0mm" },
    ],
    hasPdf: true,
  },

  "high-carbon-steel-ball-through-hardened": {
    slug: "high-carbon-steel-ball-through-hardened",
    name: "High Carbon Steel Balls – AISI 1065-86",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.webp",
    imageAlt: "High carbon steel ball",
    material: "AISI 1065-86",
    generalInfo:
      "Balls of this material have the advantage of being through hardened to HRc 60 min and will take higher loads and provide longer life than case hardened carbon balls, for such applications as the Cycle Industry.",
    internationalEquivalents: "AISI 1065-86, EN8-9, C85 Wks 1.1269",
    chemicalComposition: [
      { element: "C", value: "0.85%" },
      { element: "Si", value: "0.35%" },
      { element: "Mn", value: "0.60%" },
      { element: "P", value: "0.022%" },
      { element: "S", value: "0.022%" },
    ],

    hardness: [{ key: "Hardness", value: "60 min HRc" }],
    mechanicalProperties: [
      // { property: "Hardness", value: "HRc 60 min" },
      { property: "Tensile Strength", value: "106,400 psi" },
      { property: "Density", value: "0.284 lbs/cu.in" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    crushingLoads: [
      { ballDia: '1/8"', loadKg: "375" },
      { ballDia: '5/32"', loadKg: "800" },
      { ballDia: '3/16"', loadKg: "1100" },
      { ballDia: '1/4"', loadKg: "1800" },
      { ballDia: '9/32"', loadKg: "2200" },
      { ballDia: '5/16"', loadKg: "2700" },
      { ballDia: '11/32"', loadKg: "3200" },
      { ballDia: '3/8"', loadKg: "3900" },
    ],
    hasPdf: true,
  },

  "high-carbon-chrome-alloy-ball-aisi-52100": {
    slug: "high-carbon-chrome-alloy-ball-aisi-52100",
    name: "High Carbon High Chrome Steel Balls – AISI 52100",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon.jpg",
    imageAlt: "High carbon chrome alloy ball AISI 52100",
    material: "Chrome Steel (AISI 52100 / 100Cr6)",
    generalInfo:
      "This is an oil hardened steel, which is universally used by the ball and roller bearing industry. The steel has high hardness and good resistance to deformation and excellent wear resistance. Usually vacuum degassed and uniformly through hardened in atmospherically controlled electric furnaces.",
    internationalEquivalents: "AISI 52100, SUJ2 ASTM 100CR6, W 1.3505",
    chemicalComposition: [
      { element: "C", value: "0.95–1.1%" },
      { element: "Cr", value: "1.30–1.60%" },
      { element: "Mn", value: "0.25–0.45%" },
      { element: "Si", value: "0.15–0.30%" },
      { element: "P", value: "0.025% Max" },
      { element: "S", value: "0.025% Max" },
    ],
    hardness: [
      {
        key: "Hardness",
        value: "60–67 HRc ",
      },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "325,000 psi" },
      { property: "Yield Strength", value: "295,000 psi" },
      { property: "Density", value: "0.283 lbs/cu.in" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "5, 10, 16, 24, 48, 60, 100, 500, 1000",
    crushingLoads: [
      { diaInch: "1/8", diaMm: "3.175", loadKg: "666" },
      { diaInch: "-", diaMm: "3.500", loadKg: "792" },
      { diaInch: "5/32", diaMm: "3.968", loadKg: "990" },
      { diaInch: "-", diaMm: "4.000", loadKg: "1000" },
      { diaInch: "-", diaMm: "4.500", loadKg: "1240" },
      { diaInch: "3/16", diaMm: "4.762", loadKg: "1370" },
      { diaInch: "-", diaMm: "5.000", loadKg: "1490" },
      { diaInch: "7/32", diaMm: "5.556", loadKg: "1800" },
      { diaInch: "15/64", diaMm: "5.593", loadKg: "2020" },
      { diaInch: "-", diaMm: "6.000", loadKg: "2060" },
      { diaInch: "1/4", diaMm: "6.350", loadKg: "2280" },
      { diaInch: "17/64", diaMm: "6.746", loadKg: "2535" },
      { diaInch: "9/32", diaMm: "7.144", loadKg: "2810" },
      { diaInch: "5/16", diaMm: "7.938", loadKg: "3380" },
      { diaInch: "11/32", diaMm: "8.731", loadKg: "4000" },
      { diaInch: "3/8", diaMm: "9.525", loadKg: "4670" },
      { diaInch: "-", diaMm: "10.000", loadKg: "5090" },
      { diaInch: "13/32", diaMm: "10.318", loadKg: "5380" },
      { diaInch: "7/16", diaMm: "11.112", loadKg: "6140" },
      { diaInch: "15/32", diaMm: "11.906", loadKg: "6940" },
      { diaInch: "31/64", diaMm: "12.303", loadKg: "7350" },
      { diaInch: "1/2", diaMm: "12.700", loadKg: "7780" },
      { diaInch: "17/32", diaMm: "13.494", loadKg: "8660" },
      { diaInch: "9/16", diaMm: "14.288", loadKg: "9590" },
      { diaInch: "-", diaMm: "15.000", loadKg: "10500" },
      { diaInch: "19/32", diaMm: "15.081", loadKg: "10600" },
      { diaInch: "5/8", diaMm: "15.875", loadKg: "11600" },
      { diaInch: "21/32", diaMm: "16.668", loadKg: "12600" },
      { diaInch: "11/16", diaMm: "17.462", loadKg: "13700" },
      { diaInch: "23/32", diaMm: "18.256", loadKg: "14800" },
      { diaInch: "3/4", diaMm: "19.050", loadKg: "16000" },
      { diaInch: "25/32", diaMm: "19.843", loadKg: "17200" },
      { diaInch: "-", diaMm: "20.000", loadKg: "17400" },
      { diaInch: "13/16", diaMm: "20.637", loadKg: "18400" },
      { diaInch: "27/32", diaMm: "21.431", loadKg: "19700" },
      { diaInch: "7/8", diaMm: "22.225", loadKg: "21000" },
      { diaInch: "29/32", diaMm: "23.018", loadKg: "22300" },
      { diaInch: "15/16", diaMm: "23.812", loadKg: "23700" },
      { diaInch: "31/32", diaMm: "24.606", loadKg: "25100" },
      { diaInch: "-", diaMm: "25.000", loadKg: "25900" },
      { diaInch: "1", diaMm: "25.400", loadKg: "26600" },
      { diaInch: "1.1/16", diaMm: "26.987", loadKg: "29600" },
      { diaInch: "1.1/8", diaMm: "28.575", loadKg: "32800" },
      { diaInch: "1.3/16", diaMm: "30.162", loadKg: "36100" },
      { diaInch: "1.1/4", diaMm: "31.750", loadKg: "39500" },
      { diaInch: "1.5/16", diaMm: "33.337", loadKg: "43100" },
      { diaInch: "1.3/8", diaMm: "34.925", loadKg: "46800" },
      { diaInch: "1.7/16", diaMm: "36.512", loadKg: "50600" },
      { diaInch: "1.1/2", diaMm: "38.100", loadKg: "54600" },
      { diaInch: "1.5/8", diaMm: "41.275", loadKg: "62900" },
      { diaInch: "1.3/4", diaMm: "44.450", loadKg: "71700" },
      { diaInch: "1.7/8", diaMm: "47.625", loadKg: "81100" },
      { diaInch: "2", diaMm: "50.800", loadKg: "90900" },
      { diaInch: "2.3/16", diaMm: "55.562", loadKg: "106500" },
      { diaInch: "2.1/4", diaMm: "57.150", loadKg: "112000" },
      { diaInch: "2.5/16", diaMm: "58.735", loadKg: "116500" },
      { diaInch: "2.1/2", diaMm: "63.500", loadKg: "135000" },
      { diaInch: "2.3/4", diaMm: "69.850", loadKg: "159800" },
      { diaInch: "3", diaMm: "76.200", loadKg: "186500" },
      { diaInch: "4", diaMm: "101.600", loadKg: "309500" },
    ],
    hasPdf: false,
  },



  "stainless-steel-ball-440c": {
    slug: "stainless-steel-ball-440c",
    name: "Stainless Steel Balls – AISI 440C",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.jpg",
    imageAlt: "Stainless steel 440C ball",
    material: "Stainless Steel (AISI 440C, Martensitic)",
    generalInfo:
      "These balls give maximum hardness with good corrosion resistance to fresh water, steam, crude oil, gasoline, alcohol, food environment, blood and perspiration. In addition, this material is ferro-magnetic and makes a fair permanent magnet. Balls are deep freeze stabilised after heat treatment.",
    internationalEquivalents: "AISI 440C, DINX105 CR Mo17, SUS 440C, W 1.4125",
    chemicalComposition: [
      { element: "C", value: "0.95–1.20%" },
      { element: "Cr", value: "16–18%" },
      { element: "Si", value: "1.00% Max" },
      { element: "Mn", value: "1.00% Max" },
      { element: "P", value: "0.040% Max" },
      { element: "S", value: "0.030% Max" },
      { element: "Mo", value: "0.40–0.80% Max" },
    ],
    hardness: [
      { key: "Hardness", value: "58–63 HRc" },
    ],
    mechanicalProperties: [
      // { property: "Hardness", value: "HRc 58–63" },
      { property: "Tensile Strength", value: "285,000 psi" },
      { property: "Yield Strength", value: "275,000 psi" },
      { property: "Density", value: "0.277 lbs/cu.in" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "24, 48, 100, 200, 500, 1000",
    hasPdf: true,
  },

  "stainless-steel-ball-420": {
    slug: "stainless-steel-ball-420",
    name: "Stainless Steel Balls – AISI 420, 420C",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.webp",
    imageAlt: "Stainless steel 420 ball",
    material: "Stainless Steel (AISI 420 / 420C, Martensitic)",
    generalInfo:
      "Balls of this material have a lower chrome content than 440C, and are used in applications where the more rigid corrosion resistance requirements can be relaxed. They have fair resistance to fresh water, steam, oil, gasoline, blood, perspiration, alcohol and food environment. However, they will not pass a 40 hour salt spray test.",
    internationalEquivalents: "AISI 420, SUS 420, X47Cr13, EN56D, W 1.3541",
    gradeColumns: ["420", "420C"],
    chemicalComposition: [
      { element: "C", values: ["0.15% Min", "0.40 – 0.50%"] },
      { element: "Cr", values: ["12 – 14%", "12.5 – 14.5%"] },
      { element: "Si", values: ["1.0% Max", "1.0% Max"] },
      { element: "Mn", values: ["1.0% Max", "1.0% Max"] },
      { element: "P", values: ["0.04% Max", "0.04% Max"] },
      { element: "S", values: ["0.03% Max", "0.03% Max"] },
      { element: "Ni", values: ["-", "1.0% Max"] },
    ],
    hardness: [
      { key: "Hardness", values: ["48–53 HRc", "53–58 HRc"] },
    ],
    mechanicalProperties: [
      { property: "Tensile Strength", value: "275,000 psi" },
      { property: "Specific Weight", value: "0.280 lbs/cu.in" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "10, 24, 48, 100, 200, 500, 1000",
    hasPdf: true,
  },

  "stainless-steel-ball-304": {
    slug: "stainless-steel-ball-304",
    name: "Stainless Steel Balls – AISI 302, 304, 304L",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.webp",
    imageAlt: "Stainless steel 304 ball",
    material: "Stainless Steel (AISI 302 / 304 / 304L, Austenitic)",
    generalInfo:
      "AISI 302 and 304 balls are for applications where material toughness and resistance to corrosion are more important than hardness. They have good corrosion resistance to the food environment, oxidising solutions and most organic chemicals. Corrosion resistance is higher after annealing and passivation. Not resistant to sulphuric acids. Valves, Aerosol and Finger Pumps.",
    internationalEquivalents: "DIN X5CrNi18.09, JIS SUS 304, W 1.4301",

    gradeColumns: ["302", "304", "304L"],
    chemicalComposition: [
      { element: "C", values: ["0.12% Max", "0.08% Max", "0.03% Max"] },
      { element: "Cr", values: ["17 – 19%", "18 – 20%", "18 – 20%"] },
      { element: "Ni", values: ["8 – 11%", "8 – 10.5%", "8 – 10.5%"] },
      { element: "Si", values: ["1.0% Max", "1.0% Max", "1.0% Max"] },
      { element: "Mo", values: ["1.0% Max", "-", "-"] },
      { element: "Mn", values: ["2.0% Max", "2.0% Max", "2.0% Max"] },
      { element: "P", values: ["0.045% Max", "0.045% Max", "0.045% Max"] },
      { element: "S", values: ["0.03% Max", "0.03% Max", "0.03% Max"] },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "100,000–180,000 psi" },
      { property: "Yield Strength", value: "50,000–150,000 psi" },
      { property: "Density", value: "0.286 lbs/cu.in" },
    ],
    hardness: [
      { key: "Hardness", value: "Soft (Annealed)" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "48, 60, 100, 200, 500,  1000",
    hasPdf: true,
  },




  "stainless-steel-ball-316": {
    slug: "stainless-steel-ball-316",
    name: "Stainless Steel Balls – AISI 316, 316L",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.webp",
    imageAlt: "Stainless steel 316 ball",
    material: "Stainless Steel (AISI 316 / 316L, Austenitic)",
    generalInfo:
      "Similar to AISI 302/304, but with the addition of molybdenum which improves corrosion resistance, particularly to sulphuric acid compounds. This is the only austenitic steel for ball manufacture and can be Magnetic and Non-Magnetic. Used extensively in applications where contact is made with inks, photographic chemicals, bleaches, dyes and nitric acids.",
    internationalEquivalents: "DIN X5 Cr Ni Mo 17-12-2, W 1.4401, JIS SUS 316",
    // applications:
    //   "Used extensively in applications where contact is made with inks, photographic chemicals, bleaches, dyes and nitric acids.",
    gradeColumns: ["316", "316L"],
    chemicalComposition: [
      { element: "C", values: ["0.08% Max", "0.08% Max"] },
      { element: "Cr", values: ["16 – 18%", "16 – 18%"] },
      { element: "Ni", values: ["10 – 14%", "10 – 14%"] },
      { element: "Si", values: ["1.0% Max", "1.0% Max"] },
      { element: "Mo", values: ["2 – 3%", "2 – 3%"] },
      { element: "Mn", values: ["2.0% Max", "2.0% Max"] },
      { element: "P", values: ["0.045% Max", "0.045% Max"] },
      { element: "S", values: ["0.03% Max", "0.03% Max"] },
    ],
    mechanicalProperties: [

      { property: "Tensile Strength", value: "180,000 psi" },
      { property: "Yield Strength", value: "150,000 psi" },
      { property: "Density", value: "0.290 lbs/cu.in" },
    ],
    hardness: [{ key: "Hardness", value: "Soft (Annealed)" }],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "48, 60, 100, 200, 500, 1000",
    hasPdf: true,
  },

  "aisi-s2-tool-steel-ball": {
    slug: "aisi-s2-tool-steel-ball",
    name: "Tool Steel Balls – AISI S2",
    category: "ferrous",
    image: "/images/Ball/Metallic_Ball/AISI_S2_Tool_Steel_Balls.webp",
    imageAlt: "AISI S-2 Tool Steel Balls",
    material: "Tool Steel (AISI S-2)",

    generalInfo:
      "S-2 Tool steel balls are design to achieve extreme ruggedness. The ball surface has smooth ground and polished finish. These balls provide the toughness and strength necessary for severe shock loads. S-2 Tool steel balls are hardened throughout and have unusually good wear characteristics. S-2 Tool Steel Balls find most frequent use in oil field equipment and offshore drilling operations. They provide goo service in withstanding the abrasion of pulverized rock and mud slurries. Oil field equipment, Offshore drilling operations, Severe shock load applications, Rock drilling equipment, Heavy-duty industrial applications.",

    internationalEquivalents:
      "ASTM A681, UNS T41902",

    chemicalComposition: [
      { element: "C", value: "0.47-0.52%" },
      { element: "Si", value: "0.90-1.10%" },
      { element: "Mn", value: "0.40-0.50%" },
      { element: "P", value: "0.025% Max" },
      { element: "S", value: "0.25% Max" },
      { element: "Cu", value: "0.20% Max" },
      { element: "Cr", value: "0.045% Max" },
      { element: "Mo", value: "0.035% Max" },
      { element: "Ni", value: "0.50% Max" },
      { element: "V", value: "0.025% Max" },
    ],

    hardness: [
      {
        key: "Hardness",
        value: "55–58 HRc",
      },
    ],



    hasPdf: true,
  },
  // ═══════════════════════ NON-FERROUS ═══════════════════════

  "tungsten-carbide-cobalt-binder-balls": {
    slug: "tungsten-carbide-cobalt-binder-balls",
    name: "Tungsten Carbide Cobalt Binder Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Tungsten.jpg",
    imageAlt: "Tungsten carbide cobalt binder ball",
    material: "Tungsten Carbide + Cobalt Binder (WC-Co)",
    generalInfo:
      "Tungsten Carbide materials have a unique combination of properties: high compressive strength, hardness and resistance to wear, as well as an ability to withstand shock and impact. Valves, Flowmeters, Ball Screws and Linear Bearings. Balls from this material are also used for Ballizing, Gauging and Ball Pens.",
    // applications:
    //   "Valves, Flowmeters, Ball Screws and Linear Bearings. Balls from this material are also used for Ballizing, Gauging and Ball Pens.",
    chemicalComposition: [
      { element: "Tungsten Carbide", value: "93–95%" },
      { element: "Cobalt", value: "5–7%" },
    ],
    mechanicalProperties: [

      { property: "Density", value: "14.97–15.0% g/cm³" },
      { property: "Thermal Conductivity", value: "100 W/m/°C" },
      { property: "Electrical Resistivity", value: "20 µW/cm" },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "10, 24,  48, 60, 100, 200, 500, 1000",
    hasPdf: true,
    hardness: [
      {
        key: "Hra", value: " 90.5–91.5"
      },
    ],
  },

  "monel-k400-balls": {
    slug: "monel-k400-balls",
    name: "Monel K 400 Alloy Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Monel_K_400.avif",
    imageAlt: "Monel K400 ball",
    material: "Monel 400 (UNS N04400)",
    generalInfo:
      "Ni-Cu based alloys with good mechanical characteristics and excellent corrosion resistance. Balls are provided in the passivated condition. Special Pumps and Valves, Flue Gas Desulfurization, Heat Exchangers. They are used in the Paper, Chemical, Pharmaceutical, Naval, Petrol and Textile Industry.",

    chemicalComposition: [
      { element: "C", value: "0.30% Max" },
      { element: "Si", value: "0.50% Max" },
      { element: "Mn", value: "2.00% Max" },
      { element: "S", value: "0.024% Max" },
      { element: "Ni", value: "63.00–70.00%" },
      { element: "Cu", value: "28.00–34.00%" },
      { element: "Co", value: "1.00% Max" },
      { element: "Fe", value: "2.50% Max" },
    ],
    hardness: [{ key: "Hardness", value: "17-22 HRc" }],
    mechanicalProperties: [
      // { property: "Hardness", value: "17–22 HRc" },
      { property: "Tensile Strength", value: "670–770 Mpa" },
      { property: "Density", value: "8.82 g/cm³" },
    ],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "25, 100, 200",
    hasPdf: true,
  },

  "inconel-625-balls": {
    slug: "inconel-625-balls",
    name: "Inconel 625 Alloy Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Inconel_625.png",
    imageAlt: "Inconel 625 ball",
    material: "Inconel 625 (UNS N06625)",
    generalInfo:
      "Ni-based alloy with high corrosion resistance properties, even in very aggressive environments. Balls are provided in the passivated condition. Sea Water Applications, Compressors, Heat Exchangers, Turbines, Special Pumps and Valves. They are used in Aerospace, Chemical, Naval, Military, Nuclear, Oil and Gas Industry, High Temperature Applications.",

    chemicalComposition: [
      { element: "C", value: "0.100% Max" },
      { element: "Si", value: "0.50% Max" },
      { element: "Mn", value: "0.50% Max" },
      { element: "P", value: "0.015% Max" },
      { element: "S", value: "0.015% Max" },
      { element: "Cr", value: "20.00–23.00%" },
      { element: "Ni", value: "58.00% Min" },
      { element: "Cu", value: "0.50% Max" },
      { element: "Mo", value: "8.00–10.00%" },
      { element: "Nb", value: "3.15–4.15%" },
      { element: "Co", value: "1.00% Max" },
      { element: "Al", value: "0.40% Max" },
      { element: "Ti", value: "0.40% Max" },
      { element: "Fe", value: "5.00% Max" },
    ],
    hardness: [{ key: "Hardness", value: "30-35 HRc" }],
    mechanicalProperties: [
      // { property: "Hardness", value: "HRc 30–35" },
      { property: "Tensile Strength", value: "1000–1100 Mpa" },
      { property: "Density", value: "8.42 g/cm³" },
    ],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    hasPdf: true,
  },

  "inconel-825-balls": {
    slug: "inconel-825-balls",
    name: "Inconel 825 Alloy Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/innocel_ball.png",
    imageAlt: "Inconel 825 ball",
    material: "Inconel 825 (UNS N08825)",
    generalInfo:
      "Austenitic NiCrFe alloy balls, they provide excellent corrosion resistance in aggressive environments, both general and localized. Special Valves for the Chemical Industry.",

    chemicalComposition: [
      { element: "C", value: "0.050% Max" },
      { element: "Si", value: "0.50% Max" },
      { element: "Mn", value: "1.00% Max" },
      { element: "P", value: "0.020% Max" },
      { element: "S", value: "0.030% Max" },
      { element: "Cr", value: "19.50–23.50%" },
      { element: "Ni", value: "38.00–46.00%" },
      { element: "Mo", value: "2.50–3.50%" },
      { element: "Cu", value: "1.50–3.00%" },
      { element: "Ti", value: "0.60–1.20%" },
      { element: "Al", value: "0.20% Max" },
      { element: "Fe", value: "22.00% Min" },
    ],
    hardness: [{ key: "Hardness", value: "25-30 HRc" }],

    mechanicalProperties: [
      // { property: "Hardness", value: "HRc 25–30" },
      { property: "Tensile Strength", value: "850–950  Mpa" },
      { property: "Density", value: "8.14 g/cm³" },
    ],
    sizeRange: '0.396mm (1/64") to 101.6mm (4")',
    standardGrades: "100, 200, 500, 1000",
    hasPdf: true,
  },

  "hastelloy-c276-balls": {
    slug: "hastelloy-c276-balls",
    name: "Hastelloy C276 Alloy Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Hastelloy_Balls.jpg",
    imageAlt: "Hastelloy C276 ball",
    material: "Hastelloy C276 (UNS N10276)",
    generalInfo:
      "Ni-based alloy balls, they show very good crevice, pitting and stress corrosion resistance, both on oxidating and reducing environments. Good wear resistance. Balls are provided in the passivated condition. Special pumps and valves; they are applied in the Foodstuff, Paper, Chemical, Pharmaceutical, Naval, Petrol and Textile industries. Devices for Waste Treatment, Pollution Check, Flue Gas Desulfurization and Turbines.",

    chemicalComposition: [
      { element: "Cr", value: "14.5–16.5%" },
      { element: "W", value: "3–4.5%" },
      { element: "Mo", value: "15–17%" },
      { element: "Fe", value: "4–7%" },
      { element: "Co", value: "2.5% Max" },
      { element: "Ni", value: "Balance" },
    ],
    hardness: [{ key: "Hardness", value: "32-48 HRc" }],

    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "100, 200",
    hasPdf: true,
  },

  "titanium-alloy-balls": {
    slug: "titanium-alloy-balls",
    name: "Titanium Alloys Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/High_Carbon_Steel.webp",
    imageAlt: "Titanium alloy ball",
    material: "Titanium",

    generalInfo:
      "Titanium balls provide low weight, good mechanical features, thermal properties and corrosion resistance. They are used even in aesthetic applications. Grade 1 and Grade 2 belong to the Commercially Pure Titanium Alloys family. Titanium balls are used in Aviation, Aerospace, Military, Chemical, Petrochemical Industry, Medical Field, Jewelry, Calibration of Measurement Instruments and Piercing purposes.",

    chemicalComposition: [
      { element: "C", value: "0.080% Max" },
      { element: "N", value: "0.030% Max" },
      { element: "Ti", value: "Balance" },
      { element: "Fe", value: "0.20% Max" },
      { element: "O", value: "0.18% Max" },
      { element: "H", value: "0.015% Max" },
    ],



    hardness: [
      {
        key: "Hardness",
        value: "28–42 HRc",
      },
    ],

    sizeRange: '0.396mm (1/64") to 101.6mm(4")',
    standardGrades: "100, 200",
    hasPdf: true,
  },



  "tungsten-carbide-nickel-binder-balls": {
    slug: "tungsten-carbide-nickel-binder-balls",
    name: "Tungsten Carbide Nickel Binder Balls",
    category: "non-ferrous",
    image: "/images/Ball/Metallic_Ball/Tungsten_Nickel.avif",
    imageAlt: "Tungsten carbide nickel binder ball",
    material: "Tungsten Carbide + Nickel Binder (WC-Ni, IS-K16C)",
    generalInfo:
      "Conventional Tungsten Carbides (with Cobalt binder) have limited corrosion resistance, making them unsuitable for applications where wear parts operate under both severe abrasive and corrosive conditions. Straight Tungsten Carbide (Cobalt binder) is generally resistant to corrosion down to pH 7. By comparison, tests show that this Tungsten Carbide (Nickel binder) material is resistant to corrosion down to pH 2 or 3.",
    chemicalComposition: [
      { element: "Tungsten Carbide", value: "90–92%" },
      { element: "Nickel Base Binder", value: "8–10%" },
    ],

    hardness: [
      {
        key: "Hardness", value: "88–89 Hra"
      },
    ],
    sizeRange: '0.396mm (1/64") - 101.6mm (4")',
    standardGrades: "10, 24,  48, 60, 100, 200, 500, 1000",
    hasPdf: true,
  },
};

export function getBallProductDetail(slug: string): BallProductDetail | undefined {
  return ballProductDetails[slug];
}