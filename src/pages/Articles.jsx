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
      <section id="after-hero-section" className="bg-[#F9F6EE] text-gray-800  py-6 md:py-16 px-6 md:px-20">
        {/* Header Gradient */}
        {/* Banner gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full overflow-hidden mb-6 md:mb-20"
        >
          <img
            src="/assets/banner-sre.png"
            alt="SRE Banner"
            className="w-full object-contain object-center"
          />
        </motion.div>

        <ArticlesSection />

      </section>
      <Footer />
    </div>
  );
};

export default Articles;
