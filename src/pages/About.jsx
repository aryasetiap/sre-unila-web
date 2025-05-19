import Hero from "../components/HeroSection";
import AboutSectionAbout from "../components/about/AboutSectionAbout";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="font-sans w-full">
      <Hero
        title="ABOUT US"
        subtitle="Empowering youth to lead Indonesia’s clean energy future."
        image='/assets/hero-images/bg-hero-about.jpg'
        tagline="#ReGreentheFuture"
      />
      <AboutSectionAbout />
      <div className="p-[5vw] w-full bg-[#F9F6EE] flex items-center justify-center">
        <img className="w-4/5" src="/assets/organization.png" alt="" />
      </div>
      <Footer />
    </div >
  );
};

export default About;
