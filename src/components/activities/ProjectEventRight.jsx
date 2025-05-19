import React from "react";
import { motion } from "framer-motion";

const ProjectEventRight = ({
    title = "TITLE",
    subtitle = "SUBTITLE",
    imageSrc,
    imageAlt,
    textLeft = false,
    textContent,
    backgroundColor = "#0E946D",
    textColor = "#F9F6EE",
}) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-8 sm:py-12 md:py-16 lg:py-20 my-8 sm:my-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-2xl"
            style={{ backgroundColor }}
        >
            <div
                className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${textLeft ? "" : "lg:flex-row-reverse"
                    }`}
            >
                {/* Teks Deskripsi */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white text-justify lg:text-xl xl:text-2xl leading-relaxed text-lg sm:text-xl md:text-2xl"
                >
                    {textContent}
                </motion.div>

                {/* Gambar dan Judul */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12"
                >
                    {/* Teks di atas gambar */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-right absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 right-3 sm:right-4 md:right-5 z-10 font-extrabold leading-none"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 4.2rem)",
                            color: textColor
                        }}
                    >
                        <span className="block">{title}</span>
                        <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{subtitle}</span>
                    </motion.h2>

                    {/* Gambar */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectEventRight;
