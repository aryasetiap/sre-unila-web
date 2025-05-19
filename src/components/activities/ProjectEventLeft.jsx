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
        <section className={`py-24 px-6`} style={{ backgroundColor }}>
            <div
                className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center ${textLeft ? "" : "md:flex-row-reverse"
                    }`}
            >
                {/* Gambar dan Judul */}
                <div className="relative">
                    {/* Teks di atas gambar */}
                    <h2
                        className="absolute -top-16 left-5 z-10 text-6xl md:text-6xl font-extrabold leading-none text-outline-2"
                        style={{ color: textColor }}
                    >
                        <span className="block">{title}</span>
                        <span className="block">{subtitle}</span>
                    </h2>

                    {/* Gambar */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg"
                    />
                </div>

                {/* Teks Deskripsi */}
                <div className="text-gray-800 text-justify font-semibold md:text-base leading-relaxed">
                    {textContent}
                </div>
            </div>
        </section>
    );
};

export default ProjectEventLeft;
