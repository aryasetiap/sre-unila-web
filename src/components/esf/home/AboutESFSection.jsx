import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutESF = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
            <motion.div
                className="max-w-4xl mx-auto text-center"
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-green-700">
                    ABOUT ESF
                </h2>
                <motion.p
                    className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    The Environmental Sustainability Forum (ESF) is a prestigious international
                    conference themed “The Future of Lampung: Collaboration, Cooperation, and
                    Co-Creating.” Focused on advancing Sustainable Development Goals (SDGs),
                    particularly goals 7, 8, 9, 11, 12, and 13, ESF integrates Environmental,
                    Social, and Governance (ESG) principles to drive actionable solutions for
                    sustainable development.
                </motion.p>
                <motion.p
                    className="text-gray-700 mt-4 text-base sm:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Highlighting Lampung's strategic potential, the forum serves as a model for
                    sustainable growth, offering insights and collaborative opportunities for
                    stakeholders including industry leaders, academics, practitioners, and the
                    public. ESF aims to foster partnerships, share best practices, and contribute
                    to both regional and global efforts toward achieving the SDGs.
                </motion.p>
                <motion.button
                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
                    onClick={() => navigate("/esf/about")}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    SEE MORE
                </motion.button>
            </motion.div>
        </section>
    );
};

export default AboutESF;
