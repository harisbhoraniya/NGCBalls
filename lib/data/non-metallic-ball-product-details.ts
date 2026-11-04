// lib/data/non-metallic-ball-product-details.ts
// Mirrors the shape of lib/data/ball-product-details.ts (metallic balls)
// so the existing detail-page component can be reused with minimal changes.

export interface SpecRow {
  element: string;
  value?: string;
  values?: string[]; // used when gradeColumns is set
}

export interface PropertyRow {
  property: string;
  value: string;
}

export interface HardnessRow {
  key: string;
  value?: string;
  values?: string[]; // used when gradeColumns is set
}

export interface NonMetallicBallProductDetail {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  material: string; // shown as the small eyebrow label + used for card subtitle
  category: "ceramic" | "glass" | "plastic";
  generalInfo: string;
  sizeRange?: string;
  standardGrades?: string;
  chemicalResistance?: string; // ceramics only
  internationalEquivalents?: string;
  applications?: string;
  chemicalComposition: SpecRow[];
  mechanicalProperties: PropertyRow[];
  hardness?: HardnessRow[];
  gradeColumns?: string[]; // omit -> single-value SpecTable, present -> multi-column GradeTable
  hasPdf: boolean;
}

// ─────────────────────────────────────────────
// CERAMIC BALLS
// Source: "Ceramic Balls – Properties of Materials" reference sheet
// (Sapphire/Ruby, Alumina Oxide, Silicon Nitride, Zirconium Oxide)
// NOTE: a few figures were transcribed from a low-resolution scan —
// double check against your master spec sheet before publishing.
// ─────────────────────────────────────────────
const sapphireRuby: NonMetallicBallProductDetail = {
  id: "ball-c-001",
  name: "Sapphire & Ruby Balls",
  slug: "sapphire-ruby-balls",
  image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
  imageAlt: "Sapphire and ruby ceramic balls",
  material: "Sapphire / Ruby (Single Crystal Al₂O₃)",
  category: "ceramic",
  generalInfo:
    "A single-crystal Alumina Oxide (Al₂O₃) ball with the highest purity and hardness in the ceramic ball range. Ruby and sapphire balls are used where extreme wear resistance, chemical inertness, and dimensional stability are required, even at high temperatures.",
  sizeRange: "0.5 mm – 50 mm",
  standardGrades: "99.98% Purity (Grade 99.98% Al₂O₃)",
  chemicalResistance: "Inert to acids, even at very high temperatures.",
  applications:
    "Precision bearings, flow control valves, instrumentation, optical components, high-temperature pumps, and jewel bearings for watches and gauges.",
  chemicalComposition: [
    { element: "Structure", value: "Single crystal" },
    { element: "Chemical Formula", value: "Al₂O₃" },
    { element: "Purity", value: "99.98%" },
  ],
  mechanicalProperties: [
    { property: "Density", value: "3.99 g/cm³" },
    { property: "Melting Point", value: "2040 °C" },
    { property: "Softening Point", value: "3600 °C" },
    { property: "Vickers Hardness (Hv)", value: "17,000 N/mm²" },
    { property: "Modulus of Elasticity", value: "4.2 × 10⁵ N/mm²" },
    { property: "Bending Modulus", value: "690 N/mm²" },
    { property: "Compressive Strength (25 °C)", value: "2,000 N/mm²" },
  ],
  hasPdf: true,
};

