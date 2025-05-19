import Hero from "../components/HeroSection";
import ProjectsEventsSection from "../components/activities/ProjectsEventsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

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

      <ProjectsEventsSection />

      <Footer />
    </div>
  );
};

export default Activities;
