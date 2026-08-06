import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import AddToCartButton from "./add-to-cart-button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product niet gevonden — CeramicLab" };
  return {
    title: `${product.name} — CeramicLab`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="flex-1 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <Link href="/shop" className="text-sm text-neutral-400 hover:text-gold transition-colors mb-6 inline-block">
          ← Terug naar shop
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 border border-white/10">
                  <Image src={img} alt={`${product.name} ${idx + 2}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            {product.badge && (
              <span className="inline-block px-3 py-1 bg-gold text-neutral-950 text-xs font-bold rounded-full mb-4">
                {product.badge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-neutral-400 text-lg mb-6">{product.longDescription}</p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-gold">€{product.price.toFixed(2)}</span>
              {product.comparePrice && (
                <span className="text-xl text-neutral-500 line-through">€{product.comparePrice.toFixed(2)}</span>
              )}
            </div>

            <AddToCartButton product={product} />

            <div className="mt-10 p-6 bg-neutral-900 rounded-2xl border border-white/10">
              <h3 className="text-lg font-bold mb-4">Product kenmerken</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-neutral-300">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-400">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
