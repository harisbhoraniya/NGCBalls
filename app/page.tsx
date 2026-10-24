"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight, FiArrowLeft, FiAward, FiGlobe, FiBox, FiShield,
  FiCheckCircle, FiChevronRight,
} from "react-icons/fi";
import {
  HiOutlineChip, HiOutlineCog, HiOutlineSparkles,
  HiOutlineLightningBolt, HiOutlineRefresh,
  HiOutlineBeaker, HiOutlineTemplate,
} from "react-icons/hi";
import { BsSpeedometer2, BsGearFill } from "react-icons/bs";
import { TbRulerMeasure, TbAtom } from "react-icons/tb";
import ConnectModal from "@/components/ConnectModal"; // adjust the import path to wherever you place ConnectModal.tsx
import PdfModal from "@/components/PdfModal";
/* ─── Data ──────────────────────────────────────────────────────── */

const heroSlides = [
  {
    id: 1,
    image: "/images/Banner_09.jpg",
    tag: "Precision Engineering",
    headline: ["High Performance", "Precision"],
    sub: "World-class Metallic & Non-Metallic Balls, Rollers are engineered for accuracy and durability.",
  },
  {
    id: 2,
    image: "/images/Banner_10.jpg",
    tag: "30+ Years of Excellence",
    headline: ["Three Decades of", "Industrial Trust"],
    sub: "From a focused trading unit to a globally recognized manufacturer — trusted across 9+ countries.",
  },
  // {
  //   id: 3,
  //   image: "/images/Banner_04.png",
  //   tag: "Global Reach",
  //   headline: ["Serving India &", "Global Markets"],
  //   sub: "750+ tons of ready stock, custom engineering, and ISO-certified quality for OEM partnerships worldwide.",
  // },
  {
    id: 4,
    image: "/images/Banner_11.png",
    tag: "Fluid Control Solutions",
    headline: ["Ball Valve Balls &", "Components"],
    sub: "Precision-engineered valve balls, stem pins, and seat rings built for leak-proof performance and long service life.",
  },
  {
    id: 5,
    image: "/images/Banner_12.png",
    tag: "Built for High Loads",
    headline: ["Precision Rollers for", "Every Application"],
    sub: "Cylindrical, needle, and taper rollers engineered to handle demanding load-bearing and high-speed applications.",
  },
];

const stats = [
  { number: "30+", label: "Years of Excellence" },
  { number: "750T", label: "Ready Stock" },
  { number: "9+", label: "Countries Served" },
  { number: "20+", label: "OEM Partnerships" },
];

const products = [
  { name: "Metallic Balls", icon: <TbAtom size={22} />, desc: "Precision steel and alloy balls for bearings, valves, and mechanical systems." },
  { name: "Non-Metallic Balls", icon: <HiOutlineBeaker size={22} />, desc: "Ceramic, plastic, and polymer balls for specialized industrial applications." },
  { name: "Rollers", icon: <HiOutlineCog size={22} />, desc: "Cylindrical, needle, and taper rollers for high load-bearing applications." },
  { name: "Grinding Media", icon: <HiOutlineSparkles size={22} />, desc: "Polishing and finishing solutions including nano particle grinding." },
  { name: "Ball Valve Components", icon: <HiOutlineRefresh size={22} />, desc: "Precision valve balls, stem pins, and seat rings for fluid control." },
  { name: "Machine Components", icon: <HiOutlineTemplate size={22} />, desc: "Custom-manufactured components built to your specifications." },
];
const products1 = [
  {
    name: "Balls",
    href: "/products/balls",
    image: "/images/Ball/Metallic_Ball/Ferous_Ball.jpg",
    desc: "Precision steel and alloy balls for bearings, valves, and mechanical systems. Ceramic, plastic, and polymer balls for specialized industrial applications.",
  },
  // {
  //   name: "Non-Metallic Balls",
  //   href: "/products/balls/non-metallic-balls",
  //   image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
  //   desc: "Ceramic, plastic, and polymer balls for specialized industrial applications.",
  // },
  {
    name: "Rollers",
    href: "/products/rollers",
    image: "/images/Rollers/rollers.png",
    desc: "Cylindrical, needle, and taper rollers for high load-bearing applications.",
  },
  {
    name: "Grinding Media",
    href: "/products/grinding-media",
    image: "/images/grinding-media/grinding-media.jpg",
    desc: "Polishing and finishing solutions including nano particle grinding.",
  },
  {
    name: "Ball Valve Components",
    href: "/products/ball-valve-component/",
    image: "/images/ball-valve/banner_image.png",
    desc: "Precision valve balls, stem pins, and seat rings for fluid control.",
  },
  // {
  //   name: "Machine Components",
  //   href: "products/machine-component/",
  //   image: "/images/Machined_Parts/Machined_Parts_new.png",
  //   desc: "Custom-manufactured components built to your specifications.",
  // },
];

