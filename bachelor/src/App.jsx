import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import LandingSide from "./LandingSide.jsx";
import SimulertBoligkjop from './SimulertBoligkjop/SimulertBoligkjop.jsx';
import VeienTilDinForsteBolig from './Veien/VeienTilDinForsteBolig.jsx';

function App() {
  return (
      <div>
        <Helmet>
          <style>{'body {background-color: #FCF8F3;}'}</style>
        </Helmet>

          <Routes>
            <Route path="/" element={<LandingSide />} />
            <Route path="/SimulertBoligkjop" element={<SimulertBoligkjop />} />
            <Route path="/Veien/VeienTilDinForsteBolig" element={<VeienTilDinForsteBolig />} />
          </Routes>
      </div>
  );
}
export default App;
