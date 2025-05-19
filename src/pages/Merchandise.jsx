import Footer from "../components/Footer";
import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";

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
