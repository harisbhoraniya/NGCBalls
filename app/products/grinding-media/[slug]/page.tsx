import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronRight, FiArrowRight } from "react-icons/fi";
import SubProductTabs from "@/components/grinding-media/SubProductTabs";
import {
  getGrindingMediaDetail,
  grindingMediaDetails,
} from "@/lib/data/grinding-media-details";

export function generateStaticParams() {
  return Object.keys(grindingMediaDetails).map((slug) => ({ slug }));
}

// ─────────────────────────────────────────────
// SIMPLE 2-COLUMN TABLE (label + N values), left-aligned
// Used for Burnishing Media's grade / shapes tables
// ─────────────────────────────────────────────
function SimpleTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: { label: string; values: string[] }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
        {title}
      </h2>
      <div className="rounded-xl border border-gray-100 overflow-hidden overflow-x-auto">
        <table className="w-full text-sm min-w-[560px]">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-4 py-2 text-left whitespace-nowrap">Material</th>
              {columns.map((c) => (
                <th key={c} className="px-4 py-2 text-left whitespace-nowrap">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2.5 text-gray-500 whitespace-nowrap">{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-4 py-2.5 text-gray-800 whitespace-nowrap">
                    {v}
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
function ShapesTable({
  title,
  columns,
  rows,
}: {
  title: string;
  columns: string[];
  rows: {
    label: string;
    image: string;
    material: string;
  }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
        {title}
      </h2>

      <div className="rounded-xl border border-gray-100 overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-4 py-3 text-center" colSpan={2}>
                {columns[0]}
              </th>

              <th className="px-4 py-3 text-left">
                {columns[2]}
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={
                  i % 2 === 0 ? "bg-white" : "bg-gray-50"
                }
              >
                {/* TYPE */}
                <td className="px-4 py-4 font-medium text-gray-700 whitespace-nowrap">
                  {row.label}
                </td>

                {/* SKETCH */}
                <td className="px-4 py-3 text-center">
                  <div className="relative mx-auto w-28 h-20">
                    <Image
                      src={row.image}
                      alt={`${row.label} burnishing media shape`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </td>

                {/* MATERIAL */}
                <td className="px-4 py-4 text-gray-700 leading-relaxed">
                  {row.material}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────
// GRADE TABLE — element/property + one column per material
// (Same visual language as the metallic-balls GradeTable)
// ─────────────────────────────────────────────
function GradeTable({
  title,
  gradeColumns,
  rows,
  rowHeaderLabel = "",
}: {
  title: string;
  gradeColumns: string[];
  rows: { label: string; values: string[] }[];
  rowHeaderLabel?: string;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
        {title}
      </h2>
      <div className="rounded-xl border border-gray-100 overflow-hidden overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-4 py-2 text-left whitespace-nowrap">{rowHeaderLabel}</th>
              {gradeColumns.map((g) => (
                <th key={g} className="px-4 py-2 text-left whitespace-nowrap">
                  {g}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-2.5 text-gray-500">{row.label}</td>
                {row.values.map((v, j) => (
                  <td key={j} className="px-4 py-2.5 text-gray-800">
                    {v}
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
// SPEC TABLE — label + single value, left-aligned
// Used inside each ceramic-bead sub-product card
// ─────────────────────────────────────────────
function SpecTable({
  title,
  rows,
}: {
  title: string;
  rows?: { label: string; value: string }[];
}) {
  if (!rows || rows.length === 0) {
    return null;
  }

  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 text-center">
        {title}
      </h3>

      <div className="rounded-lg border border-gray-100 overflow-hidden">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`px-3 py-2 text-xs flex flex-col gap-0.5 sm:flex-row sm:items-start sm:gap-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
              }`}
          >
            <span className="text-gray-500 shrink-0 sm:w-32">
              {row.label}
            </span>

            <span className="text-gray-800 text-left leading-relaxed">
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default async function GrindingMediaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getGrindingMediaDetail(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ── */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">
          Home
        </Link>
        <FiChevronRight size={13} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">
          Products
        </Link>
        <FiChevronRight size={13} />
        <Link
          href="/products/grinding-media"
          className="hover:text-orange-500 transition-colors no-underline"
        >
          Grinding Media
        </Link>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      {/* ══════════════════════════════════
          HERO — Image + Title + Description
      ══════════════════════════════════ */}
      <section className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white mb-10">
        <div className="relative w-full sm:w-2/5 h-56 sm:h-auto bg-gray-100 shrink-0">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-col justify-center w-full sm:w-3/5 px-6 py-7 sm:px-10 sm:py-10">
          {/* <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            {product.material}
          </span> */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
            {product.name}
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed">{product.generalInfo}</p>
        </div>
      </section>

      {/* ══════════════════════════════════
          BURNISHING MEDIA — Grade table + Shapes table
      ══════════════════════════════════ */}
      {product.gradeTable && (
        <section className="mb-10">
          <SimpleTable
            title="Materials & Hardness"
            columns={product.gradeTable.columns}
            rows={product.gradeTable.rows}
          />
        </section>
      )}

      {product.shapesTable && (
        <section className="mb-10">
          <ShapesTable
            title="Shapes"
            columns={product.shapesTable.columns}
            rows={product.shapesTable.rows}
          />
        </section>
      )}
      {/* ══════════════════════════════════
          GLASS BALLS — Composition table + Size tables
      ══════════════════════════════════ */}
      {product.compositionTable && (
        <section className="mb-10">
          <GradeTable
            title="Chemical Composition"
            gradeColumns={product.compositionTable.gradeColumns}
            rows={product.compositionTable.rows}
            rowHeaderLabel="Chemical"
          />
        </section>
      )}

      {product.sizeTables && (
        <section className="mb-10 space-y-8">
          {product.sizeTables.map((table) => {
            const half = Math.ceil(table.rows.length / 2);
            const leftRows = table.rows.slice(0, half);
            const rightRows = table.rows.slice(half);

            return (
              <div key={table.title}>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3 text-center">
                  {table.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[leftRows, rightRows].map((half, idx) =>
                    half.length === 0 ? null : (
                      <div
                        key={idx}
                        className="overflow-hidden rounded-xl border border-gray-100 overflow-x-auto"
                      >
                        <table className="w-full text-sm">
                          <thead className="bg-orange-50">
                            <tr>
                              {table.headers.map((h) => (
                                <th
                                  key={h}
                                  className="px-4 py-3 text-left whitespace-nowrap"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {half.map((row, i) => (
                              <tr
                                key={i}
                                className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                              >
                                {row.map((cell, j) => (
                                  <td key={j} className="px-4 py-2.5">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  )}
                </div>

                {table.note && (
                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    {table.note}
                  </p>
                )}
              </div>
            );
          })}

          {/* Remarks — shown once, centered, below all size tables */}
          {product.sizeTables.some((t) => t.remarks) && (
            <p className="text-xs text-gray-400 text-center leading-relaxed">
              <span className="font-semibold text-gray-500">Remarks: </span>
              {product.sizeTables.find((t) => t.remarks)?.remarks}
            </p>
          )}
        </section>
      )}


      {/* ══════════════════════════════════
          CERAMIC BALLS — Multiple bead grades, each with its own
          description + chemical composition + physical properties
      ══════════════════════════════════ */}
      {/* ══════════════════════════════════
    CERAMIC BALLS — Multiple bead grades
   ══════════════════════════════════ */}
      {product.subProducts && (
        <section className="mb-10">
          <SubProductTabs subProducts={product.subProducts} />
        </section>
      )}
      {/* ══════════════════════════════════
          BACK LINK
      ══════════════════════════════════ */}
      <div className="flex justify-center">
        <Link
          href="/products/grinding-media"
          className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors no-underline"
        >
          <FiArrowRight size={14} className="rotate-180" />
          Back to Grinding Media
        </Link>
      </div>
    </main>
  );
}