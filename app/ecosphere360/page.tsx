import type { Metadata } from 'next';
import EcoSphereHero from '@/components/sections/ecosphere360/EcoSphereHero';
import AssetTokenization from '@/components/sections/ecosphere360/AssetTokenization';
import FacilityManagement from '@/components/sections/ecosphere360/FacilityManagement';
import CarbonTracking from '@/components/sections/ecosphere360/CarbonTracking';
import CustomerExperience from '@/components/sections/ecosphere360/CustomerExperience';
import WhyLove from '@/components/sections/ecosphere360/WhyLove';
import Testimonials from '@/components/sections/ecosphere360/Testimonials';
import FinalCTA from '@/components/sections/ecosphere360/FinalCTA';

export const metadata: Metadata = {
  title: 'EcoSphere360 | Smart Sustainable Living',
  description:
    'EcoSphere360 — The future of smart, simple, sustainable living. Manage assets, IoT systems, and carbon tracking in one elegant dashboard.',
  keywords: 'EcoSphere360, asset tokenization, IoT management, carbon tracking, sustainability, smart building, facility management',
  openGraph: {
    title: 'EcoSphere360',
    description: 'All-in-one platform for asset tokenization, IoT facility management, and sustainability.',
    url: 'https://yourdomain.com/ecosphere360',
    siteName: 'EcoSphere360',
    images: ['/assets/images/ecosphere360-og.jpg'],
    type: 'website',
  },
};

export default function EcoSphere360Page() {
  return (
    <div className="bg-[#0e1418]">
      {/* Hero Section */}
      <EcoSphereHero />

      {/* Main Content - Unlock New Possibilities */}
      <section id="features" className="space-y-20 md:space-y-28">
        {/* Asset Tokenization */}
        <AssetTokenization />

        {/* IoT-Powered Facility Management */}
        <FacilityManagement />

        {/* Carbon Tracking */}
        <CarbonTracking />
      </section>

      {/* Total Digital Customer Experience */}
      <CustomerExperience />

      {/* Why People Love EcoSphere360 */}
      <WhyLove />

      {/* Testimonials */}
      <Testimonials />

      {/* Final Call-to-Action */}
      <FinalCTA />
    </div>
  );
}
