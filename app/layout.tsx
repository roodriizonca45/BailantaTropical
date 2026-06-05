import "./globals.css";
import type { Metadata } from "next";

export const metadata = {
  title: "Bailanta Tropical",
  icons: {
    icon: "/barrilito.jpg",
  },
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

