"use client";
import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle } from "react-icons/fi";

// ─────────────────────────────────────────────
// Category → Sub-category map (same as ProductEnquiryModal)
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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "",
    subCategory: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "category") {
      // reset sub-category whenever category changes
      setForm({ ...form, category: value, subCategory: "" });
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "0e8459dc-4735-480a-aae4-f5ac44b839c3";

    if (!accessKey) {
      setErrorMessage(
        "Web3Forms Access Key is not configured. Please add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local"
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("access_key", accessKey);
      formData.append("name", form.name);
      formData.append("company", form.company || "N/A");
      formData.append("email", form.email);
      formData.append("phone", form.phone || "N/A");
      formData.append("category", form.category);
      formData.append("subCategory", form.subCategory);
      formData.append("message", form.message);
      formData.append(
        "subject",
        `New Inquiry from ${form.name} (${form.company || "Individual"}) - N Gandhi & Co`
      );
      formData.append("from_name", "N Gandhi & Co Website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.message || "Failed to submit inquiry. Please try again or email us directly at enquirybr@ngandhi.com."
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMessage("Network error. Please check your internet connection or email us directly at enquirybr@ngandhi.com.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const subCategoryOptions = form.category ? categoryOptions[form.category] : [];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.022)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-orange-50 blur-[100px] opacity-60 pointer-events-none" />
        <div className="container-main relative z-10">
          <span className="text-caption mb-4 block">Contact Us</span>
          <h1 className="heading-display text-[#1A1A1A] max-w-2xl mb-6">
            Let&apos;s Build Something<br />
            <span style={{ color: "var(--orange)", display: "block" }}>Together</span>
          </h1>
          <p className="text-body max-w-xl">
            Whether you have a product inquiry, a custom requirement, or just want to explore how we can help — we&apos;re here to talk.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section bg-[#F7F7F7]">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="divider" />
              <span className="text-caption mb-3 block">Get in Touch</span>
              <h2 className="heading-xl text-[#1A1A1A] mb-8">Our Details</h2>

              <div className="space-y-6 mb-10">
                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <FiMapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-1 text-sm">Corporate Office</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      104,1st Floor,<br />
                      C Wing ,Marathon Futurex,<br />
                      N M Joshi Marg,<br />
                      Lower Parel (E),<br />
                      Mumbai - 400013,<br />
                      Maharashtra, India.<br />

                    </p>
                  </div>
                </div>

                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <FiPhone size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm">Phone</h4>
                    <a href="tel:+912268380200" className="block text-sm text-gray-500 hover:text-orange-500 transition-colors">
                      +91-22-68380200 (100 Lines)
                    </a>
                  </div>
                </div>

                <div className="card-base p-6 flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                    <FiMail size={16} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1A1A1A] mb-2 text-sm">Email</h4>
                    <div className="space-y-1.5">
                      <div>
                        <span className="block text-[0.7rem] text-gray-400 font-medium">NGC (Precision Balls &amp; Rollers):</span>
                        <a href="mailto:enquirybr@ngandhi.com" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                          enquirybr@ngandhi.com
                        </a>
                      </div>
                      <div>
                        <span className="block text-[0.7rem] text-gray-400 font-medium">NAMTPL (Advance Materials):</span>
                        <a href="mailto:enquirymatl@ngandhi.com" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                          enquirymatl@ngandhi.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick facts */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-4 text-sm">Quick Facts</h4>
                <ul className="space-y-2.5">
                  {[
                    "ISO 9001:2015 Certified",
                    "30+ Years of Experience",
                    "750+ Tons Ready Stock",
                    "Serving 9+ Countries",
                    "Custom Engineering Available",
                  ].map((fact) => (
                    <li key={fact} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-base p-8 lg:p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mb-6">
                      <FiCheckCircle size={32} />
                    </div>
                    <h3 className="heading-lg text-[#1A1A1A] mb-3">Inquiry Submitted!</h3>
                    <p className="text-body max-w-sm">
                      Thank you for reaching out. Our team will get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setErrorMessage(null);
                        setForm({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          category: "",
                          subCategory: "",
                          message: "",
                        });
                      }}
                      className="btn-secondary mt-8"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="divider" />
                    <span className="text-caption mb-3 block">Inquiry Form</span>
                    <h2 className="heading-lg text-[#1A1A1A] mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-5">
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
                            suppressHydrationWarning
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

                      {/* ── Category / Sub Category (added below Phone Number) ── */}
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

                      <div>
                        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your requirement — specifications, quantity, timeline..."
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[#1A1A1A] placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-50 transition-all resize-none"
                        />
                      </div>

                      {errorMessage && (
                        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm leading-relaxed">
                          {errorMessage}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            Sending Inquiry...
                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                            </svg>
                          </>
                        ) : (
                          <>
                            Submit Inquiry <FiSend size={16} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}