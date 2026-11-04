"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight } from "react-icons/fi";

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
      label: "Grinding Media",
      image: "/images/grinding-media/grinding-media.jpg",
      imageAlt: "Ceramic balls — alumina oxide, zirconia oxide, silicon nitride",
      description:
        "Burnishing Media can be balls or peculiar shapes which are used for polishing the rough surfaces of many different metal components. The different shapes are designed to get into the varying crevices and contours of diverse metal products.",
      products: [
        {
          id: "ball-c-ref-001",
          name: "Steel Ball - Grinding Media",
          slug: "burnishing-media",
          image: "/images/grinding-media/grinding-media.jpg",
          imageAlt: "Steel Ball - Grinding Media",
          material: "Reference",
          grades: [],
        },
        {
          id: "ball-c-ref-002",
          name: "Ceramic Balls - Grinding Media",
          slug: "ceramic-ball-grinding-media",
          image: "/images/grinding-media/ceramic_ball_burnishing_media.jpg",
          imageAlt: "Ceramic Balls - Grinding Media",
          material: "Reference",
          grades: [],
        },
        {
          id: "ball-c-ref-003",
          name: "Glass Balls - Grinding Media",
          slug: "glass-ball-grinding-ball",
          image: "/images/grinding-media/glass_ball_burnishing_media.jpg",
          imageAlt: "Glass Balls - Grinding Media",
          material: "Reference",
          grades: [],
        },
        {
          id: "ball-c-ref-004",
          name: "Cast Iron Ball - Grinding Media",
          slug: "cast-iron-ball-grinding-media",
          image: "/images/grinding-media/cast_iron_ball_grinding_media.jpg",
          imageAlt: "Cast Iron Ball - Grinding Media",
          material: "Reference",
          grades: [],
        },
      ],
      applications: [],
    },
  ],
};

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function NonMetallicBallsPage() {
  const { categories } = grindingMedia;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCategory = categories[activeIndex];
  const half = Math.ceil(activeCategory.applications.length / 2);
  const appsCol1 = activeCategory.applications.slice(0, half);
  const appsCol2 = activeCategory.applications.slice(half);

  const prev = () => setActiveIndex((i) => (i - 1 + categories.length) % categories.length);
  const next = () => setActiveIndex((i) => (i + 1) % categories.length);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">Home</Link>
        <FiChevronRight size={13} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">Products</Link>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">Grinding-Media</span>
      </nav>

      {/* ══════════════════════════════════
          SECTION 1 — Category Slider
      ══════════════════════════════════ */}
      <section className="relative mb-14">

        {/* Tab pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveIndex(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-none cursor-pointer transition-all duration-200
                ${i === activeIndex
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-500"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Slide card */}
        <div className="flex rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white min-h-[380px]">

          {/* Left — Full bleed image, no overlay */}
          <div className="relative w-1/2 bg-gray-100 shrink-0">
            <Image
              src={activeCategory.image}
              alt={activeCategory.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right — Title + description only (no product list) */}
          <div className="flex flex-col justify-center w-1/2 px-10 py-10 bg-white">
            {/* <span className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
              Precision Engineered
            </span> */}

            <h1 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              {activeCategory.label}
            </h1>

            <p className="text-gray-500 text-sm leading-relaxed">
              {activeCategory.description}
            </p>

            {/* Stats row */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-orange-500">{activeCategory.products.length}</p>
                <p className="text-xs text-gray-400 mt-0.5">Variants</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-500">ISO</p>
                <p className="text-xs text-gray-400 mt-0.5">9001:2015</p>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicator dots */}
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
          SECTION 2 — Products Grid
          "View Details" now routes to the product's detail page
          (/products/grinding-media/[slug]) instead of opening a PDF.
      ══════════════════════════════════ */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {activeCategory.label} — Products
          </h2>
          <span className="text-sm text-gray-400">
            {activeCategory.products.length} variants
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-3 flex-1">
                {/* <p className="text-[0.75rem] text-gray-400 mb-0.5 line-clamp-1">
                  {product.material === "Reference" ? "Reference" : product.material.split("(")[0].trim()}
                </p> */}
                <h3 className="text-sm font-semibold text-gray-800 leading-snug mb-3 line-clamp-2 flex-1">
                  {product.name}
                </h3>
                {product.grades.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {product.grades.slice(0, 3).map((g) => (
                      <span key={g} className="text-[0.65rem] px-1.5 py-0.5 rounded bg-orange-50 text-orange-500 font-semibold">
                        {g}
                      </span>
                    ))}
                    {product.grades.length > 3 && (
                      <span className="text-[0.65rem] px-1.5 py-0.5 rounded bg-gray-100 text-gray-400 font-semibold">
                        +{product.grades.length - 3}
                      </span>
                    )}
                  </div>
                )}
                {/* Navigates to the in-site product detail page */}
                <Link
                  href={`/products/grinding-media/${product.slug}`}
                  className="flex items-center justify-center gap-1 w-full py-1.5 rounded-full border border-orange-400 text-orange-500 text-xs font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200 no-underline"
                >
                  View Details
                  <FiArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}