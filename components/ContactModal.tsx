"use client";
import { useState, useEffect, useRef } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiX } from "react-icons/fi";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: "", company: "", email: "", phone: "", product: "", message: "" });
  };

  // Click outside overlay to close
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
      />

      {/* Modal Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Contact Us"
        className={`fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none`}
      >
        <div
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl pointer-events-auto transition-all duration-300
            ${open ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95"}`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-orange-50 hover:text-orange-500 text-gray-500 transition-all duration-200 cursor-pointer border-none"
          >
            <FiX size={18} />
          </button>

          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                <FiCheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">Inquiry Submitted!</h3>
              <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                Thank you for reaching out. Our team will get back to you within 24 business hours.
              </p>
              <div className="flex gap-3 mt-8">
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-600 hover:border-orange-400 hover:text-orange-500 transition-colors duration-200 cursor-pointer bg-white"
                >
                  Submit Another
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200 cursor-pointer border-none"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            /* ── Form + Info layout ── */
            <div className="grid grid-cols-1 lg:grid-cols-5">

              {/* Left: Contact info panel */}
              <div className="lg:col-span-2 bg-[#1A1A1A] rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none p-7 flex flex-col gap-6">
                <div>
                  <span className="text-xs font-semibold text-orange-400 uppercase tracking-widest">Contact Us</span>
                  <h2 className="text-2xl font-bold text-white mt-2 leading-snug">
                    Let&apos;s Build<br />
                    <em className="text-orange-400 not-italic">Together</em>
                  </h2>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                    Have a product inquiry or custom requirement? We&apos;re here to help.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-orange-400 shrink-0">
                      <FiMapPin size={14} />
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      102, E-Square, Subhash Road,<br />
                      Vile Parle (East),<br />
                      Mumbai – 400057, India
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-orange-400 shrink-0">
                      <FiPhone size={14} />
                    </div>
                    <div>
                      <a href="tel:+912268380200" className="block text-xs text-gray-400 hover:text-orange-400 transition-colors">
                        +91-22-68380200
                      </a>
                      <a href="tel:+919136132011" className="block text-xs text-gray-400 hover:text-orange-400 transition-colors mt-0.5">
                        +91-9136132011
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/8 flex items-center justify-center text-orange-400 shrink-0">
                      <FiMail size={14} />
                    </div>
                    <a href="mailto:sales@ngandhi.com" className="text-xs text-gray-400 hover:text-orange-400 transition-colors">
                      sales@ngandhi.com
                    </a>
                  </div>
                </div>

                {/* Quick facts */}
                <div className="mt-auto pt-4 border-t border-white/10">
                  <ul className="space-y-2">
                    {[
                      "ISO 9001:2015 Certified",
                      "30+ Years of Experience",
                      "750+ Tons Ready Stock",
                      "Serving 9+ Countries",
                    ].map((fact) => (
                      <li key={fact} className="flex items-center gap-2 text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-3 p-7 lg:p-8">
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Inquiry Form</span>
                <h3 className="text-xl font-bold text-[#1A1A1A] mt-1 mb-6">Send Us a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Product Requirement
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all bg-white"
                    >
                      <option value="">Select a product category</option>
                      <option value="Precision Balls">Precision Balls (Metallic / Non-Metallic)</option>
                      <option value="Rollers">Rollers</option>
                      <option value="Fasteners">Fasteners</option>
                      <option value="Springs">Springs</option>
                      <option value="Grinding Media">Grinding Media</option>
                      <option value="Ball Valve Components">Ball Valve Components</option>
                      <option value="Measuring Instruments">Measuring Instruments</option>
                      <option value="Machine Components">Machine Components</option>
                      <option value="Other">Other / Custom</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your requirement — specifications, quantity, timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-colors duration-200 border-none cursor-pointer"
                  >
                    Submit Inquiry
                    <FiSend size={14} />
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}