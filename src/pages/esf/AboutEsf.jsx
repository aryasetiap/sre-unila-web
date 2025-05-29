import Navbar from "../../components/esf/NavbarEsf";
import Hero from "../../components/esf/HeroSectionEsf";
import Footer from "../../components/esf/FooterEsf";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const AboutEsf = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="WHAT IS ESF 2025?"
                subtitle="A movement. A mission. A moment for change."
                image="/assets/esf/about/bg-hero-aboutesf.jpg"
                tagline="#ReGreentheFuture"
            />

            <section className="py-12 md:py-16 bg-gray-50 text-gray-800">
                <motion.div
                    className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-10 md:gap-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left Section: Text */}
                    <motion.div
                        className="md:w-1/2"
                        custom={0}
                        variants={fadeUp}
                    >
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                            ABOUT EVENT
                        </h1>
                        <motion.p
                            className="mb-4 text-base md:text-lg leading-relaxed text-justify"
                            custom={1}
                            variants={fadeUp}
                        >
                            The Environmental Sustainability Forum (ESF) is a prestigious international conference
                            themed “The Future of Lampung: Collaboration, Cooperation, and Co-Creating.”
                            Focused on advancing Sustainable Development Goals (SDGs), particularly goals 7, 8, 9,
                            11, 12, and 13, ESF integrates Environmental, Social, and Governance (ESG) principles
                            to drive actionable solutions for sustainable development.
                        </motion.p>
                        <motion.p
                            className="mb-10 text-base md:text-lg leading-relaxed text-justify"
                            custom={2}
                            variants={fadeUp}
                        >
                            Highlighting Lampung's strategic potential, the forum serves as a model for sustainable growth,
                            offering insights and collaborative opportunities for stakeholders including industry leaders,
                            academics, practitioners, and the public. ESF aims to foster partnerships, share best practices,
                            and contribute to both regional and global efforts toward achieving the SDGs.
                        </motion.p>

                        <motion.p
                            className="font-bold mb-4 text-base md:text-lg leading-relaxed text-justify"
                            custom={3}
                            variants={fadeUp}
                        >
                            Objectives
                        </motion.p>
                        <motion.ol
                            className="list-decimal pl-6 space-y-4 text-base md:text-lg text-justify"
                            custom={4}
                            variants={fadeUp}
                        >
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
                        </motion.ol>
                    </motion.div>

                    {/* Right Section: Image */}
                    <motion.div
                        className="md:w-1/2"
                        custom={5}
                        variants={fadeUp}
                    >
                        <img
                            src="/assets/esf/about/img.png"
                            alt="About ESF 2025"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </motion.div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
};

export default AboutEsf;
