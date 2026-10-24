"use client";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiChevronRight } from "react-icons/fi";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const ballCategories = [
  {
    id: "metallic",
    label: "Metallic Balls",
    href: "/products/balls/metallic-balls",
    image: "/images/Ball/Metallic_Ball/Ferous_Ball.jpg",
    imageAlt: "Metallic balls — chrome steel, stainless steel, brass, titanium",
    description:
      "Our range of precision metallic balls includes ferrous and non-ferrous variants, available in a wide selection of materials to suit diverse industrial applications. Conforming to DIN 5401, ISO 3290, and ABMA standards, they offer exceptional dimensional accuracy, durability, and reliable performance.",
    stat: "20+",
    statLabel: "Grades",
  },
  {
    id: "non-metallic",
    label: "Non-Metallic Balls",
    href: "/products/balls/non-metallic-balls",
    image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
    imageAlt: "Non-metallic balls — ceramic, glass, plastic",
    description:
      "Precision Ceramic, Glass, and Plastic balls available for applications requiring excellent chemical resistance, electrical insulation, low friction, and dimensional stability.",
    stat: "3",
    statLabel: "Material Families",
  },
];

// ─────────────────────────────────────────────
// CARD COMPONENT
// ─────────────────────────────────────────────
function BallCategoryCard({
  label,
  href,
  image,
  imageAlt,
  description,
  stat,
  statLabel,
  reverse = false,
}: (typeof ballCategories)[number] & { reverse?: boolean }) {
  return (
    <Link
      href={href}
      className={`group flex flex-col ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"
        } rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200 no-underline min-h-[260px] sm:min-h-[300px]`}
    >
      {/* Image side */}
      <div className="relative w-full sm:w-1/2 h-48 sm:h-auto bg-gray-100 overflow-hidden shrink-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Text side */}
      <div className="flex flex-col justify-center flex-1 px-6 py-6 sm:px-8 sm:py-8">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5 leading-snug">
          {label}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <p className="text-lg font-bold text-orange-500 leading-none">{stat}</p>
            <p className="text-[0.65rem] text-gray-400 mt-1">{statLabel}</p>
          </div>

          <span className="flex items-center gap-1.5 text-xs font-semibold text-orange-500 bg-orange-50 px-4 py-2 rounded-full border border-orange-200 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-200">
            View Products
            <FiArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function BallsLandingPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ── */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">
          Home
        </Link>
        <FiChevronRight size={13} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">
          Products
        </Link>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">Balls</span>
      </nav>

      {/* ── Heading ── */}
      <div className="mb-10 max-w-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Precision Balls
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          Choose a material family below to explore our complete range of precision balls—from ferrous and non-ferrous metals to ceramic, glass and plastics available in internationally recognized precision grades and trusted across demanding industrial applications.
        </p>
      </div>

      {/* ── Category Cards ── */}
      <section className="flex flex-col gap-6">
        {ballCategories.map((cat, i) => (
          <BallCategoryCard key={cat.id} {...cat} reverse={i % 2 === 1} />
        ))}
      </section>
    </main>
  );
}