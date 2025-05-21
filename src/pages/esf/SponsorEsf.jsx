import Navbar from "../../components/esf/NavbarEsf"
import Hero from "../../components/esf/HeroSectionEsf"
import Footer from "../../components/esf/FooterEsf"

const sponsors = [
  { category: "PLATINUM SPONSORS", gradient: "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500" },
  { category: "GOLD SPONSORS", gradient: "bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500" },
  { category: "SILVER SPONSORS", gradient: "bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600" },
  { category: "BRONZE SPONSORS", gradient: "bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500" },
];

const SponsorEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="OUR SPONSORSHIP"
        subtitle="Together, we can build a greener, more sustainable future."
        image='/assets/esf/sponsor/bg-hero-sponsoresf.png'
        tagline="#ReGreentheFuture"
      />

      <section className="bg-white py-12 px-8 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-green-700">SPONSORSHIP</h2>
          <p className="text-gray-700 mt-4 *:text-3xl">
            Sponsoring ESF 2025 is your chance to lead in the sustainability space. Connect with key decision-makers, boost your brand’s visibility, and show your commitment to a greener future. With targeted exposure and strategic partnerships, your impact starts here.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-700">IN COLLAB WITH:</h2>

          <div className="flex justify-center mt-8">
            <img className="h-20" src="/assets/esf/sponsor/logo-lppm.png" alt="Sponsor Logo 1" />
            <img className="h-20 ml-8" src="/assets/esf/sponsor/logo-sdgsunila.png" alt="Sponsor Logo 2" />
          </div>
        </div>
      </section>

      <section className="bg-white w-full pb-12 px-8 md:px-12">
        <div className="p-6 bg-white w-full mx-auto rounded-lg">
          <hr className="border-gray-700 my-3" />
          {sponsors.map((sponsor, index) => (
            <div key={index} className="">
              <h2 className={`text-center my-8 text-4xl font-bold ${sponsor.gradient} bg-clip-text text-transparent`}>
                {sponsor.category}
              </h2>
              <hr className="border-gray-700 my-3" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white w-full pb-12 px-8 md:px-12">
        <div className="bg-green-100 py-12 px-16 rounded-4xl flex justify-between items-start gap-12">
          <h2 className="text-green-700 font-extrabold text-4xl mb-4">COLLABORATOR</h2>
          <div className="grid grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="bg-gray-300 h-36 w-36"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white w-full pb-12 px-8 md:px-12">
        <div className="bg-green-100 py-12 px-16 rounded-4xl flex justify-between items-start gap-12">
          <h2 className="text-green-700 font-extrabold text-4xl mb-4">MEDIA PARTNER</h2>
          <div className="grid grid-cols-5 gap-6">
            {Array.from({ length: 20 }).map((_, index) => (
              <div key={index} className="bg-gray-300 h-36 w-36"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white w-full py-28 px-8 md:px-12 text-black">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Text Section */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-green-700">Exhibitor Booths</h2>
            <p className="text-lg">
              We invite you to participate in ESF 2025 exhibition! You are welcome to get engaged in promoting
              the sustainability causes that your organization believes in and is working on in ESF exhibition.
              To learn more on how to partake in this historic forum, please kindly contact us at
              <span className="block font-semibold">esforum.sreunila@gmail.com</span>
              <span className="block font-semibold">0856 0963 1320 or 0895 6121 78944</span>
            </p>

            {/* Floor Plan */}
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-700">Floor Plan</h3>
              <p className="text-gray-600">Information</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {[
                  { booths: 5, size: "6 x 9 m (54sqm)", color: "bg-[#3F83F8]" },
                  { booths: 4, size: "6 x 6 m (36sqm)", color: "bg-[#B4D334]" },
                  { booths: 7, size: "9 x 3 m (27sqm)", color: "bg-[#4CB748]" },
                  { booths: 12, size: "6 x 3 m (18sqm)", color: "bg-[#1D6935]" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-white shadow-md rounded-md">
                    <div className={`w-8 h-8 rounded-xl ${item.color}`}></div>
                    <div>
                      <p className="text-lg font-semibold">{item.booths} booth</p>
                      <p className="text-gray-700">{item.size}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image / Visual Section */}
          <div className="md:w-1/2 h-[400px] bg-green-100 border border-black-500 rounded-4xl"></div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default SponsorEsf