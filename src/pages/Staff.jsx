import Hero from "../components/HeroSection";
import MainOfficersSection from "../components/staff/MainOfficersSection";
import HeadOfficersSection from "../components/staff/HeadOfficersSection";
import Footer from "../components/Footer";


const Staff = () => {
  return (
    <div className="font-sans w-full">
      <Hero
        title="OUR STAF"
        subtitle="Behind every project is a passionate student ready to make an impact."
        image='/assets/hero-images/bg-hero-staff.png'
        tagline="#ReGreentheFuture"
      />

      <div className="bg-[#F9F6EE] text-gray-800 pt-16">
        {/* Header Gradient */}
        <div className="bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-6 py-4 mb-16 mx-20 block">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
            SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
          </h1>
        </div>

        <MainOfficersSection />

        <HeadOfficersSection></HeadOfficersSection>

      </div>
      <Footer />
    </div>
  );
};

export default Staff;
