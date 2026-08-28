import type { MetadataRoute } from "next";

const baseUrl = "https://anisconsult.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    "/case-study/vesper",
    "/case-study/kepler-express",
    "/case-study/famimart",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/case-study") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route === "/work" ? 0.9 : route.startsWith("/case-study") ? 0.8 : 0.7,
  }));
}
