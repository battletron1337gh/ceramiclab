import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";

const diyVideos = [
  {
    title: "Ceramic coating zelf aanbrengen",
    duration: "8:24",
    thumbnail: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=250&fit=crop",
  },
  {
    title: "Velgen reinigen als een pro",
    duration: "5:12",
    thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
  {
    title: "Interieur dieptereiniging",
    duration: "6:45",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=250&fit=crop",
  },
];

const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&fit=crop"
            alt="Car detailing cinematic"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-neutral-950/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Premium Car Care
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="gold-gradient">CeramicLab</span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10">
            Professionele detailing producten voor iedereen. Van ceramic coating tot interieur reiniging — bouw je eigen kit en haal showroomresultaat in eigen garage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors"
            >
              Bekijk producten
            </Link>
            <Link
              href="/#diy"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Bekijk DIY video's
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-white/10 bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              ["2+ jaar", "bescherming"],
              ["Gratis", "verzending vanaf €75"],
              ["EU", "voorraad"],
              ["30 dagen", "niet-goed-geld-terug"],
            ].map(([label, sub]) => (
              <div key={label}>
                <div className="text-gold font-bold text-lg">{label}</div>
                <div className="text-neutral-400 text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="producten" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Populaire producten</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Kies losse producten of ga voor een complete kit met alles wat je nodig hebt voor een professionele finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/shop/${product.slug}`}
                className="group rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-gold/50 transition-colors"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
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

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
            >
              Bekijk alle producten →
            </Link>
          </div>
        </div>
      </section>

      {/* DIY Section */}
      <section id="diy" className="py-24 px-6 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">DIY Detailing Academy</h2>
              <p className="text-neutral-400 max-w-xl">
                Leer stap-voor-stap hoe je thuis professionele resultaten haalt. Van ceramic coating tot velgenreiniging.
              </p>
            </div>
            <Link href="#" className="text-gold font-semibold hover:underline mt-4 md:mt-0">
              Bekijk alle video's →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {diyVideos.map((video) => (
              <div key={video.title} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-neutral-950 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>
                <h3 className="text-lg font-bold group-hover:text-gold transition-colors">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Before After */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Resultaten die spreken</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Zie het verschil dat de juiste producten en techniek maken.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop"
                alt="Before detailing"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 rounded-full text-sm font-semibold">
                Before
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop"
                alt="After detailing"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-gold text-neutral-950 rounded-full text-sm font-semibold">
                After
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Klaar voor showroomglans?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Start vandaag met onze Ceramic Coating Kit en bescherm je lak tegen weersinvloeden, vuil en UV-straling.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors"
          >
            Bestel nu — gratis verzending vanaf €75
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold gold-gradient mb-4">CeramicLab</div>
              <p className="text-neutral-500 text-sm">
                Premium car care producten voor detailing liefhebbers.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="/shop" className="hover:text-gold">Alle producten</Link></li>
                <li><Link href="/shop/complete-detailing-kit" className="hover:text-gold">Complete kit</Link></li>
                <li><Link href="/shop/ceramic-coating-kit" className="hover:text-gold">Ceramic coating</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Service</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
                <li><Link href="/verzending" className="hover:text-gold">Verzending</Link></li>
                <li><Link href="/retour" className="hover:text-gold">Retourneren</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Juridisch</h4>
              <ul className="space-y-2 text-sm text-neutral-400">
                <li><Link href="/privacy" className="hover:text-gold">Privacybeleid</Link></li>
                <li><Link href="#" className="hover:text-gold">Algemene voorwaarden</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-500 text-sm">
              © 2026 CeramicLab. Alle rechten voorbehouden.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
