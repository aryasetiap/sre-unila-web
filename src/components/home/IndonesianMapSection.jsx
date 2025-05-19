import React from 'react';

const IndonesianMapSection = () => {
    return (
        <section className="bg-gradient-to-b from-[#0FB484] to-[#0E906A] py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20 text-white text-center">
            <div className="w-full">
                <h2 className="text-start text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                    SRE Student Chapter in Indonesia
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-start mb-10 max-w-2xl">
                    Currently, there are 58 universities that actively have SRE organizations. Specifically for Lampung Province, there is currently only 1 active SRE, namely <strong>SRE UNILA</strong>.
                </p>
            </div>
            <img src="/assets/indonesia-map-sre.png" alt="Map of SRE Chapters in Indonesia" className="w-full max-w-[90%] md:max-w-full" />
        </section>
    );
};

export default IndonesianMapSection;
