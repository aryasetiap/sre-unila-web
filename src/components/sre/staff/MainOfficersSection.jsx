import React from "react";
import { motion } from "framer-motion";

const officers = [
    {
        name: "IHSANUDDIN FADILLAH",
        role: "President",
        image: "/assets/staff/Ihsan1.png",
    },
    {
        name: "WIDYA REGITASARI Y.",
        role: "Vice President",
        image: "/assets/staff/Widya1.png",
    },
    {
        name: "LANVIA MADASI",
        role: "Secretary",
        image: "/assets/staff/Alan1.png",
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
                    className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-16 justify-items-center items-center"
                >
                    {officers.map((officer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`flex flex-col justify-start items-center text-white max-w-xs w-full h-full ${officers.length % 2 !== 0 && index === officers.length - 1
                                ? "col-span-2 md:col-span-1"
                                : ""
                                }`}                        >
                            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-2 border-black shadow-lg bg-[#F9F6EE]">
                                <img
                                    src={officer.image}
                                    alt={officer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-base sm:text-xl font-bold text-center">{officer.name}</h3>
                            <p className="text-sm sm:text-base opacity-90 text-center">{officer.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section >
    );
};

export default MainOfficersSection;
