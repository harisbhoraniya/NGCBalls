"use client";
import { FiX, FiDownload } from "react-icons/fi";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
  title?: string;
}

export default function CertificateModal({
  isOpen,
  onClose,
  pdfUrl = "/images/ngc.pdf", // put your actual certificate PDF here (in /public/documents)
  title = "ISO 9001:2015 Certificate",
}: CertificateModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden flex flex-col"
        style={{ height: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/8 shrink-0">
          <h3 className="text-[#1A1A1A] font-semibold text-sm sm:text-base m-0">{title}</h3>
          <div className="flex items-center gap-2">
            <a
              href={pdfUrl}
              download
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold no-underline"
              style={{ background: "rgba(232,101,10,0.08)", color: "var(--orange)" }}
            >
              <FiDownload size={13} /> Download
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
        <div className="flex-1 bg-[#F2F2F2]">
          <iframe
            src={pdfUrl}
            title={title}
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
}