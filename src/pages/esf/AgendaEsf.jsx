import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

const AgendaEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="AGENDA ESF 2025"
        subtitle="Explore what's next in our journey to a greener future."
        image='/assets/esf/agenda/bg-hero-agendaesf.png'
        tagline="#ReGreentheFuture"
      />
      <Footer />
    </>
  )
}

export default AgendaEsf