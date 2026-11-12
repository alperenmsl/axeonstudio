import type { Metadata, Viewport } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.fullName} – Webdesign & Entwicklung in Vorarlberg`,
  description: site.description,
  keywords: [
    "Webdesign",
    "Webentwicklung",
    "Dornbirn",
    "Vorarlberg",
    "Axeon",
    "Axeon Studio",
    "Logo Design",
    "Hosting",
    "Marketing",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full overflow-x-hidden bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
