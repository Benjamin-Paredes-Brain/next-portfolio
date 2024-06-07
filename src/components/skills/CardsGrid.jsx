"use client"

import { cn } from "../utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CardsGrid = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-4")}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-customColor2/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div className={cn("flex flex-col items-center justify-center rounded-2xl h-full w-full p-4 overflow-hidden bg-transparent border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-0")}>
            <div className="text-5xl md:text-6xl lg:text-7xl"><item.icon loading="lazy" style={{ color: item.color }} /></div>
            <p className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-lg md:text-xl lg:text-2xl")}>
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsGrid;