import { Caveat, Mogra, Poppins, Zeyada } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
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
  title: "Monisha Bahuguna | Public Health & Policy Communications",
  description:
    "Strategic communications and public relations portfolio across public health, governance, international development, media relations and policy advocacy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${caveat.variable} ${mogra.variable} ${poppins.variable} ${zeyada.variable}`}>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
