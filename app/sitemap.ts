import { MetadataRoute } from "next";
import { siteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/throw-away`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/text-my-ex`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/quit-my-job`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/break-up`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/move`,
      lastModified: new Date(),
    },
  ];
}
