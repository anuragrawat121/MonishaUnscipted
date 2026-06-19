const productionHost =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const SITE_URL = productionHost.replace(/\/$/, "");

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Monisha Bahuguna",
  url: SITE_URL,
  image: `${SITE_URL}/projects/profile_photo.webp`,
  email: "mailto:monishabahuguna63@gmail.com",
  telephone: "+91-89795-23284",
  jobTitle: "Strategic Communications and Policy Advocacy Professional",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dehradun",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Strategic communications",
    "Public health communication",
    "Policy advocacy",
    "Media relations",
    "Crisis communication",
    "Governance communication",
    "One Health",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Monisha Bahuguna",
  url: SITE_URL,
  description:
    "Strategic communications and policy advocacy portfolio across public health, governance, media relations and innovation.",
  author: {
    "@type": "Person",
    name: "Monisha Bahuguna",
  },
};
