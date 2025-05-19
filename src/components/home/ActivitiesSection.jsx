import React from 'react';
import ActivityCard from '../ActivityCard';

const activities = [
    {
        imageSrc: '/assets/activities/sre-pv.png',
        altText: 'Solar PV Installation',
        title: 'SOLAR PV INSTALLATION',
        description: 'SRE UNILA installed solar panels in Ulu Belu with Pertamina Geothermal; the ongoing project helps provide electricity to locals.'
    },
    {
        imageSrc: '/assets/activities/sre-biomass.png',
        altText: 'Biomass Project',
        title: 'BIOMASS PROJECT',
        description: 'A core project aims to implement Waste to Energy, producing renewable energy with support from experts, investors, and companies from Indonesia, Europe, and the Philippines.'
    },
    {
        imageSrc: '/assets/activities/sre-mangrove.png',
        altText: 'Mangrove Planning',
        title: 'MANGROVE PLANNING',
        description: 'A mangrove planting event in Pulau Pasaran was held with BPDAS KLHK, involving government and academic communities to address coastal issues in Bandar Lampung.'
    }
];

const ActivitiesSection = () => {
    return (
        <section className="bg-[#F9F6EE] py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-20 text-center">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-700 mb-8">
                    WHAT WE DO AT SRE UNILA
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {activities.map((activity, index) => (
                        <ActivityCard key={index} {...activity} />
                    ))}
                </div>

                <div className="mt-10">
                    <a
                        href="/activities"
                        className="bg-emerald-500 text-white text-lg sm:text-xl md:text-2xl font-semibold px-6 py-3 rounded-full hover:bg-emerald-600 transition"
                    >
                        SEE MORE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
