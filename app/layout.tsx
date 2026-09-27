import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Top Notch Drywall | Drywall & Interior Painting in Central Illinois",
  description:
    "Professional drywall hanging, finishing, repairs, texturing and interior painting serving Bloomington-Normal, Pontiac, Mackinaw, Tremont and surrounding Central Illinois communities.",
};
 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        name: "Top Notch Drywall",
        url: "https://therealtopnotchdrywall.com",
        telephone: "+1-309-531-6825",
        description:
          "Professional drywall hanging, finishing, repair, texturing, interior painting, insulation and framing serving Bloomington-Normal and Central Illinois.",
      areaServed: [
  { "@type": "City", name: "Bloomington, Illinois" },
  { "@type": "City", name: "Normal, Illinois" },
  { "@type": "City", name: "Pontiac, Illinois" },
  { "@type": "City", name: "Mackinaw, Illinois" },
  { "@type": "City", name: "Tremont, Illinois" },
  { "@type": "City", name: "Heyworth, Illinois" },
  { "@type": "City", name: "LeRoy, Illinois" },
  { "@type": "City", name: "Downs, Illinois" },
  { "@type": "City", name: "Hudson, Illinois" },
  { "@type": "City", name: "Towanda, Illinois" },
  { "@type": "City", name: "Lexington, Illinois" },
  { "@type": "City", name: "Carlock, Illinois" },
  { "@type": "AdministrativeArea", name: "Central Illinois" },
],
        ],
        knowsAbout: [
          "Drywall Hanging",
          "Drywall Finishing",
          "Drywall Repair",
          "Drywall Texturing",
          "Water Damage Drywall Repair",
          "Interior Painting",
          "Insulation",
          "Framing",
        ],
      }),
    }}
  />

  {children}
</body>
    </html>
  );
}
