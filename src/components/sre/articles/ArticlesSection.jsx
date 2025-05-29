import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const articles = [
    { id: 11, image: "/assets/wedpaper/wedpaper11.png", link: "https://www.instagram.com/p/DJozyIozLLv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 10, image: "/assets/wedpaper/wedpaper10.jpg", link: "https://www.instagram.com/p/DJW50UWTLJg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 9, image: "/assets/wedpaper/wedpaper9.jpg", link: "https://www.instagram.com/p/DI2mVazz4Pm/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 8, image: "/assets/wedpaper/wedpaper8.jpg", link: "https://www.instagram.com/p/DHh9ib2Je3L/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 7, image: "/assets/wedpaper/wedpaper7.jpg", link: "https://www.instagram.com/p/DHFOv9CTThE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 6, image: "/assets/wedpaper/wedpaper6.jpg", link: "https://www.instagram.com/p/DDhmVNcTvzK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 5, image: "/assets/wedpaper/wedpaper5.jpg", link: "https://www.instagram.com/p/DDPUzZnzyFN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 4, image: "/assets/wedpaper/wedpaper4.jpg", link: "https://www.instagram.com/p/DC4P85GStuv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 3, image: "/assets/wedpaper/wedpaper3.jpg", link: "https://www.instagram.com/p/DCmYbsbztpr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 2, image: "/assets/wedpaper/wedpaper2.jpg", link: "https://www.instagram.com/p/C_z52RkpEp2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 1, image: "/assets/wedpaper/wedpaper1.jpg", link: "https://www.instagram.com/p/C-7iADWTH48/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
    { id: 0, image: "/assets/wedpaper/more.png", link: "https://www.instagram.com/sre.unila/" }
];


const ArticlesSection = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-t from-[#2ac393] to-[#0e916b] text-white py-12 sm:py-16 rounded-4xl"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl font-extrabold text-left mb-6"
                >
                    LATEST ARTICLE
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-left mb-6 sm:mb-8 text-xl sm:text-3xl w-full sm:w-2/4"
                >
                    New ideas drop every week. Discover our WEDPAPER series on
                    <span className="font-bold">@sre.unila</span>.
                </motion.p>

                {/* Grid hanya untuk layar besar */}
                <div className="hidden sm:block">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <a
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: article.id * 0.1 }}
                                    key={article.id}
                                    className="px-4 bg-[#F9F6EE] rounded-3xl"
                                >
                                    <div className="flex items-center justify-start rounded-lg pt-4 pb-2 gap-4">
                                        <img src="/assets/wedpaper/logo.png" alt="logo-sre" />
                                        <p className="font-semibold text-black">sre.unila</p>
                                    </div>
                                    <img
                                        src={article.image}
                                        alt={`WEDPAPER #${article.id}`}
                                        className="w-full rounded-lg shadow-lg"
                                    />
                                    <div className="flex flex-col py-4 gap-2">
                                        <div className="flex gap-2 items-center justify-start">
                                            <img src="/assets/wedpaper/heart.png" alt="" />
                                            <img src="/assets/wedpaper/comment.png" alt="" />
                                            <img src="/assets/wedpaper/plane.png" alt="" />
                                        </div>
                                        <p className="text-black">
                                            <span className="font-bold">sre.unila</span> [WEDPAPER #{article.id}]
                                        </p>
                                    </div>
                                </motion.div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Carousel hanya untuk layar kecil */}
                <div className="block sm:hidden">
                    <Swiper modules={[Pagination]} spaceBetween={16} slidesPerView={1.2}>
                        {articles.map((article) => (
                            <SwiperSlide key={article.id}>
                                <a
                                    href={article.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: article.id * 0.1 }}
                                        className="px-4 bg-[#F9F6EE] rounded-3xl"
                                    >
                                        <div className="flex items-center justify-start rounded-lg pt-4 pb-2 gap-4">
                                            <img src="/assets/wedpaper/logo.png" alt="logo-sre" />
                                            <p className="font-semibold text-black">sre.unila</p>
                                        </div>
                                        <img
                                            src={article.image}
                                            alt={`WEDPAPER #${article.id}`}
                                            className="w-full rounded-lg shadow-lg"
                                        />
                                        <div className="flex flex-col py-4 gap-2">
                                            <div className="flex gap-2 items-center justify-start">
                                                <img src="/assets/wedpaper/heart.png" alt="" />
                                                <img src="/assets/wedpaper/comment.png" alt="" />
                                                <img src="/assets/wedpaper/plane.png" alt="" />
                                            </div>
                                            <p className="text-black">
                                                <span className="font-bold">sre.unila</span> [WEDPAPER #{article.id}]
                                            </p>
                                        </div>
                                    </motion.div>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <div className="mt-12 sm:mt-16 text-center">
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    href="https://www.instagram.com/sre.unila"
                    target="_blank"
                    className="font-bold bg-white text-black px-8 sm:px-12 py-2 sm:py-3 rounded-full hover:bg-gray-200 transition"
                >
                    SEE MORE
                </motion.a>
            </div>
        </motion.section>
    );
};

export default ArticlesSection;
