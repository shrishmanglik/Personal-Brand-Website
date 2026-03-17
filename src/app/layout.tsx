import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shrish Manglik — AI Systems Architect",
  description:
    "AI Systems Architect & Implementation Strategist based in Toronto. Founder of Million Dollar AI Studio.",
  openGraph: {
    title: "Shrish Manglik — AI Systems Architect",
    description:
      "AI Systems Architect & Implementation Strategist based in Toronto. Founder of Million Dollar AI Studio.",
    url: "https://www.shrishmanglik.com",
    type: "website",
  },
  metadataBase: new URL("https://www.shrishmanglik.com"),
  alternates: {
    canonical: "https://www.shrishmanglik.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shrish Manglik",
              jobTitle: "AI Systems Architect & Implementation Strategist",
              url: "https://www.shrishmanglik.com",
              email: "shrishmanglik@gmail.com",
              telephone: "(647) 879-9449",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              sameAs: [
                "https://linkedin.com/in/shrishmanglik",
                "https://milliondollarstudio.ai",
              ],
            }),
          }}
        />
      </head>
      <body className="font-body bg-gallery-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
