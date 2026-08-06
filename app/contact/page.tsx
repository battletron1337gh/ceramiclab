import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — CeramicLab",
  description: "Neem contact op met CeramicLab voor vragen over onze car care producten.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-neutral-400 mb-10">
          Heb je vragen over onze producten, je bestelling of samenwerkingen? Stuur ons een bericht.
        </p>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Naam</label>
              <input
                type="text"
                className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-gold focus:outline-none"
                placeholder="Jouw naam"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">E-mail</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-gold focus:outline-none"
                placeholder="jouw@email.nl"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Onderwerp</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-gold focus:outline-none"
              placeholder="Waar gaat je bericht over?"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Bericht</label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-gold focus:outline-none"
              placeholder="Typ hier je bericht..."
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-gold text-neutral-950 font-bold rounded-full hover:bg-gold-light transition-colors"
          >
            Verstuur bericht
          </button>
        </form>

        <div className="mt-12 p-6 bg-neutral-900 rounded-2xl border border-white/10">
          <h2 className="text-xl font-bold mb-4">Andere vragen?</h2>
          <p className="text-neutral-400 text-sm">
            E-mail: info@ceramiclab.nl<br />
            KvK: nog aan te vragen<br />
            BTW: nog aan te vragen
          </p>
        </div>
      </div>
    </main>
  );
}
