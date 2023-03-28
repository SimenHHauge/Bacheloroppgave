import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import LandingSide from "./LandingSide.jsx";
import SimulertBoligkjop from './SimulertBoligkjop/SimulertBoligkjop.jsx';
import BybaneStopp from "./SimulertBoligkjop/BybaneStopp.jsx";

function App() {
  return (
      <div>
        <Helmet>
          <style>{'body {background-color: #FCF8F3;}'}</style>
        </Helmet>

          <Routes>
            <Route path="/" element={<LandingSide />} />
            <Route path="/SimulertBoligkjop" element={<SimulertBoligkjop />} />
            <Route path="/SimulertBoligkjop/BybaneStopp" element={<BybaneStopp />} />
          </Routes>
      </div>
  );
}
export default App;
