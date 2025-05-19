import Hero from "../components/HeroSection";
import ProjectsEventsSection from "../components/ProjectsEventsSection";
import Footer from "../components/Footer";

const Activities = () => {
  return (
    <div className="font-sans w-full">
      <Hero
        title="OUR ACTIVITY"
        subtitle="We educate, we act, we innovate together for a clean energy future."
        image='/assets/bg-hero-activities.png'
        tagline="#ReGreentheFuture"
      />

      <ProjectsEventsSection />

      <Footer />
    </div>
  );
};

export default Activities;
