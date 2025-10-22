import HeroSection from "@/components/sections/HeroSection";
import AboutProjectSection from "@/components/sections/AboutProjectSection";
import PropertyLocationSection from "@/components/sections/PropertyLocationSection";
import UnitTypesSection from "@/components/sections/UnitTypesSection";
import AmenitiesSection from "@/components/sections/AmenitiesSection";
import OurProductsSection from "@/components/sections/OurProductsSection";
import ConstructionUpdatesSection from "@/components/sections/ConstructionUpdatesSection";
import RegisterInterestSection from "@/components/sections/RegisterInterestSection";
import ClientReviewsSection from "@/components/sections/ClientReviewsSection";

/**
 * Home Page - Main landing page for J7 Emporium
 * 
 * Structure:
 * 1. Hero Section - Full-screen video with branding
 * 2. About Project - Detailed project information
 * 3. Property Location - Interactive location showcase
 * 4. Unit Types - Available property units
 * 5. Amenities - World-class facilities
 * 6. Our Products - Product categories showcase
 * 7. Construction Updates - Timeline and progress
 * 8. Register Interest - Contact form
 * 9. Client Reviews - Testimonials carousel
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutProjectSection />
      <PropertyLocationSection />
      <UnitTypesSection />
      <AmenitiesSection />
      <OurProductsSection />
      <ConstructionUpdatesSection />
      <RegisterInterestSection />
      <ClientReviewsSection />
    </div>
  );
}
