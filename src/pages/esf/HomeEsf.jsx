import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

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
            <Footer />
        </>
    )
}

export default HomeEsf