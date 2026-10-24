import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const products = [
  {
    id: "balls",
    name: "Precision Balls",
    subtitle: "Metallic & Non-Metallic",
    desc: "High-quality metallic and non-metallic balls manufactured to exacting tolerances for use in bearings, valves, and mechanical assemblies. Available in stainless steel, chrome steel, ceramic, plastic, and glass variants.",
    items: ["Stainless Steel Balls", "Chrome Steel Balls", "Ceramic Balls", "Plastic Balls", "Glass Balls"],
    applications: "Bearings, valves, mechanical assemblies",
    image: "/images/NGC.jpg",
    href: "/products/balls",
    subLinks: [
      { label: "Metallic Balls", href: "/products/balls/metallic-balls" },
      { label: "Non-Metallic Balls", href: "/products/balls/non-metallic-balls" },
    ],
  },
  {
    id: "rollers",
    name: "Rollers",
    subtitle: "Cylindrical, Needle, Taper & Spherical",
    desc: "Precision-engineered rollers designed for high load-bearing capacity and durability in demanding industrial environments. Manufactured to the tightest tolerances for consistent performance.",
items: ["Cylindrical Rollers", "Needle Rollers", "Taper Rollers", "Spherical rollers"],
    applications: "Bearings, gearboxes, heavy machinery",
    image: "/images/Rollers.png",
    href: "/products/rollers",
    subLinks: [],
  },
  {
    id: "grinding-media",
    name: "Grinding Media",
    subtitle: "Polishing & Finishing",
    desc: "Used for polishing and finishing Metallic & Non-Metallic Balls & Rollers, including grinding of nano particles for advanced applications. Ideal for chemical, pharmaceutical, and electronics industries.",
    items: ["Grinding Balls", "Nano Particle Grinding", "Polishing Media"],
    applications: "Chemical, pharmaceutical, electronics",
    image: "/images/Grinding_Media.png",
    href: "/products/grinding-media",
    subLinks: [],
  },
  {
    id: "ball-valve-component",
    name: "Ball Valve Balls & Components",
    subtitle: "Fluid Control Systems",
    desc: "Precision-engineered components for fluid control systems, manufactured to the tightest tolerances. Trusted across oil & gas, chemical, and water treatment sectors worldwide.",
    items: ["Valve Balls", "Stem Pins", "Seat Rings"],
    applications: "Oil & gas, chemical, water treatment",
    image: "/images/Ball_Valve.png",
    href: "/products/ball-valve-component",
    subLinks: [],
  },
  // {
  //   id: "machine-component",
  //   name: "Machine Components",
  //   subtitle: "Custom Manufacturing",
  //   desc: "Custom-manufactured components built precisely to client specifications for unique industrial requirements. From concept to delivery, engineered for every industrial sector.",
  //   items: ["Custom Machined Parts", "Precision Components", "Specialty Parts"],
  //   applications: "All industrial sectors",
  //   image: "/images/Machine_Components.png",
  //   href: "/products/machine-component",
  //   subLinks: [],
  // },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block">Product Range</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6">
            Engineering Solutions<br />
            <em style={{ color: "var(--orange)" }}>Built to Last</em>
          </h1>
          <p className="text-body max-w-xl">
            A comprehensive portfolio of precision-engineered Metallic & Non-Metallic Balls & Rollers meeting the highest global quality standards.
          </p>
        </div>
      </section>

      {/* ── Product List ── */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="mb-14">
            <div className="divider" />
            <span className="text-caption mb-2 block">Our Products</span>
            <h2 className="heading-xl text-[#1A1A1A]">Complete Range</h2>
          </div>

          <div className="flex flex-col gap-8">
            {products.map((product, index) => {
              const isReversed = index % 2 !== 0;
              return (
                <div
                  key={product.id}
                  className="card-base overflow-hidden group"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 ${isReversed ? "lg:flex-row-reverse" : ""
                      }`}
                    style={
                      isReversed
                        ? { direction: "rtl" }
                        : {}
                    }
                  >
                    {/* Image */}
                    <div
                      className="relative aspect-[4/3] lg:aspect-auto min-h-[240px] overflow-hidden"
                      style={{ direction: "ltr" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                      {/* Index badge */}
                      <div className="absolute top-5 left-5 w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className="p-7 lg:p-10 flex flex-col justify-center"
                      style={{ direction: "ltr" }}
                    >
                      <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-2 block">
                        {product.subtitle}
                      </span>
                      <h2 className="heading-xl text-[#1A1A1A] mb-3 group-hover:text-orange-600 transition-colors duration-300">
                        {product.name}
                      </h2>
                      <p className="text-body mb-4">{product.desc}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {product.items.map((item) => (
                          <span
                            key={item}
                            className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Applications */}
                      {/* <p className="text-xs text-gray-400 mb-5">
                        <span className="font-semibold text-gray-600">Applications: </span>
                        {product.applications}
                      </p> */}

                      {/* CTA row */}
                      {product.id === "balls" ? (
                        <div className="flex flex-wrap gap-2">
                          <Link
                            href="/products/balls/metallic-balls"
                            className="btn-primary text-sm py-2 px-4"
                          >
                            View Metallic Balls <FiArrowRight size={13} />
                          </Link>
                          <Link
                            href="/products/balls/non-metallic-balls"
                            className="btn-secondary text-sm py-2 px-4"
                          >
                            View Non-Metallic Balls <FiArrowRight size={13} />
                          </Link>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 text-sm py-2 px-4 rounded-full border border-gray-200 text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors font-medium"
                          >
                            Request Quote
                          </Link>
                        </div>
                      ) : (
                        <div className="flex flex-wrap items-center gap-2">
                          <Link
                            href={product.href}
                            className="btn-primary text-sm py-2 px-4"
                          >
                            View Details <FiArrowRight size={13} />
                          </Link>
                          <Link
                            href="/contact"
                            className="btn-secondary text-sm py-2 px-4"
                          >
                            Request Quote
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="section-sm bg-[#1A1A1A]">
        <div className="container-main text-center py-8">
          <h2 className="heading-xl text-white mb-5">Need a Custom Solution?</h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto mb-8">
            Our engineering team specializes in custom-manufactured components built to your exact specifications.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Custom Quote <FiArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}