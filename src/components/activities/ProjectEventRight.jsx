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
        <section className="py-8 sm:py-12 my-8 sm:my-12 px-4 sm:px-6 rounded-2xl" style={{ backgroundColor }}>
            <div
                className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${textLeft ? "" : "md:flex-row-reverse"
                    }`}
            >
                {/* Teks Deskripsi */}
                <div className="text-white text-justify font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    {textContent}
                </div>

                {/* Gambar dan Judul */}
                <div className="relative mt-8 sm:mt-12">
                    {/* Teks di atas gambar */}
                    <h2
                        className="text-right absolute -top-10 sm:-top-16 right-4 sm:right-5 z-10 font-extrabold leading-none"
                        style={{
                            fontSize: "clamp(2rem, 4vw, 4rem)",
                            color: textColor
                        }}
                    >
                        <span className="block">{title}</span>
                        <span className="block">{subtitle}</span>
                    </h2>

                    {/* Gambar */}
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="rounded-lg shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectEventRight;
