import type { Metadata } from "next";
import "./globals.css";
import "./professional.css";

export const metadata: Metadata = {
  title: "Lavínia Ferraz | Desenvolvimento web, e-commerce e automação",
  description: "Portfólio de Lavínia Ferraz: produtos digitais, desenvolvimento web, Nuvemshop e automações para negócios.",
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
