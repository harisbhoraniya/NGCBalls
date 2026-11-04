"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";
import { HiOutlineCog } from "react-icons/hi";
import ConnectModal from "@/components/ConnectModal"; // adjust the import path to wherever you place ConnectModal.tsx

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const grindingMedia = {
  page: {
    title: "Ball Valve Ball Components",
    slug: "ball-valve-component",
    metaDescription:
      "Precision-engineered non-metallic balls in ceramic, glass, and plastic — manufactured to DIN, ISO, and ABMA standards for demanding industrial, chemical, and precision applications.",
  },

  categories: [
    {
      id: "ceramic",
      label: "Ball Valve Components",
      image: "/images/ball-valve/banner_image.jpg",
      imageAlt: "Ceramic balls — alumina oxide, zirconia oxide, silicon nitride",
      description:
        "In the industrial valve and fluid control industry, a ball valve is a quarter-turn rotational motion valve that utilizes a bored, spherical ball to start, stop, or regulate fluid flow. When the port through the ball is aligned with the pipeline, the valve is open, allowing full, unobstructed flow with minimal pressure drop; when rotated 90 degrees, the solid side faces the flow, creating a positive, leak-tight shutoff.",
      products: [
        {
          id: "ball-c-ref-001",
          name: "Ball Valve Stem Pin",
          slug: "ball-valve-stem-pin",
          image: "/images/ball-valve/ball-valve-stem-pin.jpg",
          imageAlt: "Ball Valve Stem Pin",
          material: "AISI 304/304L, AISI 316/316L, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex",
        },
        {
          id: "ball-c-ref-002",
          name: "Valve Balls",
          slug: "valve-balls",
          image: "/images/ball-valve/ball-valve-ball.jpg",
          imageAlt: "Ball Valve Balls",
          material: "AISI 304/304L, AISI 316/316L, AISI 420/420C, AISI 440C, Hastelloy, K Monel 400/500, Inconel 725/825, Duplex, Stellite",
        },
        {
          id: "ball-c-ref-003",
          name: "Ball Valve Seat Rings",
          slug: "ball-valve-seat-rings",
          image: "/images/ball-valve/ball-valve-seat-ring.jpg",
          imageAlt: "Ball Valve Seat Rings",
          material: "As per customer requirements",
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function BallValve() {
  const { categories } = grindingMedia;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const activeCategory = categories[activeIndex];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">

      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8 flex-wrap">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">Home</Link>
        <FiChevronRight size={11} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">Products</Link>
        <FiChevronRight size={11} />
        <span className="text-gray-800 font-medium">Ball Valve Components</span>
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

        {/* Slide card */}
        <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white">

          <div className="relative w-full md:w-1/2 bg-gray-100 shrink-0" style={{ minHeight: "220px" }}>
            <div className="relative w-full h-56 sm:h-72 md:h-full">
              <Image
                src={activeCategory.image}
                alt={activeCategory.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

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
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100 flex items-center gap-6 sm:gap-8">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">{activeCategory.products.length}</p>
                <p className="text-[0.65rem] sm:text-xs text-gray-400 mt-0.5">Variants</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-bold text-orange-500">ISO</p>
                <p className="text-[0.65rem] sm:text-xs text-gray-400 mt-0.5">9001:2015</p>
              </div>
            </div>
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
            {activeCategory.label} — Types of Ball Valve
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
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-2.5 sm:p-3 flex-1">
                {/* <p className="text-[0.65rem] sm:text-[0.75rem] text-gray-400 mb-0.5 line-clamp-1">
                  {product.material}
                </p> */}
                <h3 className="text-xs sm:text-sm font-semibold text-gray-800 leading-snug mb-2 sm:mb-3 line-clamp-2 flex-1">
                  {product.name}
                </h3>

                {/* View Product — now navigates to its own page */}
                <Link
                  href={`/products/ball-valve-component/${product.slug}`}
                  className="mt-auto w-full flex items-center justify-center gap-1 text-center text-[0.7rem] sm:text-xs font-semibold text-orange-500 border border-orange-200 rounded-lg py-1.5 sm:py-2 hover:bg-orange-500 hover:text-white transition-all duration-200 no-underline"
                >
                  View Details
                  <FiArrowRight size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3 — Machine Components CTA
      ══════════════════════════════════ */}
      <section className="mb-4 sm:mb-6">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-9 sm:px-10 sm:py-12"
          style={{ background: "#1A1A1A" }}
        >
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full pointer-events-none"
            style={{ background: "rgba(232,101,10,0.12)" }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex items-start gap-4 text-center md:text-left flex-col md:flex-row items-center md:items-start">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: "rgba(232,101,10,0.12)", color: "var(--orange)" }}
              >
                <HiOutlineCog size={22} />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-bold text-white mb-2">
                  We Also Provide Machine Components<br className="hidden sm:block" /> For All Industries
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg">
                  Beyond ball valve components, our custom-engineered machine components are built to your exact specifications — reach out and let&apos;s discuss your requirement.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsConnectOpen(true)}
              className="btn-primary shrink-0 whitespace-nowrap"
            >
              Enquire Now <FiArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Machine Components enquiry popup */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
    </main>
  );
}