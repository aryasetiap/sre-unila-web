import React from "react";
import { motion } from "framer-motion";

const CompetitionCard = ({
    img,
    title,
    description1,
    description2,
    teamSize,
    deadline,
    registerLink,
    guideBookLink,
}) => {
    return (
        <motion.div
            className="text-[#1D6935] max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <img src={img} alt={title} className="w-full h-auto" />
            <div className="p-6">
                <h2 className="text-2xl sm:text-4xl font-extrabold">{title}</h2>
                <p className="mt-2 font-bold">{description1}</p>
                <p className="mt-2">{description2}</p>
                <p className="mt-8">Open for teams of {teamSize}</p>
                <p className="mt-2">Deadline: {deadline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                    <a href={registerLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-[#55C879] to-[#4CB748] hover:from-[#4CB748] hover:to-[#55C879] text-white px-4 py-2 rounded-md">
                            Register
                        </button>
                    </a>
                    <a href={guideBookLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-[#55C879] to-[#4CB748] hover:from-[#4CB748] hover:to-[#55C879] text-white px-4 py-2 rounded-md">
                            Guide Book
                        </button>
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const LampungSREnovation = () => {
    return (
        <section className="py-12 px-4 bg-[#FBFCF7]">
            <motion.h1
                className="text-3xl sm:text-5xl font-extrabold text-center text-[#1D6935] mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Lampung SREnovation
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CompetitionCard
                    img="/assets/esf/home/hsc.png"
                    title="HIGH SCHOOL COMPETITION"
                    description1="LAMPUNG SRENOVATION FOR HIGH SCHOOL STUDENTS"
                    description2="A national competition for SMA/SMK students to submit innovative essays and present their ideas through infographics and prototypes. The theme focuses on sustainability, digital transformation, and green infrastructure in Lampung."
                    teamSize="2-4 students"
                    deadline="May 27, 2025"
                    registerLink="http://bit.ly/EssayRegistrationLampungSREnovationforSHS"
                    guideBookLink="http://bit.ly/GuidelineLampungSREnovation"
                />
                <CompetitionCard
                    img="/assets/esf/home/uc.png"
                    title="UNIVERSITY COMPETITION"
                    description1="LAMPUNG SRENOVATION FOR UNIVERSITY STUDENTS"
                    description2="Calling all university students across Indonesia! Submit your best ideas to build a sustainable future for Lampung through essay writing, infographic design, and prototype development."
                    teamSize="2-4 students"
                    deadline="May 27, 2025"
                    registerLink="http://bit.ly/EssayRegistrationLampungSREnovationforUNI"
                    guideBookLink="http://bit.ly/GuidelineLampungSREnovation"
                />
            </div>
        </section>
    );
};

export default LampungSREnovation;
