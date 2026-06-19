import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${SITE_URL}/projects/profile_photo.webp`],
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date("2026-06-19"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${SITE_URL}/projects/4.jpg`],
    },
  ];
}
