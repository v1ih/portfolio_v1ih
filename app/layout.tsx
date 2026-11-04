import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./gallery.css";
import { Lightbox } from "./lightbox";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-v1ih.vercel.app"),
  title: "Lavínia Ferraz — Desenvolvedora web",
  description: "Sites, e-commerce e automações desenvolvidos por Lavínia Ferraz.",
  alternates: { canonical: "/", languages: { "pt-BR": "/", en: "/en" } },
  icons: {
    icon: "/favicon-new.svg",
    shortcut: "/favicon-new.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
        <Lightbox />
      </body>
    </html>
  );
}
