import Footer from "../components/Footer";
import Hero from "../components/HeroSection";


const Merchandise = () => {
  return (
    <div className="font-sans w-full">
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
