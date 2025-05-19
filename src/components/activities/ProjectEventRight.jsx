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
        <section className={`py-12 my-12 px-6 rounded-2xl`} style={{ backgroundColor }}>
            <div
                className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center ${textLeft ? "" : "md:flex-row-reverse"
                    }`}
            >
                {/* Teks Deskripsi */}
                <div className="text-white text-justify font-semibold md:text-base leading-relaxed">
                    {textContent}
                </div>

                {/* Gambar dan Judul */}
                <div className="relative mt-12">
                    {/* Teks di atas gambar */}
                    <h2
                        className="text-right absolute -top-16 right-5 z-10 text-4xl md:text-6xl font-extrabold leading-none"
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
            </div>
        </section>
    );
};

export default ProjectEventRight;
