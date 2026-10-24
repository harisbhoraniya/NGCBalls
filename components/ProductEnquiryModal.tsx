"use client";
import { useState } from "react";
import { FiX, FiSend, FiCheckCircle, FiPhone, FiMail } from "react-icons/fi";
import { ballProductDetails } from "@/lib/data/ball-product-details";
import { nonMetallicBallProductDetails } from "@/lib/data/non-metallic-ball-product-details";

interface ProductEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// ─────────────────────────────────────────────
// Category → Sub-category map
// ─────────────────────────────────────────────
const categoryOptions: Record<string, string[]> = {
  Ball: ["Metallic Ball", "Non Metallic Ball"],
  Rollers: ["Cylindrical Rollers", "Taper Rollers", "Needle Rollers", "Spherical Rollers"],
  "Grinding Media": [
    "Steel Ball - Grinding Media",
    "Ceramic Balls - Grinding Media",
    "Glass Balls - Grinding Media",
    "Cast Iron Ball - Grinding Media",
  ],
  "Ball Valve Components": ["Ball Valve Stem Pin", "Valve Balls", "Ball Valve Seat Rings"],
};

const categories = Object.keys(categoryOptions);

// ─────────────────────────────────────────────
// Material lists, sourced from the same data used on the product pages
// ─────────────────────────────────────────────
const metallicMaterialOptions = Object.values(ballProductDetails).map((p) => ({
  slug: p.slug,
  name: p.name,
}));

const nonMetallicMaterialOptions = Object.values(nonMetallicBallProductDetails).map((p) => ({
  slug: p.slug,
  name: p.name,
}));

export default function ProductEnquiryModal({ isOpen, onClose }: ProductEnquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    subCategory: "",
    material: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "category") {
      // reset sub-category & material whenever category changes
      setForm({ ...form, category: value, subCategory: "", material: "" });
      return;
    }

    if (name === "subCategory") {
      // reset material whenever sub-category changes
      setForm({ ...form, subCategory: value, material: "" });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    // reset after the close animation/unmount so it's fresh next time it opens
    setTimeout(() => {
      setSubmitted(false);
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "",
        subCategory: "",
        material: "",
        message: "",
      });
    }, 300);
  };

  const subCategoryOptions = form.category ? categoryOptions[form.category] : [];

  // Show a Material field only for Metallic / Non Metallic Ball sub-categories
  const materialOptions =
    form.subCategory === "Metallic Ball"
      ? metallicMaterialOptions
      : form.subCategory === "Non Metallic Ball"
        ? nonMetallicMaterialOptions
        : [];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl p-8 lg:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none"
          style={{ background: "rgba(0,0,0,0.05)", color: "#1A1A1A" }}
        >
          <FiX size={18} />
        </button>

        {submitted ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
              <FiCheckCircle size={32} />
            </div>
            <h3 className="heading-lg text-[#1A1A1A] mb-3">Inquiry Submitted!</h3>
            <p className="text-body max-w-sm">
              Thank you for reaching out. Our team will get back to you within 24 business hours.
            </p>
            <button onClick={handleClose} className="btn-secondary mt-8">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="divider" />
            <span className="text-caption mb-2 block">Get In Touch &amp; Product Enquiry</span>
            <h2 className="heading-lg text-[#1A1A1A] mb-4">Tell Us What You Need</h2>

            {/* Quick Get in Touch details */}
            <div className="bg-orange-50/70 border border-orange-100 rounded-xl p-3.5 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-orange-500 shadow-xs shrink-0">
                  <FiPhone size={13} />
                </div>
                <div>
                  <span className="block text-[0.65rem] font-medium text-gray-400 uppercase tracking-wider">Phone</span>
                  <a href="tel:+912268380200" className="font-semibold text-gray-800 hover:text-orange-600 no-underline">
                    +91-22-68380200 (100 Lines)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center text-orange-500 shadow-xs shrink-0">
                  <FiMail size={13} />
                </div>
                <div>
                  <span className="block text-[0.65rem] font-medium text-gray-400 uppercase tracking-wider">Email</span>
                  <a href="mailto:enquirybr@ngandhi.com" className="font-semibold text-gray-800 hover:text-orange-600 no-underline">
                    enquirybr@ngandhi.com
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all bg-white"
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Sub Category *
                  </label>
                  <select
                    name="subCategory"
                    value={form.subCategory}
                    onChange={handleChange}
                    required
                    disabled={!form.category}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all bg-white disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {form.category ? "Select a sub category" : "Select category first"}
                    </option>
                    {subCategoryOptions.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* ── Material — only for Metallic Ball / Non Metallic Ball sub-categories ── */}
              {materialOptions.length > 0 && (
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Material *
                  </label>
                  <select
                    name="material"
                    value={form.material}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all bg-white"
                  >
                    <option value="">Select a material</option>
                    {materialOptions.map((m) => (
                      <option key={m.slug} value={m.slug}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your requirement — specifications, quantity, timeline..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3.5 text-base">
                Submit Inquiry <FiSend size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}