import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import LandingSide from "./LandingSide";
import SimulertBoligkjop from './SimulertBoligkjop/SimulertBoligkjop';
import VeienTilDinForsteBolig from './Veien/VeienTilDinForsteBolig';

function App() {
  return (
      <div>
        <Helmet>
          <style>{'body {background-color: #547A6A;}'}</style>
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
