import React from "react";

const articles = [
    { id: 11, image: "/assets/wedpaper/wedpaper11.png" },
    { id: 10, image: "/assets/wedpaper/wedpaper10.jpg" },
    { id: 9, image: "/assets/wedpaper/wedpaper9.jpg" },
    { id: 8, image: "/assets/wedpaper/wedpaper8.jpg" },
    { id: 7, image: "/assets/wedpaper/wedpaper7.jpg" },
    { id: 6, image: "/assets/wedpaper/wedpaper6.jpg" },
    { id: 5, image: "/assets/wedpaper/wedpaper5.jpg" },
    { id: 4, image: "/assets/wedpaper/wedpaper4.jpg" },
    { id: 3, image: "/assets/wedpaper/wedpaper3.jpg" },
    { id: 2, image: "/assets/wedpaper/wedpaper2.jpg" },
    { id: 1, image: "/assets/wedpaper/wedpaper1.jpg" },
];

const ArticlesSection = () => {
    return (
        <section className="bg-gradient-to-t from-[#2ac393] to-[#0e916b] text-white py-16 rounded-[64px]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-6xl font-extrabold text-left mb-6">
                    LATEST ARTICLE
                </h2>
                <p className="text-left mb-8 text-3xl w-2/4">
                    New ideas drop every week. Discover our WEDPAPER series on
                    <span className="font-bold">@sre.unila</span>.
                </p>
                <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article) => (
                        <div key={article.id} className="px-4 bg-[#F9F6EE] rounded-3xl">
                            <div className="flex items-center justify-start rounded-lg pt-4 pb-2 gap-4">
                                <img src="/assets/wedpaper/logo.png" alt="logo-sre" />
                                <p className="font-semibold text-black">sre.unila</p>
                            </div>
                            <img
                                src={article.image}
                                alt={article.title}
                                className="w-full rounded-lg shadow-lg"
                            />
                            <div className="flex flex-col py-4 gap-2">
                                <div className="flex gap-2 items-center justify-start">
                                    <img src="/assets/wedpaper/heart.png" alt="" />
                                    <img src="/assets/wedpaper/comment.png" alt="" />
                                    <img src="/assets/wedpaper/plane.png" alt="" />
                                </div>
                                <p className="text-black"><span className="font-bold">sre.unila</span> [WEDPAPER #{article.id}]</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 text-center">
                <a
                    href="https://www.instagram.com/sre.unila"
                    target="_blank"
                    className="font-bold bg-white text-black px-12 py-3 rounded-full hover:bg-gray-200 transition"
                >
                    SEE MORE
                </a>
            </div>
        </section>
    );
};

export default ArticlesSection;