const aluminaOxide: NonMetallicBallProductDetail = {
  id: "ball-c-002",
  name: "Alumina Oxide Balls",
  slug: "alumina-oxide-balls",
  image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
  imageAlt: "Alumina oxide ceramic balls",
  material: "Alumina Oxide (Al₂O₃ 99.9%)",
  category: "ceramic",
  generalInfo:
    "A multi-crystal Alumina Oxide ball offering excellent wear resistance and corrosion resistance at a lower cost than single-crystal sapphire. Suitable for use in most corrosive gases and acidic or neutral solutions.",
  sizeRange: "0.5 mm – 50 mm",
  standardGrades: "99.9% Purity (Al₂O₃)",
  chemicalResistance:
    "Inert to acids, but not recommended for use in environments with hydrofluoric acid or strong alkaline solutions.",
  applications:
    "Ball bearings, valve seats, chemical pumps, grinding media, and precision instrumentation.",
  chemicalComposition: [
    { element: "Structure", value: "Multi-crystal" },
    { element: "Chemical Formula", value: "Al₂O₃" },
    { element: "Purity", value: "99.8%" },
  ],
  mechanicalProperties: [
    { property: "Density", value: "3.90 g/cm³" },
    { property: "Melting Point", value: "2050 °C" },
    { property: "Softening Point", value: "1725 °C" },
    { property: "Vickers Hardness (Hv)", value: "18,500 N/mm²" },
    { property: "Modulus of Elasticity", value: "3.5 × 10⁵ N/mm²" },
    { property: "Bending Modulus", value: "670 N/mm²" },
    { property: "Compressive Strength (25 °C)", value: "2,500 N/mm²" },
  ],
  hasPdf: true,
};

const siliconNitride: NonMetallicBallProductDetail = {
  id: "ball-c-003",
  name: "Silicon Nitride Balls",
  slug: "silicon-nitride-balls",
  image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
  imageAlt: "Silicon nitride ceramic balls",
  material: "Silicon Nitride (Si₃N₄)",
  category: "ceramic",
  generalInfo:
    "The most widely used ceramic ball material for bearing applications, thanks to its very high resistance to wear and abrasion in general. Silicon Nitride combines a specially designed structure for demanding applications, is non-magnetic and electrically insulating, and offers heat resistance to +1400 °C.",
  sizeRange: "0.5 mm – 50 mm",
  standardGrades: "95% Purity (Si₃N₄)",
  chemicalResistance: "Inert to acids.",
  applications:
    "High-speed precision bearings, wind turbine bearings, machine tool spindles, electrically insulating bearings, and vacuum/high-temperature environments.",
  chemicalComposition: [
    { element: "Structure", value: "Multi-crystal" },
    { element: "Chemical Formula", value: "Si₃N₄" },
    { element: "Purity", value: "95.00%" },
  ],
  mechanicalProperties: [
    { property: "Density", value: "3.20 g/cm³" },
    { property: "Melting Point", value: "1900 °C" },
    { property: "Softening Point", value: "1400 °C" },
    { property: "Vickers Hardness (Hv)", value: "24,000 N/mm²" },
    { property: "Modulus of Elasticity", value: "3.15 × 10⁵ N/mm²" },
    { property: "Bending Modulus", value: "700 N/mm²" },
    { property: "Compressive Strength (25 °C)", value: "2,900 N/mm²" },
  ],
  hasPdf: true,
};

const zirconiumOxide: NonMetallicBallProductDetail = {
  id: "ball-c-004",
  name: "Zirconium Oxide Balls",
  slug: "zirconium-oxide-balls",
  image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
  imageAlt: "Zirconium oxide (zirconia) ceramic balls",
  material: "Zirconium Oxide (ZrO₂)",
  category: "ceramic",
  generalInfo:
    "Compared to other ceramics, Zirconium Oxide (Zirconia) has a higher degree of compactness and considerable flexural strength, which makes it very reliable. It also has a low modulus of elasticity — close to that of steel — together with an extraordinarily low thermal conductivity.",
  sizeRange: "0.5 mm – 50 mm",
  standardGrades: "97% Purity (ZrO₂)",
  chemicalResistance:
    "Inert, except to hydrofluoric acid and strong concentrations of sulphuric acid.",
  applications:
    "Ball valves, pumps handling abrasive slurries, grinding media, and applications requiring low thermal conductivity or steel-like elasticity in a non-metallic ball.",
  chemicalComposition: [
    { element: "Structure", value: "Multi-crystal" },
    { element: "Chemical Formula", value: "ZrO₂" },
    { element: "Purity", value: "97.00%" },
  ],
  mechanicalProperties: [
    { property: "Density", value: "5.58 g/cm³" },
    { property: "Melting Point", value: "2400 °C" },
    { property: "Softening Point", value: "1400 °C" },
    { property: "Vickers Hardness (Hv)", value: "12,000 N/mm²" },
    { property: "Modulus of Elasticity", value: "2.0 × 10⁵ N/mm²" },
    { property: "Bending Modulus", value: "900 N/mm²" },
    { property: "Compressive Strength (25 °C)", value: "2,100 N/mm²" },
  ],
  hasPdf: true,
};

