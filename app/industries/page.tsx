import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const industries = [
  
  
  {
    name: "Aerospace",
    desc: "High-precision components built to aerospace-grade tolerances and standards for critical applications.",
    applications: ["High Precision Balls", "Specialty Rollers", "Custom Components", "Measuring Tools"],
    image: "/images/Industries/Aerospace_industry.jpg",
  },
  {
    name: "Paint & Pigment",
    desc: "Corrosion-resistant balls and grinding media engineered for paint, pigment, and coatings manufacturing.",
    applications: ["Grinding Media", "Ceramic Balls", "Dispersion Balls", "Corrosion-Resistant Parts"],
    image: "/images/Industries/Paint.png",
  },
  
  {
    name: "Consumer & Health Care",
    desc: "Precision components for consumer products and medical devices requiring high accuracy and reliability.",
    applications: ["Precision Balls", "Small Components", "Custom Parts", "Quality-Assured Products"],
    image: "/images/Industries/healthcare.jfif",
  },
  {
    name: "Automobile",
    desc: "Components for steering systems, transmissions, and safety assemblies in automotive manufacturing.",
    applications: ["Steering Balls", "Transmission Components", "Safety Valves", "Seat Belt Parts"],
    image: "/images/Industries/Automotive.jpg",
  },
  {
    name: "Engineering & Manufacturing",
    desc: "Precision guide ways, ball screws, and linear motion components engineered for accuracy across manufacturing disciplines.",
    applications: ["Guide Ways", "Ball Screws", "Linear Motion Systems", "Machine Components"],
    image: "/images/Industries/engineering_manufacturing.jpg",
  },
  {
    name: "Ball Bearing",
    desc: "Precision balls and rollers that meet exacting tolerances for bearing manufacturers worldwide.",
    applications: ["Precision Balls", "Cylindrical Rollers", "Needle Rollers", "Taper Rollers"],
    image: "/images/Industries/ball_bearing.jpg",
  },
  {
    name: "Textile",
    desc: "Specialized components for textile machinery requiring smooth, reliable, long-lasting performance.",
    applications: ["Precision Rollers", "Specialty Balls", "Bearings", "Mechanical Parts"],
    image: "/images/textile.png",
  },
  {
    name: "Renewable Energy",
    desc: "Durable components for wind turbines, solar systems, and other clean energy infrastructure.",
    applications: ["Wind Turbine Bearings", "Precision Balls", "Rollers", "Fasteners"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",
  },
  {
    name: "Oil & Gas",
    desc: "High-performance valve components and sealing solutions engineered for extreme pressure environments.",
    applications: ["Valve Balls", "Seat Rings", "Stem Pins", "High-Pressure Components"],
    image: "/images/oil_gas.png",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block">Industries</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6">
            Powering Industries<br />
            <p style={{ color: "var(--orange)" }}>Across the Globe</p>
          </h1>
          <p className="text-body max-w-xl">
            From automotive to aerospace, our precision components are trusted across nine major industry verticals with specialized solutions for each.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="card-base group overflow-hidden bg-white">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <h3 className="text-white font-semibold text-lg leading-tight drop-shadow">{ind.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{ind.desc}</p>
                  {/* <div className="flex flex-wrap gap-1.5">
                    {ind.applications.map((app) => (
                      <span key={app} className="text-xs px-2.5 py-1 rounded-full bg-orange-50 text-orange-600 font-medium border border-orange-100">
                        {app}
                      </span>
                    ))}
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Banner */}
      {/* <section className="section bg-white">
        <div className="container-main">
          <div className="card-base overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[2/4] lg:aspect-auto">
                <Image
                  src="/images/Under_Pressure.png"
                  alt="Industrial applications"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="divider" />
                <span className="text-caption mb-3 block">Proven Applications</span>
                <h2 className="heading-xl text-[#1A1A1A] mb-5">Components That<br />Perform Under Pressure</h2>
                <p className="text-body mb-6">
                  Our products are used in critical applications — from ball bearings and safety valves to seat belts and high-pressure fluid control systems.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Ball Bearings", "Safety Valves", "Seat Belt Mechanisms", "Mechanical Assemblies", "Fluid Control Systems"].map((app) => (
                    <li key={app} className="flex items-center gap-3 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {app}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary w-fit">
                  Discuss Your Application <FiArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}