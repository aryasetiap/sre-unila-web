import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";

const IndonesianMapSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Animasi mulai saat 20% bagian terlihat
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-gradient-to-b from-[#0FB484] to-[#0E906A] py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20 text-white text-center"
        >
            <div className="w-full">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-start text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
                >
                    SRE Student Chapter in Indonesia
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg sm:text-xl md:text-2xl text-start mb-10 max-w-2xl"
                >
                    Currently, there are 58 universities that actively have SRE organizations. Specifically for Lampung Province, there is currently only 1 active SRE, namely <strong>SRE UNILA</strong>.
                </motion.p>
            </div>

            <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                src="/assets/indonesia-map-sre.png"
                alt="Map of SRE Chapters in Indonesia"
                className="w-full max-w-[90%] md:max-w-full"
            />
        </section>
    );
};

export default IndonesianMapSection;
