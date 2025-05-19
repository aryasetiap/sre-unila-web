import React from "react";
import { motion } from "framer-motion";

const ProjectEventLeft = ({
    title = "TITLE",
    subtitle = "SUBTITLE",
    imageSrc,
    imageAlt,
    textLeft = true,
    textContent,
    backgroundColor = "#F9F6EE",
    textColor = "#0E946D",
}) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 sm:mt-24 px-4 sm:px-8 lg:px-12 xl:px-16"
            style={{ backgroundColor }}
        >
            <div
                className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${textLeft ? "" : "lg:flex-row-reverse"
                    }`}
            >
                {/* Gambar dan Judul */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Teks di atas gambar */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute -top-4 sm:-top-6 md:-top-8 lg:-top-10 left-3 sm:left-4 md:left-5 z-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight"
                        style={{ color: textColor }}
                    >
                        <span className="block">{title}</span>
                        <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{subtitle}</span>
                    </motion.h2>

                    {/* Gambar */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </motion.div>

                {/* Teks Deskripsi */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-gray-800 text-justify lg:text-xl xl:text-2xl leading-relaxed text-lg sm:text-xl md:text-2xl"
                >
                    {textContent}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectEventLeft;
