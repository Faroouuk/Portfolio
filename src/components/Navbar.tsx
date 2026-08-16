"use client";

import { Code2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const links = [["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["About", "#about"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "border-b border-white/10 bg-[#090a0c]/90 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="shell flex h-18 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="font-mono text-sm font-semibold">AF<span className="text-lime-400">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-zinc-400 transition hover:text-white">{label}</a>)}
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-300 hover:text-white"><Code2 size={18} /></a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="border-t border-white/10 bg-[#090a0c] px-5 py-5 md:hidden">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 text-zinc-300">{label}</a>)}</div>}
    </header>
  );
}
