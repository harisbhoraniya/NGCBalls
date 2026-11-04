"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiFileText } from "react-icons/fi";
import CertificateModal from "@/components/CertificateModal"; // adjust the import path to wherever you place CertificateModal.tsx

const infraStats = [
  { n: "9+", l: "Countries" },
  { n: "4", l: "Continents" },
  { n: "20+", l: "OEM Partners" },
  { n: "30+", l: "Years of Export" },
];

const capabilities = [
  {
    title: "Advanced Machinery",
    desc: "State-of-the-art manufacturing equipment enabling production to the tightest tolerances.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Precision Engineering Tools",
    desc: "Specialized tools and tooling systems that ensure dimensional accuracy in every component.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Quality Testing Systems",
    desc: "Globally recognized testing instruments and in-house labs for rigorous quality validation.",
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?w=600&q=80&auto=format&fit=crop",
  },
];

const qualityPoints = [
  "ISO 9001:2015 Certified Quality Management System",
  "Strict multi-stage quality checks at every production step",
  "International standards compliance across all product lines",
  "In-house testing labs with globally recognized instruments",
  "Regular audits and continuous process improvement",
  "Full traceability from raw material to finished product",
];

const logisticsPoints = [
  "750+ tons of ready-to-dispatch inventory",
  "Efficient warehouse management systems",
  "Bulk order handling capability",
  "Safe, climate-controlled storage",
  "Fast dispatch and on-time delivery",
  "Flexible packaging solutions",
];

const commitmentPoints = [
  { title: "Consistent Quality", desc: "Same ISO-certified standards for every market, every order." },
  { title: "Fast Dispatch", desc: "750+ tons of inventory ensures rapid order fulfillment." },
  { title: "Local Understanding", desc: "Deep knowledge of regional industrial needs and standards." },
  { title: "Long-term Partnerships", desc: "20+ year relationships with leading OEMs globally." },
];

export default function InfrastructurePage() {
  const [isCertOpen, setIsCertOpen] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block">Infrastructure</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6">
            Manufacturing<br />
            <p style={{ color: "var(--orange)" }}>Excellence</p>
          </h1>
          <p className="text-body max-w-xl">
            Our world-class facility is equipped with advanced machinery, precision tools, and globally recognized testing systems — built to deliver perfection at scale.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {infraStats.map((s) => (
              <div key={s.l} className="card-base p-6 text-center">
                <div className="stat-number text-3xl">{s.n}</div>
                <div className="text-sm text-gray-400 mt-1 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">Our Capabilities</span>
            <h2 className="heading-xl text-[#1A1A1A]">Built for Precision<br />at Every Scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="card-base group overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#1A1A1A] mb-2 group-hover:text-orange-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality + Logistics */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quality Assurance */}
            <div className="card-base p-8 lg:p-10">
              {/* Remove aspect ratio, use a fixed height instead */}
              <div className="relative rounded-xl overflow-hidden h-66 mb-8">
                <Image
                  src="/images/iso_logo.png"
                  alt="Quality assurance"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="divider" />
              <span className="text-caption mb-3 block">Quality Assurance</span>
              <h3 className="heading-lg text-[#1A1A1A] mb-6">ISO Certified<br />Quality Control</h3>
              <ul className="space-y-3 mb-8">
                {qualityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <FiCheckCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <button onClick={() => setIsCertOpen(true)} className="btn-primary">
                View Details <FiFileText size={15} />
              </button>
            </div>

            {/* Warehousing */}
            <div className="card-base p-8 lg:p-10">
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] mb-8">
                <Image
                  src="/images/supply.png"
                  alt="Warehousing and logistics"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="divider" />
              <span className="text-caption mb-3 block">Warehousing & Logistics</span>
              <h3 className="heading-lg text-[#1A1A1A] mb-6">Efficient Inventory<br />& Timely Delivery</h3>
              <ul className="space-y-3">
                {logisticsPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <FiCheckCircle size={16} className="text-orange-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider" />
              <span className="text-caption mb-3 block">Our Commitment</span>
              <h2 className="heading-xl text-[#1A1A1A] mb-6">Quality Across<br />Every Border</h2>
              <p className="text-body mb-5">
                Our global network reflects our unwavering commitment to quality and reliability. Every shipment — regardless of destination — meets the same exacting standards that have made N Gandhi &amp; Co. a trusted name since 1991.
              </p>
              <p className="text-body mb-8">
                With 750+ tons of ready stock and efficient logistics systems, we ensure timely delivery to clients in India and across international markets.
              </p>
              <Link href="/contact" className="btn-primary">
                Partner with Us <FiArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {commitmentPoints.map((item) => (
                <div key={item.title} className="card-base p-5">
                  <div className="w-2 h-5 rounded-full bg-orange-500 mb-4" />
                  <h4 className="font-semibold text-[#1A1A1A] mb-1 text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certification Banner */}
      <section className="section-sm bg-[#1A1A1A]">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            <div>
              <h2 className="heading-xl text-white mb-3">ISO 9001:2015 Certified</h2>
              <p className="text-gray-400 text-base max-w-lg leading-relaxed">
                Our quality management system is certified to the globally recognized ISO 9001:2015 standard — a testament to our commitment to excellence.
              </p>
            </div>
            <button onClick={() => setIsCertOpen(true)} className="btn-primary shrink-0">
              View Details <FiFileText size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* ISO certificate PDF popup */}
      <CertificateModal isOpen={isCertOpen} onClose={() => setIsCertOpen(false)} />
    </>
  );
}