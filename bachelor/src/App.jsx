import React from "react";
import { Route, Routes } from 'react-router-dom';

import LandingSide from "./LandingSide.jsx";
import SimulertBoligkjop from './SimulertBoligkjop/SimulertBoligkjop.jsx';
import Navigasjon from "./SimulertBoligkjop/Navigasjon.jsx"

function App() {
  return (
      <div>
        <Navigasjon />
          <Routes>
            <Route path="/" element={<LandingSide />} />
            <Route path="/SimulertBoligkjop" element={<SimulertBoligkjop />} />
          </Routes>
      </div> 
  );
}
export default App;
