import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lavínia Ferraz — Desenvolvedora web",
  description: "Sites, e-commerce e automações desenvolvidos por Lavínia Ferraz.",
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
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
