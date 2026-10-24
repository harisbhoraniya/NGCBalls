// ─────────────────────────────────────────────
// Technical Data — Tolerances by Grade for Individual Balls
// Source: technical-data.pdf
// ─────────────────────────────────────────────

export interface ToleranceRow {
  system: "Inch" | "Metric µm";
  grade: string;
  diameterVariation: string;
  deviationFromSpherical: string;
  surfaceRoughness: string;
}

export const toleranceChart: ToleranceRow[] = [
  // Inch
  { system: "Inch", grade: "3", diameterVariation: ".000003", deviationFromSpherical: ".000003", surfaceRoughness: "0.5" },
  { system: "Inch", grade: "5", diameterVariation: ".000005", deviationFromSpherical: ".000005", surfaceRoughness: "0.8" },
  { system: "Inch", grade: "10", diameterVariation: ".000010", deviationFromSpherical: ".000010", surfaceRoughness: "1" },
  { system: "Inch", grade: "16", diameterVariation: ".000016", deviationFromSpherical: ".000016", surfaceRoughness: "1" },
  { system: "Inch", grade: "24", diameterVariation: ".000024", deviationFromSpherical: ".000024", surfaceRoughness: "2" },
  { system: "Inch", grade: "48", diameterVariation: ".000048", deviationFromSpherical: ".000048", surfaceRoughness: "3" },
  { system: "Inch", grade: "100", diameterVariation: ".0001", deviationFromSpherical: ".0001", surfaceRoughness: "5" },
  { system: "Inch", grade: "200", diameterVariation: ".0002", deviationFromSpherical: ".0002", surfaceRoughness: "8" },
  { system: "Inch", grade: "500", diameterVariation: ".0005", deviationFromSpherical: ".0005", surfaceRoughness: "*" },
  { system: "Inch", grade: "1000", diameterVariation: ".001", deviationFromSpherical: ".001", surfaceRoughness: "*" },

  // Metric µm
  { system: "Metric µm", grade: "3", diameterVariation: "0.08", deviationFromSpherical: "0.08", surfaceRoughness: "0.012" },
  { system: "Metric µm", grade: "5", diameterVariation: "0.13", deviationFromSpherical: "0.13", surfaceRoughness: "0.02" },
  { system: "Metric µm", grade: "10", diameterVariation: "0.25", deviationFromSpherical: "0.25", surfaceRoughness: "0.025" },
  { system: "Metric µm", grade: "16", diameterVariation: "0.4", deviationFromSpherical: "0.4", surfaceRoughness: "0.025" },
  { system: "Metric µm", grade: "24", diameterVariation: "0.6", deviationFromSpherical: "0.6", surfaceRoughness: "0.05" },
  { system: "Metric µm", grade: "48", diameterVariation: "1.2", deviationFromSpherical: "1.2", surfaceRoughness: "0.08" },
  { system: "Metric µm", grade: "100", diameterVariation: "2.5", deviationFromSpherical: "2.5", surfaceRoughness: "0.125" },
  { system: "Metric µm", grade: "200", diameterVariation: "5", deviationFromSpherical: "5", surfaceRoughness: "0.2" },
  { system: "Metric µm", grade: "500", diameterVariation: "13", deviationFromSpherical: "13", surfaceRoughness: "*" },
  { system: "Metric µm", grade: "1000", diameterVariation: "25", deviationFromSpherical: "25", surfaceRoughness: "*" },
];