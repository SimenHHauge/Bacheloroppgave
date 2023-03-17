import styled from "styled-components";
import Hus from "./Bilder/Hus.png";

const Bakgrunn = styled.body`
    background-color: white;
`;

const Logo = styled.img`
  padding: 10px;
  position: flex;
  text-align: center;
`;


const Beskrivelse = styled.div`
    text-align: center;
    padding: 15px;
`;

function SimulertBoligkjop() {
    return (
        <Bakgrunn>
            <Logo src={Hus} />
            <Beskrivelse>
           Gjennomfør et simulert boligkjøp av drømmeboligen din. Lim inn en Finn-link til boligannonsen du ønsker å kjøpe og fyll inn informasjon om deg selv. <br/><br/> Hunden Zlatan hjelper deg gjennom alle stegene som din personlige rådgiver og megler.
            </Beskrivelse>
        </Bakgrunn>
    )
}

export default SimulertBoligkjop;