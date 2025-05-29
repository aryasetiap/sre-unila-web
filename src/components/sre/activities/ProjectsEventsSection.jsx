import React from "react";
import ProjectEventLeft from "./ProjectEventLeft";
import ProjectEventRight from "./ProjectEventRight";
import { motion } from "framer-motion";

const ProjectsEventsSection = () => {
    return (
        <section className="bg-[#F9F6EE] text-gray-800 py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20">
            {/* Banner gambar */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full overflow-hidden mb-6 md:mb-20"
            >
                <img
                    src="/assets/banner-sre.png"
                    alt="SRE Banner"
                    className="w-full object-contain object-center"
                />
            </motion.div>

            <ProjectEventLeft
                title="BIOMASS"
                subtitle="PROJECT"
                imageSrc="/assets/activities/sre-biomass.png"
                imageAlt="Biomass Project"
                textContent={
                    <>
                        <p className="mb-4">
                            SRE UNILA has a major project that fundamentally aims to implement a Waste to Energy (WTE)
                            program, which then produces output in the form of renewable energy or synthetic gas.
                        </p>
                        <p>
                            This project is the core project of SRE UNILA. To implement it, SRE UNILA collaborates with
                            various experts, including technicians and investors as well as collaborators from Europe and
                            the Philippines, and various energy and mining companies in Indonesia that contribute from
                            equipment to project financing.
                        </p>
                    </>
                }
            />

            <ProjectEventRight
                title="SOLAR PV"
                subtitle="INSTALLATION"
                imageSrc="/assets/activities/sre-pv.png"
                imageAlt="Solar PV Project"
                textContent={
                    <>
                        <p className="mb">
                            On January 29 and 30, 2024, the SRE UNILA team sent a delegation to carry out a solar PV panel installation project in the Pertamina Geothermal Energy area, Ulu Belu, Tanggamus Regency. This project is a collaboration and research initiative between SRE Indonesia and PT. Pertamina Geothermal Energy.
                        </p>
                        <p>
                            This project is still actively ongoing to this day and continues to be developed to provide impact and electricity assistance to the surrounding residents in need. 2024 still active & helping
                        </p>
                    </>
                }
            />

            <ProjectEventLeft
                title="ASIA-PACIFIC"
                subtitle="ENERGY YOUTH ENGAGEMENT"
                imageSrc="/assets/activities/sre-asia-pacific.jpg"
                imageAlt="Asia-Pacific Energy Youth Engagement"
                textContent={
                    <>
                        <p className="mb-4">
                            SRE UNILA has a major project that fundamentally aims to implement a Waste to Energy (WTE)
                            program, which then produces output in the form of renewable energy or synthetic gas.
                        </p>
                        <p >
                            This project is the core project of SRE UNILA. To implement it, SRE UNILA collaborates with
                            various experts, including technicians and investors as well as collaborators from Europe and
                            the Philippines, and various energy and mining companies in Indonesia that contribute from
                            equipment to project financing.
                        </p>
                    </>
                }
            />

            <ProjectEventRight
                title="MANGROVE"
                subtitle="PLANNING"
                imageSrc="/assets/activities/sre-mangrove.png"
                imageAlt="MANGROVE PLANNING"
                textContent={
                    <>
                        <p className="mb-4 ">
                            10K MANGROVE SEEDLINGS Specifically in the Lampung region, the implementation of this activity coincides with the 60th anniversary of Lampung Province. Therefore, this event was attended by various elements of the government and the academic community in Lampung.
                        </p>
                        <p >
                            SRE Unila collaborated with BPDAS KLHK in organizing this event. The planting of these mangrove seedlings is expected to help address the issues around the coastal area of Pulau Pasaran, Bandar Lampung.
                        </p>
                    </>
                }
            />

            <ProjectEventLeft
                title="GID"
                subtitle="NATIONAL SEMINAR"
                imageSrc="/assets/activities/sre-gid.png"
                imageAlt="GID NATIONAL SEMINAR"
                textContent={
                    <>
                        <p className="mb-4">
                            The main GID event took place at the Sabuga building, Bandung Institute of Technology, and was attended by all SRE SCs from across Indonesia. It featured leading speakers in the energy sector and invited several high schools from Bandung. The event focused on sharing information and education about the development and transition process of renewable energy in Indonesia. Moving forward, this event is planned to become an annual program organized by SRE Indonesia and Rakyat Merdeka.
                        </p>
                    </>
                }
            />

            <ProjectEventRight
                title="IISF 2024"
                subtitle="AT JAKARTA"
                imageSrc="/assets/activities/sre-iisf.jpg"
                imageAlt="IISF 2024 AT JAKARTA"
                textContent={
                    <>
                        <p className="mb-4">
                            SRE GOES TO INTERNATIONAL IISF held an event that made sustainability a crucial aspect of the entire sector. The event was held at the Jakarta Convention Center. This activity was attended by officials and stakeholders internationally - MNC’s
                        </p>
                    </>
                }
            />

            <ProjectEventLeft
                title="SEKOLAH"
                subtitle="NUSANTARA"
                imageSrc="/assets/activities/sre-sekolah-nusantara.png"
                imageAlt="SEKOLAH NUSANTARA"
                textContent={
                    <>
                        <p className="mb-4">
                            In 2023, a national seminar on renewable energy career development was held, featuring technical, scientific, and social perspectives. Attendees included representatives from Indonesia's Ministry of Energy and Mineral Resources and speakers from the UNILA academic community. This activity will be held for the second time in 2025, because currently, things like sustainable development, especially in the renewable energy sector, have become a major trend worldwide.  180+ participants all over indonesia
                        </p>
                    </>
                }
            />

            <ProjectEventRight
                title="SRE:"
                subtitle="RICH"
                imageSrc="/assets/activities/sre-rich.png"
                imageAlt="SRE: RICH"
                textContent={
                    <>
                        <p >
                            In 2023, a national seminar on renewable energy career development was held, featuring technical, scientific, and social perspectives. Attendees included representatives from Indonesia's Ministry of Energy and Mineral Resources and speakers from the UNILA academic community. This activity will be held for the second time in 2025, because currently, things like sustainable development, especially in the renewable energy sector, have become a major trend worldwide.  180+ participants all over indonesia
                        </p>
                    </>
                }
            />

            <ProjectEventLeft
                title="STADIUM"
                subtitle="GENERALE"
                imageSrc="/assets/activities/sre-sg.png"
                imageAlt="STADIUM GENERALE"
                textContent={
                    <>
                        <p className="mb-4">
                            This program aims to introduce battery technology and rainwater harvesting as innovative solutions for energy sustainability and water management. The event seeks to educate participants on the synergy between renewable energy storage and water resource management.
                        </p>
                        <p >
                            The core focus is to promote eco-friendly technologies by highlighting the potential of batteries for energy storage, complemented by rainwater harvesting for domestic and industrial needs.
                        </p>
                    </>
                }
            />

            <ProjectEventRight
                title="SPARK"
                subtitle="2024"
                imageSrc="/assets/activities/sre-spark24.jpg"
                imageAlt="SPARK 2024"
                textContent={
                    <>
                        <p >
                            “S-SPARK” is an activity based on an initiative to increase awareness and knowledge of RE. Our focus in this activity is to provide participants with a deeper understanding of renewable energy that they may not necessarily get at school or outside of school.                        </p>
                    </>
                }
            />

            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#F9F6EE] py-24 flex justify-center items-center"
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center px-6"
                >
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#0F926C]"
                    >
                        We Are Just Getting Started
                    </motion.p>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
                    >
                        MORE EXCITING ACTIVITIES <br className="hidden md:block" /> ARE ON THE WAY
                    </motion.h2>
                </motion.div>
            </motion.section>
        </section>
    );
};

export default ProjectsEventsSection;