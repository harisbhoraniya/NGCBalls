import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiChevronRight, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import {
  getBallValveProductDetail,
  ballValveProductDetails,
} from "@/lib/data/ball-valve-product-details";

export function generateStaticParams() {
  return Object.keys(ballValveProductDetails).map((slug) => ({ slug }));
}

export default async function BallValveProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getBallValveProductDetail(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* ── Breadcrumb ── */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-orange-500 transition-colors no-underline">
          Home
        </Link>
        <FiChevronRight size={13} />
        <Link href="/products" className="hover:text-orange-500 transition-colors no-underline">
          Products
        </Link>
        <FiChevronRight size={13} />
        <Link
          href="/products/ball-valve-component"
          className="hover:text-orange-500 transition-colors no-underline"
        >
          Ball Valve Components
        </Link>
        <FiChevronRight size={13} />
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      {/* ══════════════════════════════════
          HERO — Image left, richer content right
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-sm bg-white mb-10">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="relative w-full sm:w-1/2 h-80 sm:h-[460px] bg-gray-50 shrink-0">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              className="object-contain p-6 sm:p-8"
              priority
            />
            {/* ISO badge over the image */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-gray-100 shadow-sm">
              <HiOutlineBadgeCheck size={14} className="text-orange-500" />
              <span className="text-[0.7rem] font-semibold text-gray-700 tracking-wide">
                ISO 9001:2015
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center w-full sm:w-1/2 px-6 py-8 sm:px-10 sm:py-10">
            {/* Decorative background accent so the panel doesn't feel empty */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: "rgba(232,101,10,0.06)" }}
            />

            <span className="relative text-[0.7rem] sm:text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3 block">
              Ball Valve Component
            </span>

            <h1 className="relative text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
              {product.name}
            </h1>

            <p className="relative text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
              Precision-engineered to exact tolerances and finished to industrial valve
              standards, ensuring leak-tight performance, durability, and consistent
              quality across every batch.
            </p>

            {/* Quick spec highlights — fills the empty space with useful info */}
            <div className="relative flex flex-col gap-3 mb-7">
              <div className="flex items-start gap-2.5">
                <FiCheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Types offered: </span>
                  {product.details.types}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <FiCheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-600">
                  <span className="font-semibold text-gray-800">Sizes offered: </span>
                  {product.details.sizes}
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <FiCheckCircle size={15} className="text-orange-500 mt-0.5 shrink-0" />
                <div className="flex-1">
                  <span className="text-xs sm:text-sm font-semibold text-gray-800 block mb-1.5">
                    Material
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.details.material.split(",").map((m) => m.trim()).filter(Boolean).map((m, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[0.7rem] sm:text-xs font-medium bg-orange-50 text-orange-600 border border-orange-100"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA — gives the right panel a clear action instead of empty space */}
            <div className="relative flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="btn-primary justify-center whitespace-nowrap no-underline"
              >
                Enquire Now <FiArrowRight size={15} />
              </Link>
              <Link
                href="/products/ball-valve-component"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:border-orange-300 hover:text-orange-500 transition-colors duration-200 no-underline"
              >
                View All Components
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          SPEC CARDS — Types / Sizes / Material (detailed reference below hero)
      ══════════════════════════════════ */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-2">
            Types We Offer
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{product.details.types}</p>
        </div>

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-2">
            Sizes We Offer
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">{product.details.sizes}</p>
        </div>

        <div className="rounded-xl bg-gray-50 border border-gray-100 p-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-3">
            Material
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.details.material.split(",").map((m) => m.trim()).filter(Boolean).map((m, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white text-gray-700 border border-gray-200"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          BACK LINK
      ══════════════════════════════════ */}
      <div className="flex justify-center">
        <Link
          href="/products/ball-valve-component"
          className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors no-underline"
        >
          <FiArrowRight size={14} className="rotate-180" />
          Back to Ball Valve Components
        </Link>
      </div>
    </main>
  );
}