// ─────────────────────────────────────────────
// GLASS BALLS
// Source: "Glass Balls – Chemical Compositions" reference sheet
// (Soda-Lime Glass, Borosilicate Glass, Black Glass)
// ─────────────────────────────────────────────
const sodaLimeGlass: NonMetallicBallProductDetail = {
  id: "ball-g-001",
  name: "Soda-Lime Glass Balls",
  slug: "soda-lime-glass-balls",
  image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
  imageAlt: "Soda-lime glass balls",
  material: "Soda-Lime Glass",
  category: "glass",
  generalInfo:
    "Material resistant to high alkaline solutions. Soda-Lime glass balls are mainly used for applications not subjected to strong mechanical or thermal shocks, such as plastic bearings, flow meters, and control equipment, instruments and ink cartridges.",
  sizeRange: "1 mm – 25 mm",
  standardGrades: "Soda-Lime Glass",
  applications:
    "Plastic bearings, flow meters, control equipment, instruments, ink cartridges, and decorative items.",
  chemicalComposition: [
    { element: "SiO₂", value: "67%" },
    { element: "Na₂O", value: "16%" },
    { element: "CaO", value: "7%" },
    { element: "Al₂O₃", value: "5%" },
    { element: "MgO", value: "3%" },
  ],
  mechanicalProperties: [
    { property: "Specific Weight", value: "2.50" },
    { property: "Hardness (Knoop, KHN)", value: "465" },
    { property: "Melting Point", value: "695 °C" },
    { property: "Max. Temperature (Normal)", value: "130 °C" },
    { property: "Max. Temperature (Extreme)", value: "460 °C" },
    { property: "Resistance to Thermal Stress", value: "17 °C" },
  ],
  hasPdf: true,
};

const borosilicateGlass: NonMetallicBallProductDetail = {
  id: "ball-g-002",
  name: "Borosilicate Glass Balls",
  slug: "borosilicate-glass-balls",
  image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
  imageAlt: "Borosilicate glass balls",
  material: "Borosilicate Glass",
  category: "glass",
  generalInfo:
    "Due to its excellent chemical inertia to most acids, this kind of glass is particularly suitable for metering pumps and valves against strong oxidizing concentrations. Offers the best thermal-shock resistance of the three glass types.",
  sizeRange: "1 mm – 25 mm",
  standardGrades: "Borosilicate Glass",
  applications:
    "Metering pumps, check valves, chemical reactors, laboratory equipment, and pharmaceutical equipment.",
  chemicalComposition: [
    { element: "SiO₂", value: "81%" },
    { element: "Na₂O", value: "4%" },
    { element: "CaO", value: "—" },
    { element: "Al₂O₃", value: "2%" },
    { element: "B₂O₃ / MgO", value: "13%" },
  ],
  mechanicalProperties: [
    { property: "Specific Weight", value: "2.23" },
    { property: "Hardness (Knoop, KHN)", value: "418" },
    { property: "Melting Point", value: "820 °C" },
    { property: "Max. Temperature (Normal)", value: "290 °C" },
    { property: "Max. Temperature (Extreme)", value: "490 °C" },
    { property: "Resistance to Thermal Stress", value: "53 °C" },
  ],
  hasPdf: true,
};

