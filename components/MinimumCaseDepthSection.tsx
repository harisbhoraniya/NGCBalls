"use client";

interface CaseDepthRow {
  ballDia: string;
  caseDepth: string;
}

function CaseDepthTable({
  title,
  rows,
}: {
  title: string;
  rows: CaseDepthRow[];
}) {
  return (
    <div className="flex-1">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2 text-center">
        {title}
      </h3>
      <div className="overflow-hidden rounded-xl border border-gray-100">
        <table className="w-full text-sm"> 
          <thead className="bg-orange-50">
            <tr>
              <th className="px-4 py-3 text-left">Ball Diameter</th>
              <th className="px-4 py-3 text-left">Case Depth</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-4 py-3 whitespace-nowrap">{row.ballDia}</td>
                <td className="px-4 py-3 whitespace-nowrap">{row.caseDepth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MinimumCaseDepthSection({
  rows,
}: {
  rows: CaseDepthRow[];
}) {
  // Split into two roughly-equal halves — first half = smaller diameters,
  // second half = larger diameters.
  const mid = Math.ceil(rows.length / 2);
  const leftRows = rows.slice(0, mid);
  const rightRows = rows.slice(mid);

  return (
    <section className="mb-10">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-3">
        Minimum Case Depth
      </h2>
      <div className="flex flex-col sm:flex-row gap-6">
        <CaseDepthTable title="" rows={leftRows} />
        <CaseDepthTable title="" rows={rightRows} />
      </div>
    </section>
  );
}