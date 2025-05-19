import Hero from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import IndonesianMapSection from "../components/IndonesianMapSection";
import ActivitiesSection from "../components/ActivitiesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans w-full">
      <Hero
        title="SOCIETY OF RENEWABLE ENERGY"
        subtitle="Universitas Lampung"
        image='/assets/bg-hero-home.png'
        tagline="#GreenWithUs"
      />
      <AboutSection />
      <IndonesianMapSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
