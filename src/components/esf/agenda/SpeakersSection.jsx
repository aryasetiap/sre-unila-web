import SpeakerCard from "./SpeakerCard";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const speakers = [
    {
        image: "/assets/esf/agenda/speaker-lucio.png",
        name: "Lucio Larano",
        title: "Founder and owner Flame of Hope Construction Services",
    },
    {
        image: "/assets/esf/agenda/speaker-emmy.png",
        name: "Emmy Yuniarti Rusadi, S.T., M.Eng.",
        title: "Researcher, Author, and Socioedupreneur",
    },
    {
        image: "/assets/esf/agenda/speaker-irene.jpg",
        name: "Dr. Phil. in Eng. Irene Sondang Fitritinti",
        title:
            "Researcher for Urban and Regional Resilience, Disaster Risk Reduction, Climate Change Adaption, Social Protection and Disaster Management.",
    },
    {
        image: "/assets/esf/agenda/speaker-ali.jpeg",
        name: "Ir. Ali Awaludin, S.T., M.Eng., Ph.D., IPU, ASEAN.Eng",
        title: "Civil and Environmental Engineering Lecturer at Gadjah Mada University",
    },
    {
        image: "/assets/esf/agenda/speaker-hengky.png",
        name: "Dr. Hengky Mayaguezz, S.Pi.",
        title: "Department of Marine and Fisheries Lecturer at University of Lampung",
    },
    {
        image: "/assets/esf/agenda/speaker-fitri.jpg",
        name: "Fitri Yelli S.P.,M.Si.Ph.D",
        title: "Agrotechnology Lecturer at University of Lampung",
    },
    {
        image: "/assets/esf/agenda/speaker-siti.png",
        name: "Siti Nurul Khotimah, S. T., M. Sc",
        title: "Environment Engineering Lecturer at University of Lampung",
    },
    {
        image: "/assets/esf/agenda/speaker-rahma.png",
        name: "Rahma Yanda, S.Si., M.Eng",
        title: "Integrated Water Resources Management Lecturer at Institute Technology of Sumatera",
    },
    {
        image: "/assets/esf/agenda/speaker-wiratni.jpg",
        name: "Prof. Ir. Wiratni Budhijanto, PhD, IPM",
        title: "The 39 Most Powerful Female Engineers of 2018 Business Insider Version.",
    },
    {
        image: "/assets/esf/agenda/speaker-udin.jpg",
        name: "Prof. Dr. Eng. Ir. Udin Hasanudin, M.T",
        title: "Agricultural Engineering Lecturer at University of Lampung.",
    },
    {
        image: "/assets/esf/agenda/speaker-amrizal.jpg",
        name: "Prof. Dr. Amrizal, S.T., M.T",
        title: "Researcher and lecturer who focuses on Mechanical Engineering, biomass energy, and solar photovoltaic",
    },
    {
        image: "/assets/esf/agenda/speaker-fuad.jpg",
        name: "Fuad Abdulgani, S.Sos., M.A",
        title: "Sociology Studies Lecturer at University of Lampung.",
    },
    {
        image: "/assets/esf/agenda/speaker-fikri.jpg",
        name: "Fikri Alami, S. T., M. Sc., M. Phil.",
        title: "Environment Engineering Lecturer at University of Lampung.",
    },
    {
        image: "/assets/esf/agenda/speaker-erna.png",
        name: "Dra. Dr. Erna Rochana, M.Si",
        title: "Water Governance Lecturer at Institute Technology of Sumatera",
    },
    {
        image: "/assets/esf/agenda/speaker-handoyo.jpg",
        name: "Dr. Handoyo S.Si., M.T",
        title: "Geophysics Engineering Lecturer at Institute Technology of Sumatera",
    },
    {
        image: "/assets/esf/agenda/speaker-annisa.jpg",
        name: "Annisa Maharani",
        title: "Program Officer of Toxics and Zero Waste Program, Nexus3 Foundation.",
    },
    {
        image: "/assets/esf/agenda/default.avif",
        name: "Cooming Soon",
        title: "",
    },
    {
        image: "/assets/esf/agenda/default.avif",
        name: "Cooming Soon",
        title: "",
    },
];

const SpeakersSection = () => {
    const navigate = useNavigate();
    const [showAll, setShowAll] = useState(false);

    const visibleSpeakers = showAll ? speakers : speakers.slice(0, 6);

    return (
        <section className="py-16 px-4 md:px-12 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D6935] mb-12">
                SPEAKERS
            </h2>

            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
                <AnimatePresence>
                    {visibleSpeakers.map((speaker, index) => (
                        <motion.div
                            key={index}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="h-full flex flex-col"
                        >
                            <SpeakerCard {...speaker} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <div className="mt-8 text-center">
                <motion.button
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-800 transition"
                    onClick={() => setShowAll(!showAll)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {showAll ? "SEE LESS" : "SEE MORE"}
                </motion.button>
            </div>
        </section>
    );
};



export default SpeakersSection;
