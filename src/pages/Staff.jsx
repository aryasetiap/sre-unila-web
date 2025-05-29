import Hero from "../components/sre/HeroSection";
import Navbar from "../components/sre/Navbar";
import MainOfficersSection from "../components/sre/staff/MainOfficersSection";
import HeadOfficersSection from "../components/sre/staff/HeadOfficersSection";
import Footer from "../components/sre/Footer";
import { motion } from "framer-motion";

const Staff = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      {/* Hero Section */}
      <Hero
        title="OUR ORGANIZATION"
        subtitle="Behind every project is a passionate student ready to make an impact."
        image='/assets/hero-images/bg-hero-staff.jpg'
        tagline="#ReGreentheFuture"
      />
      <div id="after-hero-section" className="bg-[#F9F6EE] text-gray-800">
        {/* Banner gambar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full overflow-hidden py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20"
        >
          <img
            src="/assets/banner-sre.png"
            alt="SRE Banner"
            className="w-full object-contain object-center"
          />
        </motion.div>

        <MainOfficersSection />
        <HeadOfficersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
