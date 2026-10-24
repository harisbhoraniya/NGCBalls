"use client";
import { useState } from "react";
import { FiX, FiSend, FiCheckCircle } from "react-icons/fi";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl p-8 lg:p-10 max-h-[90vh] overflow-y-auto"
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
            <span className="text-caption mb-3 block">Get in Touch</span>
            <h2 className="heading-lg text-[#1A1A1A] mb-8">Connect With Us</h2>
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