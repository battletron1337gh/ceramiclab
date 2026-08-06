import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Ceramic Coating Kit",
    description: "Professionele 9H coating voor 2+ jaar bescherming.",
    price: "€89,95",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=600&h=400&fit=crop",
  },
  {
    name: "Microfiber Deluxe Set",
    description: "12 ultra-zachte doeken voor veilig polijsten.",
    price: "€34,95",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
  },
  {
    name: "Interior Detailer",
    description: "Reinigt en beschermt dashboard, leer en kunststof.",
    price: "€24,95",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop",
  },
];

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
              href="#producten"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors"
            >
              Bekijk producten
            </Link>
            <Link
              href="#diy"
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

      {/* Products */}
      <section id="producten" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Bouw je eigen detailing kit</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Kies losse producten of ga voor een complete kit met alles wat je nodig hebt voor een professionele finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.name}
                className="group rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-gold/50 transition-colors"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold font-bold text-xl">{product.price}</span>
                    <button className="px-4 py-2 bg-white/10 hover:bg-gold hover:text-neutral-950 rounded-full text-sm font-semibold transition-colors">
                      In winkelwagen
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
            href="#producten"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors"
          >
            Bestel nu — gratis verzending vanaf €75
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold gold-gradient">CeramicLab</div>
          <div className="text-neutral-500 text-sm">
            © 2026 CeramicLab. Premium car care voor detailing liefhebbers.
          </div>
          <div className="flex gap-6 text-sm text-neutral-400">
            <Link href="#" className="hover:text-gold transition-colors">Contact</Link>
            <Link href="#" className="hover:text-gold transition-colors">Verzending</Link>
            <Link href="#" className="hover:text-gold transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
