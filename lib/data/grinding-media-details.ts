// ─────────────────────────────────────────────
// GRINDING MEDIA — PRODUCT DETAIL DATA
// Mirrors the shape/pattern of lib/data/ball-product-details.ts
// so the same visual language (SpecTable / GradeTable style) can be reused.
//
// NOTE: Numeric values (chemical composition %, physical property figures,
// size/density/pieces-per-kg tables) were transcribed from Grinding Media spec
// sheet screenshots. A few of the smaller figures (esp. in the Glass Balls
// "Available Standard Sizes" tables and the Ceramic Beads composition %)
// were hard to read with full confidence — please verify these against
// your master spec sheet before publishing.
//
// NOTE (Cast Iron Ball entry): no spec sheet was provided for this product,
// so the grade/hardness values below are typical industry reference figures
// for low / medium / high chrome cast iron grinding balls — please replace
// with your actual spec sheet numbers before publishing.
// ─────────────────────────────────────────────

export interface GrindingMediaGradeRow {
  label: string;
  values: string[];
}

export interface GrindingMediaSpecRow {
  label: string;
  value: string;
}

export interface GrindingMediaSizeTable {
  title: string;
  headers: string[];
  rows: string[][];
  remarks?: string;
  note?: string;
}

export interface GrindingMediaSubProduct {
  name: string;
  description: string;

  // Existing ceramic products
  chemicalComposition?: GrindingMediaSpecRow[];
  physicalProperties?: GrindingMediaSpecRow[];

  // Zirconia Beads
  series?: string;

  particleSize?: {
    name: string;
    size: string;
  }[];

  technicalParameters?: {
    columns: string[];
    rows: GrindingMediaGradeRow[];
  };

  processCharacteristics?: {
    title: string;
    points: string[];
  }[];

  ballDiameterSpecification?: {
    headers: string[];
    rows: string[][];
    note?: string;
  };

  applications?: string[];
}
export interface GrindingMediaDetail {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  material: string;
  generalInfo: string;
  remarks?: string;


  // ── Burnishing Media shape ──
  gradeTable?: {
    columns: string[]; // e.g. ["Grade", "Hardness"]
    rows: GrindingMediaGradeRow[];
  };
  shapesTable?: {
    columns: string[];
    rows: {
      label: string;
      image: string;
      material: string;
    }[];
  };

  // ── Glass Balls shape ──
  compositionTable?: {
    gradeColumns: string[]; // material/glass type names
    rows: GrindingMediaGradeRow[]; // element -> % per column
  };
  sizeTables?: GrindingMediaSizeTable[];

  // ── Ceramic Balls shape (multiple beads/products on one page) ──
  subProducts?: GrindingMediaSubProduct[];
  zirconiaBeads?: {
    title: string;
    series: string;
    description: string;

    particleSize: {
      name: string;
      size: string;
    }[];

    technicalParameters: {
      columns: string[];
      rows: GrindingMediaGradeRow[];
    };

    processCharacteristics: {
      title: string;
      points: string[];
    }[];

    ballDiameterSpecification: {
      headers: string[];
      rows: string[][];
      note?: string;
    };

    applications: string[];
  };
}

