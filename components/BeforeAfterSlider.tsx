"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number; // 0 to 100
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Metallic Balls",
  afterAlt = "Non-Metallic Balls",
  beforeLabel = "Metallic Balls",
  afterLabel = "Non-Metallic Balls",
  initialPosition = 50,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const [pos, setPos] = useState<number>(() =>
    Math.max(0.02, Math.min(0.98, initialPosition / 100))
  );

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0) return;
    const x = clientX - rect.left;
    const next = Math.max(0.02, Math.min(0.98, x / rect.width));
    setPos(next);
  }, []);

  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      isDragging.current = true;
      e.preventDefault();
      try {
        e.currentTarget.setPointerCapture?.(e.pointerId);
      } catch {
        // Fallback for environments lacking pointer capture
      }
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onPointerUp = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (isDragging.current) {
        isDragging.current = false;
        try {
          e.currentTarget.releasePointerCapture?.(e.pointerId);
        } catch {
          // ignore
        }
      }
    },
    []
  );

  const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((prev) => Math.max(0.02, prev - 0.05));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((prev) => Math.min(0.98, prev + 0.05));
    }
  }, []);

  const percent = pos * 100;
  // clip-path for before image (shows left side)
  const clipPathStyle = `inset(0% ${100 - percent}% 0% 0%)`;

  return (
    <div
      ref={containerRef}
      role="slider"
      aria-label="Before and after comparison slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(percent)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={`relative w-full h-full min-h-[260px] overflow-hidden select-none cursor-ew-resize touch-none group/slider ${className}`}
      style={{ userSelect: "none", WebkitUserSelect: "none" }}
    >
      {/* Background Layer: After (Non-Metallic) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <Image
          src={afterImage}
          alt={afterAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
          priority
        />
      </div>

      {/* Foreground Layer: Before (Metallic) clipped */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-[clip-path] duration-75 ease-out"
        style={{
          clipPath: clipPathStyle,
          WebkitClipPath: clipPathStyle,
          willChange: "clip-path",
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
          draggable={false}
          priority
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-orange-500 shadow-[0_0_10px_rgba(232,101,10,0.5)] pointer-events-none z-20"
        style={{ left: `${percent}%`, transform: "translateX(-50%)" }}
      />

      {/* Circular Knob */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-orange-500 text-white shadow-[0_4px_16px_rgba(232,101,10,0.4)] flex items-center justify-center pointer-events-none z-20 border border-white/40 group-hover/slider:scale-110 transition-transform duration-200"
        style={{ left: `${percent}%` }}
      >
        <div className="flex items-center gap-0.5 text-white">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>

      {/* Floating Badges */}
      {beforeLabel && (
        <div className="absolute top-3 left-3 z-20 pointer-events-none bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-md border border-white/15 select-none">
          {beforeLabel}
        </div>
      )}

      {afterLabel && (
        <div className="absolute top-3 right-3 z-20 pointer-events-none bg-black/65 backdrop-blur-md text-white text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full shadow-md border border-white/15 select-none">
          {afterLabel}
        </div>
      )}

      {/* Subtle Bottom Drag Hint */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none bg-black/50 backdrop-blur-sm text-white/80 text-[10px] font-medium px-2.5 py-0.5 rounded-full opacity-70 group-hover/slider:opacity-0 transition-opacity duration-300 select-none">
        Drag to compare
      </div>
    </div>
  );
}
