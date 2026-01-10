import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { StatsSection } from '@/components/home/StatsSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { FeaturesGrid } from '@/components/home/FeaturesGrid';
import { VideoSection } from '@/components/home/VideoSection';
import { HowItWorksSection } from '@/components/home/HowItWorksSection';
import { StreamingSection } from '@/components/home/StreamingSection';
import { LifestyleSection } from '@/components/home/LifestyleSection';
import { GallerySection } from '@/components/home/GallerySection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CtaBanner } from '@/components/home/CtaBanner';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <FeaturesGrid />
      <VideoSection />
      <HowItWorksSection />
      <StreamingSection />
      <LifestyleSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaBanner />
    </Layout>
  );
};

export default Index;
