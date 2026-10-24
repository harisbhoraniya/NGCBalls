"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiChevronRight } from "react-icons/fi";

// ─────────────────────────────────────────────
// SLIDER DATA — 5 product images (UNCHANGED)
// ─────────────────────────────────────────────
const slides = [
  {
    id: 1,
    src: "/images/Machined_Parts/Machined_Parts_new.png",
    alt: "Precision machined parts — ring gears, flanges, bevel gears, collets",
    caption: "Precision Machined Parts",
    sub: "Gears · Flanges · Collets · Ring Gears",
  },
  {
    id: 2,
    src: "/images/Machined_Parts/Sheet_Metal_new.png",
    alt: "Sheet metal and pressed parts — stampings, brackets, discs, cones",
    caption: "Sheet Metal & Pressed Parts",
    sub: "Stampings · Brackets · Pressed Discs · Formed Cones",
  },
  {
    id: 3,
    src: "/images/Machined_Parts/Small_Stamped_new.png",
    alt: "Small stamped and formed parts — clips, latches, springs, brackets",
    caption: "Small Stamped & Formed Parts",
    sub: "Clips · Latches · Formed Brackets · Precision Stampings",
  },
  {
    id: 4,
    src: "/images/Machined_Parts/CNC_Machined_Parts_new.png",
    alt: "CNC turned parts — shafts, pins, nozzles, connectors, studs",
    caption: "CNC Turned & Milled Parts",
    sub: "Shafts · Pins · Nozzles · Connectors · Studs",
  },
  {
    id: 5,
    src: "/images/Machined_Parts/heavy_machined_components_new.png",
    alt: "Heavy machined components — worm shafts, blocks, bushings, anti-vibration mounts",
    caption: "Heavy Machined Components",
    sub: "Worm Shafts · Blocks · Bushings · Anti-Vibration Mounts",
  },
];

// ─────────────────────────────────────────────
// FULL-WIDTH SLIDER COMPONENT (UNCHANGED)
// ─────────────────────────────────────────────
function HeroSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 200);
    },
    [animating]
  );

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <div className="relative w-full overflow-hidden bg-gray-900" style={{ height: "520px" }}>
      {/* Image */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
      </div>

      {/* Caption — bottom left */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 sm:px-12 sm:pb-12">
        <div
          className="transition-all duration-500"
          style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(8px)" : "translateY(0)" }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-400 mb-2">
            Machine Components
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-1">
            {slide.caption}
          </h2>
          <p className="text-sm text-gray-300">{slide.sub}</p>
        </div>
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer z-10"
      >
        <FiArrowLeft size={16} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer z-10"
      >
        <FiArrowRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0
              ${i === active ? "w-6 bg-orange-500" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>

      {/* Slide counter — top right */}
      <div className="absolute top-5 right-5 text-xs text-white/60 font-medium tabular-nums">
        {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// COMPACT SLIDER — used inside "Why Choose Us"
// ─────────────────────────────────────────────
function BenefitsSlider() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 200);
    },
    [animating]
  );

  const prev = () => goTo((active - 1 + slides.length) % slides.length);
  const next = () => goTo((active + 1) % slides.length);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[active];

  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden border border-gray-100 bg-white"
      style={{ height: "320px" }}
    >
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      >
        <Image
          src={slide.src}
          alt={slide.alt}
          fill
          className="object-contain p-6"
        />
      </div>

      {/* Prev / Next */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all cursor-pointer z-10"
      >
        <FiArrowLeft size={14} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-all cursor-pointer z-10"
      >
        <FiArrowRight size={14} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0
              ${i === active ? "w-5 bg-orange-500" : "w-1.5 bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// SECTION DIVIDER
// ─────────────────────────────────────────────
function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px flex-1 bg-gray-100" />
      <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-gray-400 whitespace-nowrap">
        {label}
      </p>
      <div className="h-px flex-1 bg-gray-100" />
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function MachineComponentsPage() {
  return (
    <main>

      {/* ══════════════════════════════════
          FULL-WIDTH HERO SLIDER (unchanged)
      ══════════════════════════════════ */}
      <HeroSlider />

      {/* ── Constrained content below the slider ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-10">
          <Link href="/" className="hover:text-orange-500 transition-colors no-underline">Home</Link>
          <FiChevronRight size={13} />
          <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">Products</Link>
          <FiChevronRight size={13} />
          <span className="text-gray-800 font-medium">Machine Components</span>
        </nav>

        {/* ══════════════════════════════════
            SECTION 1 — Machine Component
        ══════════════════════════════════ */}
        <section className="mb-16">
          <SectionLabel label="Machine Component" />

          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 leading-tight">
            Machine Component
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — Design & Specification */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                Components As Per Design And Specification
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                It is a type of contract manufacturing that refers to the process of building products to client work instructions. This is commonly used to manufacture components or pieces of equipment. In this process, a client will provide a product drawing that has been created by an engineer and contain exact specifications down to the millimetre or inch. The design will also outline the necessary materials needed to create the product, and then the product is created.
              </p>
            </div>

            {/* Right — Customer Specification */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                Machine Components As Per Customer Specification
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Design and spec refer to the process of building products from scratch, according to a client's need, function, or size requirements. Design and spec can help clients develop solutions for the problems they have. After discussing the desire and coming up with a solution, the manufacturer will assist in designing and creating a product. In the design and spec process, we will assist clients see a project through from beginning to end.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 2 — Benefits / The Right Choice
        ══════════════════════════════════ */}
        <section className="mb-16">
          <SectionLabel label="Why Choose Us" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Left — text */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                Benefits
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The main benefits of specification as per customer specification are accuracy and efficiency.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                The Right Choice
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                The main benefits of specification as per customer specification are accuracy and efficiency.
              </p>
            </div>

            {/* Right — slider */}
            <BenefitsSlider />
          </div>
        </section>

        {/* ══════════════════════════════════
            SECTION 3 — CTA
        ══════════════════════════════════ */}
        <section>
          <div className="rounded-2xl border border-orange-100 bg-orange-50 px-6 py-10 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                Need a custom component?
              </h2>
              <p className="text-sm text-gray-500">
                Share your drawing or specification and we'll get back to you with a quote.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors no-underline"
            >
              Request a Quote
              <FiArrowRight size={14} />
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}