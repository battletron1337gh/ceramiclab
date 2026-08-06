import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

export const metadata = {
  title: "Shop — CeramicLab",
  description: "Bekijk ons assortiment premium car care producten, ceramic coatings en detailing kits.",
};

export default function ShopPage() {
  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Professionele car care producten voor iedereen. Kies losse producten of ga voor een complete kit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              className="group rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-gold/50 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-neutral-950 text-xs font-bold rounded-full">
                    {product.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gold transition-colors">{product.name}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-gold font-bold text-xl">€{product.price.toFixed(2)}</span>
                  {product.comparePrice && (
                    <span className="text-neutral-500 line-through text-sm">€{product.comparePrice.toFixed(2)}</span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
