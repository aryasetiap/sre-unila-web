import React from "react";
import { motion } from "framer-motion";

const officers = [
    {
        name: "M. RIZQY PUTRA L.",
        role: "BoD of Public Relation",
        image: "/assets/staff/rizky.png",
    },
    {
        name: "MUHAMMAD ALGIFARI",
        role: "BoD Creative Media",
        image: "/assets/staff/algi.png",
    },
    {
        name: "SILKE SYAHIDAH",
        role: "BoD of Finance",
        image: "/assets/staff/silke.png",
    },
    {
        name: "HEZZA TRIE YONO",
        role: "BoD of Human Resource",
        image: "/assets/staff/hezza.png",
    },
    {
        name: "AKBAR RAMADHANI",
        role: "BoD of Academy",
        image: "/assets/staff/akbar.png",
    },
    {
        name: "GILANG PERMANA",
        role: "BoD of Project",
        image: "/assets/staff/gilang.png",
    },
];

const HeadOfficersSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#F9F6EE] py-12 sm:py-20 px-6 sm:px-20"
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
                    className="text-[#0F926C] text-4xl sm:text-6xl font-extrabold mb-4"
                >
                    Head of Departement
                </motion.h2>

                {/* Garis pemisah */}
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-3/4 sm:w-full h-2 bg-gradient-to-r from-[#0F926C] to-transparent mx-auto mb-10 sm:mb-16 opacity-50"
                />

                {/* Grid Pejabat */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 justify-items-center"
                >
                    {officers.map((officer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-black"
                        >
                            <div className="w-40 sm:w-52 h-40 sm:h-52 rounded-full overflow-hidden border-2 border-black shadow-lg bg-[#98A49B]">
                                <img
                                    src={officer.image}
                                    alt={officer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-center">{officer.name}</h3>
                            <p className="text-lg sm:text-2xl opacity-90">{officer.role}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.section>
    );
};

export default HeadOfficersSection;
