import React from "react";
import styled from "styled-components"; 

import Hus from "./Bilder/Hus.png"

const Footer = styled.footer`
    position: fixed;
    bottom: 0;
    width: 80%;
`;

const Navbar = styled.ul`
    list-style-type: none;
    margin: 10px;
`;

const NavItems = styled.li`
    display: inline;
    float: center;
`;

const Navigasjon = () => {
    return (
        <Footer>
            <Navbar>
                <NavItems>
                    <a href="./">Hjem</a>
                </NavItems>
                <NavItems>
                    <a href="./SimulertBoligkjop"><img src={Hus} /></a>
                </NavItems>
            </Navbar>

        </Footer>
    )
}

export default Navigasjon;