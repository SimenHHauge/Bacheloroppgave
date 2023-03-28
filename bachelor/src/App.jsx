import React from "react";
import { Route, Routes } from 'react-router-dom';

import LandingSide from "./LandingSide.jsx";
import SimulertBoligkjop from './SimulertBoligkjop/SimulertBoligkjop.jsx';

function App() {
  return (
      <div>
          <Routes>
            <Route path="/" element={<LandingSide />} />
            <Route path="/SimulertBoligkjop" element={<SimulertBoligkjop />} />
          </Routes>
      </div>
  );
}
export default App;
