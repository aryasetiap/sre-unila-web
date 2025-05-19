import React from "react";

const officers = [
    {
        name: "IHSANUDDIN FADILLAH",
        role: "President of SRE Lampung",
        image: "/assets/staff/Ihsan.png",
    },
    {
        name: "WIDYA REGITASARI Y.",
        role: "Vice President of SRE Lampung",
        image: "/assets/staff/Widya.png",
    },
];

const MainOfficersSection = () => {
    return (
        <section className="bg-gradient-to-r from-[#2ac393] to-[#0e916b] py-12 sm:py-20 px-6 sm:px-20">
            <div className="w-full mx-auto text-center">
                {/* Judul */}
                <h2 className="text-white text-4xl sm:text-6xl font-extrabold mb-4">Main Officers</h2>
                <div className="w-3/4 sm:w-full h-2 bg-gradient-to-r from-white to-transparent mx-auto mb-10 sm:mb-16 opacity-50" />

                {/* Grid Pejabat */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 justify-items-center">
                    {officers.map((officer, index) => (
                        <div key={index} className="flex flex-col items-center text-white">
                            <div className="w-40 sm:w-64 h-40 sm:h-64 rounded-full overflow-hidden border-2 border-black shadow-lg bg-[#98A49B]">
                                <img
                                    src={officer.image}
                                    alt={officer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-2xl sm:text-4xl font-extrabold text-center">{officer.name}</h3>
                            <p className="text-lg sm:text-2xl opacity-90">{officer.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainOfficersSection;
