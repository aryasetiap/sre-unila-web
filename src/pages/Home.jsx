import Hero from "../components/HeroSection";
import AboutSection from "../components/home/AboutSection";
import IndonesianMapSection from "../components/home/IndonesianMapSection";
import ActivitiesSection from "../components/home/ActivitiesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans w-full">
      <Hero
        title="SOCIETY OF RENEWABLE ENERGY"
        subtitle="Universitas Lampung"
        image='/assets/hero-images/bg-hero-home.png'
        tagline="#GreenWithUs"
      />
      <AboutSection />
      <IndonesianMapSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
