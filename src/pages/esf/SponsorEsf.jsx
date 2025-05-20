import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

const SponsorEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="OUR SPONSORSHIP"
        subtitle="Together, we can build a greener, more sustainable future."
        image='/assets/esf/sponsor/bg-hero-sponsoresf.png'
        tagline="#ReGreentheFuture"
      />
      <Footer />
    </>
  )
}

export default SponsorEsf