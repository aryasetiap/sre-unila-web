import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Staff from "./pages/Staff";
import Articles from "./pages/Articles";
import Merchandise from "./pages/Merchandise";
import HomeEsf from "./pages/esf/HomeEsf";
import AboutEsf from "./pages/esf/AboutEsf";
import AgendaEsf from "./pages/esf/AgendaEsf";
import SponsorEsf from "./pages/esf/SponsorEsf";
import ContactUsEsf from "./pages/esf/ContactUsEsf";

function App() {
  return (
    <Routes>
      {/* SRE */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/merchandise" element={<Merchandise />} />

      {/* ESF */}
      <Route path="/esf" element={<HomeEsf />} />
      <Route path="/esf/about" element={<AboutEsf />} />
      <Route path="/esf/agenda" element={<AgendaEsf />} />
      <Route path="/esf/sponsor" element={<SponsorEsf />} />
      <Route path="/esf/contact-us" element={<ContactUsEsf />} />
    </Routes>
  );
}

export default App;
