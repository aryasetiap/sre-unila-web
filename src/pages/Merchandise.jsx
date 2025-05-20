import Footer from "../components/sre/Footer";
import Hero from "../components/sre/HeroSection";
import Navbar from "../components/sre/Navbar";

const Merchandise = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        title="OUR MERCHANDISE"
        subtitle="COMING SOON!"
        image='/assets/hero-images/bg-hero-merchandise.png'
        tagline="#ReGreentheFuture"
      />
      <Footer />
    </div>
  );
};

export default Merchandise;
