import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"
import AboutESF from "../../components/esf/home/AboutESFSection"
import AgendaESF from "../../components/esf/home/AgendaESFSection"
import LampungSREnovation from "../../components/esf/home/LampungSREnovation"
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
            <div className="bg-white text-center pt-12 pb-24">
                <h1 className="text-[#1D6935] text-3xl font-bold mb-6">Ready to Make an Impact?</h1>
                <p className="text-gray-700 text-lg mb-8">
                    Join the Plenary & Thematic Meetings of the Environmental Sustainability Forum 2025
                </p>
                <div className="flex justify-center space-x-6">
                    <a href="http://bit.ly/RegistrationESF2025" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-[#55C879] to-[#4CB748] hover:from-[#4CB748] hover:to-[#55C879] text-white py-3 px-6 rounded-lg font-medium shadow-md">
                            REGISTER
                        </button>
                    </a>
                    <a href="https://bit.ly/GuidebookForConferencesESF2025" target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-[#55C879] to-[#4CB748] hover:from-[#4CB748] hover:to-[#55C879] text-white py-3 px-6 rounded-lg font-medium shadow-md">
                            GUIDE BOOK
                        </button>
                    </a>
                </div>
            </div>
            <LampungSREnovation />
            <Footer />
        </>
    );
}

export default HomeEsf