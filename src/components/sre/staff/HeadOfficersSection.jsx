import React from "react";
import { motion } from "framer-motion";

const officers = [
    {
        name: "M. RIZQY PUTRA",
        role: "BoD of Public Relation",
        image: "/assets/staff/Rizqy1.png",
    },
    {
        name: "M. ALGIFARI",
        role: "BoD Creative Media",
        image: "/assets/staff/Algi1.png",
    },
    {
        name: "SILKE SYAHIDAH",
        role: "BoD of Finance",
        image: "/assets/staff/Silke1.png",
    },
    {
        name: "HEZZA TRIE YONO",
        role: "BoD of Human Resource",
        image: "/assets/staff/Hezza1.png",
    },
    {
        name: "AKBAR RAMADHANI",
        role: "BoD of Academy",
        image: "/assets/staff/Akbar1.png",
    },
    {
        name: "GILANG PERMANA",
        role: "BoD of Project",
        image: "/assets/staff/Gilang1.png",
    },
    {
        name: "Joko Sulistiyo",
        role: "BoD of Information Technology",
        image: "/assets/staff/Joko1.png",
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
                    className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-16 justify-center items-center"
                >
                    {officers.map((officer, index) => {
                        // Cek jika item terakhir pada jumlah ganjil, tambahkan col-span agar di tengah
                        const isLastOdd =
                            officers.length % 3 !== 0 &&
                            index === officers.length - 1;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`flex flex-col items-center text-black w-full h-full ${isLastOdd ? "col-span-2 sm:col-span-3 lg:col-span-3" : ""
                                    }`}
                            >
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
                        );
                    })}
                </motion.div>
            </motion.div>
        </motion.section >
    );
};

export default HeadOfficersSection;
