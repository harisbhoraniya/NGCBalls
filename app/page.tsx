"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight, FiArrowLeft, FiAward, FiGlobe, FiBox, FiShield,
  FiCheckCircle, FiChevronRight, FiPlay,
} from "react-icons/fi";
import {
  HiOutlineChip, HiOutlineCog, HiOutlineSparkles,
  HiOutlineLightningBolt, HiOutlineRefresh,
  HiOutlineBeaker, HiOutlineTemplate,
} from "react-icons/hi";
import { BsSpeedometer2, BsGearFill } from "react-icons/bs";
import { TbRulerMeasure, TbAtom } from "react-icons/tb";
import ConnectModal from "@/components/ConnectModal";
import PdfModal from "@/components/PdfModal";

/* ─── Data ──────────────────────────────────────────────────────── */

const heroSlides = [
  {
    id: 1,
    image: "/images/Banner_09.jpg",
    tag: "Precision Engineering",
    headline: ["High Performance", "Precision"],
    sub: "World-class Metallic & Non-Metallic Balls and Rollers engineered for accuracy, load endurance, and durability.",
  },
  {
    id: 2,
    image: "/images/Banner_10.jpg",
    tag: "30+ Years of Excellence",
    headline: ["Three Decades of", "Industrial Trust"],
    sub: "From a focused trading unit to a globally recognized manufacturer — trusted across 9+ countries worldwide.",
  },
  {
    id: 4,
    image: "/images/Banner_11.png",
    tag: "Fluid Control Solutions",
    headline: ["Ball Valve Balls &", "Components"],
    sub: "Precision-engineered valve balls, ceramic valve balls, stem pins, and seat rings built for leak-proof performance and long service life.",
  },
  {
    id: 5,
    image: "/images/Banner_12.png",
    tag: "Built for High Loads",
    headline: ["Precision Rollers for", "Every Application"],
    sub: "Taper, cylindrical, and spherical rollers engineered to handle demanding load-bearing and high-speed motion environments.",
  },
];

const stats = [
  { number: "30+", label: "Years of Excellence" },
  { number: "750T", label: "Ready Stock" },
  { number: "9+", label: "Countries Served" },
  { number: "20+", label: "OEM Partnerships" },
];

/* ── B2B Core Product Groups ── */
const b2bProductGroups = [
  {
    name: "Precision Balls",
    category: "Metallic & Non-Metallic",
    href: "/products/balls",
    image: "/images/Ball/Metallic_Ball/Ferous_Ball.jpg",
    desc: "Chrome steel (AISI 52100), stainless steel alloys, ceramic (Si₃N₄, Al₂O₃, ZrO₂), plastic, and glass precision balls manufactured to ISO 3290-1 and DIN 5401.",
    badge: "Grades 3 to 100",
  },
  {
    name: "Precision Rollers",
    category: "Cylindrical, Taper & Spherical",
    href: "/products/rollers",
    image: "/images/Rollers/rollers.png",
    desc: "High-capacity rolling elements engineered with micro-finished crowned profiles for superior radial and thrust load endurance under DIN 5402 standards.",
    badge: "Through-Hardened 60–65 HRC",
  },
  {
    name: "Grinding & Burnishing Media",
    category: "Finishing & Ultrafine Milling",
    href: "/products/grinding-media",
    image: "/images/grinding-media/grinding-media.jpg",
    desc: "Steel burnishing media (balls, ball-cones, pins), high-density ceramic beads, soda-lime glass balls, and cast iron grinding balls for industrial milling and polishing.",
    badge: "Milling & Deburring",
  },
  {
    name: "Ball Valve Components",
    category: "Fluid Control Assemblies",
    href: "/products/ball-valve-component",
    image: "/images/ball-valve/banner_image.png",
    desc: "Engineered valve balls, ceramic valve balls, stem pins, and seat rings precision-machined for critical high-pressure and corrosive fluid control applications.",
    badge: "Leak-Proof Engineering",
  },
];

