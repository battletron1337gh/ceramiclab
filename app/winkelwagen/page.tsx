"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/components/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <main className="flex-1 py-24 px-6 text-center">
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Je winkelwagen is leeg</h1>
          <p className="text-neutral-400 mb-8">Bekijk onze producten en begin met het samenstellen van je detailing kit.</p>
          <Link href="/shop" className="inline-flex px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors">
            Ga naar de shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Winkelwagen</h1>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-neutral-900 rounded-2xl border border-white/10">
              <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-neutral-500 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
                <p className="text-gold font-bold mb-3">€{item.price.toFixed(2)}</p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-neutral-900 rounded-2xl border border-white/10">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold">Totaal</span>
            <span className="text-2xl font-bold text-gold">€{totalPrice.toFixed(2)}</span>
          </div>
          <button className="w-full py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors">
            Afrekenen
          </button>
          <p className="text-center text-neutral-500 text-sm mt-4">
            Afrekenen komt beschikbaar zodra de betaalprovider is gekoppeld.
          </p>
        </div>
      </div>
    </main>
  );
}
