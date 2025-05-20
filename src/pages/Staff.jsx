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
        title="OUR STAF"
        subtitle="Behind every project is a passionate student ready to make an impact."
        image='/assets/hero-images/bg-hero-staff.png'
        tagline="#ReGreentheFuture"
      />

      <div className="bg-[#F9F6EE] text-gray-800 pt-16">
        {/* Header Gradient */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pb-16 px-6 md:px-20"
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-4 sm:px-6 py-4 md:py-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center"
            >
              SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
            </motion.h1>
          </motion.div>
        </motion.div>

        <MainOfficersSection />
        <HeadOfficersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