/* ── Dedicated Roller Types (1.A) ── */
const rollerTypes = [
  {
    title: "Taper Rollers",
    image: "/images/Rollers/taper_rollers.png",
    desc: "Engineered with precise conical taper angles to accommodate combined heavy radial and thrust axial loads simultaneously.",
    applications: "Wheel hubs, heavy vehicle axles, industrial reduction gearboxes, and rail traction drives.",
    standards: "DIN 5402 / ISO 355",
  },
  {
    title: "Cylindrical Rollers",
    image: "/images/Rollers/cylindrical_roller.png",
    desc: "Precision ground with logarithmic end-relief crowning to prevent edge stress concentrations under heavy radial loading.",
    applications: "High-speed electric motor bearings, machine tool spindles, and planetary gear systems.",
    standards: "DIN 5402-1 / ISO 3096",
  },
  {
    title: "Spherical Rollers",
    image: "/images/Rollers/spherical_rollers.png",
    desc: "Symmetrical barrel-shaped profile designed for self-aligning bearing assemblies accommodating shaft deflection.",
    applications: "Vibrating screens, rolling mills, crushers, and continuous casters.",
    standards: "ISO 15 / DIN 635",
  },
];

/* ── Non-Metallic Materials (1.E) ── */
const nonMetallicMaterials = [
  {
    name: "Ceramic Balls",
    image: "/images/Ball/Non_Metallic_Ball/ceramic.png",
    desc: "Silicon Nitride (Si₃N₄), Alumina (Al₂O₃), and Zirconia (ZrO₂) offering non-magnetic, electrical-insulation, and extreme temperature tolerance up to 1400°C.",
    href: "/products/balls/non-metallic-balls",
    types: "Si₃N₄ • Al₂O₃ • ZrO₂ • Ruby/Sapphire",
  },
  {
    name: "Plastic & Polymer Balls",
    image: "/images/Ball/Non_Metallic_Ball/plastic.jpg",
    desc: "Engineering polymers including Delrin (POM), PTFE (Teflon), Polypropylene (PP), and Nylon (PA66) providing lightweight, low-friction, chemical-resistant performance.",
    href: "/products/balls/non-metallic-balls",
    types: "Delrin (POM) • PTFE • PP • Nylon",
  },
  {
    name: "Glass Balls",
    image: "/images/Ball/Non_Metallic_Ball/Glass_Ball.jpg",
    desc: "Chemically inert borosilicate and precision-ground soda lime glass balls ideal for metering pumps, roll-on dispensers, check valves, and visual flowmeters.",
    href: "/products/balls/non-metallic-balls",
    types: "Soda Lime • Borosilicate",
  },
];

/* ── Grinding Media Showcase (1.B & 1.C) ── */
const grindingMediaShowcase = [
  {
    name: "Burnishing Media (Steel Balls & Shapes)",
    image: "/images/grinding-media/grinding-media.jpg",
    desc: "Carbon and chrome steel balls, ball-cones, diagonals, and pins engineered for mass deburring, vibratory finishing, and mirror-polishing of metallic hardware.",
    href: "/products/grinding-media/burnishing-media",
  },
  {
    name: "Cast Iron Balls (Grinding Media)",
    image: "/images/grinding-media/cast_iron_ball_grinding_media.jpg",
    desc: "High-wear cast iron grinding media designed for mineral ore extraction, cement clinker grinding, and heavy pigment dispersion.",
    href: "/products/grinding-media/cast-iron-ball-grinding-media",
  },
  {
    name: "Ceramic Grinding Balls",
    image: "/images/grinding-media/ceramic_ball_burnishing_media.jpg",
    desc: "High-density ceramic micro-beads engineered for ultrafine nano-grinding without product contamination in vertical and horizontal bead mills.",
    href: "/products/grinding-media/ceramic-ball-grinding-media",
  },
  {
    name: "Glass Grinding Beads",
    image: "/images/grinding-media/glass_ball_burnishing_media.jpg",
    desc: "Precision soda-lime and lead-free glass beads utilized for lead-free agitating, wet milling, and satin-finish surface peening.",
    href: "/products/grinding-media/glass-ball-grinding-media",
  },
];

