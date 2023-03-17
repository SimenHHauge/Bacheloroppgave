import styled from "styled-components";
import SimulertBoligkjop from "./SimulertBoligkjøp";

const Bakgrunn = styled.body`
  background-color: #FAF2E7;
  height: 100%;
`;

const Overskift = styled.div`
  text-align: center;
  font: Tobias;
`;


const UndertekstDiv = styled.div`
  text-alig: center;
  float: center;
`;

function App() {
  return (
    <Bakgrunn>
     <Overskift>
        <h1>Simuler et kjøp av drømmeboligen din</h1>
     </Overskift>
     <SimulertBoligkjop />
    </Bakgrunn>
  );
}

export default App;
