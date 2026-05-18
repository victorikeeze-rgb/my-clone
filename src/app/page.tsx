import Header, { HeaderSentinel } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { LocationsSection } from "@/components/LocationsSection";
import { LatestUpdates } from "@/components/LatestUpdates";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <HeaderSentinel />
      <Header />
      <main style={{ paddingTop: 0 }}>
        <HeroSection />
        <ServicesSection />
        <TeamSection />
        <LocationsSection />
        <LatestUpdates />
      </main>
      <Footer />
    </div>
  );
}
