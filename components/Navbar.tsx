"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowRight, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import ConnectModal from "@/components/ConnectModal"; // adjust the import path to wherever you place ConnectModal.tsx
import ProductEnquiryModal from "@/components/ProductEnquiryModal";
// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const productSubLinks = [
  {
    label: "Balls",
    href: "/products/balls",
    hasSubMenu: true,
    subMenu: [
      { label: "Metallic Balls", href: "/products/balls/metallic-balls" },
      { label: "Non-Metallic Balls", href: "/products/balls/non-metallic-balls" },
    ],
  },
  { label: "Rollers", href: "/products/rollers" },
  { label: "Grinding Media", href: "/products/grinding-media" },
  { label: "Ball Valve Component", href: "/products/ball-valve-component" },
  // { label: "Machine Component", href: "/products/machine-component" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Products",
    href: "/products",
    hasDropdown: true,
    subLinks: productSubLinks,
  },
  { label: "Industries", href: "/industries" },
  { label: "Infrastructure", href: "/infrastructure" },
  // { label: "Global Presence", href: "/global-presence" },
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  // Mobile drawer
  const [open, setOpen] = useState(false);

  // Desktop hover dropdowns
  const [productsOpen, setProductsOpen] = useState(false);
  const [ballsSubOpen, setBallsSubOpen] = useState(false);

  // Mobile accordions
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBallsOpen, setMobileBallsOpen] = useState(false);

  // Get a Quote → Connect modal
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ballsHoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll tracking ──
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Lock body scroll when mobile drawer is open ──
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // ── Close drawer on route change ──
  useEffect(() => {
    setOpen(false);
    setMobileProductsOpen(false);
    setMobileBallsOpen(false);
  }, [pathname]);

  // ── Desktop hover handlers ──
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setProductsOpen(true);
  };
  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
      setBallsSubOpen(false);
    }, 120);
  };
  const handleBallsMouseEnter = () => {
    if (ballsHoverTimeoutRef.current) clearTimeout(ballsHoverTimeoutRef.current);
    setBallsSubOpen(true);
  };
  const handleBallsMouseLeave = () => {
    ballsHoverTimeoutRef.current = setTimeout(() => {
      setBallsSubOpen(false);
    }, 120);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl
          ${scrolled
            ? "bg-white/98 border-b border-black/7 shadow-[0_1px_0_rgba(0,0,0,0.04),0_4px_24px_rgba(0,0,0,0.06)]"
            : "bg-white/92 border-b border-transparent"
          }`}
      >
        {/* Scroll progress bar */}
        <div
          className="absolute bottom-0 left-0 h-0.5 rounded-r-sm bg-gradient-to-r from-orange-500 to-orange-400 transition-[width] duration-100 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px] sm:h-[66px] lg:h-[70px]">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center shrink-0 no-underline">
              <Image
                src="/images/logo.png"
                alt="N Gandhi & Co"
                width={100}
                height={34}
                priority
                className="sm:w-[110px] lg:w-[118px] h-auto object-contain"
              />
            </Link>

            {/* ── Desktop nav (lg+) ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/products"));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      ref={dropdownRef}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className={`relative flex items-center rounded-full transition-all duration-200
                          ${isActive ? "bg-orange-500/7" : "hover:bg-black/4"}`}
                      >
                        {/* Clickable label → /products */}
                        <Link
                          href={link.href}
                          className={`pl-3.5 pr-1 py-1.5 text-sm font-medium tracking-tight no-underline transition-colors duration-200
                            ${isActive ? "text-orange-500" : "text-gray-500 hover:text-orange-500"}`}
                        >
                          {link.label}
                        </Link>

                        {/* Chevron — just opens the dropdown, doesn't navigate */}
                        <button
                          aria-label="Open products menu"
                          className={`pr-2.5 py-1.5 bg-transparent border-none cursor-pointer transition-colors duration-200
                            ${isActive ? "text-orange-500" : "text-gray-400 hover:text-orange-500"}`}
                        >
                          <FiChevronDown
                            size={13}
                            className={`transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Active dot */}
                        {isActive && (
                          <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                        )}
                      </div>

                      {/* ── Dropdown panel ── */}
                      <div
                        className={`absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-56 rounded-2xl bg-orange-500 shadow-[0_8px_32px_rgba(249,115,22,0.28),0_2px_8px_rgba(0,0,0,0.10)] overflow-visible transition-all duration-[220ms] ease-out origin-top z-50
                          ${productsOpen
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-1 pointer-events-none"
                          }`}
                      >
                        {/* Arrow tip */}
                        <div className="absolute -top-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-orange-500 rotate-45 rounded-sm" />

                        <ul className="relative py-2 list-none m-0 p-0">
                          {link.subLinks.map((sub, i) => {
                            // ── Balls row with fly-out submenu ──
                            if ("hasSubMenu" in sub && sub.hasSubMenu) {
                              return (
                                <li key={sub.href} className="relative">
                                  <div
                                    onMouseEnter={handleBallsMouseEnter}
                                    onMouseLeave={handleBallsMouseLeave}
                                  >
                                    {/*
                                      "Balls" label now navigates to /products/balls
                                      (the new Metallic / Non-Metallic landing page).
                                      The chevron area (hover/tap target) reveals the
                                      metallic / non-metallic fly-out sub-links.
                                    */}
                                    <div
                                      className={`flex items-center justify-between text-[0.875rem] font-medium text-white transition-colors duration-150 select-none
                                        ${ballsSubOpen || pathname === sub.href ? "bg-white/15" : "hover:bg-white/15"}`}
                                    >
                                      <Link
                                        href={sub.href}
                                        className={`flex-1 px-5 py-2.5 text-white no-underline
                                          ${pathname === sub.href ? "font-semibold" : ""}`}
                                      >
                                        {sub.label}
                                      </Link>
                                      <span className="pr-4 py-2.5 cursor-default">
                                        <FiChevronRight size={13} className="opacity-60" />
                                      </span>
                                    </div>

                                    {/* Fly-out submenu — Metallic / Non-Metallic */}
                                    <div
                                      className={`absolute left-[calc(100%+6px)] top-0 w-52 rounded-2xl bg-orange-600 shadow-[0_8px_32px_rgba(249,115,22,0.35),0_2px_8px_rgba(0,0,0,0.18)] transition-all duration-[200ms] ease-out origin-top-left z-50
                                        ${ballsSubOpen
                                          ? "opacity-100 scale-100 pointer-events-auto"
                                          : "opacity-0 scale-95 pointer-events-none"
                                        }`}
                                    >
                                      <ul className="py-2 list-none m-0 p-0">
                                        {sub.subMenu.map((item, j) => (
                                          <li key={item.href}>
                                            <Link
                                              href={item.href}
                                              className={`flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15
                                                ${pathname === item.href ? "bg-white/20 font-semibold" : ""}`}
                                            >
                                              {item.label}
                                              <FiArrowRight size={13} className="opacity-60" />
                                            </Link>
                                            {j < sub.subMenu.length - 1 && (
                                              <div className="mx-5 h-px bg-white/15" />
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                  {i < link.subLinks.length - 1 && (
                                    <div className="mx-5 h-px bg-white/15" />
                                  )}
                                </li>
                              );
                            }

                            // ── Regular dropdown item ──
                            return (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  className={`flex items-center justify-between px-5 py-2.5 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15
                                    ${pathname === sub.href ? "bg-white/20 font-semibold" : ""}`}
                                >
                                  {sub.label}
                                  <FiArrowRight size={13} className="opacity-60" />
                                </Link>
                                {i < link.subLinks.length - 1 && (
                                  <div className="mx-5 h-px bg-white/15" />
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }

                // ── Regular top-level nav link ──
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm font-medium tracking-tight no-underline transition-all duration-200
                      ${isActive
                        ? "text-orange-500 bg-orange-500/7"
                        : "text-gray-500 hover:text-orange-500 hover:bg-black/4"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-500" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTA: original Get in Touch button + N.Gandhi Group logo pill beside it ── */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200 border-none cursor-pointer"
              >
                Get in Touch
                <FiArrowRight size={14} />
              </button>

              <a
                href="https://www.ngandhi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/50 bg-white no-underline hover:border-orange-500 transition-colors duration-200"
              >
                <img
                  src="/images/ngandi_logo.png"
                  alt="N Gandhi Group"
                  className="h-6 w-auto object-contain"
                />
              </a>
            </div>

            {/* ── Right side for tablet / mobile: original Get a Quote + logo pill beside it + hamburger ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsConnectOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 shrink-0 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors duration-200 border-none cursor-pointer"
              >
                Get a Quote
                <FiArrowRight size={12} />
              </button>

              <a
                href="https://www.ngandhi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-orange-500/50 bg-white no-underline hover:border-orange-500 transition-colors duration-200"
              >
                <img
                  src="/images/ngandi_logo.png"
                  alt="N Gandhi Group"
                  className="h-4 sm:h-5 w-auto object-contain"
                />
              </a>

              <button
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                className={`p-2 rounded-xl border-none transition-all duration-200 cursor-pointer
                  ${open
                    ? "bg-orange-500/8 text-orange-500"
                    : "bg-transparent text-gray-500 hover:bg-orange-500/8 hover:text-orange-500"
                  }`}
              >
                {open ? <HiX size={22} /> : <HiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════
            MOBILE DRAWER
        ══════════════════════════════════════════ */}
        <div
          className={`lg:hidden transition-[max-height,opacity] duration-[380ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] overflow-hidden bg-white
            ${open
              ? "max-h-[calc(100dvh-60px)] sm:max-h-[calc(100dvh-66px)] opacity-100 border-t border-black/6"
              : "max-h-0 opacity-0 border-t-0"
            }`}
        >
          <div className="overflow-y-auto overscroll-contain max-h-[calc(100dvh-60px)] sm:max-h-[calc(100dvh-66px)]">
            <div
              className={`max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-6 flex flex-col gap-1 transition-all duration-[280ms] ease-in-out delay-[50ms]
                ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
            >
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.hasDropdown && pathname.startsWith("/products"));

                if (link.hasDropdown) {
                  return (
                    <div key={link.href}>
                      <div
                        className={`flex items-center justify-between rounded-xl transition-all duration-200
                          ${isActive ? "bg-orange-500/7" : "hover:bg-black/3"}`}
                      >
                        {/* Link text → /products */}
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`flex-1 px-4 py-3 text-[0.9375rem] font-medium no-underline transition-colors duration-200
                            ${isActive ? "text-orange-500" : "text-gray-600 hover:text-gray-800"}`}
                        >
                          {link.label}
                        </Link>

                        {/* Chevron toggles accordion */}
                        <button
                          onClick={() => setMobileProductsOpen((v) => !v)}
                          aria-label="Toggle products menu"
                          className="px-4 py-3 bg-transparent border-none cursor-pointer"
                        >
                          <FiChevronDown
                            size={15}
                            className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180 text-orange-500" : "text-gray-400"
                              }`}
                          />
                        </button>
                      </div>

                      {/* Products accordion body */}
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                          ${mobileProductsOpen ? "max-h-[600px]" : "max-h-0"}`}
                      >
                        <div className="ml-3 mt-1 mb-1 rounded-xl bg-orange-500 overflow-hidden">
                          {productSubLinks.map((sub, i) => {
                            // ── Balls with nested accordion ──
                            if ("hasSubMenu" in sub && sub.hasSubMenu) {
                              return (
                                <div key={sub.href}>
                                  {/* Balls row: link (→ /products/balls) + chevron (toggles submenu) */}
                                  <div
                                    className={`flex items-center justify-between transition-colors duration-150
                                      ${pathname === sub.href ? "bg-white/20" : "hover:bg-white/15"}`}
                                  >
                                    <Link
                                      href={sub.href}
                                      onClick={() => setOpen(false)}
                                      className={`flex-1 px-5 py-3 text-[0.875rem] font-medium text-white no-underline
                                        ${pathname === sub.href ? "font-semibold" : ""}`}
                                    >
                                      {sub.label}
                                    </Link>
                                    <button
                                      onClick={() => setMobileBallsOpen((v) => !v)}
                                      className="pr-5 py-3 bg-transparent border-none cursor-pointer"
                                      aria-label="Toggle balls submenu"
                                    >
                                      <FiChevronDown
                                        size={13}
                                        className={`text-white opacity-70 transition-transform duration-200 ${mobileBallsOpen ? "rotate-180 opacity-100" : ""
                                          }`}
                                      />
                                    </button>
                                  </div>

                                  {/* Balls nested accordion — Metallic / Non-Metallic */}
                                  <div
                                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out
                                      ${mobileBallsOpen ? "max-h-[200px]" : "max-h-0"}`}
                                  >
                                    <div className="ml-4 mr-3 mb-2 rounded-xl bg-orange-600 overflow-hidden">
                                      {sub.subMenu.map((item, j) => (
                                        <div key={item.href}>
                                          <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`flex items-center justify-between px-5 py-3 text-[0.8125rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15
                                              ${pathname === item.href ? "bg-white/20 font-semibold" : ""}`}
                                          >
                                            {item.label}
                                            <FiArrowRight size={12} className="opacity-60" />
                                          </Link>
                                          {j < sub.subMenu.length - 1 && (
                                            <div className="mx-5 h-px bg-white/15" />
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {i < productSubLinks.length - 1 && (
                                    <div className="mx-5 h-px bg-white/15" />
                                  )}
                                </div>
                              );
                            }

                            // ── Regular sub-item ──
                            return (
                              <div key={sub.href}>
                                <Link
                                  href={sub.href}
                                  onClick={() => setOpen(false)}
                                  className={`flex items-center justify-between px-5 py-3 text-[0.875rem] font-medium text-white no-underline transition-colors duration-150 hover:bg-white/15
                                    ${pathname === sub.href ? "bg-white/20 font-semibold" : ""}`}
                                >
                                  {sub.label}
                                  <FiArrowRight size={13} className="opacity-60" />
                                </Link>
                                {i < productSubLinks.length - 1 && (
                                  <div className="mx-5 h-px bg-white/15" />
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }

                // ── Top-level nav link ──
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-[0.9375rem] font-medium no-underline transition-all duration-200
                      ${isActive
                        ? "bg-orange-500/7 text-orange-500"
                        : "text-gray-600 hover:bg-black/3 hover:text-gray-800"
                      }`}
                  >
                    {link.label}
                    <FiArrowRight
                      size={14}
                      className={isActive ? "text-orange-500" : "text-black/20"}
                    />
                  </Link>
                );
              })}

              {/* Mobile-only full CTA */}
              <div className="mt-3 sm:hidden">
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsConnectOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200 border-none cursor-pointer"
                >
                  Get a Quote
                  <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Height spacer */}
      <div className="h-[60px] sm:h-[66px] lg:h-[70px]" />

      {/* Get a Quote → Connect modal */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />

      {/* Get in Touch → Enquiry modal */}
      <ProductEnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}