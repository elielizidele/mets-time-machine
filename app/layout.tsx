import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.URL ??
  process.env.DEPLOY_PRIME_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "The Mets Time Machine",
  description:
    "Travel through every Mets season, meet the players who defined each era, revisit the strange moments, and build your own all-time roster.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "The Mets Time Machine",
    description:
      "Every season, the players, the weird moments, the bad trades, and an all-time roster builder.",
    url: "/",
    siteName: "The Mets Time Machine",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "The Mets Time Machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mets Time Machine",
    description:
      "Every season, the players, the weird moments, the bad trades, and an all-time roster builder.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
