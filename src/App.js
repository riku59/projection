import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Bilan from "./pages/Bilan";
import About from "./pages/About";
import RendezVous from "./pages/RendezVous";
import Prix from "./pages/Prix";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Bilan-de-competence" element={<Bilan />} />
        <Route path="/Tarifs" element={<Prix />} />
        <Route path="/Rendez-Vous" element={<RendezVous />} />
        <Route path="/A-propos" element={<About />} />
        <Route path="*" element={<Accueil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
