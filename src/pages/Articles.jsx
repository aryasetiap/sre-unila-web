import Hero from "../components/sre/HeroSection";
import ArticlesSection from "../components/sre/articles/ArticlesSection";
import Footer from "../components/sre/Footer";
import Navbar from "../components/sre/Navbar";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        title="OUR ARTICLES"
        subtitle="Ideas that move energy forward."
        image='/assets/hero-images/bg-hero-articles.png'
        tagline="#ReGreentheFuture"
      />
      <section id="after-hero-section" className="bg-[#F9F6EE] text-gray-800 py-16 px-6 md:px-20">
        {/* Header Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-4 sm:px-6 py-4 mb-12 md:py-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center"
          >
            SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
          </motion.h1>
        </motion.div>

        <ArticlesSection />

      </section>
      <Footer />
    </div>
  );
};

export default Articles;
