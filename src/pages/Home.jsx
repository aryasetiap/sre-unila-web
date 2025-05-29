import Hero from "../components/sre/HeroSection";
import AboutSection from "../components/sre/home/AboutSection";
import IndonesianMapSection from "../components/sre/home/IndonesianMapSection";
import ActivitiesSection from "../components/sre/home/ActivitiesSection";
import Footer from "../components/sre/Footer";
import Navbar from "../components/sre/Navbar";
import { tr } from "framer-motion/client";


export default function Home() {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        hideButton={true}
        title="SOCIETY OF RENEWABLE ENERGY"
        subtitle="Universitas Lampung"
        image='/assets/hero-images/bg-hero-home.png'
        tagline="#ReGreenTheFuture"
      />
      <section id="after-hero-section">
        <AboutSection />
      </section>
      <IndonesianMapSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
}
