import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Bilan from "./pages/Bilan";
import About from "./pages/About";
import RendezVous from "./pages/RendezVous";
import Prix from "./pages/Prix";
// import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Bilan-de-competence" element={<Bilan />} />
        <Route path="/Rendez-vous" element={<RendezVous />} />
        <Route path="/Tarifs" element={<Prix />} />
        {/* <Route path="/Contact" element={<Contact />} /> */}
        <Route path="/A-propos" element={<About />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
