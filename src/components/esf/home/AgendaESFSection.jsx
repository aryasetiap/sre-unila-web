import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AgendaSection = () => {
    return (
        <section className="bg-white py-12 px-4 sm:px-6 md:px-12">
            <motion.div
                className="bg-[#4CB748]/10 py-12 px-6 text-center rounded-4xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl font-extrabold text-[#1D6935]">
                    ESF AGENDA 2025
                </h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    <div className="h-full flex flex-col">
                        <motion.div
                            className="bg-white shadow-lg rounded-xl pb-6 overflow-hidden flex flex-col h-full justify-between"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <img
                                    src="/assets/esf/home/plenary.png"
                                    alt="Plenary"
                                    className="w-full h-auto"
                                />
                                <h3 className="text-left text-2xl text-[#1D6935] px-6 font-bold mt-2 pt-2">
                                    Plenary Meeting
                                </h3>
                                <p className="text-left text-base text-[#1D6935] mt-4 px-6">
                                    A key agenda featuring six panel discussions on SDGs 7, 8, 9, 11, 12,
                                    and 13, fostering engagement between speakers and participants. This
                                    session aims to build synergy among experts, policymakers, academics,
                                    entrepreneurs, students, and communities at the domestic, national, and
                                    international levels to advance SDGs at the subnational scale.
                                </p>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link to="/esf/agenda">
                                    <button className="mt-4 bg-transparent border-[#1D6935] border-2 text-[#1D6935] py-2 px-4 rounded-2xl hover:bg-[#1D6935] hover:text-white transition duration-300">
                                        SEE MORE
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                        <p className="lg:text-left mt-4 text-[#1D6935] font-bold">
                            DAY 1 Environmental Sustainability Forum 2025
                        </p>
                    </div>

                    <div className="h-full flex flex-col">
                        <motion.div
                            className="bg-white shadow-lg rounded-xl pb-6 overflow-hidden flex flex-col h-full justify-between"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div>
                                <img
                                    src="/assets/esf/home/thematic.png"
                                    alt="Thematic"
                                    className="w-full h-auto"
                                />
                                <h3 className="text-left text-2xl text-[#1D6935] px-6 font-bold mt-2 pt-2">
                                    Thematic Meeting
                                </h3>
                                <div className="text-left text-base text-[#1D6935] mt-4 px-6">
                                    An exclusive session focused on specific SDG topics, particularly
                                    addressing opportunities and challenges in sustainable development
                                    within Lampung through cross-sector collaboration. Expected outcomes
                                    include:
                                    <ul className="list-disc pl-8 mt-2">
                                        <li>
                                            A resolution and roadmap as concrete solutions for sustainable
                                            development in Lampung.
                                        </li>
                                        <li>
                                            Presentation of findings to Lampung policymakers to support policy
                                            formulation.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-auto flex justify-center">
                                <Link to="/esf/agenda">
                                    <button className="mt-4 bg-transparent border-[#1D6935] border-2 text-[#1D6935] py-2 px-4 rounded-2xl hover:bg-[#1D6935] hover:text-white transition duration-300">
                                        SEE MORE
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                        <p className="lg:text-left mt-4 text-[#1D6935] font-bold">
                            DAY 2 Environmental Sustainability Forum 2025
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AgendaSection;
