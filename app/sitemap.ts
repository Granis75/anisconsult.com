import type { MetadataRoute } from "next";

const baseUrl = "https://anisconsult.com";
const routes = [
  "",
  "/services",
  "/work",
  "/about",
  "/contact",
  "/case-study/vesper",
  "/case-study/kepler-express",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) => {
    const frPath = route || "/";
    const enPath = `/en${route}`;
    const languages = {
      "fr-FR": `${baseUrl}${frPath}`,
      "en-US": `${baseUrl}${enPath}`,
    };
    return [
      {
        url: languages["fr-FR"],
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 1 : route === "/work" ? 0.9 : 0.7,
        alternates: { languages },
      },
      {
        url: languages["en-US"],
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: route === "" ? 0.9 : route === "/work" ? 0.8 : 0.6,
        alternates: { languages },
      },
    ];
  });
}
