import type { Metadata } from "next";
import { Geist, Geist_Mono, Caudex } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caudex = Caudex({
  variable: "--font-caudex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Music Storm | Pop-punk music, Reviews & Discoveries",
  description: "Discover pop-punk music, explore band profiles, and read album reviews, rankings, and the latest scene stories on Music Storm",
  verification: {
  google: "nzxVAdQsD7TQpQwRmVOcMpKYc33d842eX-PY-lRg6_E",
},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${caudex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        {children}
      </body>
        
        {measurementId && (
          <GoogleAnalytics gaId={measurementId} />
        )}
    </html>
  );
}
