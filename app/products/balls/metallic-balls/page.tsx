"use client";
import { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight, FiEye } from "react-icons/fi";
// import { DataTableModal, DataTableColumn } from "@/components/DataTableModal";
import { ToleranceTableModal } from "@/components/ToleranceTableModal";
import { useSearchParams } from "next/navigation";
import { toleranceChart } from "@/lib/data/technicalDataChart";
// import {
//   dimensionalConversionChart,
//   materialWeightFactors,
//   DimensionRow,
// } from "@/lib/data/dimensionalConversionChart";
import { DataTableColumn, DataTableModal } from "./DataTableModal";
import { dimensionalConversionChart, DimensionRow, materialWeightFactors } from "./dimensionalConversionChart";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const ballsData = {
  categories: [
    {
      id: "ferrous",
      label: "Ferrous Metals",
      image: "/images/Ball/Metallic_Ball/Ferous_Ball.jpg",
      imageAlt: "Ferrous metal balls — chrome steel, stainless steel, carbon steel",
      description:
        "Precision-engineered ferrous metal balls manufactured from chrome steel, stainless steel, and carbon steel. Built to DIN 5401, ISO 3290, and ABMA Std 10 standards, these balls deliver outstanding hardness, wear resistance, and dimensional accuracy for demanding bearing, valve, and industrial applications.",
      products: [
        { id: "ball-f-001", name: "Low Carbon Steel Balls – AISI 1010", slug: "low-carbon-steel-ball-aisi-1010", material: "Carbon Steel (AISI 1010)", hasPdf: true },
        { id: "ball-f-003", name: "High Carbon Steel Balls – AISI 1065-86", slug: "high-carbon-steel-ball-through-hardened", material: "AISI 1065-86", hasPdf: true },
        { id: "ball-f-002", name: "High Carbon High Chrome Steel Balls – AISI 52100", slug: "high-carbon-chrome-alloy-ball-aisi-52100", material: "Chrome Steel (AISI 52100 / 100Cr6)", hasPdf: true },

        { id: "ball-f-004", name: "Stainless Steel Balls – AISI 440C", slug: "stainless-steel-ball-440c", material: "Stainless Steel Balls (AISI 440C)", hasPdf: true },
        { id: "ball-f-005", name: "Stainless Steel Balls – AISI 420, 420C", slug: "stainless-steel-ball-420", material: "Stainless Steel Balls (AISI 420 / 420C)", hasPdf: true },
        { id: "ball-f-006", name: "Stainless Steel Balls – AISI 302, 304, 304L", slug: "stainless-steel-ball-304", material: "Stainless Steel Balls (AISI 302 / 304 / 304L)", hasPdf: true },


        { id: "ball-f-007", name: "Stainless Steel Balls – AISI 316, 316L", slug: "stainless-steel-ball-316", material: "Stainless Steel Balls (AISI 316 / 316L)", hasPdf: true },
        { id: "ball-f-008", name: "Tool Steel Balls – AISI S2", slug: "aisi-s2-tool-steel-ball", material: "Tool Steel (AISI S-2)", hasPdf: true },
        { id: "ball-f-009", name: "Dimensional Conversion Chart", slug: "dimensional-conversion-chart", material: "Conversion Chart", hasPdf: true, docType: "dimensional-chart" as const },
        { id: "ball-f-010", name: "Technical Data", slug: "technical-data", material: "Data", hasPdf: true, docType: "technical-data" as const },
      ],
    },
    {
      id: "non-ferrous",
      label: "Non Ferrous Metals",
      image: "/images/Ball/Metallic_Ball/Non_Ferous_Ball.jpg",
      imageAlt: "Non-ferrous metal balls — brass, copper, titanium, ceramic",
      description:
        "Our non-ferrous ball range covers brass, copper, titanium, tungsten carbide, and a full suite of high-performance nickel superalloys including Hastelloy, Inconel, and Monel. Each grade is selected for its unique combination of corrosion resistance, temperature performance, and mechanical properties — from lightweight titanium implants to extreme-duty tungsten carbide valve seats.",
      products: [
        { id: "ball-nf-005", name: "Tungsten Carbide Cobalt Binder Balls", slug: "tungsten-carbide-cobalt-binder-balls", material: "Tungsten Carbide + Cobalt Binder (WC-Co)", hasPdf: true },


        { id: "ball-nf-006", name: "Tungsten Carbide Nickel Binder Balls", slug: "tungsten-carbide-nickel-binder-balls", material: "Tungsten Carbide + Nickel Binder (WC-Ni)", hasPdf: true },
        { id: "ball-nf-004", name: "Titanium Alloys Balls", slug: "titanium-alloy-balls", material: "Titanium (Grade 2 / Grade 5 Ti-6Al-4V)", hasPdf: true },
        { id: "ball-nf-007", name: "Hastelloy C276 Alloy Balls", slug: "hastelloy-c276-balls", material: "Hastelloy C276 (UNS N10276)", hasPdf: true },

        { id: "ball-nf-008", name: "Inconel 825 Alloy Balls", slug: "inconel-825-balls", material: "Inconel 825 (UNS N08825)", hasPdf: true },
        { id: "ball-nf-009", name: "Inconel 625 Alloy Balls", slug: "inconel-625-balls", material: "Inconel 625 (UNS N06625)", hasPdf: true },
        { id: "ball-nf-010", name: "Monel K 400 Alloy Balls", slug: "monel-k400-balls", material: "Monel 400 (UNS N04400)", hasPdf: true },
        { id: "ball-nf-011", name: "Monel K 500 Alloy Balls", slug: "monel-k500-balls", material: "Monel K500 (UNS N05500)", hasPdf: true },
        { id: "ball-nf-003", name: "Copper Balls", slug: "copper-balls", material: "Copper (C11000 / ETP)", hasPdf: true },
        { id: "ball-nf-002", name: "Brass Balls", slug: "brass-balls", material: "Brass (C36000 / C26000)", hasPdf: true },

        { id: "ball-nf-001", name: "Alloy 20 Balls", slug: "alloy-20-balls", material: "Alloy 20 (Carpenter 20)", hasPdf: true },

        { id: "ball-nf-012", name: "Dimensional Conversion Chart", slug: "non-ferous-dimensional-chart", material: "Chart", hasPdf: false, docType: "dimensional-chart" as const },
        { id: "ball-nf-013", name: "Technical Data", slug: "non-ferous-technical-data", material: "Data", hasPdf: false, docType: "technical-data" as const },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

// Slugs that are "resource" documents, not real products
const RESOURCE_SLUGS = new Set([
  "dimensional-conversion-chart",
  "technical-data",
  "non-ferous-dimensional-chart",
  "non-ferous-technical-data",
]);

function getProductPdfPath(slug: string) {
  return `/pdfs/balls/metallic/${slug}.pdf`;
}

// Row shape used to render the Dimensional Conversion Chart table,
// with the raw numbers formatted the way the print chart shows them.
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

// ─────────────────────────────────────────────
// RESOURCE DOC CARD COMPONENT
// ─────────────────────────────────────────────
function ResourceDocCard({
  name,
  slug,
  hasPdf,
  docType,
  onView,
}: {
  name: string;
  slug: string;
  hasPdf: boolean;
  docType?: "dimensional-chart" | "technical-data";
  onView: (docType: "dimensional-chart" | "technical-data") => void;
}) {
  const isChart = name.toLowerCase().includes("chart");
  // Table data is hardcoded in the app, so it doesn't depend on a PDF existing.
  const canViewTable = docType === "dimensional-chart" || docType === "technical-data";

  const ChartIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA5C0F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  );

  const FileIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EA5C0F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );

  return (
    <div className="flex items-start gap-4 bg-white border border-gray-100 rounded-xl px-5 py-4 hover:border-orange-200 hover:shadow-sm transition-all duration-200">
      <div className="w-11 h-11 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
        {isChart ? <ChartIcon /> : <FileIcon />}
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-800 mb-0.5 leading-snug">{name}</p>
        <p className="text-xs text-gray-400 mb-3">
          {isChart
            ? "Inch ↔ metric size cross-reference table"
            : "Material properties, tolerances & grades"}
        </p>

        {canViewTable ? (
          <button
            onClick={() => onView(docType!)}
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
    </div >
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
function BallsPageContent() {
  const { categories } = ballsData;
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab");
  const initialIndex = categories.findIndex((c) => c.id === initialTab);

  const [activeIndex, setActiveIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const [openDoc, setOpenDoc] = useState<"dimensional-chart" | "technical-data" | null>(null);

  const activeCategory = categories[activeIndex];

  const regularProducts = activeCategory.products.filter((p) => !RESOURCE_SLUGS.has(p.slug));
  const resourceDocs = activeCategory.products.filter((p) => RESOURCE_SLUGS.has(p.slug));

  const prev = () => setActiveIndex((i) => (i - 1 + categories.length) % categories.length);
  const next = () => setActiveIndex((i) => (i + 1) % categories.length);

  const chartRows = formatChartRows(dimensionalConversionChart);

  // Currently-open resource doc drives the PDF download link (if that category has a real PDF)
  const openResourceDoc = resourceDocs.find((d) => d.docType === openDoc);
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
        <span className="font-medium">Balls</span>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">Metallic Balls</span>
      </nav>

      {/* ══════════════════════════════════
          SECTION 1 — Category Slider (no image)
      ══════════════════════════════════ */}
      <section className="relative mb-14">
        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              className={`px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold border-none cursor-pointer transition-all duration-200
                ${i === activeIndex
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-500"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slide card — image only here */}
        <div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white min-h-[280px] sm:min-h-[380px]">
          <div className="relative w-full sm:w-1/2 h-52 sm:h-auto bg-gray-100 shrink-0">
            <Image
              src={activeCategory.image}
              alt={activeCategory.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col justify-center w-full sm:w-1/2 px-6 py-7 sm:px-10 sm:py-10 bg-white">
            {/* <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Precision Engineered
            </span> */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight mb-4 sm:mb-5">
              {activeCategory.label}
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">{activeCategory.description}</p>
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{regularProducts.length}</p>
                <p className="text-xs text-gray-400 mt-0.5">Variants</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">ISO</p>
                <p className="text-xs text-gray-400 mt-0.5">9001:2015</p>
              </div>
            </div>
          </div>
        </div>

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
          SECTION 2 — Products List (no images, no cards)
      ══════════════════════════════════ */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">{activeCategory.label} — Products</h2>
          <span className="text-sm text-gray-400">{regularProducts.length} variants</span>
        </div>

        <ul className="flex flex-col divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white overflow-hidden list-none m-0 p-0">
          {regularProducts.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 hover:bg-orange-50/40 transition-colors duration-200"
            >
              <div className="flex flex-col min-w-0 flex-1">
                <h3 className="text-sm font-semibold text-gray-800 leading-snug truncate">
                  {product.name}
                </h3>
              </div>

              {product.hasPdf && (
                <Link
                  href={`/products/balls/metallic-balls/${product.slug}`}
                  className="flex items-center gap-1 shrink-0 px-4 py-1.5 rounded-full border border-orange-400 text-orange-500 text-xs font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 no-underline whitespace-nowrap"
                >
                  View Details
                  <FiArrowRight size={11} />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ══════════════════════════════════
          SECTION 3 — Resources & Technical Documents
      ══════════════════════════════════ */}
      {resourceDocs.length > 0 && (
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-gray-100" />
            <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
              Resources &amp; Technical Documents
            </p>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {resourceDocs.map((doc) => (
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
      )}

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
export default function BallsPage() {
  return (
    <Suspense fallback={null}>
      <BallsPageContent />
    </Suspense>
  );
}