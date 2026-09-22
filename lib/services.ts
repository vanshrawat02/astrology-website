import { Sparkles, Heart, Briefcase, Baby, Coins, Plane, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  /** Must match an option in the contact form's specialization select */
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  tagline: string;
  summary: string;
  overview: string[];
  analysis: { label: string; detail: string }[];
  questions: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "horoscope",
    title: "Horoscope Analysis & Consultation",
    shortTitle: "Horoscope Analysis",
    icon: Sparkles,
    tagline: "The complete reading of your Janma Kundali",
    summary:
      "A full birth chart reading combining classical Parashari Jyotish with Bhrigu Nandi Nadi timing for every area of life.",
    overview: [
      "Your Janma Kundali is a map of the sky at the exact moment and place of your birth. This flagship consultation reads that map as a whole: your Lagna (ascendant), Moon sign and Nakshatra, the strength and dignity of each planet, and the yogas formed between them.",
      "We then layer two timing systems on top. The Vimshottari Dasha tells us which planetary period is running in your life right now, while the Bhrigu Nandi Nadi method tracks how the yearly movement of Jupiter and Saturn activates the planets in your birth chart. Together they show not just what is promised in your chart, but when it is likely to unfold.",
    ],
    analysis: [
      { label: "Lagna, Rashi & Nakshatra", detail: "Your core nature, mind and emotional make-up" },
      { label: "Planetary strength & yogas", detail: "Dignity, house placement and key combinations in the chart" },
      { label: "Vimshottari Dasha", detail: "The current Mahadasha & Antardasha and what they activate" },
      { label: "Gochar (transits)", detail: "Saturn, Jupiter, Rahu & Ketu over your natal chart" },
      { label: "Bhrigu Nandi Nadi", detail: "Planetary relationships in trines and Jupiter's yearly progression" },
      { label: "Divisional charts", detail: "Navamsa (D9) and other vargas to confirm results" },
    ],
    questions: [
      "What are my natural strengths and the challenges I keep facing?",
      "Which planetary period am I running, and what will it bring?",
      "When will this difficult phase end?",
      "Which areas of life need the most attention in the coming years?",
      "Which remedies suit my chart specifically?",
    ],
    deliverables: [
      "1-on-1 session by phone, video call or WhatsApp",
      "Answers to your specific questions across all life areas",
      "Timeline of favourable and cautious periods",
      "Personalised mantra, gemstone and lifestyle remedies",
    ],
  },
  {
    id: "marriage",
    title: "Marriage & Relationship Compatibility",
    shortTitle: "Marriage & Relationships",
    icon: Heart,
    tagline: "Kundali Milan, marriage timing & harmony",
    summary:
      "Ashtakoot Guna Milan, Manglik and Nadi Dosha checks, marriage timing and guidance for existing relationships.",
    overview: [
      "Marriage is one of the most important decisions in life, and Vedic astrology has examined it in great depth. For those looking for a partner, we perform traditional Kundali Milan: the 36-point Ashtakoot Guna Milan, alongside Manglik and Nadi Dosha checks. We never rely on the Guna score alone. We compare both complete charts, because the strength of each person's 7th house and Navamsa matters more than any single number.",
      "For those who are not yet married, we look at when marriage is indicated through the Dasha and the transit of Jupiter over the planets that represent your spouse. For married couples, we identify the source of friction and suggest practical remedies to restore harmony.",
    ],
    analysis: [
      { label: "Ashtakoot Guna Milan", detail: "Varna, Vashya, Tara, Yoni, Graha Maitri, Gana, Bhakoot & Nadi (36 points)" },
      { label: "Manglik Dosha", detail: "Mars placement in the 1st, 4th, 7th, 8th or 12th house, and its cancellation" },
      { label: "Nadi & Bhakoot Dosha", detail: "The two highest-weighted kootas, with their exceptions" },
      { label: "7th house & Venus", detail: "Nature of the spouse and married life" },
      { label: "Navamsa (D9)", detail: "The divisional chart of marriage and long-term partnership" },
      { label: "BNN spouse significators", detail: "Venus for the wife in a male chart, Mars for the husband in a female chart" },
    ],
    questions: [
      "Are our horoscopes compatible for marriage?",
      "When will I get married?",
      "Is there a Manglik or Nadi Dosha, and is it cancelled?",
      "Will it be a love or an arranged marriage?",
      "Why are there repeated conflicts or delays, and what can help?",
    ],
    deliverables: [
      "Detailed Guna Milan score with explanation of each koota",
      "Dosha analysis with cancellation factors",
      "Favourable periods for marriage",
      "Remedies for delays and relationship harmony",
    ],
  },
  {
    id: "career",
    title: "Career & Business Growth",
    shortTitle: "Career & Business",
    icon: Briefcase,
    tagline: "The right field, the right timing",
    summary:
      "Suitable career fields, job change and promotion timing, business launch and partnership guidance.",
    overview: [
      "Not every person is suited to every profession. Your chart shows whether you will thrive in a job or in business, in government service or the private sector, in a technical field or a creative one. We read the 10th house of karma, its lord, and the Dashamsa (D10) chart, together with Saturn, which Bhrigu Nandi Nadi treats as the significator of profession and hard work.",
      "Timing is just as important as direction. We identify periods favourable for a job change, promotion or starting a business, and the phases where patience and consolidation will serve you better. For business owners we also examine partnership compatibility and the 7th house of trade.",
    ],
    analysis: [
      { label: "10th house & its lord", detail: "Your field of work, status and reputation" },
      { label: "6th house", detail: "Service, employment, competition and workplace challenges" },
      { label: "2nd & 11th houses", detail: "Income, earnings and gains from work" },
      { label: "Dashamsa (D10)", detail: "The divisional chart dedicated to career" },
      { label: "Saturn (Karma Karaka)", detail: "Profession, discipline and effort in Bhrigu Nandi Nadi" },
      { label: "7th house", detail: "Business, trade and partnerships" },
    ],
    questions: [
      "Which career field suits me best?",
      "Should I do a job or start my own business?",
      "When will I get a new job or a promotion?",
      "Is this the right time to change my job?",
      "Is my business partner compatible with me?",
    ],
    deliverables: [
      "Career fields best suited to your chart",
      "Timing for job changes, promotions and launches",
      "Business partnership compatibility check",
      "Remedies for obstacles and stagnation at work",
    ],
  },
  {
    id: "family",
    title: "Child Birth & Family Prospects",
    shortTitle: "Child Birth & Family",
    icon: Baby,
    tagline: "Progeny, timing & family wellbeing",
    summary:
      "Santana Yoga, favourable periods for conception, children's wellbeing and family harmony.",
    overview: [
      "In Vedic astrology the 5th house represents children, and Jupiter is the Putra Karaka, the natural significator of progeny. We examine both, along with the 9th house (the 5th from the 5th) and the Saptamsa (D7), the divisional chart dedicated to children.",
      "Where there are delays, we look for the planetary afflictions responsible and identify the periods most favourable for conception. We also guide parents on their children's wellbeing, education and temperament, and on bringing peace to the wider family.",
    ],
    analysis: [
      { label: "5th house & its lord", detail: "Children, progeny and the blessings of past karma" },
      { label: "Jupiter (Putra Karaka)", detail: "The natural significator of children" },
      { label: "Saptamsa (D7)", detail: "The divisional chart dedicated to progeny" },
      { label: "9th house", detail: "The 5th from the 5th, confirming progeny results" },
      { label: "Santana Yoga", detail: "Combinations supporting or delaying childbirth" },
      { label: "4th house", detail: "Domestic peace and family happiness" },
    ],
    questions: [
      "When are the chances of childbirth favourable?",
      "Why is there a delay in having children?",
      "How will my child's education and future unfold?",
      "How can we bring peace and harmony into the family?",
    ],
    deliverables: [
      "Analysis of progeny yogas in both partners' charts",
      "Favourable periods for conception",
      "Guidance on children's wellbeing and education",
      "Remedies for delays and family harmony",
    ],
  },
  {
    id: "wealth",
    title: "Finance & Wealth Guidance",
    shortTitle: "Finance & Wealth",
    icon: Coins,
    tagline: "Stable income, savings & prosperity",
    summary:
      "Wealth houses, Dhana Yogas, favourable periods for investment, and relief from debts and losses.",
    overview: [
      "Your chart shows how wealth comes to you and how well you are able to hold on to it. The 2nd house represents accumulated wealth and savings, the 11th house represents gains and income, and the 5th and 9th houses reflect fortune earned through past karma. Dhana Yogas, combinations between the lords of these houses, show the potential for prosperity.",
      "We identify the periods when your finances are likely to grow and when caution is needed, examine the 6th and 8th houses for debts and sudden losses, and suggest remedies to strengthen the planets that support stability, particularly Jupiter and Venus.",
    ],
    analysis: [
      { label: "2nd house", detail: "Accumulated wealth, savings and family assets" },
      { label: "11th house", detail: "Income, gains and fulfilment of desires" },
      { label: "5th & 9th houses", detail: "Fortune, speculation and luck" },
      { label: "Dhana Yogas", detail: "Wealth combinations between key house lords" },
      { label: "6th & 8th houses", detail: "Debts, loans and sudden gains or losses" },
      { label: "Jupiter & Venus", detail: "Natural significators of wealth and comfort" },
    ],
    questions: [
      "When will my financial situation improve?",
      "Is this a good time to invest or buy property?",
      "How can I get out of debt?",
      "Why is money not staying with me despite earning well?",
    ],
    deliverables: [
      "Assessment of your chart's wealth potential",
      "Favourable and cautious periods for money matters",
      "Guidance on debts, loans and investments",
      "Remedies for financial stability",
    ],
  },
  {
    id: "travel",
    title: "Foreign Travels & Relocation",
    shortTitle: "Foreign Travel & Settlement",
    icon: Plane,
    tagline: "Study, work & settlement abroad",
    summary:
      "Foreign travel and settlement yogas, visa and relocation timing, and career prospects overseas.",
    overview: [
      "Many people dream of studying, working or settling abroad, and the chart shows clearly whether this is supported. The 12th house represents foreign lands and settlement away from one's birthplace, the 9th house represents long-distance journeys and higher education, and the 3rd house shows short travels. Rahu, the significator of foreign connections, plays an important role.",
      "We assess whether your chart supports temporary travel or permanent settlement, identify the periods when visa, PR or relocation efforts are most likely to succeed, and look at how your career and wellbeing are likely to fare abroad.",
    ],
    analysis: [
      { label: "12th house", detail: "Foreign lands and settlement away from home" },
      { label: "9th house", detail: "Long journeys, higher studies and fortune abroad" },
      { label: "3rd house", detail: "Short journeys and courage to take initiative" },
      { label: "4th house", detail: "Attachment to the homeland and moving away from it" },
      { label: "Rahu", detail: "The significator of foreign lands and cultures" },
      { label: "7th house", detail: "Trade and business with foreign countries" },
    ],
    questions: [
      "Will I go abroad, and when?",
      "Will I settle permanently in a foreign country?",
      "When is the right time to apply for a visa or PR?",
      "Will my career grow abroad?",
    ],
    deliverables: [
      "Analysis of foreign travel and settlement yogas",
      "Favourable periods for visa, PR and relocation",
      "Career prospects abroad",
      "Remedies for smooth travel and settlement",
    ],
  },
];
