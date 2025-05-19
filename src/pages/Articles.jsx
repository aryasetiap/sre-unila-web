import Hero from "../components/HeroSection";
import ArticlesSection from "../components/articles/ArticlesSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Articles = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        title="OUR ARTICLES"
        subtitle="Ideas that move energy forward."
        image='/assets/hero-images/bg-hero-articles.png'
        tagline="#ReGreentheFuture"
      />
      <section className="bg-[#F9F6EE] text-gray-800 py-16 px-6 md:px-20">
        {/* Header Gradient */}
        <div className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-6 py-4 mb-16 inline-block">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
            SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
          </h1>
        </div>

        <ArticlesSection />

      </section>
      <Footer />
    </div>
  );
};

export default Articles;
