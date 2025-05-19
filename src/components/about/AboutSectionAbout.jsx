// src/components/AboutSection.jsx
import React from 'react';
import InfoCard from '../InfoCard';

const AboutSectionAbout = () => {
    return (
        <section className="bg-[#F9F6EE] text-gray-800 pt-16 px-6 md:px-20">
            {/* Header Gradient */}
            <div className="w-full bg-gradient-to-r from-[#2ac393] to-[#0e916b] rounded-2xl shadow-lg px-6 py-4 inline-block">
                <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
                    SOCIETY OF <span className="block">RENEWABLE ENERGY</span>
                </h1>
            </div>

            {/* About SRE Unila */}
            <div className="my-10 md:flex md:items-start md:justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-[#0F926C] text-6xl font-extrabold">
                        ABOUT <br />
                        SRE UNILA
                    </h2>
                </div>
                <div className="md:w-2/3 text-2xl">
                    <p className="mb-4">
                        <strong className='text-[#0F926C]'>Society of Renewable Energy (SRE)</strong> is a student organization dedicated to developing the interests and skills of Indonesian students in the field of renewable energy.
                    </p>
                    <p>
                        This organization was first formed by ITB students with the aim of increasing student interest and awareness of new and renewable energy based on the number of students who are still unfamiliar with new and renewable energy. And currently, SRE has spread across 58 universities in Indonesia.
                    </p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"></div>

            {/* Our Goals */}
            <div className="my-10 md:flex md:items-start md:justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-[#0F926C] text-6xl font-extrabold">
                        OUR <br />
                        GOALS
                    </h2>
                </div>
                <div className="md:w-2/3 text-2xl">
                    <p className="mb-4">
                        Currently, the world is undergoing a transition towards <strong className='text-[#0F926C]'>sustainable development, particularly in the energy sector.</strong> In Indonesia, we understand that awareness of the use of Renewable Energy is very low, both among the general public and students.
                    </p>
                    <p>
                        Starting from that gap, SRE is committed to <strong className='text-[#0F926C]'>spreading education and raising awareness about the use of new renewable energy</strong> through various activities and events as tools, with students from 51 universities in Indonesia as the executors. Until now, dozens of solar PV electricity access points have been installed throughout Indonesia through various SRE collaboration programs. Thus, we are here as a solution to achieve equitable and sustainable development.
                    </p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"></div>

            {/* Our Vision */}
            <div className="my-10 md:flex md:items-start md:justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-[#0F926C] text-6xl font-extrabold">
                        OUR <br />
                        VISION
                    </h2>
                </div>
                <div className="md:w-2/3 text-2xl">
                    <p className="mb-4">
                        <strong className='text-[#0F926C]'>Accelerating Indonesia's Energy Transition</strong> through the inclusive empowerment of youth and multi-institutional collaboration.
                    </p>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"></div>

            {/* Our Mission */}
            <div className="my-10 md:flex md:items-start md:justify-between">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-[#0F926C] text-6xl font-extrabold">
                        OUR <br />
                        MISSIONS
                    </h2>
                </div>
                <div className="md:w-2/3 text-2xl">
                    <ul className='mb-4 list-disc *:marker:text-[#0F926C]'>
                        <li className="mb-2"><strong className='text-[#0F926C]'>Increasing students' awareness</strong> and understanding of renewable energy and sustainability issues.</li>
                        <li className="mb-2"><strong className='text-[#0F926C]'>Providing opportunities for students</strong> to engage directly in practical projects and research in the field of renewable energy.</li>
                        <li className="mb-2"><strong className='text-[#0F926C]'>Encouraging the creation and development</strong> of sustainable innovative solutions in the field of renewable energy by students.</li>
                        <li className="mb-2"><strong className='text-[#0F926C]'>Facilitating collaboration among students,</strong> academics, government, industry, society, and media to support the development of renewable energy in Indonesia.</li>
                        <li><strong className='text-[#0F926C]'>Building a strong and dedicated youth network</strong> to support the national energy transformation that is environmentally friendly.</li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-[#0F926C] to-[#ffffff] mt-2 rounded-full"></div>
        </section>
    );
};

export default AboutSectionAbout;
