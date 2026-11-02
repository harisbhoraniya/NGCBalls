"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle, FiFileText, FiTarget, FiActivity, FiShield } from "react-icons/fi";
import CertificateModal from "@/components/CertificateModal";

const infraStats = [
  { n: "9+", l: "Countries" },
  { n: "4", l: "Continents" },
  { n: "20+", l: "OEM Partners" },
  { n: "30+", l: "Years of Export" },
];

const capabilities = [
  {
    title: "Advanced Manufacturing Machinery",
    desc: "High-precision heading machines, ball flashers, and CNC-controlled multi-stage ball grinders operating to international ISO 3290 and DIN 5401 specifications.",
    image: "/images/Industry.jpg",
  },
  {
    title: "Precision Engineering & Tooling",
    desc: "Automated precision lapping lines, guide ways, and micro-finishing systems that ensure dimensional uniformity down to sub-micron tolerances.",
    image: "/images/Industries/engineering_manufacturing.jpg",
  },
  {
    title: "In-House Quality Testing & Metrology",
    desc: "Temperature-controlled inspection laboratories equipped with electronic dial gauges, roundness testers, profilometers, and Rockwell/Vickers hardness instruments.",
    image: "/images/Measuring.png",
  },
];

const roundnessSpecs = [
  { grade: "Grade 3", deviationMetric: "0.08 µm", deviationInch: ".000003\"", application: "Ultra-precision gyroscopes, aerospace guidance" },
  { grade: "Grade 5", deviationMetric: "0.13 µm", deviationInch: ".000005\"", application: "High-speed machine tool spindle bearings" },
  { grade: "Grade 10", deviationMetric: "0.25 µm", deviationInch: ".000010\"", application: "Precision automotive & electric motor bearings" },
  { grade: "Grade 16", deviationMetric: "0.40 µm", deviationInch: ".000016\"", application: "Standard bearing assemblies & linear ball bushings" },
  { grade: "Grade 24", deviationMetric: "0.60 µm", deviationInch: ".000024\"", application: "Industrial transmissions & automotive safety systems" },
  { grade: "Grade 48", deviationMetric: "1.20 µm", deviationInch: ".000048\"", application: "Heavy mechanical assemblies & steering mechanisms" },
  { grade: "Grade 100", deviationMetric: "2.50 µm", deviationInch: ".000100\"", application: "Conveyors, castors, commercial hardware valves" },
];

const roughnessSpecs = [
  { grade: "Grade 3", raMetric: "0.012 µm", raInch: "0.5 µin", finish: "Super-finished optical mirror finish" },
  { grade: "Grade 5", raMetric: "0.020 µm", raInch: "0.8 µin", finish: "Micro-lapped high-velocity finish" },
  { grade: "Grade 10", raMetric: "0.025 µm", raInch: "1.0 µin", finish: "Ultra-fine precision lapped" },
  { grade: "Grade 16", raMetric: "0.025 µm", raInch: "1.0 µin", finish: "Precision ground and lapped" },
  { grade: "Grade 24", raMetric: "0.050 µm", raInch: "2.0 µin", finish: "Fine ground and polished" },
  { grade: "Grade 48", raMetric: "0.080 µm", raInch: "3.0 µin", finish: "Commercial precision ground" },
  { grade: "Grade 100", raMetric: "0.125 µm", raInch: "5.0 µin", finish: "Standard smooth ground finish" },
];

