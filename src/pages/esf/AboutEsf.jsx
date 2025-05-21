import Navbar from "../../components/esf/NavbarEsf";
import Hero from "../../components/esf/HeroSectionEsf";
import Footer from "../../components/esf/FooterEsf";

const AboutEsf = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="WHAT IS ESF 2025?"
                subtitle="A movement. A mission. A moment for change."
                image="/assets/esf/about/bg-hero-aboutesf.png"
                tagline="#ReGreentheFuture"
            />

            <section className="py-16 bg-gray-50 text-gray-800">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    {/* Bagian Kiri: Teks */}
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-6 text-green-800">
                            ABOUT EVENT
                        </h1>
                        <p className="mb-4 text-lg leading-relaxed text-justify">
                            The Environmental Sustainability Forum (ESF) is a prestigious international conference
                            themed “The Future of Lampung: Collaboration, Cooperation, and Co-Creating.”
                            Focused on advancing Sustainable Development Goals (SDGs), particularly goals 7, 8, 9,
                            11, 12, and 13, ESF integrates Environmental, Social, and Governance (ESG) principles
                            to drive actionable solutions for sustainable development.
                        </p>
                        <p className="mb-10 text-lg leading-relaxed text-justify">
                            Highlighting Lampung's strategic potential, the forum serves as a model for sustainable growth,
                            offering insights and collaborative opportunities for stakeholders including industry leaders,
                            academics, practitioners, and the public. ESF aims to foster partnerships, share best practices,
                            and contribute to both regional and global efforts toward achieving the SDGs.
                        </p>

                        <p className="font-bold mb-4 text-lg leading-relaxed text-justify">
                            Objectives
                        </p>
                        <ol className="list-decimal pl-6 space-y-4 text-lg text-justify">
                            <li>
                                <strong>Enhancing public awareness</strong> of the importance of achieving
                                <abbr title="Sustainable Development Goals"> SDGs </abbr>
                                and implementing
                                <abbr title="Environmental, Social, and Governance"> ESG </abbr>
                                principles, while encouraging participants to actively engage in sustainability initiatives.
                            </li>
                            <li>
                                <strong>Facilitating discussions and partnerships</strong> among business leaders,
                                policymakers, academics, students, farmers, and NGOs to establish networks
                                for sharing best practices.
                            </li>
                            <li>
                                <strong>Identifying unique sustainability challenges</strong> in Lampung and
                                surrounding areas, formulating locally applicable solutions through idea exchange
                                and collaboration between speakers and participants.
                            </li>
                        </ol>
                    </div>

                    {/* Bagian Kanan: Gambar */}
                    <div className="md:w-1/2">
                        <img
                            src="/assets/esf/about/img.png"
                            alt="About ESF 2025"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>

            </section >

            <Footer />
        </>
    );
};

export default AboutEsf;
