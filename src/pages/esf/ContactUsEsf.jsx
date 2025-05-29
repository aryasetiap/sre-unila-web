import { motion } from "framer-motion";
import Navbar from "../../components/esf/NavbarEsf";
import Hero from "../../components/esf/HeroSectionEsf";
import Footer from "../../components/esf/FooterEsf";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const ContactUsEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="CONTACT US"
        subtitle="Have a question, collaboration idea, or need assistance?"
        image="/assets/esf/contact-us/bg-hero-contactusesf.png"
        tagline="#ReGreentheFuture"
      />

      <section id="after-hero-section" className="py-16 bg-gray-50 text-gray-800 px-4 sm:px-8 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/2 space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold text-green-800">
              GET IN TOUCH WITH ESF 2025
            </h1>

            <p className="text-lg leading-relaxed text-justify">
              We're happy to connect with participants, partners, media, or anyone interested in Environmental Sustainability Forum 2025. Contact our team through any of the channels below:
            </p>

            <p className="text-lg leading-relaxed text-justify">
              <span className="font-bold">WhatsApp</span> <br />
              • Rahmanda Isnaina Hanum – 0856 0963 1320 <br />
              • Aldo Syaputra – 0895 6121 78944
            </p>

            <p className="text-lg leading-relaxed text-justify">
              <span className="font-bold">Email</span> <br />
              esforum.sreunila@gmail.com
            </p>

            <p className="text-lg leading-relaxed text-justify">
              <span className="font-bold">Instagram</span> <br />
              @esfindonesia
            </p>

            <a
              href="mailto:esforum.sreunila@gmail.com"
              className="inline-block font-bold px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition-colors"
            >
              CONTACT US
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUsEsf;
