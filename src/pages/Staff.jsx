import Hero from "../components/HeroSection";
import Navbar from "../components/Navbar";
import MainOfficersSection from "../components/staff/MainOfficersSection";
import HeadOfficersSection from "../components/staff/HeadOfficersSection";
import Footer from "../components/Footer";


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
        <div className="pb-16 px-6 md:px-20">
          <div className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-4 sm:px-6 py-4 md:py-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
              SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
            </h1>
          </div>
        </div>
        <MainOfficersSection />
        <HeadOfficersSection />
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
