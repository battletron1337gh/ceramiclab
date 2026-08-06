import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verzending — CeramicLab",
  description: "Informatie over verzending en levertijden van CeramicLab.",
};

export default function ShippingPage() {
  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Verzending</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Levertijden</h2>
            <p className="text-neutral-300 mb-4">
              Bestellingen worden binnen 1–2 werkdagen verwerkt. De daadwerkelijke levertijd is afhankelijk van de gekozen verzendmethode en je locatie.
            </p>
            <ul className="list-disc pl-6 text-neutral-300 space-y-2">
              <li>Nederland: 2–4 werkdagen</li>
              <li>België: 2–5 werkdagen</li>
              <li>Duitsland: 3–6 werkdagen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Verzendkosten</h2>
            <p className="text-neutral-300 mb-4">
              Voor bestellingen vanaf €75 is verzending gratis. Daarbuiten geldt een standaard tarief van €4,95 voor Nederland en €6,95 voor België/Duitsland.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Track & Trace</h2>
            <p className="text-neutral-300">
              Na verzending ontvang je per e-mail een track & trace code waarmee je je pakket kunt volgen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