const hardnessSpecs = [
  { material: "Chrome Steel (AISI 52100 / 100Cr6)", heatTreatment: "Atmosphere-controlled through-hardened & tempered", hardness: "60–65 HRC" },
  { material: "Martensitic Stainless (AISI 440C)", heatTreatment: "Vacuum heat-treated with sub-zero deep freeze cycle", hardness: "58–62 HRC" },
  { material: "Martensitic Stainless (AISI 420 / 420C)", heatTreatment: "Oil-quenched & stabilized for corrosion/wear balance", hardness: "52–55 HRC" },
  { material: "Tool Steel (AISI S2)", heatTreatment: "Through-hardened for maximum shock resistance", hardness: "58–62 HRC" },
  { material: "Tungsten Carbide (WC-Co / WC-Ni)", heatTreatment: "High-pressure sinter-HIP consolidated matrix", hardness: "89–91 HRA" },
  { material: "Low Carbon Steel (AISI 1010)", heatTreatment: "Controlled carburized case hardening (0.6–1.2 mm depth)", hardness: "Case HRC 60 min" },
  { material: "Ceramic Silicon Nitride (Si₃N₄)", heatTreatment: "Gas-pressure sintered (GPS) dense ceramic structure", hardness: "1500–1800 HV" },
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
            <span style={{ color: "var(--orange)" }}>Excellence</span>
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

      {/* ── Technical Manufacturing Capabilities: Roundness, Surface Roughness, Hardness ── */}
      <section className="section bg-[#FBFBFB] border-t border-b border-gray-100">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">Technical Specifications</span>
            <h2 className="heading-xl text-[#1A1A1A]">
              Precision Tolerances &amp; Metallurgical Control
            </h2>
            <p className="text-body max-w-2xl mx-auto mt-3">
              Every rolling element is precision manufactured and rigorously verified to international DIN 5401 and ISO 3290-1 standards, ensuring exceptional roundness, micro-inch surface finish, and metallurgical hardness integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {/* 1. Roundness Card */}
            <div className="card-base p-6 sm:p-7 flex flex-col bg-white">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                <FiTarget size={20} />
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                Dimensional Accuracy
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Roundness &amp; Sphericity
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Deviation from spherical form measured across multiple equatorial and polar planes using automated roundness testers, ensuring near-perfect geometric sphericity.
              </p>
              <div className="space-y-2 mt-auto pt-4 border-t border-gray-100 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 3 Deviation:</span>
                  <span className="font-bold text-gray-900">0.08 µm (.000003&quot;)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 5 Deviation:</span>
                  <span className="font-bold text-gray-900">0.13 µm (.000005&quot;)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 10 Deviation:</span>
                  <span className="font-bold text-gray-900">0.25 µm (.000010&quot;)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-600">Testing Standard:</span>
                  <span className="font-medium text-orange-600">ISO 3290-1 / DIN 5401</span>
                </div>
              </div>
            </div>

            {/* 2. Surface Roughness Card */}
            <div className="card-base p-6 sm:p-7 flex flex-col bg-white">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                <FiActivity size={20} />
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                Surface Metrology
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Surface Roughness (Ra)
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                High-velocity lapping and multi-step polishing deliver scratch-free, mirror-grade surface topographies measured with calibrated diamond-stylus profilometers.
              </p>
              <div className="space-y-2 mt-auto pt-4 border-t border-gray-100 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 3 Finish:</span>
                  <span className="font-bold text-gray-900">Ra ≤ 0.012 µm (0.5 µin)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 5 Finish:</span>
                  <span className="font-bold text-gray-900">Ra ≤ 0.020 µm (0.8 µin)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Grade 10 Finish:</span>
                  <span className="font-bold text-gray-900">Ra ≤ 0.025 µm (1.0 µin)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-600">Measurement Method:</span>
                  <span className="font-medium text-orange-600">Stylus Profilometry</span>
                </div>
              </div>
            </div>

            {/* 3. Hardness Card */}
            <div className="card-base p-6 sm:p-7 flex flex-col bg-white">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
                <FiShield size={20} />
              </div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                Thermal &amp; Metallurgy
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Hardness &amp; Heat Treatment
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">
                Atmosphere-controlled continuous heat treatment, oil quenching, and cryogenic sub-zero stabilization produce homogenous martensitic core structures.
              </p>
              <div className="space-y-2 mt-auto pt-4 border-t border-gray-100 text-xs">
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">AISI 52100 Chrome:</span>
                  <span className="font-bold text-gray-900">60–65 HRC</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">AISI 440C Stainless:</span>
                  <span className="font-bold text-gray-900">58–62 HRC</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-50">
                  <span className="font-semibold text-gray-600">Tungsten Carbide:</span>
                  <span className="font-bold text-gray-900">89–91 HRA</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-gray-600">Vickers Micro-Hardness:</span>
                  <span className="font-medium text-orange-600">1500–1800 HV (Si₃N₄)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Verified Engineering Tolerances Table */}
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-xs mb-8">
            <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-gray-900">Verified Precision Tolerances by Grade (ISO 3290-1 / DIN 5401)</h4>
              <span className="text-xs text-gray-400">In-house calibrated metrology</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/40 text-gray-500 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4">Grade</th>
                    <th className="py-3 px-4">Max Spherical Form Deviation (Roundness)</th>
                    <th className="py-3 px-4">Surface Roughness (Ra)</th>
                    <th className="py-3 px-4">Surface Finish Characteristics</th>
                    <th className="py-3 px-4">Typical Critical Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {roundnessSpecs.map((row, idx) => (
                    <tr key={row.grade} className="hover:bg-orange-50/20 transition-colors">
                      <td className="py-3 px-4 font-bold text-gray-900">{row.grade}</td>
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {row.deviationMetric} <span className="text-gray-400 font-normal">({row.deviationInch})</span>
                      </td>
                      <td className="py-3 px-4 font-medium text-orange-600">
                        {roughnessSpecs[idx].raMetric} <span className="text-gray-400 font-normal">({roughnessSpecs[idx].raInch})</span>
                      </td>
                      <td className="py-3 px-4 text-gray-600">{roughnessSpecs[idx].finish}</td>
                      <td className="py-3 px-4 text-gray-600">{row.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Metallurgical Hardness Specification Table */}
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-xs">
            <div className="px-6 py-4 bg-gray-50/70 border-b border-gray-100 flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-bold text-gray-900">Material Hardness &amp; Heat Treatment Standards</h4>
              <span className="text-xs text-gray-400">Atmosphere-controlled electric furnaces</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50/40 text-gray-500 uppercase tracking-wider font-semibold">
                    <th className="py-3 px-4">Material / Alloy Grade</th>
                    <th className="py-3 px-4">Heat Treatment Process</th>
                    <th className="py-3 px-4">Hardness Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {hardnessSpecs.map((h) => (
                    <tr key={h.material} className="hover:bg-orange-50/20 transition-colors">
                      <td className="py-3 px-4 font-bold text-gray-900">{h.material}</td>
                      <td className="py-3 px-4 text-gray-600">{h.heatTreatment}</td>
                      <td className="py-3 px-4 font-bold text-orange-600">{h.hardness}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quality + Logistics */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quality Assurance */}
            <div className="card-base p-8 lg:p-10">
              <div className="relative rounded-xl overflow-hidden h-64 mb-8">
                <Image
                  src="/images/iso_logo.png"
                  alt="Quality assurance ISO 9001:2015"
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

      {/* ISO certificate PDF popup */}
      <CertificateModal isOpen={isCertOpen} onClose={() => setIsCertOpen(false)} />
    </>
  );
}
