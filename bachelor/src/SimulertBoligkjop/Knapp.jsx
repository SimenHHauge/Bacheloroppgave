import React from "react";
import styled from "styled-components"; 

const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% 70% 10%;
    border-radius: 6px;
    width: 350x;
    height: 150px;
    margin: 10px;
    bottom: 0;
    background-color: white;
`;

const GridItems = styled.div`
    display: block;
    margin: auto;
    padding-left: 5px;
`;

const StyledImg = styled.img`
    max-width: 60px;
`;

const Tekst = styled.p`
    font-size: 12px;
    padding-right: 5px;
`;

const Pil = styled.div`
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(135deg);
    margin-right: 20px;
`;

function Knapp({ bilde, tittel, undertekst }) {
    return (
        <Grid>
            <GridItems>
                <StyledImg src={ bilde } />
            </GridItems>
            <GridItems>
                <h3>{ tittel }</h3>
                <Tekst>{ undertekst }</Tekst>
            </GridItems>
            <GridItems>
                <Pil />
            </GridItems>
        </Grid>
    )
}

export default Knapp;