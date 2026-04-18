import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import HomeServicesSection from '@/components/HomeServicesSection';
import HomeProjectsSection from '@/components/HomeProjectsSection';
import AboutSnapshot from '@/components/AboutSnapshot';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HomeServicesSection />
      <HomeProjectsSection />
      <AboutSnapshot />
      <CTASection />
    </>
  );
}
