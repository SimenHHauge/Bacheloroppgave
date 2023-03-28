import React from "react";
import styled from "styled-components";

const Bybanen = styled.div`
    width: 50%;
`;

const Stopp = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size: 15px;
    font-weight: bold;
    border-radius: 15px;
    border: 1.5px solid #F3ADA5;
    margin-bottom: 5px;
    height: 30px;
    width: 30px;
`;

const Linje = styled.div`
    border-left: 1.5px solid #F3ADA5;
    height: 5px;
    position: absolute;
    margin-top: -5px;
    margin-left: 15px;
`;

const Tekst = styled.p`
    font-size: 15px;
    font-weight: bold;
    position: absolute;
    margin-left: 40px;
    margin-top: -28px;
`;

function BybaneStopp() {
return (
    <Bybanen>
        <Stopp>1</Stopp>
        <Linje />
        <Tekst>Få finansieringsbevis</Tekst>
        <Stopp>2</Stopp>
            <Linje />
        <Tekst>Bli klar for visning</Tekst>
        <Stopp>3</Stopp>
        <Linje />
        <Tekst>Budrunde</Tekst>
        <Stopp>4</Stopp>
        <Linje />
        <Tekst>Flytt inn</Tekst>
        <Stopp>5</Stopp>
        <Tekst>Hva skjer nå?</Tekst>
    </Bybanen>
    )
}

export default BybaneStopp