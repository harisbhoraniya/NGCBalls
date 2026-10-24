"use client";
import { useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import { FiX, FiSearch, FiDownload } from "react-icons/fi";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
export interface DataTableColumn<T> {
  key: keyof T;
  label: string;
  align?: "left" | "right" | "center";
}

interface DataTableModalProps<T extends Record<string, any>> {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  columns: DataTableColumn<T>[];
  rows: T[];
  searchKeys?: (keyof T)[]; // which columns the search box filters on
  footnote?: string;
  downloadHref?: string; // optional: still offer the PDF as a secondary option
}

// ─────────────────────────────────────────────
// Modal
// ─────────────────────────────────────────────
export function DataTableModal<T extends Record<string, any>>({
  isOpen,
  onClose,
  title,
  subtitle,
  columns,
  rows,
  searchKeys,
  footnote,
  downloadHref,
}: DataTableModalProps<T>) {
  const [query, setQuery] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Reset search each time it opens
  useEffect(() => {
    if (isOpen) setQuery("");
  }, [isOpen]);

  const filterKeys = searchKeys ?? columns.map((c) => c.key);

  const filteredRows = useMemo(() => {
    if (!query.trim()) return rows;
    const q = query.trim().toLowerCase();
    return rows.filter((row) =>
      filterKeys.some((key) => String(row[key]).toLowerCase().includes(q))
    );
  }, [rows, query, filterKeys]);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-3 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="data-table-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900/50 backdrop-blur-[2px]"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-3xl max-h-[85vh] bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden animate-[fadeIn_0.15s_ease-out]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-gray-100 shrink-0">
          <div className="min-w-0">
            <h2
              id="data-table-modal-title"
              className="text-base sm:text-lg font-bold text-gray-900 leading-snug"
            >
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-200 cursor-pointer border-none bg-gray-50"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Search */}
        <div className="px-5 sm:px-6 py-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-full px-3.5 py-2">
            <FiSearch size={14} className="text-gray-400 shrink-0" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search size, e.g. 1/4, 6.35, or 6mm..."
              className="w-full bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-y-auto flex-1">
          <table className="w-full text-sm border-collapse">
            <thead className="sticky top-0 bg-white z-10">
              <tr className="border-b border-gray-100">
                {columns.map((col) => (
                  <th
                    key={String(col.key)}
                    className={`px-4 sm:px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-gray-400 whitespace-nowrap ${col.align === "right"
                      ? "text-right"
                      : col.align === "center"
                        ? "text-center"
                        : "text-left"
                      }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-5 py-10 text-center text-sm text-gray-400"
                  >
                    No matching sizes found.
                  </td>
                </tr>
              ) : (
                filteredRows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-gray-50 hover:bg-orange-50/60 transition-colors ${i % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                      }`}
                  >
                    {columns.map((col) => (
                      <td
                        key={String(col.key)}
                        className={`px-4 sm:px-5 py-2 text-gray-700 whitespace-nowrap ${col.align === "right"
                          ? "text-right font-medium"
                          : col.align === "center"
                            ? "text-center"
                            : "text-left"
                          }`}
                      >
                        {String(row[col.key])}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-5 sm:px-6 py-3 border-t border-gray-100 shrink-0 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          {footnote ? (
            <p className="text-[0.7rem] text-gray-400 leading-relaxed">{footnote}</p>
          ) : (
            <span className="text-[0.7rem] text-gray-400">
              {filteredRows.length} of {rows.length} sizes
            </span>
          )}
          {downloadHref && (
            <a
              href={downloadHref}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start sm:self-auto shrink-0 flex items-center gap-1.5 text-[0.7rem] font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 no-underline"
            >
              Download PDF
              <FiDownload size={11} />
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}