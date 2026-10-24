import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";

const countries = [
  { name: "India", flag: "🇮🇳", region: "Asia", desc: "Headquartered in Mumbai with operations across the country." },
  { name: "USA", flag: "🇺🇸", region: "North America", desc: "Serving industrial manufacturers across the United States." },
  { name: "Germany", flag: "🇩🇪", region: "Europe", desc: "Supplying precision components to German engineering firms." },
  { name: "United Kingdom", flag: "🇬🇧", region: "Europe", desc: "Long-standing relationships with UK industrial buyers." },
  { name: "UAE", flag: "🇦🇪", region: "Middle East", desc: "Serving oil & gas and industrial sectors in the Emirates." },
  { name: "Qatar", flag: "🇶🇦", region: "Middle East", desc: "Supplying precision parts for energy and infrastructure." },
  { name: "Sultanate of Oman", flag: "🇴🇲", region: "Middle East", desc: "Precision components for Oman's growing industrial base." },
  { name: "Indonesia", flag: "🇮🇩", region: "Southeast Asia", desc: "Serving manufacturing and engineering clients in Indonesia." },
  { name: "Australia", flag: "🇦🇺", region: "Oceania", desc: "Supplying Australian manufacturers with precision components." },
  { name: "Bangladesh", flag: "🇧🇩", region: "Asia", desc: "Supporting Bangladesh's expanding textile and manufacturing sectors." },
  { name: "China", flag: "🇨🇳", region: "Asia", desc: "Supplying specialty components to Chinese manufacturers." },
];

const regions = [
  { name: "Asia & South Asia", countries: ["India", "Bangladesh", "China"], color: "bg-orange-50 border-orange-100 text-orange-700" },
  { name: "Middle East", countries: ["UAE", "Qatar", "Sultanate of Oman"], color: "bg-amber-50 border-amber-100 text-amber-700" },
  { name: "Europe", countries: ["Germany", "United Kingdom"], color: "bg-gray-50 border-gray-200 text-gray-700" },
  { name: "Americas & Oceania", countries: ["USA", "Australia"], color: "bg-slate-50 border-slate-200 text-slate-700" },
];

export default function GlobalPresencePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block">Global Presence</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6">
            Precision, Delivered<br />
            <p style={{ color: "var(--orange)" }}>Worldwide</p>
          </h1>
          <p className="text-body max-w-xl">
            From our Mumbai headquarters, we serve clients across 9+ countries — delivering consistent quality, reliability, and trust on every shipment.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { n: "9+", l: "Countries" },
              { n: "4", l: "Continents" },
              { n: "20+", l: "OEM Partners" },
              { n: "30+", l: "Years of Export" },
            ].map((s) => (
              <div key={s.l} className="card-base p-6 text-center">
                <div className="stat-number text-3xl">{s.n}</div>
                <div className="text-sm text-gray-400 mt-1 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World map visual */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-14">
            <div className="divider mx-auto" />
            <span className="text-caption mb-3 block">Our Reach</span>
            <h2 className="heading-xl text-[#1A1A1A]">Markets We Serve</h2>
          </div>

          {/* Regions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            {regions.map((r) => (
              <div key={r.name} className="card-base p-6">
                <h3 className="font-semibold text-[#1A1A1A] mb-4 flex items-center gap-2">
                  <MdLocationOn size={16} className="text-orange-500" />
                  {r.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {r.countries.map((c) => (
                    <span key={c} className={`text-sm px-3 py-1.5 rounded-full border font-medium ${r.color}`}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Countries grid */}
          <div className="text-center mb-10">
            <span className="text-caption mb-3 block">Countries</span>
            <h3 className="heading-lg text-[#1A1A1A]">Where We Operate</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {countries.map((c) => (
              <div key={c.name} className="card-base p-6 group flex items-start gap-4">
                <div className="text-3xl shrink-0">{c.flag}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-[#1A1A1A] group-hover:text-orange-600 transition-colors">
                      {c.name}
                    </h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">
                      {c.region}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export commitment */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="divider" />
              <span className="text-caption mb-3 block">Our Commitment</span>
              <h2 className="heading-xl text-[#1A1A1A] mb-6">Quality Across<br />Every Border</h2>
              <p className="text-body mb-5">
                Our global network reflects our unwavering commitment to quality and reliability. Every shipment — regardless of destination — meets the same exacting standards that have made N Gandhi & Co. a trusted name since 1991.
              </p>
              <p className="text-body mb-8">
                With 750+ tons of ready stock and efficient logistics systems, we ensure timely delivery to clients in India and across international markets.
              </p>
              <Link href="/contact" className="btn-primary">
                Partner with Us <FiArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Consistent Quality", desc: "Same ISO-certified standards for every market, every order." },
                { title: "Fast Dispatch", desc: "750+ tons of inventory ensures rapid order fulfillment." },
                { title: "Local Understanding", desc: "Deep knowledge of regional industrial needs and standards." },
                { title: "Long-term Partnerships", desc: "20+ year relationships with leading OEMs globally." },
              ].map((item) => (
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

      {/* CTA */}
      <section className="section-sm bg-[#1A1A1A]">
        <div className="container-main text-center py-6">
          <h2 className="heading-xl text-white mb-4">Expanding Our Global Reach</h2>
          <p className="text-gray-400 text-base max-w-md mx-auto mb-8">
            Looking to source precision components for your market? We&apos;d love to discuss how we can serve you.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch <FiArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
