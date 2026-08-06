"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-context";
import { Product } from "@/lib/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full sm:w-auto px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors disabled:opacity-70"
      disabled={added}
    >
      {added ? "Toegevoegd! ✓" : "In winkelwagen"}
    </button>
  );
}
