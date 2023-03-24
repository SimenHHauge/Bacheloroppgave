import React from "react";
import styled from "styled-components"; 

const Grid = styled.div`
    display: grid;
    grid-template-columns: 75px 250px 25px;
    border: 1px solid black;
    border-radius: 6px;
    background-color: #FAF2E7;
    width: 375x;
    height: 125px;
    margin-bottom: 20px;
    bottom: 0;
`;

const GridItems = styled.div`
    display: block;
    margin: auto;
    margin-left:10px;
`;

const StyledImg = styled.img`
    max-width: 60px;
`;

const Tilbake = styled.div`
    width: 10px;
    height: 10px;
    border-top: 2px solid black;
    border-left: 2px solid black;
    transform: rotate(135deg);
`;

function Knapp({ bilde, tittel, undertekst}) {
    return (
        <Grid>
            <GridItems>
                <StyledImg src={ bilde } />
            </GridItems>
            <GridItems>
                <h3>{tittel ? tittel : 'error'}</h3>
                <p>{ undertekst }</p>
            </GridItems>
            <GridItems>
                <Tilbake />
            </GridItems>
        </Grid>
    )
}

export default Knapp;