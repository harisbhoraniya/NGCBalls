"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowRight, FiChevronDown, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import ConnectModal from "@/components/ConnectModal";
import ProductEnquiryModal from "@/components/ProductEnquiryModal";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

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
  { label: "Ball Valve Balls", href: "/products/ball-valve-component" },
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
  { label: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────
// NAVBAR COMPONENT
// ─────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [isConnectOpen, setIsConnectOpen] = useState(false);

  // Desktop dropdown state
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Mobile drawer state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileBallsOpen, setMobileBallsOpen] = useState(false);

  const pathname = usePathname();

  // ── Normalize path to handle Next.js trailingSlash: true ──
  const normalizePath = (path: string | null | undefined) => {
    if (!path) return "/";
    const trimmed = path.length > 1 && path.endsWith("/") ? path.slice(0, -1) : path;
    return trimmed.toLowerCase();
  };

  const isLinkActive = (linkHref: string, hasDropdown?: boolean) => {
    const current = normalizePath(pathname);
    const target = normalizePath(linkHref);

    if (target === "/") {
      return current === "/";
    }

    if (hasDropdown) {
      return current === target || current.startsWith(target + "/");
    }

    return current === target || current.startsWith(target + "/");
  };

  // ── Scroll tracking ──
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (y / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Lock body scroll on mobile open ──
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Close mobile menu on route change ──
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setMobileBallsOpen(false);
    setDesktopDropdownOpen(false);
  }, [pathname]);

  // Desktop hover helpers
  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setDesktopDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-transparent backdrop-blur-md border-b border-black/[0.06] shadow-xs"
            : "bg-white border-b border-black/[0.05]"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 transition-[width] duration-100 pointer-events-none"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[64px] sm:h-[68px] lg:h-[72px]">
            {/* ── Brand Logo ── */}
            <Link href="/" className="flex items-center shrink-0 no-underline group">
              <Image
                src="/images/logo.webp"
                alt="N Gandhi & Co"
                width={160}
                height={52}
                priority
                className="w-auto h-[42px] sm:h-[48px] lg:h-[54px] object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </Link>

            {/* ── Desktop Navigation Menu (shadcn UI style) ── */}
            <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/[0.04]">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link.href, link.hasDropdown);

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.href}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <DropdownMenu
                        open={desktopDropdownOpen}
                        onOpenChange={setDesktopDropdownOpen}
                      >
                        <DropdownMenuTrigger asChild>
                          <div
                            className={`relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.875rem] font-medium transition-all duration-200 cursor-pointer ${
                              isActive || desktopDropdownOpen
                                ? "bg-orange-500 text-white shadow-sm font-semibold"
                                : "text-zinc-700 hover:text-black hover:bg-orange-50/80"
                            }`}
                          >
                            <Link
                              href={link.href}
                              className="no-underline text-inherit"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {link.label}
                            </Link>
                            <FiChevronDown
                              size={13}
                              className={`transition-transform duration-200 opacity-60 ${
                                desktopDropdownOpen ? "rotate-180 opacity-100 text-white" : ""
                              }`}
                            />
                          </div>
                        </DropdownMenuTrigger>

                        {/* ── shadcn Dropdown Content ── */}
                        <DropdownMenuContent
                          align="center"
                          sideOffset={10}
                          className="w-60 bg-white/98 backdrop-blur-xl border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.04)] rounded-2xl p-1.5"
                        >
                          {/* Balls item with shadcn Submenu */}
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger className="rounded-xl px-3.5 py-2.5 text-[0.875rem] font-medium text-zinc-700 hover:bg-orange-500/[0.08] hover:text-orange-600">
                              <Link
                                href="/products/balls"
                                className="flex-1 no-underline text-inherit"
                                onClick={() => setDesktopDropdownOpen(false)}
                              >
                                Balls
                              </Link>
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent className="w-56 bg-white/98 backdrop-blur-xl border border-black/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.14)] rounded-2xl p-1.5">
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/products/balls/metallic-balls"
                                  onClick={() => setDesktopDropdownOpen(false)}
                                  className="w-full flex items-center justify-between no-underline text-inherit"
                                >
                                  <span>Metallic Balls</span>
                                  <FiArrowRight size={12} className="opacity-40" />
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link
                                  href="/products/balls/non-metallic-balls"
                                  onClick={() => setDesktopDropdownOpen(false)}
                                  className="w-full flex items-center justify-between no-underline text-inherit"
                                >
                                  <span>Non-Metallic Balls</span>
                                  <FiArrowRight size={12} className="opacity-40" />
                                </Link>
                              </DropdownMenuItem>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>

                          <DropdownMenuSeparator />

                          <DropdownMenuItem asChild>
                            <Link
                              href="/products/rollers"
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="w-full flex items-center justify-between no-underline text-inherit"
                            >
                              <span>Rollers</span>
                              <FiArrowRight size={12} className="opacity-40" />
                            </Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem asChild>
                            <Link
                              href="/products/grinding-media"
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="w-full flex items-center justify-between no-underline text-inherit"
                            >
                              <span>Grinding Media</span>
                              <FiArrowRight size={12} className="opacity-40" />
                            </Link>
                          </DropdownMenuItem>

                          <DropdownMenuItem asChild>
                            <Link
                              href="/products/ball-valve-component"
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="w-full flex items-center justify-between no-underline text-inherit"
                            >
                              <span>Ball Valve Balls</span>
                              <FiArrowRight size={12} className="opacity-40" />
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 rounded-full text-[0.875rem] font-medium transition-all duration-200 no-underline ${
                      isActive
                        ? "bg-orange-500 text-white shadow-sm font-semibold"
                        : "text-zinc-700 hover:text-black hover:bg-orange-50/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Desktop CTAs ── */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsEnquiryOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-[0.875rem] font-semibold transition-all duration-200 shadow-sm hover:shadow-[0_4px_16px_rgba(232,101,10,0.35)] hover:-translate-y-0.5 border-none cursor-pointer"
              >
                Get in Touch
                <FiArrowRight size={14} />
              </button>

              <a
                href="https://www.ngandhi.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit N Gandhi Group"
                className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-black/[0.08] hover:border-orange-500/50 bg-white shadow-2xs hover:shadow-sm no-underline transition-all duration-200 group"
              >
                <img
                  src="/images/ngandi_logo.webp"
                  alt="N Gandhi Group"
                  className="h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </a>
            </div>

            {/* ── Tablet & Mobile Right Actions ── */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsConnectOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold transition-colors duration-200 border-none cursor-pointer shadow-xs"
              >
                Get a Quote
                <FiArrowRight size={12} />
              </button>

              <a
                href="https://www.ngandhi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-2.5 py-1.5 rounded-full border border-black/[0.08] bg-white no-underline hover:border-orange-500/50 transition-colors duration-200"
              >
                <img
                  src="/images/ngandi_logo.webp"
                  alt="N Gandhi Group"
                  className="h-5 w-auto object-contain"
                />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className={`p-2.5 rounded-full border border-black/[0.06] transition-all duration-200 cursor-pointer ${
                  mobileOpen
                    ? "bg-orange-500/10 text-orange-600 border-orange-500/20"
                    : "bg-white text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {mobileOpen ? <HiX size={20} /> : <HiMenu size={20} />}
              </button>
            </div>
          </div>
        </div>
        
        <div
          className={`lg:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden bg-white/98 backdrop-blur-2xl border-t border-black/[0.06] shadow-xl ${
            mobileOpen
              ? "max-h-[calc(100dvh-64px)] opacity-100"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-y-auto max-h-[calc(100dvh-64px)] px-4 sm:px-6 py-4 flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href, link.hasDropdown);

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.href}
                    className="rounded-2xl border border-black/[0.06] overflow-hidden bg-zinc-50/50"
                  >
                    <div
                      className={`flex items-center justify-between p-1 transition-colors ${
                        isActive ? "bg-orange-500 rounded-xl" : ""
                      }`}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex-1 px-3.5 py-2.5 text-[0.9375rem] font-semibold no-underline ${
                          isActive ? "text-white" : "text-zinc-800"
                        }`}
                      >
                        {link.label}
                      </Link>

                      <button
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        aria-label="Toggle products submenu"
                        className="p-2.5 rounded-xl text-zinc-400 hover:text-orange-600 bg-transparent border-none cursor-pointer"
                      >
                        <FiChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileProductsOpen ? "rotate-180 text-orange-600" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Collapsible content */}
                    <div
                      className={`overflow-hidden transition-[max-height] duration-250 ease-out ${
                        mobileProductsOpen ? "max-h-[500px]" : "max-h-0"
                      }`}
                    >
                      <div className="px-3 pb-3 pt-1 flex flex-col gap-1 border-t border-black/[0.04]">
                        {/* Nested Balls Item */}
                        <div className="rounded-xl bg-white border border-black/[0.06] overflow-hidden">
                          <div className="flex items-center justify-between p-1">
                            <Link
                              href="/products/balls"
                              onClick={() => setMobileOpen(false)}
                              className="flex-1 px-3 py-2 text-[0.875rem] font-medium text-zinc-700 no-underline"
                            >
                              Balls
                            </Link>
                            <button
                              onClick={() => setMobileBallsOpen(!mobileBallsOpen)}
                              aria-label="Toggle balls subcategory"
                              className="p-2 text-zinc-400 hover:text-orange-600 bg-transparent border-none cursor-pointer"
                            >
                              <FiChevronDown
                                size={14}
                                className={`transition-transform duration-200 ${
                                  mobileBallsOpen ? "rotate-180 text-orange-600" : ""
                                }`}
                              />
                            </button>
                          </div>

                          <div
                            className={`overflow-hidden transition-[max-height] duration-200 ease-out ${
                              mobileBallsOpen ? "max-h-[140px]" : "max-h-0"
                            }`}
                          >
                            <div className="px-3 pb-2 pt-1 flex flex-col gap-1 bg-zinc-50 border-t border-black/[0.04]">
                              <Link
                                href="/products/balls/metallic-balls"
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2 text-[0.8125rem] text-zinc-600 hover:text-orange-600 rounded-lg no-underline hover:bg-white"
                              >
                                Metallic Balls
                              </Link>
                              <Link
                                href="/products/balls/non-metallic-balls"
                                onClick={() => setMobileOpen(false)}
                                className="px-3 py-2 text-[0.8125rem] text-zinc-600 hover:text-orange-600 rounded-lg no-underline hover:bg-white"
                              >
                                Non-Metallic Balls
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* Other Product Items */}
                        <Link
                          href="/products/rollers"
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2.5 rounded-xl text-[0.875rem] font-medium text-zinc-700 hover:bg-white hover:text-orange-600 border border-transparent hover:border-black/[0.06] no-underline transition-all"
                        >
                          Rollers
                        </Link>
                        <Link
                          href="/products/grinding-media"
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2.5 rounded-xl text-[0.875rem] font-medium text-zinc-700 hover:bg-white hover:text-orange-600 border border-transparent hover:border-black/[0.06] no-underline transition-all"
                        >
                          Grinding Media
                        </Link>
                        <Link
                          href="/products/ball-valve-component"
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2.5 rounded-xl text-[0.875rem] font-medium text-zinc-700 hover:bg-white hover:text-orange-600 border border-transparent hover:border-black/[0.06] no-underline transition-all"
                        >
                          Ball Valve Balls
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[0.9375rem] font-medium no-underline transition-all ${
                    isActive
                      ? "bg-orange-500 text-white font-semibold shadow-xs"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  <span>{link.label}</span>
                  <FiChevronRight
                    size={15}
                    className={isActive ? "text-white" : "opacity-30"}
                  />
                </Link>
              );
            })}

            {/* Mobile Actions */}
            <div className="mt-4 pt-3 border-t border-black/[0.06] flex flex-col gap-2.5 sm:hidden">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsConnectOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-[0.9375rem] font-semibold shadow-sm border-none cursor-pointer transition-colors"
              >
                Get a Quote
                <FiArrowRight size={15} />
              </button>

              <button
                onClick={() => {
                  setMobileOpen(false);
                  setIsEnquiryOpen(true);
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-[0.875rem] font-medium border-none cursor-pointer transition-colors"
              >
                Get in Touch
              </button>

              <div className="flex items-center justify-center pt-2">
                <a
                  href="https://www.ngandhi.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/[0.08] bg-white no-underline text-xs text-zinc-500"
                >
                  <span>A Part of</span>
                  <img
                    src="/images/ngandi_logo.webp"
                    alt="N Gandhi Group"
                    className="h-4 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent page content jump under fixed navbar */}
      <div className="h-[64px] sm:h-[68px] lg:h-[72px]" />

      {/* Modals */}
      <ConnectModal isOpen={isConnectOpen} onClose={() => setIsConnectOpen(false)} />
      <ProductEnquiryModal isOpen={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
    </>
  );
}
