import React from "react";

const officers = [
    {
        name: "M. RIZQY PUTRA L.",
        role: "BoD of Public Relation",
        image: "/assets/staff/rizky.png",
    },
    {
        name: "MUHAMMAD ALGIFARI",
        role: "BoD Creative Media",
        image: "/assets/staff/algi.png",
    },
    {
        name: "SILKE SYAHIDAH",
        role: "BoD of Finance",
        image: "/assets/staff/silke.png",
    },
    {
        name: "HEZZA TRIE YONO",
        role: "BoD of Human Resource",
        image: "/assets/staff/hezza.png",
    },
    {
        name: "AKBAR RAMADHANI",
        role: "BoD of Academy",
        image: "/assets/staff/akbar.png",
    },
    {
        name: "GILANG PERMANA",
        role: "BoD of Project",
        image: "/assets/staff/gilang.png",
    },
];

const HeadOfficersSection = () => {
    return (
        <section className="bg-[#F9F6EE] py-12 sm:py-20 px-6 sm:px-20">
            <div className="w-full mx-auto text-center">
                {/* Judul */}
                <h2 className="text-[#0F926C] text-4xl sm:text-6xl font-extrabold mb-4">Head of Departement</h2>
                <div className="w-3/4 sm:w-full h-2 bg-gradient-to-r from-[#0F926C] to-transparent mx-auto mb-10 sm:mb-16 opacity-50" />

                {/* Grid Pejabat */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 justify-items-center">
                    {officers.map((officer, index) => (
                        <div key={index} className="flex flex-col items-center text-black">
                            <div className="w-40 sm:w-52 h-40 sm:h-52 rounded-full overflow-hidden border-2 border-black shadow-lg bg-[#98A49B]">
                                <img
                                    src={officer.image}
                                    alt={officer.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="mt-4 text-xl sm:text-2xl font-extrabold text-center">{officer.name}</h3>
                            <p className="text-lg sm:text-2xl opacity-90">{officer.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeadOfficersSection;
