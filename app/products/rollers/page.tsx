"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight, FiInfo } from "react-icons/fi";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const grindingMedia = {
  page: {
    title: "Rollers",
    slug: "rollers",
    metaDescription:
      "Precision-engineered industrial rollers in cylindrical, taper, needle, and spherical profiles manufactured to DIN and ISO standards.",
  },

  categories: [
    {
      id: "ceramic",
      label: "Rollers",
      image: "/images/Rollers/rollers.png",
      imageAlt: "Industrial Rollers — Cylindrical, Taper, Needle, Spherical",
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
    },
  ],
};

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
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3 sm:mb-5">
              {activeCategory.label}
            </h1>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              {activeCategory.description}
            </p>
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

        {/* Custom Specifications Note Card */}
        <div className="mt-8 sm:mt-10 mx-auto max-w-2xl rounded-2xl border border-orange-200/80 bg-gradient-to-r from-orange-50/70 via-white to-orange-50/70 p-4 sm:p-5 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
              <FiInfo size={17} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-[0.65rem] sm:text-[0.7rem] font-bold uppercase tracking-wider text-orange-600 bg-orange-100/80 px-2.5 py-0.5 rounded-full">
                  Custom Engineering
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">
                  Made to Order
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed m-0">
                <span className="font-semibold text-gray-900">Note:</span> Size, material, and tolerances manufactured as per your requirement / drawing.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
