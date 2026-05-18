import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zangmeister Cancer Center",
  description:
    "Zangmeister Cancer Center is a community-based medical oncology, gynecologic oncology and hematology practice providing treatment for patients diagnosed with all types of cancer and blood disorders.",
  icons: {
    icon: [
      { url: "/seo/favicon-32x32.png", sizes: "32x32" },
      { url: "/seo/favicon-192x192.png", sizes: "192x192" },
    ],
    apple: "/seo/favicon-180x180.png",
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
