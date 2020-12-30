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

const LevelButton = styled.button`
width:125px;
height:35px;
`;

const StartScreen = ({chooseGameLevelScreenFunc,levelScreen,letStartFunc }) => {
    return (
        <Container className="container d-flex flex-column position-fixed startScreen">
            <div className="row d-flex justify-content-center">
                <img width="75" className="mb-5" src={`${logoM}`} alt="logoM"/>
            </div>

            <div className="row d-flex justify-content-center">
               {levelScreen ? <h1 className="mb-5">Choose your level</h1> : <h1 className="mb-5">Sudoku</h1>} 
            </div>
            {levelScreen ?
                <div className="row d-flex flex-column align-items-center mb-5">
                    <LevelButton onClick={()=>letStartFunc("4")} className="bg-success text-white my-2 rounded">Easy</LevelButton>
                    <LevelButton onClick={()=>letStartFunc("5")} className="bg-warning text-white my-2 rounded">Medium</LevelButton>
                    <LevelButton onClick={()=>letStartFunc("6")} className="bg-danger text-white my-2 rounded">Hard</LevelButton>
                    <LevelButton onClick={()=>letStartFunc("7")} className="bg-dark text-white my-2 rounded">Hell</LevelButton>
                </div>
            : null}

            {levelScreen ? null :
            <div className="row d-flex justify-content-center">
                <button onClick={()=>chooseGameLevelScreenFunc()} className="bg-primary text-white pt-2 pb-2 pr-4 pl-4 rounded">NEW GAME</button>
            </div>
            }

        </Container>
    )
}

export default StartScreen
