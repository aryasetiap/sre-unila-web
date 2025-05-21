import Navbar from "../../components/esf/NavbarEsf";
import Hero from "../../components/esf/HeroSectionEsf";
import Footer from "../../components/esf/FooterEsf";
import ExpandableCardEsf from "../../components/esf/agenda/ExpandableCardEsf";
import SpeakersSection from "../../components/esf/agenda/SpeakersSection";

const agendaDay1 = [
  ["7:30-8:40", "Opening Ceremony"],
  ["8:55-9:10", "Keynote Speech: Make Cities and Human Settlements Inclusive, Safe, and Sustainable."],
  ["9:10-10:05", "Panel Session 1: Living in the Threat of Natural Hazards - Can Disasters and Sustainable Development Go Together?"],
  ["10:05-10:20", "Keynote Speech: Governance in Industrial Development, Innovation, and Sustainable Infrastructure in the Transmigration Area."],
  ["10:20-11:15", "Panel Session 2: Enhancing Governance for Innovation and Sustainable Infrastructure Development in Transmigration Area - A Pathway Towards Inclusive Development and Sustainable Well-being."],
  ["12:20-12:30", "Keynote Speech: Waste Management for Sustainable Development Goals."],
  ["12:30-13:25", "Panel Session 3: Biogas and Bioenergy - Energy Solutions for Lampung Province."],
  ["13:25-13:35", "Keynote Speech: Lampung as a Sustainable Green Energy Center."],
  ["13:35-14:30", "Panel Session 4: Renewable Energy Innovation for Energy Independent Provinces."],
  ["14:45-14:55", "Keynote Speech: Advancing Sustainable Agriculture through Innovation."],
  ["14:55-15:50", "Panel Session 5: From Genes to Green: Integrating Biotechnology for Sustainable and Climate-Smart Agriculture."],
  ["15:50-16:00", "Keynote Speech: Blue Economy Through Ecotourism."],
  ["16:00-16:55", "Panel Session 6: Empowering Coastal Communities with Sustainable Livelihoods through the Blue Economy."],
  ["16:55-17:05", "Closing the Plenary Meeting."],
];

const agendaDay2 = [
  ["08.35-08.55", "Opening the Thematic Meeting Session 1", "-"],
  ["08.55-12.05", "Domestic Resources for Renewable Energy.", "Kalianda – Meeting Room"],
  ["08.55-12.05", "Strengthening Green Competitiveness in the Agricultural Sector.", "Sukadana – Meeting Room"],
  ["13.00-13.10", "Rainwater Harvesting and Wood & Bamboo Construction Materials on a Household and Industrial Scale.", "Menggala – Meeting Room"],
  ["13.10-16.30", "Opening the Thematic Meeting Session 2", "-"],
  ["13.10-16.30", "Mitigation and Adaption to Climate Change: Is Lampung Ready for the Climate Crisis?", "Kalianda – Meeting Room"],
  ["13.10-16.30", "Waste Management for Sustainable Cities.", "Sukadana – Meeting Room"],
  ["13.10-16.30", "Sustainable Agricultural and Production Responsible: Policy, Funding, and Promotion.", "Menggala – Meeting Room"],
];

const AgendaEsf = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="AGENDA ESF 2025"
        subtitle="Explore what's next in our journey to a greener future."
        image="/assets/esf/agenda/bg-hero-agendaesf.png"
        tagline="#ReGreentheFuture"
      />

      <section className="bg-white py-12 px-4 md:px-12 space-y-12">
        <ExpandableCardEsf
          dayTitle="DAY 1"
          date="June 17, 2025"
          summary="Opening Ceremony & Plenary Meeting"
          location="Grand Krakatau Ballroom, Swiss-Belhotel Lampung"
          agendaList={agendaDay1}
        />

        <ExpandableCardEsf
          dayTitle="DAY 2"
          date="June 18, 2025"
          summary="Thematic Meeting "
          location="Grand Krakatau Ballroom, Swiss-Belhotel Lampung"
          agendaList={agendaDay2}
        />

        <ExpandableCardEsf
          dayTitle="DAY 3"
          date="June 19, 2025"
          summary="Reporting Session & Closing Ceremony"
          location="Grand Krakatau Ballroom, Swiss-Belhotel Lampung"
          agendaList={[
            ["8.30-9.35", "Opening & Event Reporting"],
            ["9.35-11.35", "Presentation of Thematic Meeting Results (Per Meeting Room)"],
            ["11.35-12.05", "Awarding"],
            ["13.00-20.00", "Closing Ceremony"],
          ]}
        />
      </section>

      <SpeakersSection />
      <Footer />
    </>
  );
};

export default AgendaEsf;
