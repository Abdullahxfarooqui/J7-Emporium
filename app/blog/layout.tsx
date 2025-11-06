import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Emporium Journal | Smart Living, Luxury Real Estate & Sustainability',
  description: 'Explore The Emporium Journal — insights on innovation, smart living, and luxury real estate powered by EcoSphere360 at J7 Emporium.',
  keywords: 'The Emporium Journal, J7 Emporium blog, Islamabad real estate, smart living Pakistan, EcoSphere360, luxury apartments, sustainable architecture, CPEC investment',
  openGraph: {
    title: 'The Emporium Journal | Insights on Smart Living & Luxury Real Estate',
    description: 'Discover insights, innovation, and inspiration from The Emporium Journal at J7 Emporium.',
    url: 'https://j7emporium.com/blog',
    siteName: 'J7 Emporium',
    images: ['/assets/images/j7-emporium-bg.webp'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Emporium Journal',
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
