import React from "react";

import styled from "styled-components";

const Bakgrunn = styled.body`
  background-color: #FAF2E7;
`;

function LandingSide() {
    return (
        <Bakgrunn>
                <form>
                    <button> Start </button>
                </form>
        </Bakgrunn>
    )
}

export default LandingSide;