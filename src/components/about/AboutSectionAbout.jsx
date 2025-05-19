import React from 'react';
import { motion } from "framer-motion";

const AboutSectionAbout = () => {
    return (
        <section className="bg-[#F9F6EE] text-gray-800 pt-16 px-6 md:px-20">
            {/* Header Gradient */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-4 sm:px-6 py-4 md:py-6"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center"
                >
                    SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
                </motion.h1>
            </motion.div>

            {/* About SRE Unila */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-10 md:flex md:justify-between"
            >
                {/* Judul */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h2 className="text-[#0F926C] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        ABOUT <br />
                        SRE UNILA
                    </h2>
                </motion.div>

                {/* Konten */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-2/3 text-lg sm:text-xl md:text-2xl"
                >
                    <p className="mb-4">
                        <strong className="text-[#0F926C]">Society of Renewable Energy (SRE)</strong> is a student organization dedicated to developing the interests and skills of Indonesian students in the field of renewable energy.
                    </p>
                    <p>
                        This organization was first formed by ITB students with the aim of increasing student interest and awareness of new and renewable energy based on the number of students who are still unfamiliar with new and renewable energy. And currently, SRE has spread across 58 universities in Indonesia.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bar pemisah dengan animasi */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"
            ></motion.div>

            {/* Our Goals */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-10 md:flex md:justify-between"
            >
                {/* Judul */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h2 className="text-[#0F926C] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        OUR <br />
                        GOALS
                    </h2>
                </motion.div>

                {/* Konten */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-2/3 text-lg sm:text-xl md:text-2xl"
                >
                    <p className="mb-4">
                        Currently, the world is undergoing a transition towards <strong className="text-[#0F926C]">sustainable development, particularly in the energy sector.</strong> In Indonesia, we understand that awareness of the use of Renewable Energy is very low, both among the general public and students.
                    </p>
                    <p>
                        Starting from that gap, SRE is committed to <strong className="text-[#0F926C]">spreading education and raising awareness about the use of new renewable energy</strong> through various activities and events as tools, with students from 51 universities in Indonesia as the executors. Until now, dozens of solar PV electricity access points have been installed throughout Indonesia through various SRE collaboration programs. Thus, we are here as a solution to achieve equitable and sustainable development.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bar pemisah dengan animasi */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"
            ></motion.div>

            {/* Our Vision */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-10 md:flex md:justify-between"
            >
                {/* Judul */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h2 className="text-[#0F926C] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        OUR <br />
                        VISION
                    </h2>
                </motion.div>

                {/* Konten */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-2/3 text-lg sm:text-xl md:text-2xl"
                >
                    <p className="mb-4">
                        <strong className="text-[#0F926C]">Accelerating Indonesia's Energy Transition</strong> through the inclusive empowerment of youth and multi-institutional collaboration.
                    </p>
                </motion.div>
            </motion.div>

            {/* Bar pemisah dengan animasi */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"
            ></motion.div>

            {/* Our Mission */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-10 md:flex md:justify-between"
            >
                {/* Judul */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <h2 className="text-[#0F926C] text-3xl sm:text-4xl md:text-5xl font-extrabold">
                        OUR <br />
                        MISSIONS
                    </h2>
                </motion.div>

                {/* List Item */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-2/3 text-lg sm:text-xl md:text-2xl"
                >
                    <ul className="mb-4 *:marker:text-[#0F926C]">
                        {[
                            "Increasing students' awareness and understanding of renewable energy and sustainability issues.",
                            "Providing opportunities for students to engage directly in practical projects and research in the field of renewable energy.",
                            "Encouraging the creation and development of sustainable innovative solutions in the field of renewable energy by students.",
                            "Facilitating collaboration among students, academics, government, industry, society, and media to support the development of renewable energy in Indonesia.",
                            "Building a strong and dedicated youth network to support the national energy transformation that is environmentally friendly."
                        ].map((mission, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 * index }}
                                viewport={{ once: true }}
                                className="mb-2"
                            >
                                <strong className="text-[#0F926C]">{mission.split(" ")[0]}</strong>{" "}
                                {mission.substring(mission.indexOf(" ") + 1)}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>

            {/* Bar pemisah dengan animasi */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"
            ></motion.div>
        </section>
    );
};

export default AboutSectionAbout;
