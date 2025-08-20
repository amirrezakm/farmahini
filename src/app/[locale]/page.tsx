import { Header } from '@/components/navigation/header';
import { HeroSection } from '@/components/sections/hero';
import { PersonalDescriptionSection } from '@/components/sections/personal-description';
import { ServicesSection } from '@/components/sections/services';
import { TeamSection } from '@/components/sections/team';
import { ContactSection } from '@/components/sections/contact';
import { Footer } from '@/components/footer/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TeamSection />
      <PersonalDescriptionSection />
      <ContactSection />
      <Footer />
    </main>
  );
}