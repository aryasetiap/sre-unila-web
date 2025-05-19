import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import InfoCard from './InfoCard';

const AboutSection = () => {
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
            className="bg-[#F9F6EE] text-gray-800 py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20"
        >
            {/* Header Gradient dengan Animasi Scroll */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-4 sm:px-6 py-4 md:py-6"
            >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                    SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
                </h1>
            </motion.div>

            {/* About SRE Unila dengan Animasi Scroll */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.3 }}
                className="mt-8 sm:mt-10 mb-12 sm:mb-16 md:flex md:items-start md:justify-between"
            >
                <div className="mb-6 md:mb-0">
                    <h2 className="text-[#0F926C] text-3xl sm:text-4xl md:text-5xl font-extrabold text-center md:text-left">
                        ABOUT <br />
                        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">SRE UNILA</span>
                    </h2>
                    <div className="w-32 sm:w-48 md:w-64 h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full mx-auto md:mx-0"></div>
                </div>
                <div className="md:w-2/3 text-lg sm:text-xl md:text-2xl">
                    <p className="mb-4">
                        <strong className="text-[#0F926C]">Society of Renewable Energy (SRE)</strong> is a student-led organization that empowers youth to take part in the transition toward clean and renewable energy.
                    </p>
                    <p>
                        <strong className="text-[#0F926C]">SRE Universitas Lampung,</strong> established in 2023, is the first and only SRE chapter in Lampung. We strive to raise awareness, drive innovation, and lead real-world renewable energy projects to support a sustainable future for Indonesia.
                    </p>
                </div>
            </motion.div>

            {/* Goals, Missions, Visions dengan Animasi Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            >
                {/* Kiri: Goals dan Visions */}
                <div className="flex flex-col gap-8 md:gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <InfoCard
                            title="OUR GOALS"
                            content="The world is shifting toward sustainability, especially in energy. In Indonesia, public and student awareness of renewable energy remains very low."
                            gradient="bg-gradient-to-b from-[#0E906A] to-[#0FB484]"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isVisible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <InfoCard
                            title="OUR VISIONS"
                            content="Accelerating Indonesia's Energy Transition through the inclusive empowerment of youth and multi-institutional collaboration."
                            gradient="bg-gradient-to-b from-[#0E906A] to-[#0FB484]"
                        />
                    </motion.div>
                </div>

                {/* Kanan: Missions full height */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <InfoCard
                        title="OUR MISSIONS"
                        content="We want to help students understand renewable energy better by giving them real project and research experiences. We also support them in creating new, sustainable solutions, and encourage teamwork with experts, government, industry, and media. Our goal is to build a strong youth network that supports Indonesia’s shift to clean energy."
                        gradient="bg-gradient-to-b from-[#0E906A] to-[#0FB484]"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
