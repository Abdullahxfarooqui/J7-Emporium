import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'J7 Emporium Blog | Smart Living, Luxury Real Estate & Sustainability in Pakistan',
  description: 'Explore the world of J7 Emporium — a symbol of innovation, smart living, and luxury real estate powered by EcoSphere360.',
  keywords: 'J7 Emporium blog, Islamabad real estate, smart living Pakistan, EcoSphere360, luxury apartments, sustainable architecture, CPEC investment',
  openGraph: {
    title: 'J7 Emporium Blog | Insights on Smart Living & Luxury Real Estate',
    description: 'Discover insights, innovation, and inspiration from the heart of J7 Emporium.',
    url: 'https://j7emporium.com/blog',
    siteName: 'J7 Emporium',
    images: ['/assets/images/j7-emporium-bg.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J7 Emporium Blog',
    description: 'Insights on smart living, luxury real estate & sustainability in Pakistan',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
