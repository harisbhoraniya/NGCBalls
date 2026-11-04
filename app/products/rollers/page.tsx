"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight, FiMaximize2, FiLayers, FiFileText } from "react-icons/fi";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const grindingMedia = {
  page: {
    title: "Non-Metallic Balls",
    slug: "non-metallic-balls",
    metaDescription:
      "Precision-engineered non-metallic balls in ceramic, glass, and plastic — manufactured to DIN, ISO, and ABMA standards for demanding industrial, chemical, and precision applications.",
  },

  categories: [
    {
      id: "ceramic",
      label: "Rollers",
      image: "/images/Rollers/rollers.png",
      imageAlt: "Ceramic balls — alumina oxide, zirconia oxide, silicon nitride",
      description:
        "In the precision bearing industry, industrial rollers are high-performance rolling elements designed to minimize friction, optimize load distribution, and facilitate smooth rotational movement between moving parts. Unlike spherical balls, rollers utilize line contact rather than point contact, allowing them to support significantly higher radial or axial loads across an array of demanding industrial applications.",
      products: [
        {
          id: "roller-001",
          name: "Cylindrical Rollers",
          slug: "cylindrical-rollers",
          image: "/images/Rollers/cylindrical_roller.png",
          imageAlt: "Cylindrical Rollers",
          material: "As per requirement / drawing",
          grades: [],
        },
        {
          id: "roller-002",
          name: "Taper Rollers",
          slug: "taper-rollers",
          image: "/images/Rollers/taper_rollers.png",
          imageAlt: "Taper Rollers",
          material: "As per requirement / drawing",
          grades: [],
        },
        {
          id: "roller-003",
          name: "Needle Rollers",
          slug: "needle-rollers",
          image: "/images/Rollers/needle_rollers.png",
          imageAlt: "Needle Rollers",
          material: "As per requirement / drawing",
          grades: [],
        },
        {
          id: "roller-004",
          name: "Spherical Rollers",
          slug: "spherical-rollers",
          image: "/images/Rollers/spherical_rollers.png",
          imageAlt: "Spherical Rollers",
          material: "As per requirement / drawing",
          grades: [],
        },
      ],
      applications: [
        {
          label: "Bearings for construction and heavy duty machinery",
          image: "/images/applications/heavy-machinery.jpg",
          imageAlt: "Heavy duty construction machinery bearings",
        },
        {
          label: "Hinge in technical applications",
          image: "/images/applications/hinge.jpg",
          imageAlt: "Technical hinge applications",
        },
        {
          label: "Offshore, wind energy",
          image: "/images/applications/wind-energy.jpg",
          imageAlt: "Offshore wind energy turbines",
        },
        {
          label: "Linear slide – guidance",
          image: "/images/applications/linear-slide.jpg",
          imageAlt: "Linear slide guidance system",
        },
        {
          label: "Directional valve",
          image: "/images/applications/directional-valve.jpg",
          imageAlt: "Directional valve component",
        },
        {
          label: "Shafts, arbour or axles",
          image: "/images/applications/shafts.jpg",
          imageAlt: "Industrial shafts and axles",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// APPLICATION SLIDER COMPONENT
// ─────────────────────────────────────────────
// ─────────────────────────────────────────────
// APPLICATION LIST COMPONENT
// ─────────────────────────────────────────────
function ApplicationList({
  applications,
}: {
  applications: { label: string; image: string; imageAlt: string }[];
}) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-2 gap-x-4 list-none p-0 m-0">
      {applications.map((app) => (
        <li
          key={app.label}
          className="flex items-center gap-2 py-2 border-b border-gray-100 text-sm text-gray-700"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
          {app.label}
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function RollersPage() {
  const { categories } = grindingMedia;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = categories[activeIndex];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 flex-wrap">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">Home</Link>
        <FiChevronRight size={11} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">Products</Link>
        <FiChevronRight size={11} />
        {/* <FiChevronRight size={11} /> */}
        <span className="text-gray-800 font-medium">Rollers</span>
      </nav>

      {/* ══════════════════════════════════
          SECTION 1 — Category Slider
      ══════════════════════════════════ */}
      <section className="relative mb-10 sm:mb-14">

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
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

        {/* Slide card — stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">

          {/* Image — full width on mobile, half on md+ */}
          <div className="relative w-full md:w-1/2 bg-gray-100 shrink-0" style={{ minHeight: "220px" }}>
            {/* On mobile give it a fixed height; on md+ it stretches to match content */}
            <div className="relative w-full h-full sm:h-72 md:h-full">
              <Image
                src={activeCategory.image}
                alt={activeCategory.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text — full width on mobile, half on md+ */}
          <div className="flex flex-col justify-center w-full md:w-1/2 px-6 py-7 sm:px-8 sm:py-9 md:px-10 md:py-10 bg-white">
            {/* <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-widest text-orange-500 mb-2 sm:mb-3">
              Precision Engineered
            </span> */}
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3 sm:mb-5">
              {activeCategory.label}
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {activeCategory.description}
            </p>
            {/* <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{activeCategory.products.length}</p>
                <p className="text-[0.65rem] sm:text-xs text-gray-400 mt-0.5">Variants</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">ISO</p>
                <p className="text-[0.65rem] sm:text-xs text-gray-400 mt-0.5">9001:2015</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Slide indicator dots */}
        <div className="flex justify-center gap-2 mt-3 sm:mt-4">
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
          SECTION 2 — Products Grid
      ══════════════════════════════════ */}
      <section className="mb-10 sm:mb-14">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <h2 className="text-base sm:text-xl font-bold text-gray-900">
            {activeCategory.label} — Types of Rollers
          </h2>
          <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap ml-3">
            {activeCategory.products.length} variants
          </span>
        </div>

        {/* 2 cols on mobile, 3 on sm, 4 on lg */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {activeCategory.products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-md hover:border-orange-200 transition-all duration-200"
            >
              <div className="relative aspect-square bg-gray-50">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-2.5 sm:p-3 flex-1 text-center items-center">
                {/* <p className="text-[0.65rem] sm:text-[0.75rem] text-gray-400 mb-0.5 line-clamp-1">
                  {product.material === "Reference" ? "Reference" : product.material.split("(")[0].trim()}
                </p> */}
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug mb-2 sm:mb-3 line-clamp-2 flex-1">
                  {product.name}
                </h3>
                {product.grades.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1 mb-1 sm:mb-2">
                    {product.grades.slice(0, 3).map((g) => (
                      <span key={g} className="text-[0.6rem] sm:text-[0.65rem] px-1 sm:px-1.5 py-0.5 rounded bg-orange-50 text-orange-500 font-semibold">
                        {g}
                      </span>
                    ))}
                    {product.grades.length > 3 && (
                      <span className="text-[0.6rem] sm:text-[0.65rem] px-1 sm:px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 font-semibold">
                        +{product.grades.length - 3}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note — sizes & materials made to the customer's requirement */}
        <p className="italic text-xs sm:text-sm text-gray-400 text-center mt-4 sm:mt-5">
          <span className="font-semibold not-italic">Note:</span> Size &amp; material as per your requirement / drawing.
        </p>
      </section>

      {/* ══════════════════════════════════
          SECTION 3 — Technical Data Sheet & Size Range
      ══════════════════════════════════ */}
      <section className="mb-14">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gray-100" />
          <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-orange-500 whitespace-nowrap">
            Technical Data Sheet &amp; Specifications
          </p>
          <div className="h-px flex-1 bg-gray-100" />
        </div>

        {/* 3 cards: Size Range, Materials & Hardness, Precision Standards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {/* Card 1: Size Range */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
              <FiMaximize2 size={18} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Size Range &amp; Profiles</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Precision manufactured to exact diameters and lengths for radial, axial, and combined load duty.
            </p>
            <div className="space-y-2.5 text-xs text-gray-700 mt-auto pt-4 border-t border-gray-100">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Diameter Range:</span>
                <span className="font-medium text-gray-900">1.5 mm to 80 mm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Length Range:</span>
                <span className="font-medium text-gray-900">3.0 mm to 120 mm</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">End Profiles:</span>
                <span className="font-medium text-gray-900 text-right">Flat, Rounded, Crowned</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-gray-600">Custom Drawing:</span>
                <span className="font-medium text-orange-600">Made to print</span>
              </div>
            </div>
          </div>

          {/* Card 2: Materials & Hardness */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
              <FiLayers size={18} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Materials &amp; Hardness</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Standard bearing alloy steels and stainless grades heat-treated for maximum wear resistance.
            </p>
            <div className="space-y-2.5 text-xs text-gray-700 mt-auto pt-4 border-t border-gray-100">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Chrome Bearing Steel:</span>
                <span className="font-medium text-gray-900">AISI 52100 (60–66 HRC)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Martensitic Stainless:</span>
                <span className="font-medium text-gray-900">AISI 440C (58–63 HRC)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Austenitic Stainless:</span>
                <span className="font-medium text-gray-900">AISI 304 / 316 (Passivated)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-gray-600">Carbon Steel:</span>
                <span className="font-medium text-gray-900">Case / Through Hardened</span>
              </div>
            </div>
          </div>

          {/* Card 3: Quality & Standards */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-xs flex flex-col">
            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
              <FiFileText size={18} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-2">Standards &amp; Quality</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              Manufactured to international bearing precision standards with in-house dimensional inspection.
            </p>
            <div className="space-y-2.5 text-xs text-gray-700 mt-auto pt-4 border-t border-gray-100">
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Tolerance Grades:</span>
                <span className="font-medium text-gray-900">G1, G2, G3, G5</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Standards:</span>
                <span className="font-medium text-gray-900">DIN 5402, ISO 3096</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-50">
                <span className="font-semibold text-gray-600">Certification:</span>
                <span className="font-medium text-gray-900">ISO 9001:2015</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-semibold text-gray-600">Batch Inspection:</span>
                <span className="font-medium text-orange-600">100% Verified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Table */}
        <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-xs">
          <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2">
            <h4 className="text-sm font-bold text-gray-900">Roller Specifications By Type</h4>
            <span className="text-xs text-gray-400">Manufactured to ISO 3096 &amp; DIN 5402</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/40 text-gray-500 uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4">Roller Type</th>
                  <th className="py-3 px-4">Standard Diameter Range</th>
                  <th className="py-3 px-4">Standard Length Range</th>
                  <th className="py-3 px-4">Primary Materials</th>
                  <th className="py-3 px-4">Key Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                <tr className="hover:bg-orange-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Cylindrical Rollers</td>
                  <td className="py-3.5 px-4">Φ3.0 mm – Φ60.0 mm</td>
                  <td className="py-3.5 px-4">5.0 mm – 100.0 mm</td>
                  <td className="py-3.5 px-4">AISI 52100, 440C, Custom</td>
                  <td className="py-3.5 px-4">High radial load capability, ground flat or rounded ends</td>
                </tr>
                <tr className="hover:bg-orange-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Taper Rollers</td>
                  <td className="py-3.5 px-4">Φ5.0 mm – Φ75.0 mm</td>
                  <td className="py-3.5 px-4">8.0 mm – 110.0 mm</td>
                  <td className="py-3.5 px-4">AISI 52100 Chrome Steel</td>
                  <td className="py-3.5 px-4">Combined radial and heavy axial thrust load management</td>
                </tr>
                <tr className="hover:bg-orange-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Needle Rollers</td>
                  <td className="py-3.5 px-4">Φ1.5 mm – Φ6.0 mm</td>
                  <td className="py-3.5 px-4">5.8 mm – 50.0 mm</td>
                  <td className="py-3.5 px-4">AISI 52100, AISI 304/316</td>
                  <td className="py-3.5 px-4">Compact radial cross-section, high capacity in limited space</td>
                </tr>
                <tr className="hover:bg-orange-50/20 transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-gray-900">Spherical Rollers</td>
                  <td className="py-3.5 px-4">Φ10.0 mm – Φ80.0 mm</td>
                  <td className="py-3.5 px-4">12.0 mm – 120.0 mm</td>
                  <td className="py-3.5 px-4">Bearing Chrome Steel</td>
                  <td className="py-3.5 px-4">Self-aligning barrel profile, shock resistant, heavy industrial duty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4 — Applications
      ══════════════════════════════════ */}
      <section className="mb-10 sm:mb-14">
        <h2 className="text-base sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
          Applications
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {activeCategory.applications.map((app) => (
            <div
              key={app.label}
              className="flex items-center justify-center text-center rounded-xl border border-gray-100 bg-white p-4 sm:p-5 hover:shadow-md hover:border-orange-200 transition-all duration-200 min-h-[80px] sm:min-h-[96px]"
            >
              <p className="text-xs sm:text-sm font-medium text-gray-700 leading-snug">
                {app.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}