// ── Kept in sync with /industries page (app/industries/page.tsx) ──
// Same names + same image paths as the actual Industries page,
// so the home page marquee never drifts out of sync with it.
const industries = [
  { image: "/images/Industries/NGC.jpg", name: "Ball Bearing" },
  { image: "/images/Industries/Automotive.jpg", name: "Automobile" },
  { image: "/images/Industries/Aerospace_industry.jpg", name: "Aerospace" },
  { image: "/images/Industries/Paint.png", name: "Paint & Pigment" },
  { image: "/images/Industries/healthcare.jfif", name: "Consumer & Health Care" },
  { image: "/images/Industries/engineering_manufacturing.jpg", name: "Engineering & Manufacturing" },
  { image: "/images/textile.png", name: "Textile" },
  { image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80", name: "Renewable Energy" },
  { image: "/images/oil_gas.png", name: "Oil & Gas" },
];

const whyUs = [
  { icon: <FiAward size={20} />, title: "ISO 9001:2015 Certified", desc: "Globally recognized quality management standards across all processes." },
  { icon: <HiOutlineChip size={20} />, title: "Advanced Manufacturing", desc: "State-of-the-art machinery with in-house precision testing labs." },
  { icon: <FiGlobe size={20} />, title: "Global Client Base", desc: "Trusted by industry leaders across 9+ countries worldwide." },
  { icon: <FiBox size={20} />, title: "750+ Tons Ready Stock", desc: "Massive inventory for prompt, reliable order fulfilment." },
  { icon: <BsSpeedometer2 size={20} />, title: "Custom Engineering", desc: "Tailored solutions designed around your exact specifications." },
  { icon: <FiShield size={20} />, title: "30+ Years Experience", desc: "Decades of expertise spanning multiple industrial sectors." },
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
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)" }}
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
        {/* Dots */}
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
          className="w-10 h-10 rounded-full flex items-center justify-content-center cursor-pointer transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.2)",
            color: "#fff",
            backdropFilter: "blur(8px)",
            display: "flex", alignItems: "center", justifyContent: "center",
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

function IndustriesMarquee() {
  // Duplicate items for seamless loop
  const doubled = [...industries, ...industries];

  return (
    <section className="section-sm" style={{ background: "var(--grey-subtle)" }}>
      <div className="container-main">

        {/* Header */}
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

      {/* Marquee — full bleed, no container-main */}
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

        .product-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(232,101,10,0.07);
          color: var(--orange);
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 18px;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

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

      {/* ── About snapshot ── */}
      <section className="section" style={{ background: "var(--grey-subtle)" }}>
        <div className="container-main">
          <div className="grid gap-16 items-center" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            <div className="relative rounded-[20px] overflow-hidden shadow-xl" style={{ aspectRatio: "4/3" }}>
              <Image src="/images/office_image.jpeg" alt="N Gandhi manufacturing" fill className="object-cover" />
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

            <div>
              <div className="section-divider" />
              <span className="text-caption block mb-3">About N Gandhi &amp; Co.</span>
              <h2 className="heading-xl mb-6" style={{ color: "var(--grey-dark)" }}>
                Three Decades of<br />Industrial Excellence
              </h2>
              <p className="text-body mb-4">
                Established in 1991, N Gandhi &amp; Co. has grown into a reputed manufacturer and exporter of Metallic & Non-Metallic Balls & Rollers. We combine advanced manufacturing, global standards, and deep industry knowledge to deliver tailored engineering solutions.
              </p>
              <p className="text-body mb-9">
                From a focused trading unit to a globally recognized supplier, our journey reflects innovation-driven growth, strong client relationships, and continuous technological upgrades.
              </p>
              <div className="flex flex-col gap-2.5 mb-9">
                {["ISO 9001:2015 Certified Processes", "750+ Tons Ready Stock Inventory", "Exporting to 9+ Countries Globally"].map((pt) => (
                  <div key={pt} className="flex items-center gap-2.5">
                    <FiCheckCircle size={16} style={{ color: "var(--orange)", flexShrink: 0 }} />
                    <span className="text-sm font-medium" style={{ color: "var(--grey-mid)" }}>{pt}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-secondary">Our Story <FiArrowRight size={15} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products ── */}
      {/* <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <div className="section-divider mx-auto mb-4" />
            <span className="text-caption block mb-3">Product Range</span>
            <h2 className="heading-xl mb-4" style={{ color: "var(--grey-dark)" }}>
              Engineering Solutions<br />Built for Precision
            </h2>
            <p className="text-body max-w-[500px] mx-auto">
              A comprehensive portfolio of Metallic & Non-Metallic Balls & Rollers meeting the highest global standards.
            </p>
          </div>
          <div
            className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {products.map((p) => (
              <Link href="/products" key={p.name} className="product-card">
                <div className="product-icon">{p.icon}</div>
                <h3 className="product-name text-[0.975rem] font-semibold mb-2 transition-colors duration-200"
                  style={{ color: "var(--grey-dark)" }}>
                  {p.name}
                </h3>
                <p className="text-[0.84rem] leading-[1.65] m-0" style={{ color: "var(--grey-light)" }}>{p.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">View All Products <FiArrowRight size={15} /></Link>
          </div>
        </div>
      </section> */}



      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-8">
            <div className="section-divider mx-auto mb-4" />
            <span className="text-caption block mb-3">Product Range</span>
            <h2 className="heading-xl mb-4" style={{ color: "var(--grey-dark)" }}>
              Engineering Solutions<br />Built for Precision
            </h2>
            <p className="text-body max-w-[500px] mx-auto">
              A comprehensive portfolio of Metallic & Non-Metallic Balls & Rollers meeting the highest global standards.
            </p>
          </div>

          {/* ADD THIS WRAPPER DIV */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {products1.map((p) => (
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
                  <h3 className="text-[1.05rem] font-semibold mb-1.5 text-white">
                    {p.name}
                  </h3>

                  <p
                    className="text-[0.84rem] leading-[1.6] m-0"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {p.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          {/* END WRAPPER */}

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">View All Products <FiArrowRight size={15} /></Link>
          </div>
        </div>
      </section>



      {/* ── Why Us ── */}
      <section className="section bg-white">
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

      {/* ── Industries Slider ── */}
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
            From Mumbai to global markets — delivering consistency, quality, and trust in every component.
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