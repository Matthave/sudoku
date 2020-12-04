import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

const Game = styled.div`
position: fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
`;

const GameSquar = styled.div`
width:75px;
height:75px;
/* background-color: ${(props) => (props.bgColor ? "#E2F7FF" : "#fff")}; */
border:1px solid black;

@media ${device.small} {
    width:125px;
    height:125px;
  }

  @media ${device.medium} {
    width:175px;
    height:175px;
  }
`;

const GameSquarRow = styled.div`
&:nth-child(1n){
border-bottom: 1px solid #ccc;
}

&:nth-child(2n){
border-bottom: 1px solid #ccc;
}

& > :nth-child(1){
border-right: 1px solid #ccc;
}

& > :nth-child(2){
border-right: 1px solid #ccc;
}

& > input{
    transition:0.1s linear;
    cursor: pointer;
    caret-color:transparent;
}
`;

const GameRow = styled.div`

`;

const GameItem = styled.input`
width:33%;

&:hover{
    background-color:royalblue !important;
    color:#fff;
}
@media ${device.small} {
    height:40.6px;
    line-height:40.6px;
    font-size:22.5px;
  }

  @media ${device.medium} {
    height:57.1px;
    line-height:57.1px;
    font-size:40px;
  }
`;

const GameField = () => {
    useEffect(() => {
        initialFunction();
    })

    const initialFunction = () =>{
        const gameItem = document.querySelectorAll(".gameItem");
        gameItem.forEach((ele)=>{
            ele.addEventListener("click", (e)=> hoverEffectOn(e));
            ele.addEventListener("keyup", (e)=> keyUpHandler(e));
        })
    }
    
    const keyUpHandler = (e) => {
        if(e.target.value.length > 1){
            e.target.value = 9;
        }
    }

    const hoverEffectOn = (e) => {
        const gameItems = document.querySelectorAll(".gameItem");
        gameItems.forEach((item)=>{
        item.style.backgroundColor = "initial";
        item.style.color = "#000";
        });

        if(e.target.classList[5]){
            const everyCurrentCol = document.querySelectorAll(`.${e.target.classList[5]}`);
            everyCurrentCol.forEach((col)=>{
                col.style.backgroundColor = "#eee"
            })
         }

        if(e.target.classList[6]){
           const everyCurrentRow = document.querySelectorAll(`.${e.target.classList[6]}`);
           everyCurrentRow.forEach((row)=>{
               row.style.backgroundColor = "#eee"
           })
        }

        e.target.style.backgroundColor = "royalblue"
        e.target.style.color = "#fff"
    }

    return (
        <Game className="container col-12 d-flex flex-column justify-content-center gameField">
        <GameRow className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0" bgColor>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row1" id="11"/>
                    <GameItem className="px-0 text-center gameItem col2 row1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row1" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row2" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row3" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0">
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row1" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row2" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row3" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0" bgColor>
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row1" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row2" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row3" type="number"/>
                </GameSquarRow>
            </GameSquar>
        </GameRow>

        <GameRow className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0">
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row4" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row5" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row6" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0" bgColor>
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row4" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row5" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row6" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0">
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row4" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row5" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row6" type="number"/>
                </GameSquarRow>
            </GameSquar>
        </GameRow>

        <GameRow className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0" bgColor>
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row7" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row8" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col1 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row9" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0">
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row7" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row8" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col4 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row9" type="number"/>
                </GameSquarRow>
            </GameSquar>

            <GameSquar className="container d-flex flex-column align-items-center px-0 mx-0" bgColor>
            <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row7" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row8" type="number"/>
                </GameSquarRow>
                <GameSquarRow className="container d-flex justify-content-around px-0">
                    <GameItem className="px-0 text-center gameItem col7 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row9" type="number"/>
                </GameSquarRow>
            </GameSquar>
        </GameRow>

        </Game>
    )
}

export default GameField
