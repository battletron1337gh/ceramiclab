export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  comparePrice?: number;
  image: string;
  gallery: string[];
  category: string;
  tags: string[];
  inStock: boolean;
  badge?: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "ceramic-coating-kit",
    slug: "ceramic-coating-kit",
    name: "Ceramic Coating Kit",
    description: "Professionele 9H coating voor 2+ jaar bescherming tegen UV, vuil en water.",
    longDescription:
      "Onze Ceramic Coating Kit is ontwikkeld voor detailing liefhebbers die showroomglans willen zonder dure poetsbedrijven. De 9H-hardheidscoating vormt een duurzame, hydrofobe laag die water, vuil en UV-straling afstoot. Inclusief applicator pads, microfiber doeken en uitgebreide instructies.",
    price: 89.95,
    comparePrice: 129.95,
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
    ],
    category: "Coating",
    tags: ["ceramic", "9H", "bescherming", "DIY"],
    inStock: true,
    badge: "Bestseller",
    features: [
      "9H hardheid voor 2+ jaar bescherming",
      "Hydrophobe werking: water parelt af",
      "Inclusief 2 applicator pads",
      "Inclusief 4 premium microfiber doeken",
      "UV- en chemicaliënbestendig",
    ],
  },
  {
    id: "microfiber-deluxe-set",
    slug: "microfiber-deluxe-set",
    name: "Microfiber Deluxe Set",
    description: "12 ultra-zachte microfiber doeken voor veilig poetsen, drogen en afnemen.",
    longDescription:
      "Krassen komen voornamelijk door verkeerde doeken. Deze 12 microfiber doeken zijn speciaal geselecteerd op zachtheid, absorptie en duurzaamheid. Geschikt voor lak, glas, dashboard en velgen.",
    price: 34.95,
    comparePrice: 49.95,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    category: "Doeken",
    tags: ["microfiber", "doeken", "veilig", "set"],
    inStock: true,
    badge: "Populair",
    features: [
      "12 doeken in 3 formaten",
      "340 GSM, ultra-zacht",
      "Randloos, krasvrij gebruik",
      "Machinewasbaar tot 60°C",
      "Multifunctioneel: lak, glas, interieur",
    ],
  },
  {
    id: "interior-detailer",
    slug: "interior-detailer",
    name: "Interior Detailer",
    description: "Reinigt, beschermt en geeft een matte frisse afwerking aan dashboard, leer en kunststof.",
    longDescription:
      "Interior Detailer is de alles-in-één oplossing voor je interieur. Verwijdert stof, vingerafdrukken en lichte vervuiling terwijl het een UV-beschermende laag achterlaat. Geen plakkerige glans, maar een natuurlijke matte finish.",
    price: 24.95,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop",
    ],
    category: "Interieur",
    tags: ["interieur", "reiniger", "dashboard", "leer"],
    inStock: true,
    features: [
      "Reinigt en beschermt in één stap",
      "UV-bescherming tegen verkleuring",
      "Matte finish, niet plakkerig",
      "Veilig voor leer, kunststof en vinyl",
      "Frisse, subtiele geur",
    ],
  },
  {
    id: "wheel-cleaner-pro",
    slug: "wheel-cleaner-pro",
    name: "Wheel Cleaner Pro",
    description: "Zuurbestendige reiniger voor velgen die remstof en wegvuil snel oplost.",
    longDescription:
      "Wheel Cleaner Pro is een krachtige, pH-neutrale velgenreiniger die remstof, roet en wegvuil oplost zonder je velgen te beschadigen. Geschikt voor gelakte, gepolijste en gecoate velgen.",
    price: 19.95,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    category: "Velgen",
    tags: ["velgen", "reiniger", "remstof", "velg"],
    inStock: true,
    features: [
      "pH-neutraal, veilig voor coatings",
      "Oplost remstof en roet",
      "Geschikt voor alle velgtypes",
      "Reukarme formule",
      "Kan zonder boenen",
    ],
  },
  {
    id: "shampoo-wash-wax",
    slug: "shampoo-wash-wax",
    name: "Wash & Wax Shampoo",
    description: "Concentreerde autoshampoo met wax-additief voor een glanzende, waterafstotende wasbeurt.",
    longDescription:
      "Wash & Wax Shampoo reinigt grondig zonder de beschermlaag aan te tasten. Door het wax-additief blijft er een lichte waterafstotende laag achter, waardoor drogen makkelijker wordt en de lak langer glanst.",
    price: 16.95,
    comparePrice: 22.95,
    image: "https://images.unsplash.com/photo-1520340356584-c6c63535a5c7?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1520340356584-c6c63535a5c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    category: "Wassen",
    tags: ["shampoo", "wash", "wax", "wassen"],
    inStock: true,
    features: [
      "Hoog geconcentreerd: tot 100 wasbeurten",
      "Inclusief wax-boost",
      "Veilig voor wax en coating",
      "Heerlijke frisse geur",
      "pH-neutraal",
    ],
  },
  {
    id: "complete-detailing-kit",
    slug: "complete-detailing-kit",
    name: "Complete Detailing Kit",
    description: "Alles wat je nodig hebt voor een professionele behandeling. De ultieme starter kit.",
    longDescription:
      "De Complete Detailing Kit bevat alle essentials voor een volledige behandeling: shampoo, velgenreiniger, interieurreiniger, ceramic coating, microfiber doeken en applicator pads. De perfecte kit om direct professioneel van start te gaan.",
    price: 149.95,
    comparePrice: 199.95,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    category: "Kits",
    tags: ["kit", "compleet", "starter", "bundel"],
    inStock: true,
    badge: "Meeste voordeel",
    features: [
      "Alle producten voor een volledige behandeling",
      "20% goedkoper dan los kopen",
      "Inclusief instructieboekje",
      "Gratis premium wasemmer",
      "Geschikt voor beginners en gevorderden",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
