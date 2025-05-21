import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Card = ({ image, name, title, index }) => (
    <motion.div
        className="p-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
    >
        <img className="h-72 w-48 rounded-xl mx-auto mb-4 object-cover" src={image} alt={name} />
        <h3 className="max-w-md mx-auto text-2xl font-bold">{name}</h3>
        <p className="max-w-md mx-auto text-gray-600">{title}</p>
    </motion.div>
);

const SpeakersSection = () => {
    const speakers = [
        {
            name: 'Lucio Larano',
            title: 'Founder, Hope Construction Service, Philippines',
            image: '/assets/esf/home/speaker-lucio.png'
        },
        {
            name: 'Emmy Yuniarti Rusadi, S.T., M.Eng',
            title: 'Researcher, Author, and Sociopreneur',
            image: '/assets/esf/home/speaker-emmy.png'
        },
        {
            name: 'Dr. Phil. in Eng. Irene Sondang Fitriinit',
            title: 'Urban and Regional Resilience Researcher',
            image: '/assets/esf/home/speaker-irene.jpg'
        },
        {
            name: 'Ir. Ali Awaludin, S.T., M.Eng., Ph.D., IPU, ACPE',
            title: 'Lecturer at the Faculty of Engineering, Gadjah Mada University',
            image: '/assets/esf/home/speaker-ali.jpeg'
        },
        {
            name: 'Dr. Hengky Mayaguezz, S.Pi., M.T',
            title: 'Lecturer at Department of Marine and Fishery, University of Lampung',
            image: '/assets/esf/home/speaker-hengky.png'
        },
    ];

    return (
        <section className="bg-[#FBFCF7] py-8 text-[#1D6935]">
            <motion.div
                className="container mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <h2 className="text-[#1D6935] text-4xl font-bold text-center mb-8">
                    With Global Speakers
                </h2>

                {/* Desktop & Tablet grid */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <Card key={index} index={index} {...speaker} />
                    ))}
                </div>

                {/* Mobile slider */}
                <div className="md:hidden">
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={1.2}
                        centeredSlides={true}
                    >
                        {speakers.map((speaker, index) => (
                            <SwiperSlide key={index}>
                                <Card index={index} {...speaker} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="text-center mt-8">
                    <motion.button
                        className="bg-green-500 text-white py-2 px-8 rounded-4xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            document.getElementById("agenda")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        SEE MORE
                    </motion.button>
                </div>
            </motion.div>
        </section>
    );
};

export default SpeakersSection;
