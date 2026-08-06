"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "./cart-context";

export default function Navbar() {
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gold-gradient">
          CeramicLab
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
          <Link href="/#diy" className="hover:text-white transition-colors">DIY</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/winkelwagen" className="relative p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold text-neutral-950 text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm font-medium text-neutral-300">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-white">Home</Link>
            <Link href="/shop" onClick={() => setMobileOpen(false)} className="hover:text-white">Shop</Link>
            <Link href="/#diy" onClick={() => setMobileOpen(false)} className="hover:text-white">DIY</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-white">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
