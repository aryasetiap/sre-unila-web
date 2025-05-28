import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image, tagline }) => {
  return (
    <div
      className="relative w-full h-screen max-h-[800px] px-[5vw] min-h-[400px] bg-cover bg-center flex flex-col justify-start text-white overflow-hidden"
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
        className="text-left max-w-2xl mt-[36vh] relative z-10"
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
          className="md:text-[40px] text-3xl italic mb-4 font-thin leading-[1.2]"
        >
          {subtitle}
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="italic md:text-[32px] sm:text-2xl font-thin leading-[1.2]"
        >
          {tagline}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
