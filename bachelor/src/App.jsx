import styled from "styled-components";
import SimulertBoligkjop from "./SimulertBoligkjøp";

const Bakgrunn = styled.body`
  background-color: white;
`;

function App() {
  return (
    <Bakgrunn>
     <SimulertBoligkjop />
    </Bakgrunn>
  );
}

export default App;
