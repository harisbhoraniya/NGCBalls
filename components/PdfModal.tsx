"use client";
import { FiX, FiDownload } from "react-icons/fi";

interface PdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  title?: string;
}

export default function PdfModal({ isOpen, onClose, pdfUrl, title = "Product Catalogue" }: PdfModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col"
        style={{ height: "90vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <h3 className="text-base font-semibold text-[#1A1A1A]">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download
              aria-label="Download PDF"
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(232,101,10,0.08)", color: "var(--orange)" }}
            >
              <FiDownload size={16} />
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-none"
              style={{ background: "rgba(0,0,0,0.05)", color: "#1A1A1A" }}
            >
              <FiX size={18} />
            </button>
          </div>
        </div>

        {/* PDF viewer */}
        <div className="flex-1 bg-gray-50">
          <iframe
            src={`${pdfUrl}#toolbar=1`}
            title={title}
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </div >
  );
}