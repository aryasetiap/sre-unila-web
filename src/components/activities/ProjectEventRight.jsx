import React from "react";

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
        <section className="py-8 sm:py-12 md:py-16 lg:py-20 my-8 sm:my-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 rounded-2xl" style={{ backgroundColor }}>
            <div
                className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${textLeft ? "" : "lg:flex-row-reverse"
                    }`}
            >
                {/* Teks Deskripsi */}
                <div className="text-white text-justify lg:text-xl xl:text-2xl leading-relaxed text-lg sm:text-xl md:text-2xl">
                    {textContent}
                </div>

                {/* Gambar dan Judul */}
                <div className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    {/* Teks di atas gambar */}
                    <h2
                        className="text-right absolute -top-6 sm:-top-8 md:-top-10 lg:-top-12 right-3 sm:right-4 md:right-5 z-10 font-extrabold leading-none"
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 4.2rem)",
                            color: textColor
                        }}
                    >
                        <span className="block">{title}</span>
                        <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">{subtitle}</span>
                    </h2>

                    {/* Gambar */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectEventRight;