const blackGlass: NonMetallicBallProductDetail = {
  id: "ball-g-003",
  name: "Black Glass Balls",
  slug: "black-glass-balls",
  image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
  imageAlt: "Black glass balls",
  material: "Black Glass",
  category: "glass",
  generalInfo:
    "A kind of glass often used for medical and chemical flow meters and for general measurement and control instruments where an opaque, non-reflective ball is preferred.",
  sizeRange: "1 mm – 25 mm",
  standardGrades: "Black Glass",
  applications:
    "Medical flow meters, chemical flow meters, level indicators, and general measurement and control instruments.",
  chemicalComposition: [
    { element: "SiO₂", value: "64.7%" },
    { element: "Na₂O", value: "15.2%" },
    { element: "CaO", value: "3.4%" },
    { element: "Al₂O₃", value: "—" },
    { element: "MgO", value: "—" },
  ],
  mechanicalProperties: [
    { property: "Specific Weight", value: "2.55" },
    { property: "Hardness (Knoop, KHN)", value: "405" },
    { property: "Melting Point", value: "650 °C" },
    { property: "Max. Temperature (Normal)", value: "130 °C" },
    { property: "Max. Temperature (Extreme)", value: "380 °C" },
    { property: "Resistance to Thermal Stress", value: "18 °C" },
  ],
  hasPdf: true,
};

// ─────────────────────────────────────────────
// PLASTIC BALLS
// Source: "Plastic Balls" data sheet
// (Acetal, Nylon/Polyamide, Polypropylene, Polyethylene, PTFE)
// NOTE: the source scan's mechanical-property table was too low-resolution
// to transcribe with full confidence — the figures below are typical
// published values for these engineering plastics. Replace with your
// exact spec-sheet numbers if they differ.
// ─────────────────────────────────────────────
const acetalBalls: NonMetallicBallProductDetail = {
  id: "ball-p-001",
  name: "Acetal Balls",
  slug: "acetal-balls",
  image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
  imageAlt: "Acetal (POM) plastic balls",
  material: "Acetal (POM)",
  category: "plastic",
  generalInfo:
    "Acetal (Polyoxymethylene) offers high stiffness, low moisture absorption and excellent dimensional stability, making it a popular substitute for metallic balls in low-load bearings and precision mechanisms.",
  sizeRange: "3/32\" (2.381 mm) – 5\" (127 mm)",
  standardGrades: "Homopolymer & Copolymer Acetal",
  applications:
    "Low-load bearings, aerosol agitator balls, check valves, and precision mechanical assemblies.",
  chemicalComposition: [
    { element: "Specific Gravity", value: "1.42" },
    { element: "Water Absorption (24 hr, 1/8\" specimen)", value: "0.25%" },
    { element: "Dielectric Strength (1/8\" specimen)", value: "500 V/mil" },
  ],
  mechanicalProperties: [
    { property: "Tensile Strength at Break", value: "12,000 psi" },
    { property: "Elongation at Break", value: "25–75%" },
    { property: "Tensile Modulus", value: "410,000 psi" },
    { property: "Flexural Modulus (at 73 °F)", value: "375,000 psi" },
    { property: "Izod Impact (notched)", value: "1.4 ft·lb/in" },
    { property: "Coeff. of Linear Thermal Expansion", value: "45 × 10⁻⁶ in/in/°F" },
    { property: "Max. Continuous Service Temperature", value: "180 °F" },
  ],
  hardness: [{ key: "Hardness (Rockwell)", value: "M94" }],
  hasPdf: true,
};

