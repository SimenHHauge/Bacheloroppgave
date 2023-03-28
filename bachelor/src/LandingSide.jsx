import React from "react";
import styled from "styled-components";

import Hus from "./SimulertBoligkjop/Bilder/Hus.png";
import Kalkulatorimg from "./SimulertBoligkjop/Bilder/Kalkulator.png";
import SPVLogo from "./SimulertBoligkjop/Bilder/SPVLogo.png";
import Knapp from "./SimulertBoligkjop/Knapp";
import { Boligkjop, Kalkulator, VeienTil } from "./Hjelpefiler/Tekster.jsx";

const Knapper = styled.a`
    text-decoration: none;
`;

const Veien = styled.div`
    text-align: center;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #FAF2E7;
    width: 375x;
    margin-bottom: 20px;
    padding 10px;
`;

const StartKnapp = styled.button`
    background-color: #FFBD01;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    padding: 15px;
    margin-top: 100px;
    border: 0px;
    border-radius: 40px;
`;

function LandingSide() {
    return (
    <div>
        <Knapper href="/">
            <Veien>
                <img src={SPVLogo} />
                <h2>{ VeienTil.tittel }</h2>
                <p>{ VeienTil.tekst }</p>
                <a href="/"><StartKnapp>Se stegene her</StartKnapp></a>
            </Veien>
        </Knapper>
        <Knapper href="/SimulertBoligkjop">
            <Knapp bilde={ Hus } tittel={ Boligkjop.tittel } undertekst={ Boligkjop.tekst }/>
        </Knapper>
        <Knapper href="/">
            <Knapp bilde={ Kalkulatorimg } tittel={ Kalkulator.tittel } undertekst={ Kalkulator.tekst }/>
        </Knapper>
    </div>
    )
}

export default LandingSide;