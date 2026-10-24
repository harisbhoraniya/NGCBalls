import Image from "next/image";
import { FiDownload, FiFileText, FiBarChart2 } from "react-icons/fi";

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────
export type TechnicalDoc = {
  id: string;
  name: string;
  slug: string;
  image: string;
  imageAlt: string;
  type: "technical" | "dimensional";
};

type TechnicalDataSectionProps = {
  docs: TechnicalDoc[];
  categoryLabel: string;
};

// ─────────────────────────────────────────────
// PDF PATH HELPER
// ─────────────────────────────────────────────
function getTechnicalDocPdfPath(slug: string): string {
  return `/pdfs/balls/non-metallic/docs/${slug}.pdf`;
}

// ─────────────────────────────────────────────
// BADGE CONFIG
// ─────────────────────────────────────────────
const badgeConfig = {
  technical: {
    icon: FiFileText,
    label: "Technical Data",
    className: "bg-orange-500 text-white",
  },
  dimensional: {
    icon: FiBarChart2,
    label: "Dimensional Chart",
    className: "bg-gray-900 text-white",
  },
};

// ─────────────────────────────────────────────
// TECHNICAL DATA CARD
// ─────────────────────────────────────────────
function TechnicalDocCard({ doc }: { doc: TechnicalDoc }) {
  const badge = badgeConfig[doc.type];
  const BadgeIcon = badge.icon;
  const pdfPath = getTechnicalDocPdfPath(doc.slug);

  return (
    <div className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg hover:border-orange-200 transition-all duration-300">

      {/* ── Image ── */}
      <div className="relative w-full aspect-[16/9] bg-gray-50 overflow-hidden">
        <Image
          src={doc.image}
          alt={doc.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Type badge */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider ${badge.className}`}
        >
          <BadgeIcon size={10} />
          {badge.label}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="text-sm font-bold text-gray-800 leading-snug mb-4 flex-1">
          {doc.name}
        </h3>

        {/* Download button */}
        <a
          href={pdfPath}
          download
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 active:scale-95 transition-all duration-200 no-underline shadow-sm shadow-orange-200"
        >
          <FiDownload size={13} />
          Download Data
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// TECHNICAL DATA SECTION — DEFAULT EXPORT
// ─────────────────────────────────────────────
export default function TechnicalDataSection({ docs, categoryLabel }: TechnicalDataSectionProps) {
  return (
    <section className="mb-14">

      {/* Section header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-orange-500" />
        <h2 className="text-xl font-bold text-gray-900">
          {categoryLabel} — Technical Data &amp; Charts
        </h2>
        <span className="ml-auto text-sm text-gray-400">
          {docs.length} document{docs.length !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {docs.map((doc) => (
          <TechnicalDocCard key={doc.id} doc={doc} />
        ))}
      </div>

    </section>
  );
}