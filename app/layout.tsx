import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "J7 Emporium - Where Innovation Meets Elegance",
  description: "A breathtaking 30-storey marvel in Sector B-17, Islamabad. Premium residential and commercial spaces with world-class amenities.",
  keywords: "J7 Emporium, Islamabad real estate, B-17 Sector, luxury apartments, commercial shops, Pakistan property",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload Hero Background Image */}
        <link
          rel="preload"
          href="/assets/images/j7-emporium-bg.webp"
          as="image"
          type="image/webp"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
