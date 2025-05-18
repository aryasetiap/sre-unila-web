import React from 'react'
import IndonesianMap from '../assets/indonesia-map-sre.png'

const IndonesianMapSection = () => {
    return (
        <section className="flex flex-col items-center bg-gradient-to-b from-[#0FB484] to-[#0E906A] pt-16 pb-10 px-6 md:px-20 text-white text-center">
            <div className='w-full'>
                <h2 className=" text-start text-4xl md:text-4xl font-extrabold mb-4">
                    SRE Student Chapter in Indonesia
                </h2>
                <p className="text-2xl text-start mb-10 max-w-2xl">
                    Currently, there are 58 universities that actively have SRE organizations. Specifically for Lampung Province, there is currently only 1 active SRE, namely <strong>SRE UNILA</strong>.
                </p>
            </div>

            <img
                src={IndonesianMap}
                alt="Map of SRE Chapters in Indonesia"
                className="w-full"
            />
        </section>

    )
}

export default IndonesianMapSection