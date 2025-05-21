import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";

const AgendaSection = () => {
    return (

        <div className="bg-white py-12 px-8 md:px-12">
            <div className="bg-[#4CB748]/10 py-12 px-6 text-center rounded-4xl">
                <h2 className="text-3xl font-extrabold text-[#1D6935]">ESF AGENDA 2025</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Plenary Section */}
                    <div>
                        <div className="bg-white shadow-lg rounded-xl pb-6 overflow-hidden">
                            <img src="/assets/esf/home/plenary.png" alt="Plenary" className="w-full h-auto overflow-hidden" />
                            <h3 className="text-left text-2xl text-[#1D6935] px-6 font-bold mt-2 pt-2">
                                Plenary Meeting
                            </h3>
                            <p className="text-left text-base text-[#1D6935]  mt-4 px-6">
                                A key agenda featuring six panel discussions on SDGs 7, 8, 9, 11,
                                12, and 13, fostering engagement between speakers and participants.
                                This session aims to build synergy among experts, policymakers,
                                academics, entrepreneurs, students, and communities at the domestic,
                                national, and international levels to advance SDGs at the subnational
                                scale.
                            </p>
                            <Link to="/esf/agenda">
                                <button className="mt-4 bg-transparent border-[#1D6935] border-2 text-[#1D6935] py-2 px-4 rounded-2xl hover:bg-[#1D6935] hover:text-white transition duration-300">
                                    SEE MORE
                                </button>
                            </Link>
                        </div>
                        <p className="mt-4 text-[#1D6935] font-bold">DAY 1 Environmental Sustainability Forum 2025</p>
                    </div>


                    {/* Thematic Section */}
                    <div>
                        <div className="bg-white shadow-lg rounded-xl pb-6 overflow-hidden">
                            <img src="/assets/esf/home/thematic.png" alt="Thematic" className="w-full h-auto overflow-hidden" />
                            <h3 className="text-left text-2xl text-[#1D6935] px-6 font-bold mt-2 pt-2">
                                Thematic Meeting
                            </h3>
                            <p className="text-left text-base text-[#1D6935]  mt-4 px-6">
                                An exclusive session focused on specific SDG topics, particularly addressing opportunities and challenges in sustainable development within Lampung through cross-sector collaboration. Expected outcomes include:
                                <ul className="list-disc list-inside">
                                    <li>A resolution and roadmap as concrete solutions for sustainable development in Lampung.</li>
                                    <li>Presentation of findings to Lampung policymakers to support policy formulation.</li>
                                </ul>
                            </p>
                            <Link to="/esf/agenda">
                                <button className="mt-4 bg-transparent border-[#1D6935] border-2 text-[#1D6935] py-2 px-4 rounded-2xl hover:bg-[#1D6935] hover:text-white transition duration-300">
                                    SEE MORE
                                </button>
                            </Link>
                        </div>
                        <p className="mt-4 text-[#1D6935] font-bold">DAY 2 Environmental Sustainability Forum 2025</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgendaSection;
