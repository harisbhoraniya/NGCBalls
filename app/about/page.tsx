"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiArrowLeft, FiPlay } from "react-icons/fi";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const products = [
  {
    title: "Metallic Ball",
    image: "/images/Ball/Metallic_Ball/Ferous_Ball.jpg",
    href: "/products/balls/metallic-balls",
  },
  {
    title: "Non-Metallic Ball",
    image: "/images/Ball/Non_Metallic_Ball/ceramic.jpg",
    href: "/products/balls/non-metallic-balls",
  },
  {
    title: "Rollers",
    image: "/images/Rollers/rollers.png",
    href: "/products/rollers",
  },
  {
    title: "Grinding Media",
    image: "/images/grinding-media/grinding-media.jpg",
    href: "/products/grinding-media",
  },
  {
    title: "Ball Valve Component",
    image: "/images/ball-valve/ball-valve-ball.jpg",
    href: "/products/ball-valve-component",
  },
  // {
  //   title: "Machine Component",
  //   image: "/images/Machined_Parts/Machined_Parts_new.png",
  //   href: "/products/machine-component",
  // },
];

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Procurement Head, Apex Bearings Ltd.",
    quote:
      "N Gandhi & Co. has been a dependable partner for over a decade. Their consistency in quality and delivery timelines is unmatched in the industry.",
  },
  {
    name: "Sarah Thompson",
    role: "Supply Chain Manager, Global Valve Corp",
    quote:
      "Working with their team has streamlined our sourcing significantly. Responsive, professional, and always willing to solve custom requirements.",
  },
  {
    name: "Vikram Shah",
    role: "Director, Precision Fittings Pvt. Ltd.",
    quote:
      "Their ball valve components meet our tightest tolerance requirements every single time. A rare level of reliability in this space.",
  },
  {
    name: "Emily Carter",
    role: "Operations Lead, Nordic Industrial Supply",
    quote:
      "From first inquiry to final delivery, the process has always been smooth. Their technical support team is genuinely knowledgeable.",
  },
  {
    name: "Amit Kulkarni",
    role: "CEO, Kulkarni Engineering Works",
    quote:
      "Three decades of trust well-earned. N Gandhi & Co. combines old-school reliability with modern manufacturing capability.",
  },
];

// ─────────────────────────────────────────────
// PRODUCTS SLIDER
// ─────────────────────────────────────────────
function ProductsSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = products.length;

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const visibleIndices = Array.from({ length: 4 }, (_, i) => (current + i) % total);

  return (
    <div className="relative flex items-center gap-2 sm:gap-3">
      <button
        onClick={prev}
        aria-label="Previous product"
        className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer shadow-sm z-10"
      >
        <FiArrowLeft size={15} />
      </button>

      <div
        className="flex gap-4 sm:gap-6 flex-1 overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {visibleIndices.map((idx, pos) => {
          const p = products[idx];
          const hiddenClass =
            pos === 0
              ? "flex"
              : pos === 1
                ? "hidden sm:flex"
                : pos === 2
                  ? "hidden lg:flex"
                  : "hidden xl:flex";

          return (
            <Link
              key={`${idx}-${pos}`}
              href={p.href}
              className={`group ${hiddenClass} flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-300 flex-1 min-w-0 no-underline`}
            >
              <div className="relative w-full aspect-[4/3] bg-gray-50">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col p-5">
                <h3 className="font-semibold text-[#1A1A1A] mb-4 text-sm sm:text-base">
                  {p.title}
                </h3>
                <span className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-orange-500 border border-orange-200 rounded-full py-2 group-hover:bg-orange-500 group-hover:text-white transition-all duration-200">
                  Products <FiArrowRight size={12} />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      <button
        onClick={next}
        aria-label="Next product"
        className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer shadow-sm z-10"
      >
        <FiArrowRight size={15} />
      </button>
    </div>
  );
}

