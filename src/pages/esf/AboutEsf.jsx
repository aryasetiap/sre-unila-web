import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

const AboutEsf = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="WHAT IS ESF 2025?"
                subtitle="A movement. A mission. A moment for change."
                image='/assets/esf/about/bg-hero-aboutesf.png'
                tagline="#ReGreentheFuture"
            />
            <Footer />
        </>
    )
}

export default AboutEsf