/* ── Industries Marquee: Authenticated Image Paths (1.D) ── */
const industries = [
  { image: "/images/Industries/NGC.jpg", name: "Ball Bearing" },
  { image: "/images/Industries/Automotive.jpg", name: "Automobile" },
  { image: "/images/Industries/Aerospace_industry.jpg", name: "Aerospace" },
  { image: "/images/Industries/Paint.png", name: "Paint & Pigment" },
  { image: "/images/medical.png", name: "Consumer & Health Care" },
  { image: "/images/Industries/engineering_manufacturing.jpg", name: "Engineering & Manufacturing" },
  { image: "/images/textile.png", name: "Textile" },
  { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80", name: "Renewable Energy" },
  { image: "/images/oil_gas.png", name: "Oil & Gas" },
];

const whyUs = [
  { icon: <FiAward size={20} />, title: "ISO 9001:2015 Certified", desc: "Globally recognized quality management standards across all production and inspection processes." },
  { icon: <HiOutlineChip size={20} />, title: "Advanced Manufacturing", desc: "State-of-the-art cold heading machines, ball flashers, and precision lapping systems." },
  { icon: <FiGlobe size={20} />, title: "Global Client Base", desc: "Trusted by leading OEM engineering manufacturers across 9+ countries worldwide." },
  { icon: <FiBox size={20} />, title: "750+ Tons Ready Stock", desc: "Massive inventory housed in climate-controlled warehousing for rapid order dispatch." },
  { icon: <BsSpeedometer2 size={20} />, title: "Custom Engineering", desc: "Specialized non-standard dimensions, micro-tolerances, and custom alloy batches on demand." },
  { icon: <FiShield size={20} />, title: "30+ Years Experience", desc: "Over three decades of specialized metallurgical and tribological expertise since 1991." },
];

/* ─── Hero Slider ────────────────────────────────────────────────── */

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => {
      const nextIdx = (prev + 1) % heroSlides.length;
      setVisible(false);
      timerRef.current = setTimeout(() => {
        setCurrent(nextIdx);
        setVisible(true);
      }, 420);
      return prev;
    });
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => {
      const prevIdx = (prev - 1 + heroSlides.length) % heroSlides.length;
      setVisible(false);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCurrent(prevIdx);
        setVisible(true);
      }, 420);
      return prev;
    });
  }, []);

  const goToSlide = useCallback((idx: number) => {
    setVisible(false);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrent(idx);
      setVisible(true);
    }, 420);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 5500);
  }, [nextSlide]);

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [nextSlide]);

  const slide = heroSlides[current];

  return (
    <section
      style={{ fontFamily: "var(--font-apple)" }}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0F0F0F]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{ opacity: visible ? 1 : 0, transition: "opacity 0.45s ease" }}
      >
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.headline.join(" ")}
          fill
          className="object-cover"
          priority
          style={{ opacity: 0.32 }}
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.06,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      {/* Orange glow */}
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          top: "20%", left: "30%", width: 500, height: 500,
          background: "radial-gradient(circle, rgba(232,101,10,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="container-main relative z-10 py-24">
        <div className="max-w-[680px]">
          {/* Tag */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-7"
            style={{
              background: "rgba(232,101,10,0.15)",
              border: "1px solid rgba(232,101,10,0.3)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.05s, transform 0.5s ease 0.05s",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--orange)" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "var(--orange)" }}>
              {slide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="heading-display text-white mb-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.5s ease 0.12s, transform 0.5s ease 0.12s",
            }}
          >
            {slide.headline[0]}<br />
            <span style={{ color: "var(--orange)" }}>{slide.headline[1]}</span>
          </h1>

          {/* Sub */}
          <p
            className="text-[1.0625rem] leading-[1.75] max-w-[520px] mb-10"
            style={{
              color: "rgba(255,255,255,0.65)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(14px)",
              transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
            }}
          >
            {slide.sub}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3.5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.5s ease 0.28s, transform 0.5s ease 0.28s",
            }}
          >
            <Link href="/contact" className="btn-primary">
              Get a Quote <FiArrowRight size={16} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[0.9375rem] font-medium text-white no-underline transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              }}
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-10 right-10 z-20 flex items-center gap-3">
        <div className="flex gap-1.5 items-center mr-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="h-1.5 rounded-full border-none cursor-pointer p-0 transition-all duration-300"
              style={{
                width: i === current ? 24 : 6,
                background: i === current ? "var(--orange)" : "rgba(255,255,255,0.3)",
              }}
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
        >
          <FiArrowLeft size={16} />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            backdropFilter: "blur(8px)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "var(--orange)"; e.currentTarget.style.borderColor = "var(--orange)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; }}
        >
          <FiArrowRight size={16} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-xs font-semibold tracking-widest"
        style={{ color: "rgba(255,255,255,0.35)" }}>
        {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
      </div>
    </section>
  );
}

