import Hero from "../components/sre/HeroSection";
import AboutSectionAbout from "../components/sre/about/AboutSectionAbout";
import Footer from "../components/sre/Footer";
import Navbar from "../components/sre/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        title="ABOUT US"
        subtitle="Empowering youth to lead Indonesia’s clean energy future."
        image='/assets/hero-images/bg-hero-about.jpg'
        tagline="#ReGreentheFuture"
      />
      <section id="after-hero-section">
        <AboutSectionAbout />
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="p-[5vw] w-full bg-[#F9F6EE] flex items-center justify-center"
      >
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-4/5"
          src="/assets/organization.png"
          alt=""
        />
      </motion.div>
      <Footer />
    </div >
  );
};

export default About;
