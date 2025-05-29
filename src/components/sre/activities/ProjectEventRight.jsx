import React from "react";
import { motion } from "framer-motion";

const ProjectEventRight = ({
    title = "TITLE",
    subtitle = "SUBTITLE",
    imageSrc,
    imageAlt,
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
            className="py-6 md:py-10 px-4 sm:px-8 lg:px-12 xl:px-16 rounded-2xl"
            style={{ backgroundColor }}
        >
            {/* Teks di atas gambar */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="sm:-top-6 md:-top-8 lg:-top-10 left-3 sm:left-4 md:left-5 z-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-right"
                style={{
                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                    fontSize: "clamp(1.8rem, 4vw, 4.2rem)",
                    color: textColor
                }}
            >
                <span className="block">{title}</span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{subtitle}</span>
            </motion.h2>

            <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                {/* Gambar di atas pada mobile, kanan pada desktop */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative  order-1 lg:order-2"
                >
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        viewport={{ once: true }}
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg w-full"
                    />
                </motion.div>

                {/* Teks di bawah pada mobile, kiri pada desktop */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white text-justify lg:text-xl xl:text-2xl leading-relaxed text-lg sm:text-xl md:text-2xl order-2 lg:order-1"
                >
                    {textContent}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectEventRight;
