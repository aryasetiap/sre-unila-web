import React from "react";
import { motion } from "framer-motion";

const officers = [
    {
        name: "IHSANUDDIN FADILLAH",
        role: "President of SRE Lampung",
        image: "/assets/staff/Ihsan.png",
    },
    {
        name: "WIDYA REGITASARI Y.",
        role: "Vice President of SRE Lampung",
        image: "/assets/staff/Widya.png",
    },
];

const MainOfficersSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#2ac393] to-[#0e916b] py-12 sm:py-20 px-6 sm:px-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full mx-auto text-center"
            >
                {/* Judul */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-white text-4xl sm:text-6xl font-extrabold mb-4"
                >
                    Main Officers
                </motion.h2>

                {/* Garis pemisah */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-3/4 sm:w-full h-2 bg-gradient-to-r from-white to-transparent mx-auto mb-10 sm:mb-16 opacity-50"
                />

                {/* Grid Pejabat */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 justify-items-center"
                >
                    {officers.map((officer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-white"
                        >
                            <div className="w-40 sm:w-64 h-40 sm:h-64 rounded-full overflow-hidden border-2 border-black shadow-lg bg-[#98A49B]">
                                <img
                                    src={officer.image}
                                    alt={officer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold text-center">{officer.name}</h3>
                            <p className="text-lg sm:text-2xl opacity-90">{officer.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default MainOfficersSection;