const nylonBalls: NonMetallicBallProductDetail = {
  id: "ball-p-002",
  name: "Nylon (Polyamide) Balls",
  slug: "nylon-balls",
  image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
  imageAlt: "Nylon polyamide plastic balls",
  material: "Polyamide (Nylon)",
  category: "plastic",
  generalInfo:
    "Nylon balls combine good wear resistance and toughness with self-lubricating properties, and are widely used as a cost-effective substitute for metallic balls in low-load bearing and guide applications.",
  sizeRange: "3/32\" (2.381 mm) – 5\" (127 mm)",
  standardGrades: "Nylon 6 / Nylon 6,6",
  applications:
    "Low-load bearings, castor and linear guide assemblies, agitator balls, and food-contact components.",
  chemicalComposition: [
    { element: "Specific Gravity", value: "1.13–1.15" },
    { element: "Water Absorption (24 hr, 1/8\" specimen)", value: "1.3–1.9%" },
    { element: "Dielectric Strength (1/8\" specimen)", value: "380–470 V/mil" },
  ],
  mechanicalProperties: [
    { property: "Tensile Strength at Break", value: "9,500–12,800 psi" },
    { property: "Elongation at Break", value: "60–300%" },
    { property: "Tensile Modulus", value: "150,000–450,000 psi" },
    { property: "Flexural Modulus (at 73 °F)", value: "180,000–410,000 psi" },
    { property: "Izod Impact (notched)", value: "0.9–2.3 ft·lb/in" },
    { property: "Coeff. of Linear Thermal Expansion", value: "45–90 × 10⁻⁶ in/in/°F" },
    { property: "Max. Continuous Service Temperature", value: "185–300 °F" },
  ],
  hardness: [{ key: "Hardness (Rockwell)", value: "R118 / M79" }],
  hasPdf: true,
};

const polypropyleneBalls: NonMetallicBallProductDetail = {
  id: "ball-p-003",
  name: "Polypropylene Balls",
  slug: "polypropylene-balls",
  image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
  imageAlt: "Polypropylene plastic balls",
  material: "Polypropylene (Low Density)",
  category: "plastic",
  generalInfo:
    "Polypropylene is the lightest of the common plastic ball materials, with excellent chemical resistance and virtually no moisture absorption, making it well suited to lightweight check valves and chemical-handling applications.",
  sizeRange: "3/32\" (2.381 mm) – 5\" (127 mm)",
  standardGrades: "Homopolymer Polypropylene",
  applications:
    "Lightweight check valves, chemical handling, aerosol spray cans, and food processing equipment.",
  chemicalComposition: [
    { element: "Specific Gravity", value: "0.905–0.910" },
    { element: "Water Absorption (24 hr, 1/8\" specimen)", value: "0.01–0.03%" },
    { element: "Dielectric Strength (1/8\" specimen)", value: "600–750 V/mil" },
  ],
  mechanicalProperties: [
    { property: "Tensile Strength at Break", value: "4,300–5,500 psi" },
    { property: "Elongation at Break", value: "100–600%" },
    { property: "Tensile Modulus", value: "165,000–225,000 psi" },
    { property: "Flexural Modulus (at 73 °F)", value: "170,000–250,000 psi" },
    { property: "Izod Impact (notched)", value: "0.5–1.0 ft·lb/in" },
    { property: "Coeff. of Linear Thermal Expansion", value: "68–100 × 10⁻⁶ in/in/°F" },
    { property: "Max. Continuous Service Temperature", value: "220 °F" },
  ],
  hardness: [{ key: "Hardness (Rockwell)", value: "R80–100" }],
  hasPdf: true,
};

