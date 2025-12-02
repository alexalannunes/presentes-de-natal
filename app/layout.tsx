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

export const revalidate = 3600; // 1h

export const metadata: Metadata = {
  // --- Metadados Padrão (SEO) ---
  title: {
    default:
      "🎄 Presente Certo: Curadoria de Natal para Homens | Encontre o Ideal",
    template: "%s | Presente Certo",
  },
  description:
    "Cansada de presentes repetidos? Catálogo especializado para mulheres que buscam o presente perfeito (ferramentas, hobbies, tech) para homens neste Natal. Compra direta e segura.",

  // --- Open Graph (Para Compartilhamento em Redes Sociais) ---
  openGraph: {
    title: "🎁 Presente Certo: Catálogo de Natal para Homens",
    description:
      "A curadoria de presentes que você precisava. Filtre por preço e loja e compre o presente ideal para ele sem complicação. Direto para a loja parceira.",
    url: "https://presentedenatal.com", // Substitua pelo domínio real
    siteName: "Presente Certo",
    images: [
      {
        url: "/banner-natal.png", // Crie esta imagem (1200x630)
        width: 1200,
        height: 630,
        alt: "Catálogo de Presentes de Natal para Homens",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // Path to your general app icon
    shortcut: "/favicon.ico", // Optional: for older browsers
  },

  // --- Twitter Card ---
  twitter: {
    card: "summary_large_image",
    title: "Presente Certo: Onde encontrar o presente perfeito para Ele.",
    description:
      "Curadoria de presentes para homens: ferramentas, hobbies e tech.",
    images: ["https://seucatalogo.com.br/images/twitter-card.jpg"],
  },

  // --- Outras Tags ---
  keywords: [
    "presentes natal homem",
    "presente para marido",
    "ideias presentes masculinos",
    "presente ferramentas",
    "catálogo de presentes",
    "afiliados natal",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
