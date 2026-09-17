import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lavínia Ferraz | Sites, E-commerce e Automações com IA",
  description: "Portfólio profissional de Lavínia Ferraz: desenvolvimento de sites, Nuvemshop, e-commerce e automações com inteligência artificial.",
  other: {
    "codex-preview": "development",
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
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
