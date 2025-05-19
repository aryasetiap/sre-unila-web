import { motion } from "framer-motion";

const Hero = ({ title, subtitle, image, tagline }) => {
  return (
    <div
      className="relative w-full h-screen max-h-[800px] px-[5vw] min-h-[400px] bg-cover bg-center flex flex-col justify-start text-white"
      style={{ backgroundImage: `url(${image})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-left max-w-2xl mt-[36vh]"
      >
        <h1 className="md:text-[64px] text-4xl font-bold leading-[1.2]">{title}</h1>
        <p className="md:text-[40px] text-3xl italic  mb-4 font-thin leading-[1.2]">{subtitle}</p>
        <p className="italic md:text-[32px] sm:text-2xl font-thin leading-[1.2]">{tagline}</p>
      </motion.div>
    </div>
  );
};

export default Hero;