// ─────────────────────────────────────────────
// TESTIMONIALS SLIDER — 2 cards at a time
// ─────────────────────────────────────────────
function TestimonialSlider() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(testimonials.length / perPage);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const next = () => setPage((p) => (p + 1) % totalPages);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);
  if (visible.length < perPage) {
    visible.push(testimonials[0]);
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visible.map((t, i) => (
          <div key={`${page}-${i}`} className="card-base p-8 flex flex-col animate-fade-up">
            <div className="w-2 h-6 rounded-full bg-orange-500 mb-5" />
            <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <p className="font-semibold text-[#1A1A1A] text-sm">{t.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{t.role}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          aria-label="Previous testimonials"
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer shadow-sm"
        >
          <FiArrowLeft size={16} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to testimonial page ${i + 1}`}
              className={`h-1.5 rounded-full border-none cursor-pointer transition-all duration-200 p-0
                ${i === page ? "w-6 bg-orange-500" : "w-1.5 bg-gray-300"}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonials"
          className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-300 transition-all cursor-pointer shadow-sm"
        >
          <FiArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// CORPORATE VIDEO
// ─────────────────────────────────────────────
function CorporateVideo() {
  const [playing, setPlaying] = useState(false);
  // Replace with your actual YouTube video ID
  const videoId = "S1Sq6X6FgEY";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-md aspect-video bg-black">
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="N Gandhi & Co. Corporate Video"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            aria-label="Play corporate video"
            className="absolute inset-0 w-full h-full flex items-center justify-center group cursor-pointer border-none p-0"
          >
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Corporate video thumbnail"
              fill
              className="object-cover opacity-80 group-hover:opacity-70 transition-opacity duration-300"
            />
            <span className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FiPlay size={26} className="text-white ml-1" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      {/* ══════════════════════════════════
          SECTION 1 — Hero (static, no slider)
      ══════════════════════════════════ */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block animate-fade-up">About Us</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6 animate-fade-up animate-delay-1">
            Built on Trust,<br />
            <span style={{ color: "var(--orange)" }}>Driven by Precision</span>
          </h1>
          <p className="text-body max-w-xl animate-fade-up animate-delay-2">
            Since 1991, N Gandhi & Co. has been the trusted name behind precision Metallic & Non-Metallic Balls & Rollers powering global industries.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 2 — Image left, Content right (no stats)
      ══════════════════════════════════ */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md">
              <Image
                src="/images/office_room.jpeg"
                alt="Manufacturing facility"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="divider" />
              <span className="text-caption mb-3 block">Company Overview</span>
              <h2 className="heading-xl text-[#1A1A1A] mb-6">
                From Mumbai to<br />Global Markets
              </h2>
              <p className="text-body mb-5">
                Established in 1991, N Gandhi & Co. has grown into a reputed manufacturer and exporter of high-precision Metallic & Non-Metallic Balls, Rollers. With decades of experience, we specialize in delivering custom-engineered solutions tailored to specific industrial applications.
              </p>
              <p className="text-body">
                Today, with over 30 years of domain expertise, we are associated with several leading OEMs for over 20 years and are widely recognized for product quality, reliability, and strong follow-up support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 3 — Our Products (slider)
      ══════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">What We Manufacture</span>
            <h2 className="heading-xl text-[#1A1A1A]">Our Products</h2>
          </div>

          <ProductsSlider />
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 4 — Corporate Video
      ══════════════════════════════════ */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">Watch & Discover</span>
            <h2 className="heading-xl text-[#1A1A1A]">Our Corporate Video</h2>
          </div>

          <CorporateVideo />
        </div>
      </section>

      {/* ══════════════════════════════════
          SECTION 5 — Testimonials
      ══════════════════════════════════ */}
      {/* <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">What Clients Say</span>
            <h2 className="heading-xl text-[#1A1A1A]">Testimonials</h2>
          </div>

          <TestimonialSlider />
        </div>
      </section> */}

      {/* ══════════════════════════════════
          SECTION 6 — CTA
      ══════════════════════════════════ */}
      <section className="section-sm bg-[#F7F7F7] border-t border-black/[0.05]">
        <div className="container-main text-center py-8">
          <h2 className="heading-xl text-[#1A1A1A] mb-5">Ready to Partner with Us?</h2>
          <p className="text-body max-w-md mx-auto mb-8">
            Join hundreds of global clients who trust N Gandhi & Co. for precision components.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <FiArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}