const polyethyleneBalls: NonMetallicBallProductDetail = {
  id: "ball-p-004",
  name: "Polyethylene Balls",
  slug: "polyethylene-balls",
  image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
  imageAlt: "Polyethylene plastic balls",
  material: "Polyethylene (High Density)",
  category: "plastic",
  generalInfo:
    "High-density polyethylene balls offer good impact strength, low friction and near-zero water absorption, and are commonly used in valves, water treatment equipment, and pool and irrigation components.",
  sizeRange: "3/32\" (2.381 mm) – 5\" (127 mm)",
  standardGrades: "High-Density Polyethylene (HDPE)",
  applications:
    "Ball and check valves, water treatment, irrigation systems, and pool equipment.",
  chemicalComposition: [
    { element: "Specific Gravity", value: "0.941–0.965" },
    { element: "Water Absorption (24 hr, 1/8\" specimen)", value: "<0.01%" },
    { element: "Dielectric Strength (1/8\" specimen)", value: "450–500 V/mil" },
  ],
  mechanicalProperties: [
    { property: "Tensile Strength at Break", value: "3,100–5,500 psi" },
    { property: "Elongation at Break", value: "90–800%" },
    { property: "Tensile Modulus", value: "125,000–175,000 psi" },
    { property: "Flexural Modulus (at 73 °F)", value: "100,000–260,000 psi" },
    { property: "Izod Impact (notched)", value: "0.5–20 ft·lb/in" },
    { property: "Coeff. of Linear Thermal Expansion", value: "60–110 × 10⁻⁶ in/in/°F" },
    { property: "Max. Continuous Service Temperature", value: "160–180 °F" },
  ],
  hardness: [{ key: "Hardness (Shore D)", value: "60–70" }],
  hasPdf: true,
};

const ptfeBalls: NonMetallicBallProductDetail = {
  id: "ball-p-005",
  name: "PTFE Balls",
  slug: "ptfe-balls",
  image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
  imageAlt: "PTFE plastic balls",
  material: "PTFE",
  category: "plastic",
  generalInfo:
    "PTFE balls have the highest density of the plastic ball range, exceptional chemical inertness, an extremely low coefficient of friction, and the broadest usable temperature range of any plastic ball material.",
  sizeRange: "3/32\" (2.381 mm) – 5\" (127 mm)",
  standardGrades: "Virgin PTFE",
  applications:
    "Chemical handling, corrosive-media check valves, food processing, and medical diagnostics.",
  chemicalComposition: [
    { element: "Specific Gravity", value: "2.14–2.20" },
    { element: "Water Absorption (24 hr, 1/8\" specimen)", value: "<0.01%" },
    { element: "Dielectric Strength (1/8\" specimen)", value: "400–500 V/mil" },
  ],
  mechanicalProperties: [
    { property: "Tensile Strength at Break", value: "3,000–5,000 psi" },
    { property: "Elongation at Break", value: "200–400%" },
    { property: "Tensile Modulus", value: "58,000–80,000 psi" },
    { property: "Flexural Modulus (at 73 °F)", value: "70,000–90,000 psi" },
    { property: "Izod Impact (notched)", value: "3.0–4.0 ft·lb/in" },
    { property: "Coeff. of Linear Thermal Expansion", value: "55–100 × 10⁻⁶ in/in/°F" },
    { property: "Max. Continuous Service Temperature", value: "500 °F" },
  ],
  hardness: [{ key: "Hardness (Shore D)", value: "50–65" }],
  hasPdf: true,
};

// ─────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────
export const nonMetallicBallProductDetails: Record<string, NonMetallicBallProductDetail> = {
  [sapphireRuby.slug]: sapphireRuby,
  [aluminaOxide.slug]: aluminaOxide,
  [siliconNitride.slug]: siliconNitride,
  [zirconiumOxide.slug]: zirconiumOxide,
  [sodaLimeGlass.slug]: sodaLimeGlass,
  [borosilicateGlass.slug]: borosilicateGlass,
  [blackGlass.slug]: blackGlass,
  [acetalBalls.slug]: acetalBalls,
  [nylonBalls.slug]: nylonBalls,
  [polypropyleneBalls.slug]: polypropyleneBalls,
  [polyethyleneBalls.slug]: polyethyleneBalls,
  [ptfeBalls.slug]: ptfeBalls,
};

export function getNonMetallicBallProductDetail(
  slug: string
): NonMetallicBallProductDetail | undefined {
  return nonMetallicBallProductDetails[slug];
}