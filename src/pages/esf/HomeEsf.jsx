import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"
import AboutESF from "../../components/esf/home/AboutESFSection"
import AgendaESF from "../../components/esf/home/AgendaESFSection"
const HomeEsf = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="ENVIRONMENTAL SUSTAINABILITY FORUM"
                subtitle="17 - 19 June 2025 | Swiss-Belhotel Lampung"
                image='/assets/esf/home/bg-hero-homeesf.png'
                tagline="#ReGreentheFuture"
            />
            <AboutESF />
            <AgendaESF />
            <Footer />
        </>
    )
}

export default HomeEsf