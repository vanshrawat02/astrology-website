"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Star,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Info,
  X,
  Clock,
  Compass,
  Zap,
  Tag,
  BookOpen
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface Gemstone {
  id: string;
  name: string;
  sanskritName: string;
  planet: string;
  category: "Career & Leadership" | "Love & Harmony" | "Protection & Energy";
  color: string;
  metal: string;
  finger: string;
  chakra: string;
  description: string;
  keyBenefits: string[];
  mantra: string;
  idealTime: string;
  purification: string[];
}

export default function GemstonesPage() {
  const [activeTab, setActiveTab] = useState<string>("All Gemstones");
  const [selectedGemstone, setSelectedGemstone] = useState<Gemstone | null>(null);

  const gemstones: Gemstone[] = [
    {
      id: "ruby",
      name: "Ruby",
      sanskritName: "Manikya (Manik)",
      planet: "Sun (Surya)",
      category: "Career & Leadership",
      color: "Deep Crimson Red",
      metal: "Yellow Gold / Copper",
      finger: "Ring Finger (Right Hand)",
      chakra: "Manipura (Solar Plexus Chakra)",
      description:
        "The King of Gemstones. Associated with the Sun, Ruby imparts immense willpower, leadership authority, immunity, and royal recognition.",
      keyBenefits: [
        "Elevates executive leadership & administrative authority",
        "Boosts physical vitality, cardiac health & immunity",
        "Enhances self-confidence & public reputation",
        "Removes self-doubt & fatherly ancestral karma",
      ],
      mantra: "Om Hram Hreem Hrom Sah Suryaya Namah (108 times)",
      idealTime: "Sunday morning during Sunrise (Shukla Paksha)",
      purification: [
        "Immerse in Gangajal, unpasteurized cow milk & honey for 45 minutes.",
        "Offer red flowers and chant the Surya Beej Mantra 108 times.",
        "Wear on the ring finger facing the rising morning sun.",
      ],
    },
    {
      id: "pearl",
      name: "Pearl",
      sanskritName: "Mukta (Moti)",
      planet: "Moon (Chandra)",
      category: "Love & Harmony",
      color: "Lustrous Milky White",
      metal: "Pure Silver",
      finger: "Little Finger (Pinky)",
      chakra: "Anahata (Heart Chakra)",
      description:
        "Governed by the Moon, Pearl soothes erratic emotions, enhances mental peace, nurtures marital affection, and fosters deep intuition.",
      keyBenefits: [
        "Stabilizes emotional mood swings & mental anxiety",
        "Encourages deep domestic peace & marital warmth",
        "Improves sleep quality & psychological balance",
        "Harmonizes motherly relationship & female wellbeing",
      ],
      mantra: "Om Shram Shreem Shrom Sah Chandraya Namah (108 times)",
      idealTime: "Monday evening during Moonrise or early morning",
      purification: [
        "Wash with Gangajal and fresh raw milk in a silver bowl.",
        "Place under moonlight or morning sun while chanting Moon mantra.",
        "Wear on the little finger of the right hand.",
      ],
    },
    {
      id: "red-coral",
      name: "Red Coral",
      sanskritName: "Pravala (Moonga)",
      planet: "Mars (Mangal)",
      category: "Protection & Energy",
      color: "Vibrant Vermilion Red",
      metal: "Copper / Gold",
      finger: "Ring Finger",
      chakra: "Muladhara (Root Chakra)",
      description:
        "Powered by Mars, Red Coral instills unwavering courage, physical stamina, competitive drive, and defense against adversaries.",
      keyBenefits: [
        "Conquers lethargy, hesitation & fear of conflict",
        "Builds high physical stamina & muscular strength",
        "Neutralizes Manglik Dosha impacts in horoscope",
        "Protects against property disputes & physical injury",
      ],
      mantra: "Om Kram Kreem Krom Sah Bhaumaya Namah (108 times)",
      idealTime: "Tuesday morning within 1 hour of Sunrise",
      purification: [
        "Dip in red sandalwood water mixed with raw milk and Gangajal.",
        "Recite the Mangal Beej Mantra 108 times facing East.",
        "Wear on the ring finger of the dominant hand.",
      ],
    },
    {
      id: "emerald",
      name: "Emerald",
      sanskritName: "Marakata (Panna)",
      planet: "Mercury (Budh)",
      category: "Career & Leadership",
      color: "Vivid Emerald Green",
      metal: "Gold / Bronze",
      finger: "Little Finger (Pinky)",
      chakra: "Vishuddha (Throat Chakra)",
      description:
        "Governed by Mercury, Emerald sharpens intellectual clarity, business acumen, persuasive communication, and financial trading intelligence.",
      keyBenefits: [
        "Enhances commercial negotiation & public speaking skills",
        "Accelerates analytical memory & academic performance",
        "Ideal for entrepreneurs, CA, traders & IT professionals",
        "Calms nervous system & improves speech clarity",
      ],
      mantra: "Om Bram Breem Brom Sah Budhaya Namah (108 times)",
      idealTime: "Wednesday morning during Mercury Hora",
      purification: [
        "Soak in Gangajal with fresh Tulsi (Holy Basil) leaves and raw milk.",
        "Offer green cloth and chant Mercury Mantra 108 times.",
        "Wear on the little finger of the right hand.",
      ],
    },
    {
      id: "yellow-sapphire",
      name: "Yellow Sapphire",
      sanskritName: "Pushparaja (Pukhraj)",
      planet: "Jupiter (Guru)",
      category: "Protection & Energy",
      color: "Golden Canary Yellow",
      metal: "Yellow Gold / Brass",
      finger: "Index Finger",
      chakra: "Sahasrara (Crown) & Ajna Chakra",
      description:
        "The gemstone of Guru (Jupiter). Yellow Sapphire brings divine grace, financial abundance, higher learning, law/wisdom, and marital fulfillment.",
      keyBenefits: [
        "Attracts wealth, wisdom & higher spiritual knowledge",
        "Favors marriage prospects & harmonious family growth",
        "Boosts success in judiciary, teaching & advisory roles",
        "Removes Jupiter afflictions & brings fortune",
      ],
      mantra: "Om Gram Greem Grom Sah Gurave Namah (108 times)",
      idealTime: "Thursday morning during Sunrise (Shukla Paksha)",
      purification: [
        "Dip in turmeric-infused Gangajal and unpasteurized cow milk.",
        "Offer yellow flowers and recite Jupiter Mantra 108 times.",
        "Wear on the index finger of the right hand.",
      ],
    },
    {
      id: "diamond",
      name: "Diamond / Opal",
      sanskritName: "Vajra (Heera / Up-ratna Opal)",
      planet: "Venus (Shukra)",
      category: "Love & Harmony",
      color: "Brilliant Dazzling Clear / Iridescent",
      metal: "Platinum / White Gold / Silver",
      finger: "Middle or Little Finger",
      chakra: "Swadhisthana (Sacral Chakra)",
      description:
        "Ruled by Venus, Diamond or White Sapphire/Opal radiates artistic charm, romantic attraction, luxury comfort, and refined creative genius.",
      keyBenefits: [
        "Enhances magnetic charisma & romantic attraction",
        "Unlocks success in arts, media, fashion & luxury trades",
        "Fosters marital harmony & sensual fulfillment",
        "Improves reproductive health & physical beauty",
      ],
      mantra: "Om Dram Dreem Drom Sah Shukraya Namah (108 times)",
      idealTime: "Friday morning before Sunrise",
      purification: [
        "Wash with Gangajal, white sandalwood paste, and raw milk.",
        "Recite Venus Beej Mantra 108 times facing South-East.",
        "Wear on middle or little finger.",
      ],
    },
    {
      id: "blue-sapphire",
      name: "Blue Sapphire",
      sanskritName: "Neelam",
      planet: "Saturn (Shani)",
      category: "Career & Leadership",
      color: "Royal Velvet Blue",
      metal: "Steel / Iron / Silver / Panchdhatu",
      finger: "Middle Finger",
      chakra: "Ajna (Third Eye Chakra)",
      description:
        "The most potent astrological gemstone. Ruled by Saturn, Neelam can bestow rapid professional ascendance, discipline, focus, and immense stability.",
      keyBenefits: [
        "Triggers rapid career turnarounds & immense focus",
        "Shields against chronic delays, poverty & accidents",
        "Brings iron discipline & administrative mastery",
        "Protects against envy & hidden enemies",
      ],
      mantra: "Om Pram Preem Prom Sah Shanaishcharaya Namah (108 times)",
      idealTime: "Saturday evening during Sunset",
      purification: [
        "Dip in Gangajal mixed with a drop of mustard oil for 1 hour.",
        "Recite Shani Beej Mantra 108 times with deep focus.",
        "CRITICAL: Test under pillow for 3 days before permanent wear.",
      ],
    },
    {
      id: "hessonite",
      name: "Hessonite",
      sanskritName: "Gomedha (Gomed)",
      planet: "Rahu (North Node)",
      category: "Protection & Energy",
      color: "Honey Amber Brown",
      metal: "Silver / Panchdhatu",
      finger: "Middle Finger",
      chakra: "Swadhisthana Chakra",
      description:
        "Associated with Rahu, Hessonite clears sudden mental confusion, protects against political or legal hostility, and unlocks unconventional success.",
      keyBenefits: [
        "Dispels sudden anxiety, paranoia & confusion",
        "Protects against legal disputes, court cases & rivalry",
        "Accelerates success in politics, IT & speculative trades",
        "Neutralizes Rahu Dasha turbulence",
      ],
      mantra: "Om Bhram Bhreem Bhrom Sah Rahave Namah (108 times)",
      idealTime: "Saturday night or during Rahu Kaal",
      purification: [
        "Soak in Gangajal and raw cow milk for 45 minutes.",
        "Offer blue or black flowers and chant Rahu Mantra 108 times.",
        "Wear on the middle finger of the right hand.",
      ],
    },
    {
      id: "cats-eye",
      name: "Cat's Eye",
      sanskritName: "Vaidurya (Lehsuniya)",
      planet: "Ketu (South Node)",
      category: "Protection & Energy",
      color: "Chrysoberyl Greenish Yellow Chatoyant",
      metal: "Silver / Panchdhatu",
      finger: "Ring or Middle Finger",
      chakra: "Muladhara / Crown Chakra",
      description:
        "Governed by Ketu, Cat's Eye enhances deep spiritual intuition, guards against mysterious illnesses, and grants protection from sudden losses.",
      keyBenefits: [
        "Heightens psychic intuition & spiritual perception",
        "Protects against hidden diseases, evil eye & black magic",
        "Restores lost wealth & stabilizes sudden business shocks",
        "Encourages detached wisdom & meditative focus",
      ],
      mantra: "Om Sram Sreem Srom Sah Ketave Namah (108 times)",
      idealTime: "Tuesday or Saturday evening",
      purification: [
        "Dip in Gangajal with a drop of honey and raw milk.",
        "Chant Ketu Beej Mantra 108 times facing North-West.",
        "Wear on the ring or middle finger.",
      ],
    },
  ];

  const filteredGemstones =
    activeTab === "All Gemstones"
      ? gemstones
      : gemstones.filter((gem) => gem.category === activeTab);

  return (
    <div className="bg-white text-slate-900 min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="bg-light-pattern pt-16 pb-20 border-b border-amber-500/10 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Badge variant="default" className="mb-4 py-1.5 px-4 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-500 fill-amber-500" />
            Sacred Vedic Gemstone Science
          </Badge>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
            Navaratna: The Nine Sacred <br />
            <span className="gold-gradient-text">Astrological Gemstones</span>
          </h1>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Discover how ancient planetary stones balance cosmic energies, enhance vitality, and align your life path under certified astrological guidance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="btn-gold-shimmer px-8 py-6 text-base font-bold shadow-lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Gemstone Recommendation Consultation</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE TAB FILTERING */}
      <section className="py-16 lg:py-24 bg-white border-b border-amber-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3">
              Filter By Life Focus Area
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Explore <span className="gold-gradient-text">Navaratna Stones</span>
            </h2>
            <p className="text-slate-600 text-base">
              Select a category to view the sacred stones suited for your current life objectives.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "All Gemstones",
              "Career & Leadership",
              "Love & Harmony",
              "Protection & Energy",
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-gold-600 to-amber-500 text-white shadow-md scale-105"
                    : "bg-amber-50/80 border border-amber-500/20 text-slate-700 hover:bg-amber-100/80"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 3. GEMSTONE CARDS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGemstones.map((gem) => (
              <Card
                key={gem.id}
                className="glass-card-light flex flex-col justify-between border-amber-500/30 hover:border-amber-500/60 shadow-lg transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="bg-amber-100 border border-amber-500/30 text-amber-900 text-[11px] font-bold">
                        {gem.planet}
                      </Badge>
                      <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        {gem.category}
                      </span>
                    </div>

                    <CardTitle className="text-2xl font-bold text-slate-900 flex items-baseline justify-between">
                      <span>{gem.name}</span>
                      <span className="text-sm font-normal text-amber-800 italic">
                        ({gem.sanskritName})
                      </span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {gem.description}
                    </p>

                    {/* Properties Table List */}
                    <div className="bg-amber-50/60 rounded-xl p-3.5 border border-amber-500/20 space-y-2 text-xs text-slate-800">
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Recommended Metal:</span>
                        <span className="font-bold text-slate-900">{gem.metal}</span>
                      </div>
                      <div className="flex justify-between border-t border-amber-500/10 pt-1.5">
                        <span className="text-slate-500 font-medium">Ideal Finger:</span>
                        <span className="font-bold text-slate-900">{gem.finger}</span>
                      </div>
                      <div className="flex justify-between border-t border-amber-500/10 pt-1.5">
                        <span className="text-slate-500 font-medium">Chakra:</span>
                        <span className="font-bold text-slate-900">{gem.chakra}</span>
                      </div>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                        Key Astrological Benefits:
                      </span>
                      <ul className="space-y-1.5">
                        {gem.keyBenefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </div>

                <div className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-amber-500/40 text-slate-800 hover:bg-amber-500/10 font-bold text-xs py-5"
                    onClick={() => setSelectedGemstone(gem)}
                  >
                    <BookOpen className="w-4 h-4 mr-2 text-amber-600" />
                    <span>Wearing Rituals & Rules</span>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. GUIDANCE ACCORDION SECTION */}
      <section className="py-16 lg:py-24 bg-light-pattern border-b border-amber-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="default" className="mb-3">
              Essential Rules & FAQs
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Gemstone Selection <span className="gold-gradient-text">Guidelines</span>
            </h2>
            <p className="text-slate-600 text-base">
              Crucial instructions to follow before purchasing or wearing any Navaratna stone.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Why must a birth chart (Kundali) be analyzed before wearing any gemstone?
              </AccordionTrigger>
              <AccordionContent>
                Gemstones amplify the energy of their ruling planet. Wearing a gemstone for a Maraka (malefic) or adverse functional planet in your chart can intensify struggles, health issues, or financial losses. A thorough Janma Kundali & Bhrigu Nandi Nadi analysis identifies your true Yogakaraka (benefic) planets to ensure the gemstone brings positive transformation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the difference between Primary Gemstones (Maharatna) and Substitute Stones (Upratna)?
              </AccordionTrigger>
              <AccordionContent>
                Maharatna (like natural Ruby, Emerald, or Blue Sapphire) are high-clarity primary minerals with maximum electromagnetic vibration. Upratna (like Opal, Peridot, or Garnet) are natural semi-precious substitutes that offer similar planetary vibrations at an accessible price point with slightly gentler intensity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can gemstones conflict with each other if worn together?
              </AccordionTrigger>
              <AccordionContent>
                Yes. Enemy planetary gemstones should NEVER be worn together on the same hand or body. For example, Ruby (Sun) must not be worn with Blue Sapphire (Saturn) or Hessonite (Rahu); Pearl (Moon) must not be paired with Blue Sapphire. Always consult a certified astrologer for safe combination rules.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                How long does it take for an authentic gemstone to show results?
              </AccordionTrigger>
              <AccordionContent>
                When properly consecrated with Beej Mantras and worn on the correct day/hora, natural untreated gemstones usually begin manifesting subtle subtle mental and environmental shifts within 7 to 45 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 5. STICKY / PROMINENT BOTTOM BANNER */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-100/70 to-amber-500/15 border-2 border-amber-500/30 text-slate-900 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <Badge className="bg-amber-800 text-white font-bold text-xs mb-1">
                ⚠️ Important Astrological Notice
              </Badge>
              <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                Never Wear a Gemstone Without Kundali Verification
              </h3>
              <p className="text-slate-700 text-xs sm:text-sm max-w-2xl leading-relaxed">
                Ensure your chosen stone aligns with your current Mahadasha and planetary strengths to avoid unwanted side effects.
              </p>
            </div>
            <Button size="lg" className="btn-gold-shimmer shrink-0 px-8 py-6 font-bold text-base shadow-lg" asChild>
              <Link href="/contact" className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-white" />
                <span>Book Birth Chart Analysis — ₹1,500</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WEARING RITUALS & RULES MODAL */}
      {selectedGemstone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-amber-500/30 relative overflow-hidden text-slate-900 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedGemstone(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <Badge className="bg-amber-100 border border-amber-400 text-amber-900 font-bold mb-2">
                {selectedGemstone.planet}
              </Badge>
              <h3 className="font-heading text-2xl font-bold text-slate-900">
                {selectedGemstone.name} ({selectedGemstone.sanskritName}) Rituals
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Follow these traditional Vedic purification & consecration steps before wearing.
              </p>
            </div>

            <div className="space-y-5 text-xs">
              {/* Activation Mantra */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-500/30 space-y-1.5">
                <span className="font-bold text-amber-900 uppercase block tracking-wider text-[11px] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Consecration Beej Mantra:
                </span>
                <p className="font-mono text-slate-900 font-bold text-sm bg-white p-2.5 rounded-xl border border-amber-200">
                  {selectedGemstone.mantra}
                </p>
              </div>

              {/* Ideal Wearing Time */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 uppercase block tracking-wider text-[11px] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> Ideal Wearing Time & Moon Phase:
                </span>
                <p className="text-slate-700 font-semibold">{selectedGemstone.idealTime}</p>
              </div>

              {/* Step-by-Step Purification */}
              <div className="space-y-2">
                <span className="font-bold text-slate-900 uppercase block tracking-wider text-[11px]">
                  Step-by-Step Purification Procedure:
                </span>
                <ul className="space-y-2">
                  {selectedGemstone.purification.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                      <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-800 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <Button
                variant="default"
                className="btn-gold-shimmer px-6"
                onClick={() => setSelectedGemstone(null)}
              >
                Close Ritual Guide
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

