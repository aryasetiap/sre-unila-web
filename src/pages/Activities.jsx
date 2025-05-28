import Hero from "../components/sre/HeroSection";
import ProjectsEventsSection from "../components/sre/activities/ProjectsEventsSection";
import Footer from "../components/sre/Footer";
import Navbar from "../components/sre/Navbar";

const Activities = () => {
  return (
    <div className="font-sans w-full">
      <Navbar />
      <Hero
        title="OUR ACTIVITY"
        subtitle="We educate, we act, we innovate together for a clean energy future."
        image='/assets/hero-images/bg-hero-activities.png'
        tagline="#ReGreentheFuture"
      />
      <section id="after-hero-section">
        <ProjectsEventsSection />
      </section>

      <Footer />
    </div>
  );
};

export default Activities;
