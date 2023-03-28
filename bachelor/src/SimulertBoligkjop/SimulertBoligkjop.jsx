import React from "react";
import styled from "styled-components";

import Hus from "./Bilder/Hus.png";

const Bakgrunn = styled.body`
    margin: 20px;
`;

const Overskift = styled.h1`
    text-align: center;
`;

const Logo = styled.img`
  display: block;
  margin-left: 35%;
  margin-right: auto;
`;

/*const Tilbake = styled.a`
    display: block;
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(-45deg);
`; */

const Beskrivelse = styled.div`
    text-align: center;
    padding: 15px;
    background-color: #F5F7FA;
    margin 15px;
    margin-top: 20px;
    box-shadow: -20px 15px #D6DDE9;
`;

export const StartKnapp = styled.button`
    background-color: #FFBD01;
    display: block;
    margin-left: auto;
    margin-right: auto; 
    padding: 15px;
    margin-top: 100px;
    border: 0px;
    border-radius: 40px;
`;

function SimulertBoligkjop() {
    return (
        <Bakgrunn>  
            <Overskift>
                Simuler et kjøp av drømmeboligen din
            </Overskift>
            <Logo src={Hus} />
            <Beskrivelse>
                Gjennomfør et simulert boligkjøp av drømmeboligen din. Lim inn en Finn-link til boligannonsen du ønsker å kjøpe og fyll inn informasjon om deg selv. <br/><br/> Hunden Zlatan hjelper deg gjennom alle stegene som din personlige rådgiver og megler.
            </Beskrivelse>
            <a href="/"><StartKnapp>
                Start simulator
            </StartKnapp> </a>
        </Bakgrunn>
    )
}

export default SimulertBoligkjop;