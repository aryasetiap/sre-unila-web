import React from "react";
import { useNavigate } from "react-router-dom";

const AboutESF = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-white py-12 px-8 md:px-12">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-green-700">ABOUT ESF</h2>
                <p className="text-gray-700 mt-4 *:text-3xl">
                    The Environmental Sustainability Forum (ESF) is a prestigious international conference themed “The Future of Lampung: Collaboration, Cooperation, and Co-Creating.” Focused on advancing Sustainable Development Goals (SDGs), particularly goals 7, 8, 9, 11, 12, and 13, ESF integrates Environmental, Social, and Governance (ESG) principles to drive actionable solutions for sustainable development.
                </p>
                <p className="text-gray-700 mt-2 *:text-3xl">
                    Highlighting Lampung's strategic potential, the forum serves as a model for sustainable growth, offering insights and collaborative opportunities for stakeholders including industry leaders, academics, practitioners, and the public. ESF aims to foster partnerships, share best practices, and contribute to both regional and global efforts toward achieving the SDGs.
                </p>
                <button
                    className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800"
                    onClick={() => navigate("/esf/about")}
                >
                    SEE MORE
                </button>
            </div>
        </section>
    );
};

export default AboutESF;
