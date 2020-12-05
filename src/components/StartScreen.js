import React from 'react';
import logoM from "../assets/images/logoM.svg";
import styled from "styled-components";

const Container = styled.div`
top:50%;
left:50%;
transform:translate(-50%,-50%);
opacity:1;
transition:0.4s linear;
`;

const StartScreen = ({letStartFunc}) => {
    return (
        <Container className="container d-flex flex-column position-fixed startScreen">
            <div className="row d-flex justify-content-center">
                <img width="75" className="mb-5" src={`${logoM}`} alt="logoM"/>
            </div>

            <div className="row d-flex justify-content-center">
                <h1 className="mb-5">Sudoku.com</h1>
            </div>
            
            <div className="row d-flex justify-content-center">
               <button onClick={()=>letStartFunc()} className="bg-primary text-white pt-2 pb-2 pr-4 pl-4 rounded">NEW GAME</button>
            </div>
        </Container>
    )
}

export default StartScreen
