import React from "react";
import styled from "styled-components";
import { Bakgrunn, Tilbake, Overskift } from "../SimulertBoligkjop/SimulertBoligkjop";

const DropDown = styled.button`
    width 200px;
`;

const VeienTilDinForsteBolig = () => {
    const [open, setOpen] = React.useState({});
  
    const handleClick = (id) => {
      setOpen((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
  
    return (
      <Bakgrunn>
        <Tilbake to="/" />
        <Overskift>Veien til din første bolig</Overskift>
        <div>
            <DropDown onClick={() => handleClick("1")}>
                <h3>Få finansieringsbevis</h3>
            </DropDown>
            {open["1"] && <p id="1">Test 1</p>}
        </div>

        <div>
            <DropDown onClick={() => handleClick("2")}>
                <h3>Bli klar for visning</h3>
            </DropDown>
            {open["2"] && <p id="2">Test 2</p>}
        </div>

        <div>
            <DropDown onClick={() => handleClick("3")}>
            <h3>Budrunde</h3>
            </DropDown>
            {open["3"] && <p id="3">Test 3</p>}
        </div>
        <div>
            <DropDown onClick={() => handleClick("4")}>
            <h3>Flytt in</h3>
            </DropDown>
            {open["4"] && <p id="4">Test 3</p>}
        </div>
        <div>
            <DropDown onClick={() => handleClick("5")}>
            <h3>Hva skjer nå?</h3>
            </DropDown>
            {open["5"] && <p id="5">Test 5</p>}
        </div>
      </Bakgrunn>
    );
  };

export default VeienTilDinForsteBolig
