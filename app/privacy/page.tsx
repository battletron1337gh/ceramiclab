import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid — CeramicLab",
  description: "Lees hoe CeramicLab omgaat met jouw persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert">
        <h1 className="text-4xl font-bold mb-6">Privacybeleid</h1>
        <p className="text-neutral-400 mb-6">
          Laatst bijgewerkt: 6 augustus 2026
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Wie zijn wij</h2>
        <p className="text-neutral-300 mb-4">
          CeramicLab is een webshop gespecialiseerd in premium car care producten. Wij respecteren jouw privacy en gaan zorgvuldig om met persoonsgegevens.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Welke gegevens verzamelen wij</h2>
        <p className="text-neutral-300 mb-4">
          Wij verzamelen alleen gegevens die nodig zijn voor het verwerken van je bestelling en het contact met jou. Denk aan naam, e-mailadres, afleveradres en betaalgegevens.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Waarom verzamelen wij deze gegevens</h2>
        <ul className="list-disc pl-6 text-neutral-300 mb-4 space-y-2">
          <li>Het afhandelen van je bestelling</li>
          <li>Het leveren van producten op het juiste adres</li>
          <li>Het beantwoorden van vragen via klantenservice</li>
          <li>Het verzenden van bestelupdates (optioneel nieuwsbrief)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. Bewaartermijn</h2>
        <p className="text-neutral-300 mb-4">
          Wij bewaren je gegevens niet langer dan nodig is. Bestelgegevens bewaren wij zolang dit wettelijk verplicht is, doorgaans 7 jaar.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Jouw rechten</h2>
        <p className="text-neutral-300 mb-4">
          Je hebt recht op inzage, correctie en verwijdering van je gegevens. Neem hiervoor contact op via info@ceramiclab.nl.
        </p>
      </div>
    </main>
  );
}
