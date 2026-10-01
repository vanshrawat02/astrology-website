import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://astrology-website.tundra-wing.workers.dev";
  const lastModified = new Date();

  const routes = [
    "",
    "/services",
    "/services/horoscope-analysis",
    "/services/marriage-compatibility",
    "/services/career-business",
    "/services/child-birth-family",
    "/services/finance-wealth",
    "/services/foreign-travel",
    "/bhrigu-nandi-nadi-astrology",
    "/kundali-milan-astrology",
    "/best-astrologer-in-delhi-ncr",
    "/career-astrology-prediction",
    "/vedic-astrology-remedies",
    "/gemstones",
    "/why-us",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/bhrigu") || route.startsWith("/kundali") || route.startsWith("/best") ? 0.9 : 0.8,
  }));
}
