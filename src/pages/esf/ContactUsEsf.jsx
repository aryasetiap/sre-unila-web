import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

const ContactUsEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="CONTACT US"
        subtitle="Have a question, collaboration idea, or need assistance?"
        image='/assets/esf/contact-us/bg-hero-contactusesf.png'
        tagline="#ReGreentheFuture"
      />
      <Footer />
    </>
  )
}

export default ContactUsEsf