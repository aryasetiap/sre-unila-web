import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"
import AboutESF from "../../components/esf/home/AboutESFSection"
import AgendaESF from "../../components/esf/home/AgendaESFSection"
import LampungSREnovation from "../../components/esf/home/LampungSREnovation"
import SpeakersSection from "../../components/esf/home/SpeakersSection"
import { Mail, Phone, Instagram } from "lucide-react";

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
            <SpeakersSection />

            <section className="bg-[#FBFCF7] py-18 flex flex-col items-left justify-center text-left px-6">
                <h2 className="text-5xl font-bold text-[#1D6935] ">Sponsorship</h2>
                <p className="text-lg text-gray-600 my-12 max-w-2xl">
                    We invite you to take part in ESF 2025 as our sponsors. To learn more about how to get engaged
                    please kindly contact <a
                        href="mailto:esforum.sreunila@gmail.com"
                        className="font-semibold text-green-500 hover:text-green-700 transition"
                    >
                        esforum.sreunila@gmail.com
                    </a>
                </p>
                <a
                    href="mailto:esforum.sreunila@gmail.com"
                    className=" w-fit bg-green-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition"
                >
                    CONTACT US
                </a>
            </section>

            <section className="bg-[#FBFCF7] py-18 flex flex-col items-left justify-center text-left px-6">
                <div className="flex flex-row items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-5xl font-bold text-[#1D6935] flex items-center">
                            <span className="mr-4">
                                <Mail size={40} color="#1D6935" />
                            </span>
                            Join us!
                        </h2>
                        <p className="text-lg text-gray-600 my-12">
                            Join us in partaking on this mission to step up our collaborative efforts and realize international partnerships that the world urgently needs. We look forward to welcome you in Environmental International Sustainability Forum 2025!
                        </p>
                    </div>

                    <div className="text-lg text-gray-600 flex flex-col gap-4">
                        <p>For further information, please contact us at:</p>
                        <p className="flex items-center">
                            <Mail size={24} className="mr-2 text-green-500" />
                            <a href="mailto:esforum.sreunila@gmail.com" className="font-semibold text-green-500 hover:text-green-700 transition">
                                esforum.sreunila@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center">
                            <Phone size={24} className="mr-2 text-green-500" /> 0856 0963 1320 (Rahmanda Isnaina Hanum)
                        </p>
                        <p className="flex items-center">
                            <Phone size={24} className="mr-2 text-green-500" /> 0895 6121 78944 (Aldo Syaputra)
                        </p>
                        <p className="flex items-center">
                            <Instagram size={24} className="mr-2 text-green-500" />
                            <a href="https://www.instagram.com/esfindonesia" className="font-semibold text-green-500 hover:text-green-700 transition">
                                esfIndonesia
                            </a>
                        </p>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    );
}

export default HomeEsf