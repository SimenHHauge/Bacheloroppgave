import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Hus from "./SimulertBoligkjop/Bilder/Hus.png";
import Kalkulatorimg from "./SimulertBoligkjop/Bilder/Kalkulator.png";
import SPVLogo from "./SimulertBoligkjop/Bilder/SPVLogo.png";
import Knapp from "./SimulertBoligkjop/Knapp";
import { Boligkjop, Kalkulator, VeienTil } from "./Hjelpefiler/Tekster.jsx";
import BybaneStopp from "./SimulertBoligkjop/BybaneStopp";

const Knapper = styled(Link)`
    text-decoration: none;
    color: black;
`;

const Veien = styled.div`
    background-color: white;
    text-align: center;
    border-radius: 6px;
    width: 375x;
    margin: 10px;
    margin-top: 40px;
    padding 10px;

    
`;

const Bybanen = styled.div`
    margin-left: 25%;
`;

export const StartKnapp = styled.button`
    background-color: #FFBD01;
    font-weight: bold;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    padding: 10px;
    height: 40px;
    margin-top: 30px;
    border: 0px;
    border-radius: 40px;
`;

function LandingSide() {
    return (
    <div>
        <Knapper to="/SimulertBoligkjop/BybaneStopp">
            <Veien>
                <img src={SPVLogo} />
                <h2>{ VeienTil.tittel }</h2>
                <p>{ VeienTil.tekst }</p>
                <Bybanen><BybaneStopp /></Bybanen>
                <StartKnapp>Se stegene her</StartKnapp>
            </Veien>
        </Knapper>
        <Knapper to="/SimulertBoligkjop">
            <Knapp bilde={ Hus } tittel={ Boligkjop.tittel } undertekst={ Boligkjop.tekst }/>
        </Knapper>
        <Knapper to="https://www.spv.no/lan/boliglan/boliglanskalkulator" target="_blank">
            <Knapp bilde={ Kalkulatorimg } tittel={ Kalkulator.tittel } undertekst={ Kalkulator.tekst }/>
        </Knapper>
    </div>
    )
}

export default LandingSide;