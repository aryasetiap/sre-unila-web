import React from 'react';

const Card = ({ image, name, title }) => (
    <div className="p-6 text-center">
        <img className="h-72 w-48 rounded-xl mx-auto mb-4 object-cover" src={image} alt={name} />
        <h3 className="max-w-md mx-auto text-2xl font-bold">{name}</h3>
        <p className="max-w-md mx-auto text-gray-600">{title}</p>
    </div>
);

const SpeakersSection = () => {
    const speakers = [
        {
            name: 'Lucio Larano',
            title: 'Founder, Hope Construction Service, Philippines',
            image: '/assets/esf/home/speaker-lucio.png' // Ganti dengan URL gambar asli
        },
        {
            name: 'Emmy Yuniarti Rusadi, S.T., M.Eng',
            title: 'Researcher, Author, and Sociopreneur',
            image: '/assets/esf/home/speaker-emmy.png'
        },
        {
            name: 'Dr. Phil. in Eng. Irene Sondang Fitriinit',
            title: 'Urban and Regional Resilience Researcher',
            image: '/assets/esf/home/speaker-irene.jpg'
        },
        {
            name: 'Ir. Ali Awaludin, S.T., M.Eng., Ph.D., IPU, ACPE',
            title: 'Lecturer at the Faculty of Engineering, Gadjah Mada University',
            image: '/assets/esf/home/speaker-ali.jpeg'
        },
        {
            name: 'Dr. Hengky Mayaguezz, S.Pi., M.T',
            title: 'Lecturer at Department of Marine and Fishery, University of Lampung',
            image: '/assets/esf/home/speaker-hengky.png'
        },
    ];

    return (
        <section className="bg-[#FBFCF7] py-8 text-[#1D6935]">
            <div className="container mx-auto">
                <h2 className="text-[#1D6935] text-4xl font-bold text-left mb-8">With Global Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <Card key={index} {...speaker} />
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        className="bg-green-500 text-white py-2 px-8 rounded-4xl"
                        onClick={() => document.getElementById("agenda").scrollIntoView({ behavior: "smooth" })}
                    >
                        SEE MORE
                    </button>
                </div>
            </div>
        </section>
    );

};

export default SpeakersSection;
