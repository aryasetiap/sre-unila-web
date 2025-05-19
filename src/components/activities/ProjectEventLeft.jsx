import React from "react";

const ProjectEventLeft = ({
    title = "TITLE",
    subtitle = "SUBTITLE",
    imageSrc,
    imageAlt,
    textLeft = true,
    textContent,
    backgroundColor = "#F9F6EE",
    textColor = "#0E946D",
}) => {
    return (
        <section className="mt-16 sm:mt-24 px-4 sm:px-8 lg:px-12 xl:px-16" style={{ backgroundColor }}>
            <div
                className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center ${textLeft ? "" : "lg:flex-row-reverse"
                    }`}
            >
                {/* Gambar dan Judul */}
                <div className="relative">
                    {/* Teks di atas gambar */}
                    <h2
                        className="absolute -top-4 sm:-top-6 md:-top-8 lg:-top-10 left-3 sm:left-4 md:left-5 z-10 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight"
                        style={{ color: textColor }}
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

                {/* Teks Deskripsi */}
                <div className="text-gray-800 text-justify  lg:text-xl xl:text-2xl leading-relaxed text-lg sm:text-xl md:text-2xl">
                    {textContent}
                </div>
            </div>
        </section>
    );
};

export default ProjectEventLeft;