/* ─── Industries Marquee ─────────────────────────────────────────── */

function IndustriesMarquee() {
  const doubled = [...industries, ...industries];

  return (
    <section className="section-sm" style={{ background: "var(--grey-subtle)" }}>
      <div className="container-main">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
          <div>
            <div className="section-divider" />
            <span className="text-caption block mb-2">Sectors We Serve</span>
            <h2 className="heading-xl" style={{ color: "var(--grey-dark)" }}>
              Industries We Power
            </h2>
          </div>
          <Link href="/industries" className="btn-secondary flex-shrink-0">
            All Industries <FiArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div
        className="overflow-hidden relative"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <style>{`
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            gap: 16px;
            width: max-content;
            animation: marquee-scroll 32s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
          .ind-marquee-card:hover .ind-marquee-img {
            transform: scale(1.05);
          }
          .ind-marquee-card:hover {
            box-shadow: 0 8px 32px rgba(232,101,10,0.13), 0 2px 8px rgba(0,0,0,0.06);
            border-color: rgba(232,101,10,0.25) !important;
          }
          .ind-marquee-card:hover .ind-marquee-name {
            color: var(--orange);
          }
          .ind-marquee-card:hover .ind-marquee-arrow {
            opacity: 1;
          }
        `}</style>

        <div className="marquee-track py-3">
          {doubled.map((ind, i) => (
            <Link
              href="/industries"
              key={`${ind.name}-${i}`}
              className="ind-marquee-card flex-none rounded-2xl overflow-hidden no-underline block"
              style={{
                width: 280,
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
              }}
              draggable={false}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/2" }}>
                <img
                  src={ind.image}
                  alt={ind.name}
                  draggable={false}
                  className="ind-marquee-img w-full h-full object-cover block"
                  style={{ transition: "transform 0.5s ease" }}
                />
                <div
                  className="absolute inset-0 opacity-0 pointer-events-none"
                  style={{
                    background: "rgba(232,101,10,0.12)",
                    transition: "opacity 0.3s ease",
                  }}
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span
                  className="ind-marquee-name text-base font-semibold"
                  style={{ color: "var(--grey-dark)", transition: "color 0.2s ease" }}
                >
                  {ind.name}
                </span>
                <FiArrowRight
                  size={15}
                  className="ind-marquee-arrow flex-shrink-0"
                  style={{ color: "var(--orange)", opacity: 0.35, transition: "opacity 0.2s ease" }}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */

export default function Home() {
  const [isConnectOpen, setIsConnectOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  return (
    <>
      <style>{`
        * { font-family: var(--font-apple); }

        .product-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 28px 24px;
          text-decoration: none;
          display: block;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          overflow: hidden;
          position: relative;
        }
        .product-card::before {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--orange), var(--orange-light));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .product-card:hover {
          box-shadow: 0 8px 40px rgba(232,101,10,0.12), 0 2px 8px rgba(0,0,0,0.06);
          border-color: rgba(232,101,10,0.22);
          transform: translateY(-4px);
        }
        .product-card:hover::before { transform: scaleX(1); }
        .product-card:hover .product-icon { background: var(--orange); color: #fff; }
        .product-card:hover .product-name { color: var(--orange); }

        .why-card {
          background: #fff;
          border: 1px solid rgba(0,0,0,0.07);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .why-card:hover {
          box-shadow: 0 8px 40px rgba(232,101,10,0.12), 0 2px 8px rgba(0,0,0,0.06);
          border-color: rgba(232,101,10,0.22);
          transform: translateY(-4px);
        }
        .why-card:hover .why-icon { background: var(--orange); color: #fff; }
        .why-icon {
          width: 44px; height: 44px; border-radius: 12px;
          background: rgba(232,101,10,0.07);
          color: var(--orange);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .section-divider {
          width: 36px; height: 2px;
          background: var(--orange);
          border-radius: 2px;
          margin-bottom: 16px;
        }
      `}</style>

      <HeroSlider />

      {/* ── Stats Bar ── */}
      <section className="section-sm bg-[#F7F7F7] border-b border-gray-100">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div key={s.label} className="card-base p-6 text-center">
                <div className="stat-number text-3xl">{s.number}</div>
                <div className="text-sm text-gray-500 mt-1 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Snapshot & Future Corporate Video Integration (1.G) ── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container-main">
          <div className="grid gap-14 items-center grid-cols-1 lg:grid-cols-2">
            
            {/* Visual Media & Video Preview Integration Frame */}
            <div className="space-y-4">
              <div className="relative rounded-[20px] overflow-hidden shadow-xl aspect-[4/3]">
                <Image src="/images/office_image.jpeg" alt="N Gandhi & Co. headquarters" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Year of Foundation Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-xl px-5 py-3.5 shadow-xl"
                  style={{ background: "rgba(255,255,255,0.95)", backdropFilter: "blur(12px)" }}>
                  <div className="w-9 h-9 rounded-[10px] flex items-center justify-center"
                    style={{ background: "rgba(232,101,10,0.1)" }}>
                    <FiAward size={18} style={{ color: "var(--orange)" }} />
                  </div>
                  <div>
                    <div className="text-[0.7rem] font-bold tracking-wider uppercase" style={{ color: "var(--grey-light)" }}>Since</div>
                    <div className="text-lg font-bold tracking-tight" style={{ color: "var(--grey-dark)" }}>1991</div>
                  </div>
                </div>
              </div>

              {/* Prepared Corporate Video Integration Container (1.G) */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                    <FiPlay size={18} className="translate-x-0.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-900">Corporate Documentary Film</span>
                      <span className="text-[10px] uppercase font-bold tracking-wider bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                        Media Integration Ready
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Production and visual storytelling in coordination with the DNA creative team.
                    </p>
                  </div>
                </div>
                <Link href="/about" className="text-xs font-semibold text-orange-600 hover:text-orange-700 shrink-0 flex items-center gap-1">
                  Our Legacy <FiChevronRight size={14} />
                </Link>
              </div>
            </div>

            {/* About Text Content */}
            <div>
              <div className="section-divider" />
              <span className="text-caption block mb-3">About N Gandhi &amp; Co.</span>
              <h2 className="heading-xl mb-6" style={{ color: "var(--grey-dark)" }}>
                Three Decades of<br />Industrial Excellence
              </h2>
              <p className="text-body mb-4">
                Established in 1991, N Gandhi &amp; Co. has grown into a reputed manufacturer and exporter of Metallic &amp; Non-Metallic Balls and Rollers. We combine advanced machinery, international ISO 3290 and DIN specifications, and deep industry knowledge to deliver tailored engineering solutions.
              </p>
              <p className="text-body mb-8">
                From a focused trading unit to a globally recognized supplier with over 750 tons of ready inventory, our journey reflects commitment to consistent quality, long-standing client relationships, and continuous technological advancement.
              </p>
              <div className="flex flex-col gap-2.5 mb-9">
                {["ISO 9001:2015 Certified Quality Management System", "750+ Tons Ready-to-Dispatch Stock Inventory", "Direct Global Exports to Leading OEM Partners in 9+ Countries"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5">
                    <FiCheckCircle size={16} style={{ color: "var(--orange)", flexShrink: 0 }} />
                    <span className="text-sm font-medium" style={{ color: "var(--grey-mid)" }}>{pt}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/about" className="btn-secondary">Our Story <FiArrowRight size={15} /></Link>
                <Link href="/infrastructure" className="btn-secondary">Infrastructure &amp; Testing <FiArrowRight size={15} /></Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core B2B Product Categories (1.F & 1.B) ── */}
      <section className="section bg-[#FBFBFB] border-t border-gray-100">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <span className="text-caption block mb-3">Product Catalogue</span>
            <h2 className="heading-xl mb-4" style={{ color: "var(--grey-dark)" }}>
              Core Industrial Product Groups
            </h2>
            <p className="text-body max-w-[600px] mx-auto">
              Precision rolling elements, finishing media, and valve components engineered to exacting DIN, ISO, and ABMA tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {b2bProductGroups.map((p) => (
              <Link
                href={p.href}
                key={p.name}
                className="product-card-img"
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="product-card-img-bg"
                  draggable={false}
                />

                <div className="product-card-img-overlay" />

                <div className="product-card-img-content">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300">
                      {p.category}
                    </span>
                    <span className="text-[10px] font-semibold bg-white/20 text-white backdrop-blur-md px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-[1.15rem] font-semibold mb-1.5 text-white">
                    {p.name}
                  </h3>
                  <p
                    className="text-[0.84rem] leading-[1.55] m-0 text-white/80 line-clamp-2"
                  >
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View Complete Catalogue <FiArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Rollers Showcase: Types & Geometry (1.A) ── */}
      <section className="section bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-divider" />
              <span className="text-caption block mb-2">Industrial Rollers</span>
              <h2 className="heading-xl" style={{ color: "var(--grey-dark)" }}>
                Precision Roller Types
              </h2>
              <p className="text-body max-w-[550px] mt-2">
                Manufactured from premium bearing steel (100Cr6 / AISI 52100) through-hardened to 60–65 HRC for demanding load-bearing assemblies.
              </p>
            </div>
            <Link href="/products/rollers" className="btn-secondary flex-shrink-0">
              All Roller Specs <FiArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rollerTypes.map((roller) => (
              <div
                key={roller.title}
                className="card-base group flex flex-col h-full bg-white border border-gray-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={roller.image}
                    alt={roller.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    {roller.standards}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {roller.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {roller.desc}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Key Applications
                    </span>
                    <p className="text-xs text-gray-700 leading-normal">
                      {roller.applications}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Metallic & Non-Metallic Materials Presentation (1.E) ── */}
      <section className="section bg-[#F7F7F7] border-t border-gray-100">
        <div className="container-main">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <span className="text-caption block mb-3">Material Engineering</span>
            <h2 className="heading-xl mb-4" style={{ color: "var(--grey-dark)" }}>
              Metallic &amp; Non-Metallic Materials
            </h2>
            <p className="text-body max-w-[620px] mx-auto">
              Clear material separation designed to match distinct friction, corrosion, hardness, and electrical insulation requirements.
            </p>
          </div>

          {/* Group 1: Metallic Materials Block */}
          <div className="card-base p-6 md:p-8 bg-white mb-10 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 shadow-sm">
                <Image
                  src="/images/Ball/Metallic_Ball/Ferous_Ball.jpg"
                  alt="Metallic Precision Balls"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-orange-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Metallic Materials
                </div>
              </div>
              <div className="lg:col-span-7">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">
                  Ferrous &amp; Non-Ferrous Alloys
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  High-Strength Bearing &amp; Corrosion-Resistant Alloys
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Precision manufactured from AISI 52100 chrome steel, martensitic &amp; austenitic stainless steels (304, 316, 420, 440C), brass, copper, and superalloys (Hastelloy, Monel, Inconel, Tungsten Carbide) with heat-treated hardness up to 60–65 HRC.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-gray-700 font-medium mb-5">
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Chrome Steel (52100)</div>
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Stainless 316 / 304</div>
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Stainless 440C / 420</div>
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Brass &amp; Copper</div>
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Tungsten Carbide</div>
                  <div className="bg-gray-50 rounded-lg p-2.5 border border-gray-100">Tool Steel (S2)</div>
                </div>
                <Link href="/products/balls/metallic-balls" className="btn-secondary text-xs">
                  View Metallic Specifications <FiArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Group 2: Non-Metallic Materials Block (Distinct Visual Separation: Glass, Plastic, Ceramic) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block mb-1">
                  Non-Metallic Materials
                </span>
                <h3 className="text-xl font-bold text-gray-900">
                  Specialized Ceramic, Polymer &amp; Glass Solutions
                </h3>
              </div>
              <Link href="/products/balls/non-metallic-balls" className="text-xs font-semibold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                Explore Non-Metallic <FiChevronRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nonMetallicMaterials.map((mat) => (
                <div
                  key={mat.name}
                  className="card-base group bg-white border border-gray-100 flex flex-col h-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                    <Image
                      src={mat.image}
                      alt={mat.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {mat.name.split(" ")[0]}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h4 className="text-base font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {mat.name}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">
                      {mat.desc}
                    </p>
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                        Grades &amp; Polymers
                      </span>
                      <span className="text-xs font-medium text-orange-600">
                        {mat.types}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Grinding Media & Finishing Solutions (1.B & 1.C) ── */}
      <section className="section bg-white border-t border-gray-100">
        <div className="container-main">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-divider" />
              <span className="text-caption block mb-2">Surface Finishing &amp; Milling</span>
              <h2 className="heading-xl" style={{ color: "var(--grey-dark)" }}>
                Grinding &amp; Burnishing Media
              </h2>
              <p className="text-body max-w-[550px] mt-2">
                Engineered media for vibratory mass finishing, fine particle reduction, dispersion, and mineral milling.
              </p>
            </div>
            <Link href="/products/grinding-media" className="btn-secondary flex-shrink-0">
              All Grinding Media <FiArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {grindingMediaShowcase.map((media) => (
              <Link
                key={media.name}
                href={media.href}
                className="card-base group bg-white border border-gray-100 overflow-hidden flex flex-col no-underline block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                  <Image
                    src={media.image}
                    alt={media.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {media.name}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {media.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section bg-[#FBFBFB] border-t border-gray-100">
        <div className="container-main">
          <div className="text-center mb-14">
            <div className="section-divider mx-auto mb-4" />
            <span className="text-caption block mb-3">Our Edge</span>
            <h2 className="heading-xl" style={{ color: "var(--grey-dark)" }}>Why N Gandhi &amp; Co.</h2>
          </div>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-icon">{w.icon}</div>
                <h3 className="text-[0.975rem] font-semibold mb-2" style={{ color: "var(--grey-dark)" }}>{w.title}</h3>
                <p className="text-[0.84rem] leading-[1.65] m-0" style={{ color: "var(--grey-light)" }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries Slider (1.D) ── */}
      <IndustriesMarquee />

      {/* ── CTA ── */}
      <section style={{ background: "var(--grey-dark)", position: "relative", overflow: "hidden" }}>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "rgba(232,101,10,0.1)" }} />
        <div className="absolute -bottom-16 left-[10%] w-48 h-48 rounded-full pointer-events-none"
          style={{ background: "rgba(232,101,10,0.06)" }} />
        <div className="container-main relative z-10 py-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[0.72rem] font-bold tracking-[0.12em] uppercase mb-7 mt-5"
            style={{
              background: "rgba(232,101,10,0.12)",
              border: "1px solid rgba(232,101,10,0.25)",
              color: "var(--orange)",
            }}>
            Global Presence
          </span>
          <h2 className="heading-xl text-white mb-5">
            Serving India &amp; International<br />Markets with Precision
          </h2>
          <p className="text-base leading-[1.75] max-w-[480px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.55)" }}>
            From Mumbai to global OEM assembly lines — delivering consistency, ISO-certified quality, and trust in every component.
          </p>
          <div className="flex flex-wrap mb-5 gap-3.5 justify-center">
            <button onClick={() => setIsConnectOpen(true)} className="btn-primary">
              Connect Now <FiArrowRight size={15} />
            </button>
            <button
              onClick={() => setIsCatalogueOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[0.9375rem] font-medium text-white no-underline transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.18)",
                backdropFilter: "blur(8px)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.14)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
              }}
            >
              View Catalogue
            </button>
          </div>
        </div>
      </section>

      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
      <PdfModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
        pdfUrl="/pdfs/ngc.pdf"
        title="N Gandhi & Co. – Product Catalogue"
      />
    </>
  );
}
