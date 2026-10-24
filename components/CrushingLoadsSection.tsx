"use client";
import { useState, useMemo } from "react";
import { FiSearch } from "react-icons/fi";

interface CrushingLoadRow {
  ballDia?: string;
  diaInch?: string;
  diaMm?: string;
  loadKg: string;
}

export default function CrushingLoadsSection({ rows }: { rows: CrushingLoadRow[] }) {
  const [query, setQuery] = useState("");

  const hasInchMm = rows[0]?.diaInch !== undefined && rows[0]?.diaMm !== undefined;

  const filteredRows = useMemo(() => {
    if (!query.trim()) return rows;
    const q = query.trim().toLowerCase();
    return rows.filter((row) =>
      hasInchMm
        ? row.diaInch?.toLowerCase().includes(q) || row.diaMm?.toLowerCase().includes(q)
        : row.ballDia?.toLowerCase().includes(q)
    );
  }, [rows, query, hasInchMm]);

  const mid = Math.ceil(filteredRows.length / 2);
  const columns = [filteredRows.slice(0, mid), filteredRows.slice(mid)];

  return (
    <section className="mb-10">
      {/* Header row: title + search, title stays centered overall */}
      <div className="relative flex items-center justify-center mb-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 text-center">
          Crushing Loads
        </h2>

        <div className="absolute right-0 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5">
          <FiSearch size={16} className="text-gray-400 shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search size..."
            className="w-36 sm:w-56 bg-transparent border-none outline-none text-sm text-gray-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {filteredRows.length === 0 ? (
        <p className="text-center text-sm text-gray-400 py-8">No matching sizes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {columns.map((colRows, colIdx) => (
            <div key={colIdx} className="overflow-hidden rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                {hasInchMm ? (
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="px-5 py-2.5 text-center" colSpan={2}>
                        Diameter
                      </th>
                      <th className="px-5 py-2.5 text-center" rowSpan={2}>
                        Minimum
                        <br />
                        Crushing Load (kgs)
                      </th>
                    </tr>
                    <tr className="bg-orange-50">
                      <th className="px-5 py-2 text-center border-t border-orange-100">Inch</th>
                      <th className="px-5 py-2 text-center border-t border-orange-100">mm</th>
                    </tr>
                  </thead>
                ) : (
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="px-5 py-3.5 text-left">Ball Diameter</th>
                      <th className="px-5 py-3.5 text-center">Crushing Load (kgs)</th>
                    </tr>
                  </thead>
                )}
                <tbody>
                  {colRows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      {hasInchMm ? (
                        <>
                          <td className="px-5 py-2.5 text-center">{row.diaInch}</td>
                          <td className="px-5 py-2.5 text-center">{row.diaMm}</td>
                        </>
                      ) : (
                        <td className="px-5 py-2.5">{row.ballDia}</td>
                      )}
                      <td className="px-5 py-2.5 text-center">{row.loadKg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}