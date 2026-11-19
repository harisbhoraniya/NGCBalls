"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface BallValveSlide {
  name: string;
  category: string;
  image: string;
}

const BALL_VALVE_SLIDES: BallValveSlide[] = [
  {
    name: "Metallic - Ball Valve Balls",
    category: "Metallic Valve Balls",
    image: "/images/ball-valve/ball-valve-ball.webp",
  },
  {
    name: "Ceramic - Ball Valve Balls",
    category: "Ceramic Valve Balls",
    image: "/images/ball-valve/ceramic_ball.webp",
  },
];

export default function BallValveAutoSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % BALL_VALVE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + BALL_VALVE_SLIDES.length) % BALL_VALVE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden select-none bg-neutral-900 group/slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {BALL_VALVE_SLIDES.map((slide, idx) => {
        const isActive = idx === current;
        return (
          <div
            key={slide.name}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.name}
              fill
              className="object-cover"
              priority={idx === 0}
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35" />

            {/* Name & Category details */}
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-orange-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full mb-1.5 border border-orange-500/30">
                {slide.category}
              </span>
              <h3 className="text-white text-base sm:text-xl font-bold tracking-wide drop-shadow-md">
                {slide.name}
              </h3>
            </div>
          </div>
        );
      })}

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all backdrop-blur-sm border border-white/10"
      >
        <FiChevronLeft size={18} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all backdrop-blur-sm border border-white/10"
      >
        <FiChevronRight size={18} />
      </button>

      {/* Slide indicator dots */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
        {BALL_VALVE_SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrent(idx);
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full h-1.5 border-none cursor-pointer p-0 ${
              idx === current ? "w-5 bg-orange-500" : "w-1.5 bg-white/40 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
