import { Caveat, Mogra, Poppins, Zeyada } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import { personSchema, SITE_URL, websiteSchema } from "@/lib/site";
import "./globals.css";

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

const mogra = Mogra({
  variable: "--font-mogra",
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const zeyada = Zeyada({
  variable: "--font-zeyada",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Monisha Bahuguna | Strategic Communications & Policy Advocacy",
    template: "%s | Monisha Bahuguna",
  },
  description:
    "Strategic communications and public relations portfolio across public health, governance, international development, media relations and policy advocacy.",
  keywords: [
    "Monisha Bahuguna",
    "strategic communications",
    "policy advocacy",
    "public health communication",
    "media relations",
    "crisis communication",
    "governance communication",
    "India",
  ],
  authors: [{ name: "Monisha Bahuguna", url: SITE_URL }],
  creator: "Monisha Bahuguna",
  publisher: "Monisha Bahuguna",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Monisha Bahuguna",
    title: "Monisha Bahuguna | Strategic Communications & Policy Advocacy",
    description:
      "Public health, governance, media relations and policy communication shaped for public impact.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monisha Bahuguna | Strategic Communications & Policy Advocacy",
    description:
      "Public health, governance, media relations and policy communication shaped for public impact.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "communications",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Monisha Bahuguna",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0c0c",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${mogra.variable} ${poppins.variable} ${zeyada.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema]).replace(/</g, "\\u003c"),
          }}
        />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
