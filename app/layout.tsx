import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bailanta QR Videos",
  description: "Plataforma premium para gestionar QR asociados a videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es" className="dark">
      <body className="min-h-screen bg-zinc-950 text-zinc-50 antialiased">
        {children}
      </body>
    </html>
  );
}

