import { Layout } from '@/components/layout/Layout';
import { useSEO } from '@/hooks/useSEO';
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
  useSEO({
    title: 'Talk Point Communication - Independent Streaming & On-Demand Entertainment Guidance Service',
    description: 'Independent third-party guidance for streaming services, on-demand platforms, and entertainment subscriptions. Expert help navigating video streaming, music, and live TV options. 24/7 support available.',
    keywords: 'streaming service guidance, on-demand help, entertainment assistance, streaming advisor, music streaming help, video streaming comparison, live TV streaming, streaming bundles',
    canonicalUrl: 'https://talkpointcommunication.com/',
  });

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