export const grindingMediaDetails: Record<string, GrindingMediaDetail> = {
  // ─────────────────────────────────────────────
  // 1. STEEL BALL - GRINDING MEDIA (formerly "Burnishing Media")
  // ─────────────────────────────────────────────
  "burnishing-media": {
    slug: "burnishing-media",
    name: "Steel Ball - Grinding Media",
    image: "/images/grinding-media/glass_ball_burnishing_media.jpg",
    imageAlt: "Steel Ball - Grinding Media",
    material: "Grinding Media",

    generalInfo:
      "Steel balls used as grinding/burnishing media can be balls or peculiar shapes which are used for polishing the rough surfaces of many different metal components. The different shapes are designed to get into the varying crevices and contours of diverse metal products.",

    gradeTable: {
      columns: ["Type / Grade", "Hardness"],

      rows: [
        {
          label: "Case Hardened Carbon Steel",
          values: ["AISI 1010 / 1018", "HARDNESS HRC 60"]
        },
        {
          label: "Through Hardness Carbon Steel",
          values: ["AISI 1070", "HARDNESS HRC 80"]
        },
        {
          label: "Chrome Steel",
          values: ["EN31 / AISI E 52100", "HARDNESS HRC 60-66"]
        },
        {
          label: "Stainless Steel",
          values: ["AISI 420", "HARDNESS HRC 48-55"]
        },
        {
          label: "Stainless Steel – Magnetic",
          values: ["AISI 304 / 316", "HARDNESS HRC 25-39"]
        },
        {
          label: "Stainless Steel – Non Magnetic",
          values: ["AISI 304 / 316", "HARDNESS - NA"]
        }
      ]
    },

    shapesTable: {
      columns: ["Type", "Sketch", "Material"],

      rows: [
        {
          label: "Balls",
          image: "/images/grinding-media/Burnishing_Media/balls.png",
          material: "ALL"
        },
        {
          label: "Ball Cones",
          image: "/images/grinding-media/Burnishing_Media/ball-cones.png",
          material:
            "AISI 1010 / 1018, AISI 1070, AISI 420, AISI 304 / 316"
        },
        {
          label: "Barrels",
          image: "/images/grinding-media/Burnishing_Media/barrels.png",
          material:
            "AISI 1070, AISI 420, AISI 304 / 316"
        },
        {
          label: "Ovals",
          image: "/images/grinding-media/Burnishing_Media/ovals.png",
          material:
            "AISI 1010 / 1018, AISI 420, AISI 304 / 316"
        },
        {
          label: "Diagonals",
          image: "/images/grinding-media/Burnishing_Media/diagonals.png",
          material:
            "AISI 1010 / 1018, AISI 420, AISI 304 / 316"
        },
        {
          label: "Pins",
          image: "/images/grinding-media/Burnishing_Media/pins.png",
          material:
            "EN 31, AISI 420, AISI 304 / 316"
        },
        {
          label: "Flat Pins",
          image: "/images/grinding-media/Burnishing_Media/flat_pins.png",
          material:
            "EN 31, AISI 420, AISI 304 / 316"
        }
      ]
    }
  },

  // ─────────────────────────────────────────────
  // 2. GLASS BALLS — GRINDING MEDIA
  // ─────────────────────────────────────────────
  "glass-ball-grinding-ball": {
    slug: "glass-ball-grinding-ball",
    name: "Glass Balls – Grinding Media",
    image: "/images/grinding-media/glass_ball_burnishing_media.jpg",
    imageAlt: "Glass Balls - Grinding Media",
    material: "Grinding Media",

    generalInfo:
      "Glass Balls are used as grinding media and are available in Soda Lime Glass Balls, Aluminium Borosilicate Balls, and Soda Lime compositions. Standard sizes are available in different ranges, with microbeads available from 0–400 µm in different tolerances. Special sizes are available upon request. Figures of bulk density are reference values.",

    compositionTable: {
      gradeColumns: [

        "Soda Lime Glass Balls",
        "Aluminium Borosilicate Balls",
        "Soda Lime"
      ],

      rows: [
        {
          label: "SiO₂",
          values: ["72.50%", "53.50%", "66.70%"]
        },
        {
          label: "Na₂O",
          values: ["13.00%", "—", "14.00%"]
        },
        {
          label: "CaO",
          values: ["9.06%", "20.10%", "7.59%"]
        },
        {
          label: "MgO",
          values: ["4.22%", "2.33%", "—"]
        },
        {
          label: "Al₂O₃",
          values: ["0.58%", "14.80%", "3.46%"]
        },
        {
          label: "B₂O₃",
          values: ["—", "8.11%", "2.90%"]
        },
        {
          label: "Distinct",
          values: ["Others", "Others", "Others"]
        }
      ],

    },

    sizeTables: [
      {
        title: "Available Standard Sizes",
        headers: [
          "Size Range (mm)",
          "Bulk Density (kg/l)",
          "Pieces/1000 gr"
        ],

        rows: [
          ["0.25-0.50", "1.46", "14486600"],
          ["0.40-0.60", "1.47", "6111500"],
          ["0.50-0.75", "1.49", "3129100"],
          ["0.75-1.00", "1.50", "1140300"],
          ["1.00-1.30", "1.51", "502300"],
          ["1.25-1.65", "1.51", "250580"],
          ["1.55-1.85", "1.52", "155490"],
          ["1.70-2.10", "1.52", "111370"],
          ["2.00-2.40", "1.53", "71740"],
          ["2.40-2.90", "1.53", "41050"],
          ["2.85-3.45", "1.53", "24440"],
          ["3.40-4.00", "1.53", "15080"],
          ["3.80-4.40", "1.53", "11080"]
        ],
        remarks:
          "Special sizes are available upon request. Figures of bulk density are reference values.",
        note:
          "0–400 µm microbeads available in different tolerances.",
      },

      {
        title: "Available Standard Sizes",
        headers: [
          "Size Range (mm)",
          "Bulk Density (kg/l)",
          "Pieces/1000 gr"
        ],

        rows: [
          ["0.50-0.75", "1.55", "3020370"],
          ["0.75-1.00", "1.54", "1100710"],
          ["1.00-1.40", "1.53", "426730"],
          ["1.30-1.70", "1.53", "218480"],
          ["1.70-2.10", "1.53", "107500"],
          ["2.00-2.50", "1.53", "64730"],
          ["2.50-3.00", "1.53", "35450"],
          ["2.80-3.40", "1.52", "24750"],
          ["3.30-3.90", "1.51", "15800"],
          ["3.90-4.40", "1.50", "10310"]
        ]
      },

      {
        title: "Available Standard Sizes",
        headers: [
          "Size Range (mm)",
          "Bulk Density (kg/l)",
          "Pieces/1000 gr"
        ],

        rows: [
          ["1.5 mm +/-0.2 mm", "1.50", "226350"],
          ["2.0 mm +/-0.2 mm", "1.50", "95490"],
          ["2.5 mm +/-0.2 mm", "1.50", "48890"],
          ["3.0 mm +/-0.3 mm", "1.50", "28290"],
          ["3.5 mm +/-0.3 mm", "1.50", "17810"],
          ["4.0 mm +/-0.3 mm", "1.50", "11930"],
          ["4.5 mm +/-0.3 mm", "1.50", "8380"],
          ["5.0 mm +/-0.3 mm", "1.50", "6110"],
          ["6.0 mm +/-0.3 mm", "1.48", "2220"],
          ["7.0 mm +/-0.3 mm", "1.48", "1490"],
          ["8.0 mm +/-0.4 mm", "1.48", "1040"],
          ["9.0 mm +/-0.4 mm", "1.45", "—"]
        ]
      }
    ]
  },

  // ─────────────────────────────────────────────
  // 3. CERAMIC BALLS — GRINDING MEDIA
  // ─────────────────────────────────────────────
  "ceramic-ball-grinding-media": {
    slug: "ceramic-ball-grinding-media",
    name: "Ceramic Balls – Grinding Media",
    image: "/images/grinding-media/ceramic_ball_burnishing_media.jpg",
    imageAlt: "Ceramic Balls - Grinding Media",
    material: "Grinding Media",

    generalInfo:
      "Ceramic grinding media beads are available in four grades — Zirconia Toughened Alumina, Zirconium Silicate Beads, Microcrystal Alumina Beads, and Alumina Toughened Zirconia.",

    subProducts: [
      {
        name: "Zirconia Toughened Alumina",

        description:
          "Zirconia Toughened Alumina bead was sintered from alumina powder and zirconium silicate powder. Compared to the alumina beads, it is an economic ceramic bead to replace kaolin bead, silica sand and other natural grinding media.",

        chemicalComposition: [
          {
            label: "Al₂O₃",
            value: "65-75%"
          },
          {
            label: "ZrO₂",
            value: "6-12%"
          },
          {
            label: "SiO₂",
            value: "6-8%"
          }
        ],

        physicalProperties: [
          {
            label: "Specific Gravity",
            value: "3.1-3.2 kg/dm³"
          },
          {
            label: "Bulk Density",
            value: "2.0-2.2 kg/L"
          },
          {
            label: "Micro Hardness",
            value: "900 kg/mm²"
          },
          {
            label: "Compressive Strength",
            value: "80 kgf (2mm)"
          },
          {
            label: "Wear Rate",
            value: "<70 g/T"
          },
          {
            label: "Color",
            value: "Shell"
          }
        ]
      },

      {
        name: "Zirconium Silicate Beads",

        description:
          "Zirconium silicate beads are made from the high grade Australian zircon sand with granulating shaped method and hardened by sintering. The unique formula and producing procedure offer you a middle density and hardness, high wear resistance middle hard particles in the low to middle viscosity range slurries.",

        chemicalComposition: [
          {
            label: "Al₂O₃",
            value: "60-64%"
          },
          {
            label: "SiO₂",
            value: "30-33%"
          },
          {
            label: "ZrO₂",
            value: "7-9%"
          }
        ],

        physicalProperties: [
          {
            label: "Specific Gravity",
            value: "4.0-4.2 kg/dm³"
          },
          {
            label: "Bulk Density",
            value: "2.5-2.6 kg/L"
          },
          {
            label: "Micro Hardness",
            value: "1000 kg/mm²"
          },
          {
            label: "Hardness Mohs",
            value: "7.3"
          },
          {
            label: "Compressive Strength",
            value: "1100 kgf (2mm)"
          },
          {
            label: "Wear Rate",
            value: "<40 g/T"
          },
          {
            label: "Color",
            value: "Off-white"
          }
        ]
      },

      {
        name: "Microcrystal Alumina Beads",

        description:
          "Microcrystal alumina bead is made from high purity alumina powder and silica powder with sintering method. The micro size of polycrystals contributes to wear resistance and idea strength. It is a wise choice to replace the carbon steel beads to grind the metallic and non-metallic mineral.",

        chemicalComposition: [
          {
            label: "Al₂O₃",
            value: "91-93%"
          },
          {
            label: "SiO₂",
            value: "6%"
          },
          {
            label: "Distinct",
            value: "1-2%"
          }
        ],

        physicalProperties: [
          {
            label: "Specific Gravity",
            value: "3.5-3.7 kg/dm³"
          },
          {
            label: "Bulk Density",
            value: "2.2-2.3 kg/L"
          },
          {
            label: "Micro Hardness",
            value: "1350 kg/mm²"
          },
          {
            label: "Compressive Strength",
            value: "120 kgf (2mm)"
          },
          {
            label: "Wear Rate",
            value: "<200 g/T"
          },
          {
            label: "Color",
            value: "White"
          }
        ]
      },

      {
        name: "Alumina Toughened Zirconia",

        description:
          "Alumina Toughened Zirconia bead was granulated from the ultra fine zirconium dioxide and alumina powder. The consistent micro poly-crystal benefits high compressive strength and wear resistance of beads. Although there is a lower density than T-TZP (yttria-Tetragonal Zirconia polycristal), the lower unit cost is an obvious plus. It can replace it in more application and is competent the mills with high tip speed up to 14m/s.",

        chemicalComposition: [
          {
            label: "Al₂O₃",
            value: "65-75%"
          },
          {
            label: "ZrO₂",
            value: "6-12%"
          },
          {
            label: "SiO₂",
            value: "6-8%"
          }
        ],

        physicalProperties: [
          {
            label: "Specific Gravity",
            value: "3.1-3.2 kg/dm³"
          },
          {
            label: "Bulk Density",
            value: "2.0-2.2 kg/L"
          },
          {
            label: "Micro Hardness",
            value: "900 kg/mm²"
          },
          {
            label: "Compressive Strength",
            value: "80 kgf (2mm)"
          },
          {
            label: "Wear Rate",
            value: "<70 g/T"
          },
          {
            label: "Color",
            value: "Shell"
          }
        ]
      },


      {
        name: "Zirconia Beads",

        series: "ZR95 SERIES",

        description:
          "Ultra-fine crystallite structure, high density, uniform particle size and smooth surface. Non-standard grinding media can be customised according to customer requirements with good wear resistance and high strength, effectively reducing grinding process cost.",

        particleSize: [
          {
            name: "ZR95 Nano Zirconia Beads",
            size: "0.05mm– 2.00mm",
          },
          {
            name: "ZR95 High-purity Zirconia Beads",
            size: "0.30mm– 5.00mm",
          },
        ],

        technicalParameters: {
          columns: [
            "Index",
            "Nano Zirconia Beads",
            "High-purity Zirconia Beads",
          ],

          rows: [
            {
              label: "Zirconia Content",
              values: [
                "94.5±0.2 (%)",
                "94.5±0.5 (%)",
              ],
            },
            {
              label: "Density",
              values: [
                "≥6.03g/cm³",
                "≥6.0g/cm³",
              ],
            },
            {
              label: "Packing Density",
              values: [
                "≥3.7g/cm³",
                "≥3.6g/cm³",
              ],
            },
            {
              label: "Average Crushing Strength",
              values: [
                "≥10Kgf",
                "≥9Kgf",
              ],
            },
            {
              label: "Sphericity",
              values: [
                ">0.98Ds/Dl",
                ">0.95Ds/Dl",
              ],
            },
            {
              label: "Size Deviation Rate",
              values: [
                "≈0.5‰",
                "≈1‰",
              ],
            },
            {
              label: "Surface Finish",
              values: [
                "Sa=20~30nm",
                "Sa=45~65nm",
              ],
            },
            {
              label: "Vickers Hardness",
              values: [
                "≥1300HV",
                "≥1250HV",
              ],
            },
          ],
        },

        processCharacteristics: [
          {
            title: "ZR95 Nano Zirconia Beads",
            points: [
              "Unique extrusion moulding process gives a uniform, compact green body.",
              "Made of hydrothermal nano raw materials — smooth, fine surface and excellent wear resistance via low-temperature sintering.",
              "Three-level selection and two-level screening ensures sphericity and particle size concentration.",
              "Ultra-high-speed pre-grinding process ensures no beads break during use.",
              "Suitable for ultra-fine dispersion, including under high-viscosity conditions.",
            ],
          },
          {
            title: "High-purity Zirconia Beads",
            points: [
              "Made of high-purity Y-TZP raw material — good wear resistance and strength.",
              "No broken beads during use.",
              "Good self-lubrication and sphericity — less wear to equipment.",
            ],
          },
        ],

        ballDiameterSpecification: {
          headers: [
            "Particle Size",
            "Median Diameter (mm)",
            "Sphere Diameter Range (mm)",
            "Max Distribution (mm)",
            "Max Distribution Ratio (%)",
            "Out of Tolerance Rate (%)",
          ],

          rows: [
            [
              "0.1mm",
              "0.105",
              "0.08–0.12",
              "0.09–0.115",
              "> 50%",
              "< 0.7%",
            ],
            [
              "0.2mm",
              "0.205",
              "0.18–0.23",
              "0.185–0.22",
              "> 50%",
              "< 0.7%",
            ],
            [
              "0.3mm",
              "0.31",
              "0.28–0.33",
              "0.295–0.315",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.4mm",
              "0.41",
              "0.37–0.43",
              "0.39–0.42",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.5mm",
              "0.5",
              "0.47–0.53",
              "0.48–0.51",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.6mm–0.8mm",
              "0.6–0.7 / 0.7–0.8",
              "0.59–0.82",
              "0.58–0.82",
              "> 60%",
              "< 0.5%",
            ],
            [
              "0.8mm–1.0mm",
              "0.8–0.9 / 0.9–1.0",
              "0.8–1.0",
              "0.79–1.02",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.0mm–1.2mm",
              "1.0–1.1 / 1.1–1.2",
              "1.0–1.2",
              "0.99–1.22",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.2mm–1.4mm",
              "1.2–1.3 / 1.3–1.4",
              "1.2–1.4",
              "1.19–1.42",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.4mm–1.6mm",
              "1.4–1.5 / 1.5–1.6",
              "1.4–1.6",
              "1.38–1.62",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.6mm–1.8mm",
              "1.6–1.7 / 1.7–1.8",
              "1.6–1.8",
              "1.58–1.82",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.8mm–2.0mm",
              "1.8–1.9 / 1.9–2.0",
              "1.8–2.0",
              "1.77–2.03",
              "> 60%",
              "< 0.5%",
            ],
          ],

          note:
            "* Products can be customised to specific particle size distribution and application requirements.",
        },

        applications: [
          "Lithium iron phosphate battery materials",
          "Electronic & magnetic materials",
          "Paints, inks & coatings",
          "Pharmaceutical & biochemical grinding",
          "Papermaking materials",
          "Silicon electrode materials",
          "Carbon nanotubes & graphite",
          "Food, medical care & cosmetics",
          "Mineral ore processing",
        ],
      },
      {
        name: "Silicon Nitride Beads",

        series: "ULTRA-WEAR-RESISTANT SERIES",

        description:
          "High-end grinding media with low density, low wear and high efficiency. Applicable across a wider range of grinding conditions with excellent cost performance — a premium alternative to zirconia beads.",

        particleSize: [
          {
            name: "Ultra-wear-resistant Silicon Nitride Beads",
            size: "0.10mm– 3.00mm",
          },
        ],

        technicalParameters: {
          columns: [
            "Index",
            "Silicon Nitride Beads",
          ],

          rows: [
            {
              label: "Size Distribution",
              values: [
                "0.1mm ~ 3.0 mm",
              ],
            },
            {
              label: "Average Crushing Strength",
              values: [
                "≥ 50 Kgf (Ø1.0 mm)",
              ],
            },
            {
              label: "Density",
              values: [
                "≥ 3.2 g/cm³",
              ],
            },
            {
              label: "Sphericity",
              values: [
                "> 0.97",
              ],
            },
            {
              label: "Surface Self Abrasion",
              values: [
                "< 1.6 ppm/h",
              ],
            },
            {
              label: "Internal Self Abrasion",
              values: [
                "< 1.5 ppm/h",
              ],
            },
            {
              label: "Internal Porosity Rate",
              values: [
                "< 0.2%",
              ],
            },
            {
              label: "Exceeding the Tolerance Rate",
              values: [
                "≈ 0.5‰",
              ],
            },
          ],
        },

        processCharacteristics: [
          {
            title: "Process characteristics",
            points: [
              "Unique extrusion moulding process — uniform and dense green body.",
              "Vacuum sintering achieves density ≥ 3.2 g/cm³; wear resistance over 10× zirconia beads and nearly 20× high-purity zirconia beads.",
              "Higher actual linear velocity improves ultra-fine dispersion efficiency by more than 30%.",
              "Density is only ~53% of zirconia beads, reducing energy consumption and heat generation.",
              "Extremely low abrasion rate reduces frequency of adding/replacing grinding media.",
            ],
          },
        ],

        ballDiameterSpecification: {
          headers: [
            "Particle Size",
            "Median Diameter (mm)",
            "Sphere Diameter Range (mm)",
            "Max Distribution (mm)",
            "Max Distribution Ratio (%)",
            "Out of Tolerance Rate (%)",
          ],

          rows: [
            [
              "0.1mm",
              "0.105",
              "0.08–0.12",
              "0.09–0.115",
              "> 50%",
              "< 0.7%",
            ],
            [
              "0.2mm",
              "0.205",
              "0.18–0.23",
              "0.185–0.22",
              "> 50%",
              "< 0.7%",
            ],
            [
              "0.3mm",
              "0.31",
              "0.28–0.33",
              "0.295–0.315",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.4mm",
              "0.41",
              "0.37–0.43",
              "0.39–0.42",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.5mm",
              "0.5",
              "0.47–0.53",
              "0.48–0.51",
              "> 55%",
              "< 0.6%",
            ],
            [
              "0.6mm–0.8mm",
              "0.6–0.7 / 0.7–0.8",
              "0.59–0.82",
              "0.58–0.82",
              "> 60%",
              "< 0.5%",
            ],
            [
              "0.8mm–1.0mm",
              "0.8–0.9 / 0.9–1.0",
              "0.8–1.0",
              "0.79–1.02",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.0mm–1.2mm",
              "1.0–1.1 / 1.1–1.2",
              "1.0–1.2",
              "0.99–1.22",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.2mm–1.4mm",
              "1.2–1.3 / 1.3–1.4",
              "1.2–1.4",
              "1.19–1.42",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.4mm–1.6mm",
              "1.4–1.5 / 1.5–1.6",
              "1.4–1.6",
              "1.38–1.62",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.6mm–1.8mm",
              "1.6–1.7 / 1.7–1.8",
              "1.6–1.8",
              "1.58–1.82",
              "> 60%",
              "< 0.5%",
            ],
            [
              "1.8mm–2.0mm",
              "1.8–1.9 / 1.9–2.0",
              "1.8–2.0",
              "1.77–2.03",
              "> 60%",
              "< 0.5%",
            ],
          ],

          note:
            "* Products can be customised to specific particle size distribution and application requirements.",
        },

        applications: [
          "Silicon nitride powder & raw materials",
          "New energy & lithium battery materials",
          "Biomedicine",
          "High-purity materials",
          "Photovoltaic materials",
          "Semiconductors & electronic materials",
        ],
      },

      {
        name: "Alumina Ceramic Beads",

        series: "92% ALUMINA SERIES",

        description:
          "Manufactured from premium 92% alumina raw materials with high hardness and excellent wear resistance. A cost-effective grinding media for general industrial applications, offering strong resistance to corrosion, acids and alkalis, high impact strength and a low breakage rate. Suitable for both wet and dry grinding processes.",

        particleSize: [
          {
            name: "92% Alumina Ceramic Beads",
            size: "1.00mm- 100.00mm",
          },
        ],

        technicalParameters: {
          columns: [
            "Index",
            "Alumina Ceramic Balls",
          ],

          rows: [
            {
              label: "Alumina Content (Al₂O₃)",
              values: [
                "≥92%",
              ],
            },
            {
              label: "Density",
              values: [
                "≥3.60 g/cm³",
              ],
            },
            {
              label: "Bulk Density",
              values: [
                "≥2.20 g/cm³",
              ],
            },
            {
              label: "Water Absorption",
              values: [
                "≤0.01%",
              ],
            },
            {
              label: "Mohs Hardness",
              values: [
                "9",
              ],
            },
            {
              label: "Compressive Strength",
              values: [
                "≥2000 MPa",
              ],
            },
            {
              label: "Sphericity",
              values: [
                "≥95%",
              ],
            },
            {
              label: "Wear Loss",
              values: [
                "≤0.02%",
              ],
            },
            {
              label: "Color",
              values: [
                "White",
              ],
            },
          ],
        },

        processCharacteristics: [
          {
            title: "Product Process Characteristics",
            points: [
              "Manufactured from premium 92% alumina raw materials.",
              "High hardness and excellent wear resistance.",
              "Cost-effective grinding media for general industrial applications.",
              "Excellent resistance to corrosion, acids, and alkalis.",
              "High impact strength with low breakage rate.",
              "Suitable for wet and dry grinding processes.",
              "Available in precision sizes from Φ1 mm to Φ100 mm.",
              "Long service life with low wear contamination.",
              "Custom sizes and tolerance grades available upon request.",
            ],
          },
        ],

        ballDiameterSpecification: {
          headers: [
            "Particle Size",
            "Median Diameter (mm)",
            "Sphere Diameter Range (mm)",
            "Max Distribution (mm)",
            "Max Distribution Ratio (%)",
            "Out of Tolerance Rate (%)",
          ],

          rows: [
            ["1 mm", "1", "0.95 – 1.05", "±0.05", "-", "-"],
            ["2 mm", "2", "1.95 – 2.05", "±0.05", "-", "-"],
            ["3 mm", "3", "2.95 – 3.05", "±0.05", "-", "-"],
            ["5 mm", "5", "4.95 – 5.05", "±0.05", "-", "-"],
            ["10 mm", "10", "9.90 – 10.10", "±0.10", "-", "-"],
            ["15 mm", "15", "14.90 – 15.10", "±0.10", "-", "-"],
            ["20 mm", "20", "19.85 – 20.15", "±0.15", "-", "-"],
            ["25 mm", "25", "24.80 – 25.20", "±0.20", "-", "-"],
            ["30 mm", "30", "29.80 – 30.20", "±0.20", "-", "-"],
            ["40 mm", "40", "39.75 – 40.25", "±0.25", "-", "-"],
            ["50 mm", "50", "49.70 – 50.30", "±0.30", "-", "-"],
            ["60 mm", "60", "59.70 – 60.30", "±0.30", "-", "-"],
            ["70 mm", "70", "69.60 – 70.40", "±0.40", "-", "-"],
            ["80 mm", "80", "79.50 – 80.50", "±0.50", "-", "-"],
            ["90 mm", "90", "89.50 – 90.50", "±0.50", "-", "-"],
            ["100 mm", "100", "99.50 – 100.50", "±0.50", "-", "-"],
          ],

          note:
            "* Products can be customised to specific particle size distribution and application requirements.",
        },

        applications: [
          "Ceramic and porcelain industries",
          "Mining and mineral processing",
          "Cement and building materials",
          "Refractory materials",
          "Pharmaceutical and cosmetic industries",
          "Laboratory grinding and sample preparation",
          "Ball mills and attrition mills",
          "Paints, inks and pigments",
          "Chemical processing",
          "Electronic ceramics",
          "Water treatment systems",
        ],
      },



    ]
  },

  // ─────────────────────────────────────────────
  // 4. CAST IRON BALL — GRINDING MEDIA
  // NOTE: figures below are typical industry reference values for
  // low/medium/high chrome cast iron grinding balls — no spec sheet
  // was provided, so please verify/replace before publishing.
  // ─────────────────────────────────────────────
  "cast-iron-ball-grinding-media": {
    slug: "cast-iron-ball-grinding-media",
    name: "Cast Iron Ball – Grinding Media",
    image: "/images/grinding-media/cast_iron_ball_grinding_media.jpg",
    imageAlt: "Cast Iron Ball - Grinding Media",
    material: "Grinding Media",

    generalInfo:
      "Cast Iron Grinding Balls are widely used as grinding media in ball mills for the processing of ores, cement, and minerals, offering high impact resistance, good wear resistance, and a low breakage rate. They are available in low chrome, medium chrome, and high chrome grades to suit different grinding applications and mill conditions.",

    gradeTable: {
      columns: ["Type / Grade", "Hardness"],

      rows: [
        {
          label: "Low Chrome Cast Iron",
          values: ["Cr < 3%", "HRC 45-52"]
        },
        {
          label: "Medium Chrome Cast Iron",
          values: ["Cr 3-10%", "HRC 52-58"]
        },
        {
          label: "High Chrome Cast Iron",
          values: ["Cr 10-28%", "HRC 58-65"]
        }
      ]
    }
  },

};

export function getGrindingMediaDetail(slug: string): GrindingMediaDetail | undefined {
  return grindingMediaDetails[slug];
}