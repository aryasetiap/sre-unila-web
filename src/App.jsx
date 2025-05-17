import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Activities from "./pages/Activities";
import Staff from "./pages/Staff";
import Articles from "./pages/Articles";
import Merchandise from "./pages/Merchandise";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/activities" element={<Activities />} />
      <Route path="/staff" element={<Staff />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/merchandise" element={<Merchandise />} />
    </Routes>
  );
}

export default App;
