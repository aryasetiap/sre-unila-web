import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image, tagline }) => {
  return (
    <div
      className="w-full h-screen max-h-[800px] px-[5vw] min-h-[400px] bg-cover bg-center items-center justify-center text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left max-w-2xl"
      >
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="text-[40px] italic  mb-4 font-medium">{subtitle}</p>
        <p className="italic text-4xl">{tagline}</p>
      </motion.div>
    </div>
  );
};

export default Hero;
