import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="font-sans w-full">
      <Hero />

      {/* About Section */}
      {/* <section className="px-6 py-20 bg-white text-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-green-600 font-bold text-3xl mb-4">
            ABOUT SRE UNILA
          </h2>
          <p className="text-lg mb-4">
            <strong>Society of Renewable Energy (SRE)</strong> is a student-led
            organization that empowers youth to take part in the transition
            toward clean and renewable energy.
          </p>
          <p className="text-lg">
            <strong>SRE Universitas Lampung</strong>, established in 2023, is
            the first and only SRE chapter in Lampung. We strive to raise
            awareness, drive innovation, and lead real-world renewable energy
            projects to support a sustainable future for Indonesia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-green-500 text-white p-4 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2">OUR GOALS</h3>
              <p>
                The world is shifting toward sustainability, especially in
                energy. In Indonesia, public and student awareness of renewable
                energy remains very low.
              </p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2">OUR MISSIONS</h3>
              <p>
                We want to help students understand renewable energy better by
                giving them real project and research experiences. We also
                support them in creating new, sustainable solutions, and
                encourage teamwork with experts, government, industry, and
                media.
              </p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-2xl shadow-md">
              <h3 className="font-bold text-lg mb-2">OUR VISIONS</h3>
              <p>
                Accelerating Indonesia’s Energy Transition through the inclusive
                empowerment of youth and multi-institutional collaboration.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Indonesia Map Section */}
      {/* <section className="bg-green-600 text-white px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-6">
            SRE Student Chapter in Indonesia
          </h3>
          <p className="mb-6">
            Currently, there are 58 universities that actively have SRE
            organizations. Specifically for Lampung Province, there is currently
            only 1 active SRE, namely SRE UNILA.
          </p>
          <img
            src="/map-indonesia.png"
            alt="Map SRE Indonesia"
            className="mx-auto max-w-md"
          />
        </div>
      </section> */}

      {/* Activities Section */}
      {/* <section className="bg-white text-gray-900 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-green-600 mb-12">
            WHAT WE DO AT SRE UNILA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/activity1.jpg"
                alt="Solar PV"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-green-600 mb-2">
                  SOLAR PV INSTALLATION
                </h4>
                <p className="text-sm">
                  SRE UNILA installed solar panels in Ulu Belu with Pertamina
                  Geothermal; the ongoing project helps provide electricity to
                  locals.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/activity2.jpg"
                alt="Biomass"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-green-600 mb-2">
                  BIOMASS PROJECT
                </h4>
                <p className="text-sm">
                  A core project aims to implement Waste to Energy, producing
                  renewable energy with support from experts and companies from
                  various countries.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/activity3.jpg"
                alt="Biomass"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-green-600 mb-2">
                  BIOMASS PROJECT
                </h4>
                <p className="text-sm">
                  A core project aims to implement Waste to Energy, producing
                  renewable energy with support from experts and companies from
                  various countries.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <img
                src="/activity4.jpg"
                alt="Mangrove"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4 className="font-bold text-green-600 mb-2">
                  MANGROVE PLANTING
                </h4>
                <p className="text-sm">
                  A mangrove planting event in Pulau Pasaran was held with BPDAS
                  KLHK, involving academic and government communities.
                </p>
              </div>
            </div>
          </div>
          <button className="mt-8 bg-green-500 text-white px-6 py-2 rounded-full">
            SEE MORE
          </button>
        </div>
      </section> */}

      {/* Footer */}
      {/* <footer className="bg-green-700 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">SRE</h3>
            <p>Lampung University</p>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <span>sre.unila@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>(+62) 858 4014 8352</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaInstagram />
              <span>@sre.unila</span>
            </div>
            <div>SRE University of Lampung</div>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
