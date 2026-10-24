"use client";
import { useState, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight, FiEye } from "react-icons/fi";


import { ToleranceTableModal } from "@/components/ToleranceTableModal";

import { toleranceChart } from "@/lib/data/technicalDataChart";
// import {
//   dimensionalConversionChart,
//   materialWeightFactors,
//   DimensionRow,
// } from "@/lib/data/dimensionalConversionChart";
// import { DataTableColumn, DataTableModal } from "./DataTableModal";
import {
  dimensionalConversionChart,
  materialWeightFactors,
  DimensionRow,
} from "../metallic-balls/dimensionalConversionChart";
import { DataTableModal, DataTableColumn } from "../metallic-balls/DataTableModal";
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const nonMetallicBallsData = {
  page: {
    title: "Non-Metallic Balls",
    slug: "non-metallic-balls",
    metaDescription:
      "Precision-engineered non-metallic balls in ceramic, glass, and plastic — manufactured to DIN, ISO, and ABMA standards for demanding industrial, chemical, and precision applications.",
  },
  categories: [
    {
      id: "ceramic",
      label: "Ceramic Balls",
      image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
      imageAlt: "Ceramic balls — alumina oxide, zirconia oxide, silicon nitride",
      description:
        "Ceramic balls are particularly suited to harsh environments. Their main advantages over steel is that they have a density of 40% lower than steel. Have 29% lower thermal expansion and are 150% harder. In certain high-speed applications their life is extended by as much as a hundred times. The three main materials used are Alumina Oxide, Zirconia Oxide and Silicon Nitride.",
      products: [
        {
          id: "ball-c-ref-002",
          name: "Dimensional Conversion Chart",
          slug: "dimensional-conversion-chart-ceramic",
          imageAlt: "Dimensional conversion chart",
          material: "Reference",
          hasPdf: false,
          docType: "dimensional-chart" as const,
        },
        {
          id: "ball-c-ref-003",
          name: "Technical Data",
          slug: "technical-data-ceramic",
          imageAlt: "Technical data sheet",
          material: "Reference",
          hasPdf: true,
          docType: "technical-data" as const,
        },
      ],
      applications: [
        { label: "Aerosol Pumps", imageAlt: "Aerosol pumps" },
        { label: "Automotive Door Assembly", imageAlt: "Automotive door assembly" },
        { label: "Ball Bearings", imageAlt: "Ball bearings" },
        { label: "Ball Pen", imageAlt: "Ball pen" },
        { label: "Ball Screw", imageAlt: "Ball screw" },
        { label: "Ball Transfer Unit", imageAlt: "Ball transfer unit" },
        { label: "Ball Valves", imageAlt: "Ball valves" },
        { label: "Bicycles", imageAlt: "Bicycles" },
        { label: "Bobbin Holder", imageAlt: "Bobbin holder" },
        { label: "Body Jewellery", imageAlt: "Body jewellery" },
        { label: "Castor Wheels", imageAlt: "Castor wheels" },
        { label: "Cosmetics", imageAlt: "Cosmetics" },
        { label: "Gas Regulator", imageAlt: "Gas regulator" },
        { label: "Household Appliances", imageAlt: "Household appliances" },
        { label: "Jewellery", imageAlt: "Jewellery" },
        { label: "Linear Motion Bearing", imageAlt: "Linear motion bearing" },
        { label: "Rod End", imageAlt: "Rod end" },
        { label: "Steering Column", imageAlt: "Steering column" },
        { label: "Safety Belts", imageAlt: "Safety belts" },
        { label: "Toys", imageAlt: "Toys" },
        { label: "Watches", imageAlt: "Watches" },
        { label: "Wind Mill Bearing", imageAlt: "Wind mill bearing" },
      ],

      // ── Technical data shown below the slider ──
      technicalData: {
        notes: [
          {
            title: "Si₃N₄ — Silicon Nitride",
            body:
              "The most widely used type of ceramic due to very high resistance to wear and abrasion in general. It does not require lubrication, is resistant to corrosion, is anti-magnetic and electrically insulating, and continues to be efficient at high temperatures up to 1400 °C. It combines extreme hardness with high precision. Si₃N₄ balls are widely used in high precision bearings in the aerospace industry, in machine tools, measurement instruments, mechanical centrifuges, radar and missiles, pumps and compressors.",
          },
          {
            title: "Al₂O₃ 99.50% — Alumina (Alumina Oxide)",
            body:
              "This material has a multi-crystal structure and excellent resistance to abrasion and high temperatures. It is resistant to most corrosive agents, but is not recommended for use in contact with hydrochloric and hydrofluoric acid or strong alkaline solutions. Al₂O₃ balls are used in valves, pumps, and ball bearings.",
          },
          {
            title: "ZrO₂ — Zirconium Oxide",
            body:
              "The material has a high degree of compactness and considerable flexural strength, which makes it very reliable. It also has a low modulus of elasticity, close to that of steel, together with an extraordinarily low thermal conductivity.",
          },
          {
            title: "Al₂O₃ 99.99% — Ruby",
            body:
              "A non-porous single crystal structure used where particular hardness and extreme resistance to wear are required, together with low specific weight and chemical inertness. The material consists of pure aluminium oxide with a small percentage of chromium oxide, which gives it its characteristic red colour — the most visible feature of these balls in measurement and control instruments, valves, and pumps.",
          },
          {
            title: "Al₂O₃ 99.99% — Sapphire",
            body:
              "This material has a single crystal structure and, unlike ruby, is transparent. Because of its optical properties and high refractive index, balls made of this material are used as chemically inert lenses.",
          },
        ],

        propertyTable: {
          title: "Ceramic Balls — Properties of Materials",

          columns: [
            "Sapphire and Ruby",
            "Alumina Oxide",
            "Silicon Nitride",
            "Zirconium Oxide"
          ],

          groups: [
            {
              groupLabel: "Physical Properties",

              rows: [
                {
                  label: "Structure",
                  values: [
                    "Single crystal",
                    "Multi-crystal",
                    "Multi-crystal",
                    "Multi-crystal"
                  ]
                },
                {
                  label: "Chemical Formula",
                  values: [
                    "Al₂O₃",
                    "Al₂O₃",
                    "Si₃N₄",
                    "ZrO₂"
                  ]
                },
                {
                  label: "Purity %",
                  values: [
                    "99.99",
                    "99.8",
                    "95",
                    "97"
                  ]
                },
                {
                  label: "Density g/cm3",
                  values: [
                    "3.99",
                    "3.9",
                    "3.2",
                    "5.5"
                  ]
                },
                {
                  label: "Operating Temperature (°C)",
                  values: [
                    "—",
                    "1800",
                    "1100",
                    "1000"
                  ]
                },
                {
                  label: "Melting Point (°C)",
                  values: [
                    "2050",
                    "2050",
                    "1900",
                    "—"
                  ]
                },
                {
                  label: "Softening Point (°C)",
                  values: [
                    "1800",
                    "1725",
                    "1400",
                    "—"
                  ]
                },
                {
                  label: "Specific Heat at 25 °C (CAL/g/°C)",
                  values: [
                    "0.18",
                    "0.25",
                    "0.17",
                    "9"
                  ]
                },
                {
                  label: "Thermal Conductivity",
                  values: [
                    "36 W/m°K",
                    "29 W/m°K",
                    "29 W/m°K",
                    "W/m°K"
                  ]
                }
              ]
            },

            {
              groupLabel: "Mechanical Properties",

              rows: [
                {
                  label: "Vickers HV10 Hardness (N/mm²)",
                  values: [
                    "17000",
                    "16500",
                    "24000",
                    "20000"
                  ]
                },
                {
                  label: "Modulus of Elasticity (N/mm²)",
                  values: [
                    "4.3×10⁵",
                    "3.5×10⁵",
                    "3.1×10⁵",
                    "2×10⁵"
                  ]
                },
                {
                  label: "Breaking Modulus at 25 °C (N/mm²)",
                  values: [
                    "392",
                    "470",
                    "700",
                    "600"
                  ]
                },
                {
                  label: "Compressive Strength at 25 °C (N/mm²)",
                  values: [
                    "2060",
                    "2354",
                    "2500",
                    "2100"
                  ]
                }
              ]
            }
          ],

          note:
            "Figures shown are typical published values for these ceramic grades — please confirm exact figures against your supplier's certified data sheet before publishing."
        },

        chemicalResistance: [
          {
            label: "Sapphire / Ruby",
            note:
              "Inert to most acids at very high temperatures."
          },
          {
            label: "Alumina (Oxide)",
            note:
              "Inert to most acids, but not recommended in environments with hydrochloric or hydrofluoric acids or strong alkaline solutions."
          },
          {
            label: "Silicon Nitride",
            note:
              "Inert to most acids."
          },
          {
            label: "Zirconium Oxide",
            note:
              "Inert except to hydrofluoric acid and strong concentrations of sulphuric acid."
          }
        ]
      },
    },

    {
      id: "plastic",
      label: "Plastic Balls",
      image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
      imageAlt: "Plastic balls — acetal, polyamide, polyethylene, PTFE",

      description:
        "Plastic balls are manufactured from standard and specially polymer resins in size from 3/32\" (2.381 mm) to 5\" (127 mm). Balls above 1\" (25.4 mm) are manufactured from extruded rod. Plastic balls are a cost-effective substitute for metallic balls in low load bearings. They are also used as agitators in aerosol spray cans, lightweight check valves, medical diagnostics and a wide variety of other applications. Tolerances to ±0.0005\" (±0.0125 mm) are possible for certain materials such as nylon and acetal. Surfaces can be tailored from rough to highly polished finishes.",

      products: [
        {
          id: "ball-p-ref-002",
          name: "Dimensional Conversion Chart",
          slug: "dimensional-conversion-chart-plastic",
          imageAlt: "Plastic balls dimensional conversion chart",
          material: "Reference",
          hasPdf: true,
          docType: "dimensional-chart" as const,
        },
        {
          id: "ball-p-ref-003",
          name: "Technical Data",
          slug: "technical-data-chart-plastic",
          imageAlt: "Plastic balls technical data chart",
          material: "Reference",
          hasPdf: true,
          docType: "technical-data" as const,
        },
      ],

      applications: [
        { label: "Aerosol Spray Cans", imageAlt: "Aerosol spray cans" },
        { label: "Agitators", imageAlt: "Agitators" },
        { label: "Ball Valves", imageAlt: "Ball valves" },
        { label: "Bobbin Holder", imageAlt: "Bobbin holder" },
        { label: "Body Jewellery", imageAlt: "Body jewellery" },
        { label: "Check Valves", imageAlt: "Check valves" },
        { label: "Chemical Handling", imageAlt: "Chemical handling" },
        { label: "Cosmetics Dispensers", imageAlt: "Cosmetics dispensers" },
        { label: "Decorative Items", imageAlt: "Decorative items" },
        { label: "Flow Meters", imageAlt: "Flow meters" },
        { label: "Food Processing", imageAlt: "Food processing" },
        { label: "Household Appliances", imageAlt: "Household appliances" },
        { label: "Irrigation Systems", imageAlt: "Irrigation systems" },
        { label: "Jewellery", imageAlt: "Jewellery" },
        { label: "Low-Load Bearings", imageAlt: "Low-load bearings" },
        { label: "Medical Diagnostics", imageAlt: "Medical diagnostics" },
        { label: "Pool Equipment", imageAlt: "Pool equipment" },
        { label: "Pumps", imageAlt: "Pumps" },
        { label: "Toys", imageAlt: "Toys" },
        { label: "Water Treatment", imageAlt: "Water treatment" },
        { label: "Wind Mill Bearing", imageAlt: "Wind mill bearing" },
      ],

      technicalData: {
        propertyTable: {
          title: "Plastic Balls — Properties of Materials",

          columns: [
            "Acetal",
            "Polyamide",
            "Polyethylene Low Density",
            "Polyethylene High Density",
            "PTFE Fluorocarbon",
          ],

          groups: [
            {
              groupLabel: "Physical Properties",
              rows: [
                {
                  label: "Specific Gravity",
                  values: ["1.42", "1.13-1.15", "0.910-0.925", "0.941-0.965", "2.14-2.20"],
                },
                {
                  label: "Water Absorption \n24hr (1/8 in. Thick Specimen)%\n Saturation",
                  values: ["0.25-0.40\n500 (90ML)", "1.0-1.3\n8.5", "<0.01", "<0.01", "<0.01"],
                },
                {
                  label: "Dielectric Strength \n(1/8 in. Thick Specimen),\nShort Time V./mil",
                  values: ["500 (90ML)", "600ᴮ", "450-1000", "450-500", "480"],
                },
              ],
            },

            {
              groupLabel: "Mechanical Properties",
              rows: [
                {
                  label: "Tensile Strength \nat Break, PSI",
                  values: ["—", "12,000ᴮ / 11,000ᶜ", "600-2300", "3100-5500", "2000-5000"],
                },
                {
                  label: "Elongation \nat Break, %",
                  values: ["25-75", "60ᴮ / 300ᶜ", "90-800", "20-130", "200-400"],
                },
                {
                  label: "Tensile Yield \nStrength, PSI",
                  values: ["95000-12.000", "8000ᴮ / 6500ᶜ", "800-1200", "3000-4000", "—"],
                },
                {
                  label: "Compressive Strength \n(Rupture or Yield), PSI",
                  values: ["18.000 @ 10%", "15.000ᴮ (YLD.)", "—", "2700-3600", "1700"],
                },
                {
                  label: "Flexural Strength \n(Rupture or Yield), PSI",
                  values: ["14.000", "17.000ᴮ / 6,100ᶜ", "—", "—", "—"],
                },
                {
                  label: "Tensile Modulus \n(10³ PSI)",
                  values: ["520", "—", "14-38", "60-180", "58-80"],
                },
                {
                  label: "Compressive Modulus \n(10³ PSI)",
                  values: ["670", "—", "—", "—", "60"],
                },
                {
                  label: "Flexural Modulus \n(10³ PSI) — 73°F / 200°F /\n250°F / 300°F",
                  values: ["380-430", "420ᴮ / 185ᶜ", "8-60", "100-260", "80"],
                },
                {
                  label: "Izod Impact, FT-LB./I.OF  \n Notch (1/8-IN.\nTHICK SPECIMEN)",
                  values: ["1.3-2.3", "0.8-1.0ᴮ / 2.1ᶜ", "NO BREAK", "0.5-20", "3"],
                },
                {
                  label: "Hardness \nRockwell / Shore",
                  values: ["M94", "R120ᴮ / M83ᴮ", "D40-51", "D60-70", "D-50-55"],
                },
              ],
            },

            {
              groupLabel: "Thermal Properties",
              rows: [
                {
                  label: "Coef. of Linear Thermal \nExpansion (10⁶ in./in°C)",
                  values: ["100", "80", "100-2220", "110-130", "—"],
                },
                {
                  label: "Deflection Temperature, \nFlexural Load — 264 PSI (°F)",
                  values: ["255", "167ᴮ", "90-105", "110-130", "—"],
                },
                {
                  label: "Deflection Temperature, \nFlexural Load — 66 PSI (°F)",
                  values: ["338", "474ᴮ", "100-121", "140-190", "250"],
                },
                {
                  label: "Thermal Conductivity \n(10-CAL.-CM/SEC.-CM²-°C)",
                  values: ["5.5", "5.8", "8", "11-12", "6.0"],
                },
              ],
            },
          ],

          note:
            "Figures shown are reference values from the supplied technical data. Please verify against the applicable material certificate or original manufacturer data sheet before final publication.",
        },
        infoTables: [
          {
            title: "Grade — Sphericity, Tolerance & Surface",
            headers: [
              "Grade",
              "Sphericity (Inches)",
              "Sphericity (MM)",
              "Tolerance (Inches)",
              "Tolerance (MM)",
              "Surface",
            ],
            rows: [
              ["0*", "0.0005", "0.0125", "±0.0005", "0.0125", "POLISHED"],
              ["I", "0.0005", "0.0125", "±0.001", "0.025", "POLISHED"],
              ["II", "0.001", "0.025", "±0.002", "0.05", "UNPOLISHED"],
              ["III", "0.005", "0.125", "±0.005", "0.125", "UNPOLISHED"],
            ],
          },
        ],

        gradeNote: "*Only available in certain materials.",
      },
    },

    {
      id: "glass",
      label: "Glass Balls",
      image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
      imageAlt: "Glass balls — soda lime, borosilicate, black glass",
      description:
        "Glass Balls are dimensionally stable, resist corrosion and chemical absorption and can withstand high temperatures (up to 600 °F). Density varies depending on the type of glass used to manufacture the ball. We provide high precision balls from the following types of glass: Soda-Lime Glass, Borosilicate Glass, and Black Glass.",
      products: [
        {
          id: "ball-g-ref-002",
          name: "Dimensional Conversion Chart",
          slug: "dimensional-conversion-chart-glass",
          imageAlt: "Dimensional conversion chart",
          material: "Reference",
          hasPdf: true,
          docType: "dimensional-chart" as const,
        },
        {
          id: "ball-g-ref-003",
          name: "Technical Data",
          slug: "technical-data-glass",
          imageAlt: "Technical data sheet",
          material: "Reference",
          hasPdf: true,
          docType: "technical-data" as const,
        },
      ],
      applications: [
        { label: "Aerosol Pumps", imageAlt: "Aerosol pumps" },
        { label: "Ball Valves", imageAlt: "Ball valves" },
        { label: "Check Valves", imageAlt: "Check valves" },
        { label: "Chemical Reactors", imageAlt: "Chemical reactors" },
        { label: "Cosmetics", imageAlt: "Cosmetics" },
        { label: "Decorative Items", imageAlt: "Decorative items" },
        { label: "Flow Meters", imageAlt: "Flow meters" },
        { label: "Gas Regulators", imageAlt: "Gas regulators" },
        { label: "Household Appliances", imageAlt: "Household appliances" },
        { label: "Jewellery", imageAlt: "Jewellery" },
        { label: "Laboratory Equipment", imageAlt: "Laboratory equipment" },
        { label: "Level Indicators", imageAlt: "Level indicators" },
        { label: "Optical Instruments", imageAlt: "Optical instruments" },
        { label: "Pharmaceutical Equipment", imageAlt: "Pharmaceutical equipment" },
        { label: "Pumps", imageAlt: "Pumps" },
        { label: "Safety Devices", imageAlt: "Safety devices" },
        { label: "Spray Bottles", imageAlt: "Spray bottles" },
        { label: "Toys", imageAlt: "Toys" },
        { label: "Water Meters", imageAlt: "Water meters" },
        { label: "Wine Bottles", imageAlt: "Wine bottles" },
      ],

      // ── Technical data shown below the slider ──
      technicalData: {
        notes: [
          {
            title: "Soda-Lime Glass",
            body:
              "Material resistant to high alkaline solutions. Soda-Lime glass balls are mainly used for applications not subjected to strong mechanical or thermal shocks, such as plastic bearings, flow meters, measurement and control equipment, instruments, and ink cartridges.",
          },
          {
            title: "Borosilicate Glass",
            body:
              "Due to its excellent thermal inertia to most acids, this kind of glass is particularly suitable for metering pumps and valves against strong oxidizing concentrations.",
          },
          {
            title: "Black Glass",
            body:
              "A kind of glass often used for medical and chemical flow meters and for general measurement and control instruments.",
          },
        ],

        infoTables: [
          {
            title: "Chemical Composition",
            headers: ["Material", "SiO2", "Na2O", "CaO", "Al2O3", "A2O3", "MgO"],
            rows: [
              ["Soda-Lime Glass", "67", "16", "7", "5", "3", "2"],
              ["Borosilicate Glass", "81", "4", "–", "2", "13", "–"],
              ["Black Glass", "69.7", "15.2", "3.4", "–", "1.3", "–"],
            ],
          },
          {
            title: "Properties",
            headers: ["Properties", "Soda-Lime Glass", "Borosilicate Glass", "Black Glass"],
            rows: [
              ["Specific Weight", "2.5", "2.23", "2.55"],
              ["Hardness (KNOOP – KHN)", "465", "418", "405"],
              ["Melting Point °C", "695", "820", "650"],
            ],
          },
          {
            title: "Max Temperature Use (Mechanical)",
            headers: ["Temperature", "Soda-Lime Glass", "Borosilicate", "Black Glass"],
            rows: [
              ["Normal °C", "110", "230", "110"],
              ["Extreme °C", "460", "490", "380"],
              ["Resistance to Thermal Stress", "17°C", "53°C", "18°C"],
            ],
          },
        ],
      },
    },


  ],
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function getProductPdfPath(slug: string) {
  return `/pdfs/balls/non-metallic/${slug}.pdf`;
}

interface DisplayDimensionRow {
  fraction: string;
  inch: string;
  mm: string;
  weightKg: string;
}

function formatChartRows(rows: DimensionRow[]): DisplayDimensionRow[] {
  return rows.map((r) => ({
    fraction: r.fraction,
    inch: r.inch.toFixed(4),
    mm: r.mm.toFixed(3),
    weightKg: r.weightKg < 1 ? r.weightKg.toFixed(4) : r.weightKg.toFixed(2),
  }));
}

const dimensionColumns: DataTableColumn<DisplayDimensionRow>[] = [
  { key: "fraction", label: "Inch Fraction", align: "left" },
  { key: "inch", label: "Inch Decimal", align: "right" },
  { key: "mm", label: "mm", align: "right" },
  { key: "weightKg", label: "Kg / 1000 balls", align: "right" },
];

const dimensionChartFootnote =
  "Weights are based on chrome alloy steel balls. Approximate weight for other materials: " +
  materialWeightFactors.map((m) => `${m.material} ×${m.factor}`).join(" · ");

function getDocMeta(name: string): { subtitle: string; type: "chart" | "data" } {
  const n = name.toLowerCase();
  if (n.includes("chart") || n.includes("conversion")) {
    return { subtitle: "Inch ↔ metric size cross-reference table", type: "chart" };
  }
  return { subtitle: "Material specifications, tolerances & grades", type: "data" };
}
function getVariantCount(technicalData: any): number {
  // Prefer material notes — each note represents one distinct material,
  // even when two materials (e.g. Sapphire & Ruby) share one property-table column.
  if (technicalData?.notes?.length) {
    return technicalData.notes.length;
  }
  if (technicalData?.propertyTable?.columns) {
    return technicalData.propertyTable.columns.length;
  }
  const propsTable = technicalData?.infoTables?.find(
    (t: any) => t.title?.toLowerCase() === "properties"
  );
  if (propsTable?.headers) {
    return Math.max(propsTable.headers.length - 1, 0);
  }
  return 0;
}

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────
function ChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA5C0F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA5C0F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// RESOURCE DOC CARD COMPONENT
// ─────────────────────────────────────────────
function ResourceDocCard({
  name,
  hasPdf,
  slug,
  docType,
  onView,
}: {
  name: string;
  hasPdf: boolean;
  slug: string;
  docType: "dimensional-chart" | "technical-data";
  onView: (docType: "dimensional-chart" | "technical-data") => void;
}) {
  const { subtitle, type } = getDocMeta(name);
  // Table data is hardcoded in the app, so it doesn't depend on a PDF existing.
  const canViewTable = docType === "dimensional-chart" || docType === "technical-data";

  return (
    <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-orange-200 hover:shadow-sm transition-all duration-200">
      <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
        {type === "chart" ? <ChartIcon /> : <FileIcon />}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 mb-0.5 leading-snug">{name}</p>
        <p className="text-xs text-gray-400 mb-3">{subtitle}</p>

        {canViewTable ? (
          <button
            onClick={() => onView(docType)}
            className="self-start flex items-center gap-1.5 text-[0.7rem] font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 cursor-pointer"
          >
            View Table
            <FiEye size={11} />
          </button>
        ) : hasPdf ? (
          <a
            href={getProductPdfPath(slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start flex items-center gap-1.5 text-[0.7rem] font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 no-underline"
          >
            Download PDF
            <FiArrowRight size={10} />
          </a>
        ) : (
          <span className="self-start text-[0.7rem] font-semibold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
            Coming soon
          </span>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// APPLICATION LIST COMPONENT
// ─────────────────────────────────────────────
function ApplicationList({
  applications,
}: {
  applications: { label: string; imageAlt: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-4 list-none p-0 m-0">
      {applications.map((app) => (
        <li
          key={app.label}
          className="flex items-center gap-2 py-2 border-b border-gray-100 text-sm text-gray-700"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
          {app.label}
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────
// MATERIAL NOTE CARDS — short descriptive blurbs per grade/material
// Cards flow two-per-row; if the count is odd, the trailing card is
// centered on its own row instead of hugging the left edge.
// ─────────────────────────────────────────────
function MaterialNotes({ notes }: { notes: { title: string; body: string }[] }) {
  const isOdd = notes.length % 2 === 1;

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {notes.map((note, i) => {
        const isLastOnOwnRow = isOdd && i === notes.length - 1;
        return (
          <div
            key={note.title}
            className={`rounded-xl border border-gray-100 bg-gray-50 px-5 py-4 w-full sm:w-[calc(50%-0.5rem)] ${isLastOnOwnRow ? "sm:mx-auto" : ""
              }`}
          >
            <h3 className="text-sm font-bold text-gray-900 mb-1.5">{note.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">{note.body}</p>
          </div>
        );
      })}
    </div>
  );
}

// ─────────────────────────────────────────────
// PROPERTY TABLE — one row-label column + N material columns,
// optionally split into labeled groups (Physical / Mechanical / Thermal).
// Styled as a data-sheet: cream header band, uppercase labels,
// group divider bars, and slate-blue row labels.
// ─────────────────────────────────────────────
function PropertyTable({
  title,
  columns,
  groups,
  note,
  compact = false,
}: {
  title: string;
  columns: string[];
  groups: { groupLabel?: string; rows: { label: string; values: string[] }[] }[];
  note?: string;
  compact?: boolean;
}) {
  return (
    <div>
      <h2 className="text-sm font-bold uppercase tracking-widest text-orange-600 mb-3 text-center">
        {title}
      </h2>
      <div className="rounded-xl border border-[#ECEDF2] overflow-hidden overflow-x-auto">
        <table className="w-full text-sm border-collapse table-fixed">
          <thead>
            <tr className="bg-[#FBE9D6]">
              <th
                className="px-4 py-2.5 text-left uppercase tracking-widest text-[0.68rem] font-bold text-gray-600 align-bottom w-[220px]"
                style={{ whiteSpace: "pre-line" }}
              >
                {groups[0]?.groupLabel}
              </th>
              {columns.map((c) => (
                <th
                  key={c}
                  className="px-4 py-2.5 text-center uppercase tracking-wide text-[0.7rem] font-bold text-gray-500 align-bottom break-words"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {groups.map((group, gi) => (
              <Fragment key={group.groupLabel ?? gi}>
                {group.groupLabel && gi > 0 && (
                  <tr className="bg-[#FCEEDD]">
                    <td
                      colSpan={columns.length + 1}
                      className="px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-gray-600"
                    >
                      {group.groupLabel}
                    </td>
                  </tr>
                )}
                {group.rows.map((row, ri) => (
                  <tr
                    key={row.label}
                    className={`${ri % 2 === 0 ? "bg-white" : "bg-[#F3F4F8]"} border-b border-[#ECEDF2] last:border-b-0`}
                  >
                    <td
                      className="px-4 py-2.5 tracking-wide text-[0.72rem] font-semibold text-[#111111] w-[220px]"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {row.label}
                    </td>
                    {row.values.map((v, j) => (
                      <td
                        key={j}
                        className="px-4 py-2.5 text-center text-gray-800 break-words"
                        style={{ whiteSpace: "pre-line" }}   // ← added
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {!compact && note && <p className="text-[0.7rem] text-gray-400 mt-2 leading-relaxed">{note}</p>}
    </div>
  );
}

// ─────────────────────────────────────────────
// INFO TABLE — simple headers + rows, used for composition /
// properties / temperature-use / tolerance tables
// ─────────────────────────────────────────────
function InfoTable({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
        {title}
      </h2>
      <div className="overflow-hidden rounded-xl border border-[#ECEDF2] overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-[#FBE9D6]">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-4 py-3 text-left  uppercase tracking-wide text-[0.7rem] font-bold text-gray-500 whitespace-nowrap">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-[#F3F4F8]"} border-b border-[#ECEDF2] last:border-b-0`}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-2.5 whitespace-nowrap ${j === 0 ? " text-[#111111] font-semibold" : "text-left text-gray-800"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CHEMICAL RESISTANCE
// `layout="grid"` (default) — the original 2-column card grid.
// `layout="stacked"` — a single vertical list, used when placed
// beside the property table (matches the reference data sheet).
// ─────────────────────────────────────────────
function ChemicalResistance({
  items,
  layout = "grid",
}: {
  items: { label: string; note: string }[];
  layout?: "grid" | "stacked";
}) {
  if (layout === "stacked") {
    return (
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest  text-[#111111] mb-4">
          Chemical Resistance
        </h2>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.label}>
              <p className="text-xs font-bold uppercase tracking-wide text-orange-600 mb-1">
                {item.label}:
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
        Chemical Resistance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item) => (
          <div key={item.label} className="rounded-xl border border-gray-100 bg-white px-4 py-3">
            <p className="text-xs font-bold text-gray-800 mb-1">{item.label}</p>
            <p className="text-xs text-gray-500 leading-relaxed">{item.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PROPERTY TABLE + CHEMICAL RESISTANCE — side-by-side row,
// mirrors the reference data sheet layout (table ~2/3 width,
// chemical resistance list ~1/3 width, headers vertically aligned).
// ─────────────────────────────────────────────
function PropertyAndResistanceRow({
  propertyTable,
  chemicalResistance,
}: {
  propertyTable: {
    title: string;
    columns: string[];
    groups: { groupLabel?: string; rows: { label: string; values: string[] }[] }[];
    note?: string;
  };
  chemicalResistance: { label: string; note: string }[];
}) {
  return (
    <div className="mb-2">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        <div className="w-full lg:w-[68%]">
          <PropertyTable
            title={propertyTable.title}
            columns={propertyTable.columns}
            groups={propertyTable.groups}
            compact
          />
        </div>
        <div className="w-full lg:w-[32%] lg:pt-[2.4rem]">
          <ChemicalResistance items={chemicalResistance} layout="stacked" />
        </div>
      </div>
      {propertyTable.note && (
        <p className="text-[0.7rem] text-gray-400 mt-2 leading-relaxed lg:w-[68%]">{propertyTable.note}</p>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// TECHNICAL DATA SECTION — renders whichever pieces exist
// for the active category (notes / property table / info tables /
// chemical resistance). When both a property table and chemical
// resistance data exist, they render side by side.
// ─────────────────────────────────────────────
function TechnicalDataSection({ technicalData }: { technicalData: any }) {
  if (!technicalData) return null;

  const hasCombinedRow = technicalData.propertyTable && technicalData.chemicalResistance;

  return (
    <section className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gray-100" />
        <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
          Technical Data
        </p>
        <div className="h-px flex-1 bg-gray-100" />
      </div>

      {technicalData.notes && <MaterialNotes notes={technicalData.notes} />}

      {hasCombinedRow ? (
        <PropertyAndResistanceRow
          propertyTable={technicalData.propertyTable}
          chemicalResistance={technicalData.chemicalResistance}
        />
      ) : (
        <>
          {technicalData.propertyTable && (
            <div className="mb-8">
              <PropertyTable
                title={technicalData.propertyTable.title}
                columns={technicalData.propertyTable.columns}
                groups={technicalData.propertyTable.groups}
                note={technicalData.propertyTable.note}
              />
            </div>
          )}
          {technicalData.chemicalResistance && (
            <ChemicalResistance items={technicalData.chemicalResistance} />
          )}
        </>
      )}

      {technicalData.infoTables &&
        technicalData.infoTables.map((table: any) => (
          <InfoTable key={table.title} title={table.title} headers={table.headers} rows={table.rows} />
        ))}
      {technicalData.gradeNote && (
        <p className="text-[0.7rem] text-gray-400 -mt-6 mb-6 leading-relaxed">
          {technicalData.gradeNote}
        </p>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function NonMetallicBallsPage() {
  const { categories } = nonMetallicBallsData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [openDoc, setOpenDoc] = useState<"dimensional-chart" | "technical-data" | null>(null);
  const activeCategory = categories[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + categories.length) % categories.length);
  const next = () => setActiveIndex((i) => (i + 1) % categories.length);

  const chartRows = formatChartRows(dimensionalConversionChart);

  // Currently-open resource doc (within the active category) drives the
  // download link, if that particular doc has a real PDF on disk.
  const openResourceDoc = activeCategory.products.find((d) => d.docType === openDoc);
  const downloadHref = openResourceDoc?.hasPdf
    ? getProductPdfPath(openResourceDoc.slug)
    : undefined;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">Home</Link>
        <FiChevronRight size={13} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">Products</Link>
        <FiChevronRight size={13} />
        <Link href="/products/balls" className="hover:text-orange-500 transition-colors no-underline">Balls</Link>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">Non-Metallic Balls</span>
      </nav>

      {/* ══════════════════════════════════
          SECTION 1 — Category Slider
      ══════════════════════════════════ */}
      <section className="relative mb-14">

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-none cursor-pointer transition-all duration-200
                ${i === activeIndex
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-500"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slide card */}
        <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white min-h-[280px] sm:min-h-[380px]">

          {/* Left — Full bleed image */}
          <div className="relative w-full sm:w-1/2 h-52 sm:h-auto bg-gray-100 shrink-0">
            <Image
              src={activeCategory.image}
              alt={activeCategory.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right — Title + description */}
          {/* Right — Title + description */}
          <div className="flex flex-col justify-center w-full sm:w-1/2 px-6 py-7 sm:px-10 sm:py-10 bg-white">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5">
              {activeCategory.label}
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              {activeCategory.description}
            </p>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">
                  {getVariantCount((activeCategory as any).technicalData)}   {/* 👈 ye line change hui */}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Variants</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">ISO</p>
                <p className="text-xs text-gray-400 mt-0.5">9001:2015</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          className="absolute left-[-14px] sm:left-[-18px] top-[calc(50%+36px)] sm:top-[calc(50%+20px)] -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer z-10"
          aria-label="Previous category"
        >
          <FiArrowLeft size={14} />
        </button>
        <button
          onClick={next}
          className="absolute right-[-14px] sm:right-[-18px] top-[calc(50%+36px)] sm:top-[calc(50%+20px)] -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer z-10"
          aria-label="Next category"
        >
          <FiArrowRight size={14} />
        </button>

        {/* Slide indicator dots */}
        <div className="flex justify-center gap-2 mt-4">
          {categories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-200 p-0
                ${i === activeIndex ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300"}`}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — Technical Data
          Material notes + property table (paired with chemical
          resistance side by side when both exist) + info tables —
          content swaps with the active tab, sourced from
          activeCategory.technicalData
      ══════════════════════════════════ */}
      <TechnicalDataSection technicalData={(activeCategory as any).technicalData} />

      {/* ══════════════════════════════════
          SECTION 3 — Resources & Technical Documents
          Same pattern as metallic-balls: exactly 2 cards per category —
          Dimensional Conversion Chart + Technical Data
      ══════════════════════════════════ */}
      <section className="mb-14">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px flex-1 bg-gray-100" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
            Resources &amp; Technical Documents
          </p>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* Doc cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {activeCategory.products.map((doc) => (
            <ResourceDocCard
              key={doc.id}
              name={doc.name}
              slug={doc.slug}
              hasPdf={doc.hasPdf}
              docType={doc.docType}
              onView={setOpenDoc}
            />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4 — Applications List
      ══════════════════════════════════ */}
      {/* <section className="bg-gray-50 rounded-2xl px-4 py-7 sm:px-8 sm:py-10">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6 sm:mb-8">
          Applications
        </h2>
        <ApplicationList applications={activeCategory.applications} />
      </section> */}

      {/* ══════════════════════════════════
          Technical Data — Tolerances by Grade popup
      ══════════════════════════════════ */}
      <ToleranceTableModal
        isOpen={openDoc === "technical-data"}
        onClose={() => setOpenDoc(null)}
        rows={toleranceChart}
        downloadHref={downloadHref}
      />

      {/* ══════════════════════════════════
          Dimensional Conversion Chart popup
      ══════════════════════════════════ */}
      <DataTableModal
        isOpen={openDoc === "dimensional-chart"}
        onClose={() => setOpenDoc(null)}
        title="Dimensional Conversion Chart"
        subtitle="Inch ↔ Metric Size Cross-Reference"
        columns={dimensionColumns}
        rows={chartRows}
        searchKeys={["fraction", "inch", "mm"]}
        footnote={dimensionChartFootnote}
        downloadHref={downloadHref}
      />
    </main>
  );
}