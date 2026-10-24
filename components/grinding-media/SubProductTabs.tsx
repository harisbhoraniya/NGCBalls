"use client";

import { useState } from "react";

// ─────────────────────────────────────────────
// TYPES
// Adjust this to match / import your real type from
// "@/lib/data/grinding-media-details" if one already exists
// (e.g. `GrindingSubProduct`). Shape below matches the fields
// referenced in the original page.tsx.
// ─────────────────────────────────────────────
export interface SubProductProcessCharacteristic {
  title: string;
  points: string[];
}

export interface SubProduct {
  name: string;
  series?: string;
  description: string;
  chemicalComposition?: { label: string; value: string }[];
  physicalProperties?: { label: string; value: string }[];
  particleSize?: { name: string; size: string }[];
  technicalParameters?: {
    columns: string[];
    rows: { label: string; values: string[] }[];
  };
  processCharacteristics?: SubProductProcessCharacteristic[];
  ballDiameterSpecification?: {
    headers: string[];
    rows: string[][];
    note?: string;
  };
  applications?: string[];
}

// ─────────────────────────────────────────────
// SPEC TABLE — label + single value, left-aligned
// (same as the one in page.tsx, duplicated here so this
// component is self-contained)
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
            <span className="text-gray-500 shrink-0 sm:w-32">{row.label}</span>
            <span className="text-gray-800 text-left leading-relaxed">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// DETAIL PANEL — renders one sub product's full content
// (moved verbatim out of the old grid-card body)
// ─────────────────────────────────────────────
function SubProductDetail({ sub }: { sub: SubProduct }) {
  const hasAdvancedData =
    !!sub.particleSize ||
    !!sub.technicalParameters ||
    !!sub.processCharacteristics ||
    !!sub.ballDiameterSpecification ||
    !!sub.applications;

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-7 flex flex-col gap-5">
      {/* Product heading */}
      <div>
        <h2 className="text-lg font-bold text-gray-900 mb-1.5">{sub.name}</h2>

        {sub.series && (
          <p className="text-xs font-semibold text-orange-500 mb-2">{sub.series}</p>
        )}

        <p className="text-sm text-gray-500 leading-relaxed">{sub.description}</p>
      </div>

      {/* ═══════════════════════════════
          BASIC PRODUCTS (chem comp / physical props only)
         ═══════════════════════════════ */}
      {!hasAdvancedData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SpecTable title="Chemical Composition" rows={sub.chemicalComposition} />
          <SpecTable title="Physical Properties" rows={sub.physicalProperties} />
        </div>
      )}

      {/* ═══════════════════════════════
          ADVANCED PRODUCTS (zirconia beads etc.)
         ═══════════════════════════════ */}
      {hasAdvancedData && (
        <>
          {/* Particle Size */}
          {sub.particleSize && sub.particleSize.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
                Particle Size
              </h3>

              <div className="rounded-lg border border-gray-100 overflow-hidden">
                {sub.particleSize.map((item, i) => (
                  <div
                    key={item.name}
                    className={`px-3 py-3 flex items-center justify-between gap-4 text-xs ${i % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                  >
                    <span className="text-gray-700">{item.name}</span>
                    <span className="font-semibold text-gray-800 whitespace-nowrap">
                      {item.size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technical Parameters */}
          {sub.technicalParameters && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 text-center">
                Technical Parameters
              </h3>

              <div className="rounded-xl border border-gray-100 overflow-hidden overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-orange-50">
                    <tr>
                      {sub.technicalParameters.columns.map((column) => (
                        <th key={column} className="px-3 py-3 text-left whitespace-nowrap">
                          {column}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {sub.technicalParameters.rows.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-3 py-2.5 text-gray-500 whitespace-nowrap">
                          {row.label}
                        </td>
                        {row.values.map((value, j) => (
                          <td key={j} className="px-3 py-2.5 text-gray-800 whitespace-nowrap">
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Product Process Characteristics */}
          {sub.processCharacteristics && sub.processCharacteristics.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 text-center">
                Product Process Characteristics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {sub.processCharacteristics.map((characteristic) => (
                  <div key={characteristic.title} className="rounded-lg border border-gray-100 p-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2">
                      {characteristic.title}
                    </h4>

                    <ul className="space-y-2">
                      {characteristic.points.map((point, i) => (
                        <li key={i} className="flex gap-2 text-xs text-gray-600 leading-relaxed">
                          <span className="text-orange-500 shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ball Diameter Specification */}
          {sub.ballDiameterSpecification && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 text-center">
                Ball Diameter Specification
              </h3>

              <div className="rounded-xl border border-gray-100 overflow-hidden overflow-x-auto">
                <table className="w-full text-xs">
                  <thead className="bg-orange-50">
                    <tr>
                      {sub.ballDiameterSpecification.headers.map((header) => (
                        <th key={header} className="px-3 py-3 text-left whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>

                  <tbody>
                    {sub.ballDiameterSpecification.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, j) => (
                          <td key={j} className="px-3 py-2.5 text-gray-700 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {sub.ballDiameterSpecification.note && (
                <p className="text-[10px] text-gray-400 mt-2">
                  {sub.ballDiameterSpecification.note}
                </p>
              )}
            </div>
          )}

          {/* Applications */}
          {sub.applications && sub.applications.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2">
                Applications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {sub.applications.map((application) => (
                  <div key={application} className="flex gap-2 text-xs text-gray-600">
                    <span className="text-orange-500">•</span>
                    <span>{application}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT — side tab list + active detail panel
// ─────────────────────────────────────────────
export default function SubProductTabs({ subProducts }: { subProducts: SubProduct[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!subProducts || subProducts.length === 0) {
    return null;
  }

  const active = subProducts[activeIndex];

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {/* ── TAB LIST ── */}
      {/* Horizontal scroll strip on mobile, vertical sidebar on desktop */}
      <nav
        className="
          flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible
          shrink-0 sm:w-56 pb-2 sm:pb-0
        "
        aria-label="Product grades"
      >
        {subProducts.map((sub, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={sub.name}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-current={isActive ? "true" : undefined}
              className={`
                text-left whitespace-nowrap sm:whitespace-normal shrink-0
                rounded-lg px-4 py-2.5 text-sm font-medium transition-colors
                border
                ${isActive
                  ? "bg-orange-50 border-orange-200 text-orange-600"
                  : "bg-white border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
              `}
            >
              {sub.name}
            </button>
          );
        })}
      </nav>

      {/* ── ACTIVE PRODUCT DETAIL ── */}
      <div className="flex-1 min-w-0">
        <SubProductDetail sub={active} />
      </div>
    </div>
  );
}