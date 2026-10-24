// ─────────────────────────────────────────────
// Technical Data — Tolerances by Grade for Individual Balls
// Source: technical-data.pdf
// ─────────────────────────────────────────────

export interface ToleranceRow {
  grade: string;
  diameterVariationInch: string;
  diameterVariationMetric: string;
  deviationSphericalInch: string;
  deviationSphericalMetric: string;
  surfaceRoughnessInch: string;
  surfaceRoughnessMetric: string;
}

export const toleranceChart: ToleranceRow[] = [
  { grade: "3", diameterVariationInch: ".000003", diameterVariationMetric: "0.08", deviationSphericalInch: ".000003", deviationSphericalMetric: "0.08", surfaceRoughnessInch: "0.5", surfaceRoughnessMetric: "0.012" },
  { grade: "5", diameterVariationInch: ".000005", diameterVariationMetric: "0.13", deviationSphericalInch: ".000005", deviationSphericalMetric: "0.13", surfaceRoughnessInch: "0.8", surfaceRoughnessMetric: "0.02" },
  { grade: "10", diameterVariationInch: ".000010", diameterVariationMetric: "0.25", deviationSphericalInch: ".000010", deviationSphericalMetric: "0.25", surfaceRoughnessInch: "1", surfaceRoughnessMetric: "0.025" },
  { grade: "16", diameterVariationInch: ".000016", diameterVariationMetric: "0.4", deviationSphericalInch: ".000016", deviationSphericalMetric: "0.4", surfaceRoughnessInch: "1", surfaceRoughnessMetric: "0.025" },
  { grade: "24", diameterVariationInch: ".000024", diameterVariationMetric: "0.6", deviationSphericalInch: ".000024", deviationSphericalMetric: "0.6", surfaceRoughnessInch: "2", surfaceRoughnessMetric: "0.05" },
  { grade: "48", diameterVariationInch: ".000048", diameterVariationMetric: "1.2", deviationSphericalInch: ".000048", deviationSphericalMetric: "1.2", surfaceRoughnessInch: "3", surfaceRoughnessMetric: "0.08" },
  { grade: "100", diameterVariationInch: ".0001", diameterVariationMetric: "2.5", deviationSphericalInch: ".0001", deviationSphericalMetric: "2.5", surfaceRoughnessInch: "5", surfaceRoughnessMetric: "0.125" },
  { grade: "200", diameterVariationInch: ".0002", diameterVariationMetric: "5", deviationSphericalInch: ".0002", deviationSphericalMetric: "5", surfaceRoughnessInch: "8", surfaceRoughnessMetric: "0.2" },
  { grade: "500", diameterVariationInch: ".0005", diameterVariationMetric: "13", deviationSphericalInch: ".0005", deviationSphericalMetric: "13", surfaceRoughnessInch: "*", surfaceRoughnessMetric: "*" },
  { grade: "1000", diameterVariationInch: ".001", diameterVariationMetric: "25", deviationSphericalInch: ".001", deviationSphericalMetric: "25", surfaceRoughnessInch: "*", surfaceRoughnessMetric: "*" },
];