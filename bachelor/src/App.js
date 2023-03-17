import styled from "styled-components";

const Bakgrunn = styled.html`
  background-color: #FAF2E7;
  height: 100%;
`;

const StyledDiv = styled.div`
  width: 50%;
  background-color: #D63B3B;
  color: white;
  text-align: center;
  margin-left: 25%;
`;

function App() {
  return (
    <Bakgrunn>
     <StyledDiv>
        <h1>Veien til din første bolig</h1>
     </StyledDiv>
    </Bakgrunn>
  );
}

export default App;
