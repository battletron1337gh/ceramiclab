import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retourneren — CeramicLab",
  description: "Retourbeleid van CeramicLab.",
};

export default function ReturnsPage() {
  return (
    <main className="flex-1 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Retourneren</h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">30 dagen retourrecht</h2>
            <p className="text-neutral-300">
              Je hebt het recht om binnen 30 dagen na ontvangst van je bestelling de producten te retourneren. Producten moeten ongebruikt en in originele verpakking zijn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Hoe retourneer ik?</h2>
            <ol className="list-decimal pl-6 text-neutral-300 space-y-2">
              <li>Stuur een e-mail naar info@ceramiclab.nl met je bestelnummer.</li>
              <li>Je ontvangt een retourlabel en instructies.</li>
              <li>Verpak de producten veilig en stuur ze retour.</li>
              <li>Na ontvangst wordt het aankoopbedrag binnen 5 werkdagen teruggestort.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Uitzonderingen</h2>
            <p className="text-neutral-300">
              Producten die geopend of gebruikt zijn, kunnen niet worden geretourneerd vanwege hygiëne en veiligheid. Dit geldt met name voor vloeibare producten en coatings.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
