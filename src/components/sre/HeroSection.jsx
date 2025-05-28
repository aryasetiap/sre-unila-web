import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image, tagline }) => {
  return (
    <div
      className="relative w-full h-screen max-h-[800px] px-[5vw] min-h-[400px] bg-cover bg-center flex items-center justify-start text-white overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Efek Parallax untuk background */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" }}
      />
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
        }}
        className="text-left max-w-2xl w-full relative z-10 flex flex-col items-start justify-center h-full"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1 }}
          className="md:text-[64px] text-4xl font-bold leading-[1.2]"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="md:text-[40px] text-3xl italic font-thin leading-[1.2]"
        >
          {subtitle}
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-6 mb-8 italic md:text-[32px] sm:text-2xl font-thin leading-[1.2]"
        >
          {tagline}
        </motion.p>

        {/* Tombol SEE MORE */}
        <motion.button
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          whileHover={{ scale: 1.05, y: -4, boxShadow: "0 8px 32px 0 rgba(34,139,84,0.25)" }}
          whileTap={{ scale: 0.97, y: 2 }}
          className="
            px-8 py-1 text-base
            sm:px-12 sm:py-2 sm:text-xl
            md:px-15 md:py-3 md:text-2xl
            rounded-full
            bg-gradient-to-r from-[#2ac393] to-[#0e916b]
            text-white font-bold
            shadow-lg transition-all duration-300 focus:outline-none
            min-w-[120px] sm:min-w-[160px] md:min-w-[200px]
            w-auto
          "
          onClick={() => {
            const section = document.getElementById("after-hero-section");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          SEE MORE
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
