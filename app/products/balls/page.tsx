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
const nonMetallicMaterials = [
  {
    name: "Ceramic Balls",
    image: "/images/Ball/Non_Metallic_Ball/ceramic.png",
    imageAlt: "Ceramic precision balls — Silicon Nitride, Alumina, Zirconia",
    desc: "Silicon Nitride (Si₃N₄), Alumina (Al₂O₃), Zirconia (ZrO₂), Ruby & Sapphire",
  },
  {
    name: "Glass Balls",
    image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
    imageAlt: "Glass precision balls — Soda-lime and Borosilicate",
    desc: "Soda-Lime Glass, Borosilicate Glass, and Black Glass",
  },
  {
    name: "Plastic Balls",
    image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
    imageAlt: "Plastic precision balls — Delrin, Nylon, Polypropylene, PTFE",
    desc: "Delrin (POM), Nylon (PA66), Polypropylene (PP), PTFE (Teflon), PEEK",
  },
];

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
        <span className="text-gray-800 font-medium">Precision Balls</span>
      </nav>

      {/* ── Heading ── */}
      <div className="mb-10 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Precision Balls – Material Categories
        </h1>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
          N Gandhi &amp; Co. manufactures precision balls in metallic and non-metallic materials conforming to DIN 5401, ISO 3290-1, and ABMA Std 10 standards. Explore our metallic alloys and non-metallic material families below.
        </p>
      </div>

      {/* ── Category Sections ── */}
      <div className="flex flex-col gap-10">
        {/* 1. Metallic Balls */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="relative w-full lg:w-1/2 h-64 sm:h-80 rounded-xl overflow-hidden bg-gray-100 shrink-0">
              <Image
                src="/images/Ball/Metallic_Ball/Ferous_Ball.jpg"
                alt="Metallic balls — chrome steel, stainless steel, tool steel, superalloys"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold w-fit mb-3">
                Metallic Materials
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-snug">
                Metallic Balls (Ferrous &amp; Non-Ferrous)
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Our precision metallic ball portfolio encompasses high carbon chrome steel (AISI 52100 / 100Cr6, 60–65 HRC), martensitic and austenitic stainless steels (AISI 440C, 420, 304, 316), carbon steels (AISI 1010, 1065-86), tool steels (AISI S2), alongside specialized non-ferrous alloys including brass, copper, titanium, tungsten carbide, and nickel superalloys (Inconel, Monel, Hastelloy).
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["AISI 52100 Chrome Steel", "AISI 440C / 420 / 316 / 304", "Tungsten Carbide", "Titanium Alloys", "Inconel & Monel"].map((item) => (
                  <span key={item} className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 font-medium">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  <p className="text-xl font-bold text-orange-500 leading-none">20+</p>
                  <p className="text-[0.7rem] text-gray-400 mt-1 uppercase font-semibold">Alloy Grades</p>
                </div>
                <Link
                  href="/products/balls/metallic-balls"
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-full transition-colors duration-200 no-underline shadow-sm"
                >
                  View Metallic Balls
                  <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Non-Metallic Balls (Visually Separate Container) */}
        <div className="rounded-2xl border-2 border-orange-100 bg-gradient-to-b from-orange-50/20 to-white shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold mb-2">
                Non-Metallic Materials
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                Non-Metallic Balls (Glass, Plastic &amp; Ceramic)
              </h2>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">
                Engineered for extreme wear, chemical resistance, electrical insulation, and lightweight applications where metallic balls cannot perform.
              </p>
            </div>
            <Link
              href="/products/balls/non-metallic-balls"
              className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 px-5 py-2.5 rounded-full transition-colors duration-200 no-underline shadow-sm shrink-0"
            >
              All Non-Metallic Balls
              <FiArrowRight size={14} />
            </Link>
          </div>

          {/* 3 Separate Images Representing Non-Metallic Materials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {nonMetallicMaterials.map((mat) => (
              <Link
                key={mat.name}
                href="/products/balls/non-metallic-balls"
                className="group flex flex-col rounded-xl border border-gray-100 bg-white overflow-hidden hover:shadow-md hover:border-orange-300 transition-all duration-200 no-underline"
              >
                <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                  <Image
                    src={mat.image}
                    alt={mat.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 text-white text-[0.68rem] font-semibold tracking-wider uppercase backdrop-blur-xs">
                    Non-Metallic
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1.5">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">
                    {mat.desc}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-semibold text-orange-500 group-hover:text-orange-600">
                    Explore Details <FiArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}