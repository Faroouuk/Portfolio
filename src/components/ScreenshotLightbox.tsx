"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { ProjectScreenshot } from "@/data/projects";

export default function ScreenshotLightbox({ screenshots, activeIndex, onClose, onChange }: { screenshots: ProjectScreenshot[]; activeIndex: number | null; onClose: () => void; onChange: (index: number) => void }) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const open = activeIndex !== null;

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((activeIndex - 1 + screenshots.length) % screenshots.length);
      if (event.key === "ArrowRight") onChange((activeIndex + 1) % screenshots.length);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [open, activeIndex, screenshots.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-8" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }} role="dialog" aria-modal="true" aria-label={`${screenshots[activeIndex].label} screenshot`}>
          <button ref={closeRef} onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full border border-white/15 bg-black/70 p-3 text-white transition hover:bg-zinc-800" aria-label="Close screenshot"><X size={20} /></button>
          {screenshots.length > 1 && <button onClick={() => onChange((activeIndex - 1 + screenshots.length) % screenshots.length)} className="absolute left-3 z-10 rounded-full border border-white/15 bg-black/70 p-3 text-white transition hover:bg-zinc-800 sm:left-6" aria-label="Previous screenshot"><ChevronLeft size={22} /></button>}
          <motion.div className="relative h-[86vh] w-[86vw]" initial={reduced ? false : { opacity: 0, scale: .98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .2 }}>
            <Image src={screenshots[activeIndex].src} alt={screenshots[activeIndex].alt} fill sizes="86vw" className="object-contain" />
            <p className="absolute inset-x-0 bottom-0 mx-auto w-fit rounded-full bg-black/70 px-3 py-1.5 text-xs text-zinc-300">{screenshots[activeIndex].label} · {activeIndex + 1}/{screenshots.length}</p>
          </motion.div>
          {screenshots.length > 1 && <button onClick={() => onChange((activeIndex + 1) % screenshots.length)} className="absolute right-3 z-10 rounded-full border border-white/15 bg-black/70 p-3 text-white transition hover:bg-zinc-800 sm:right-6" aria-label="Next screenshot"><ChevronRight size={22} /></button>}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
