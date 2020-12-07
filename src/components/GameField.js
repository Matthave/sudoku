import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

const Game = styled.div`
position: fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
/* opacity: ${(props) => (props.visibility ? 1 : 0)}; */
transition: 1s linear;
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

const GameItem = styled.input`
width:33%;
transition:0.1s linear;
cursor: pointer;
caret-color:transparent;
font-weight:100;

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
    border:1px solid #ccc;
  }
`;

const Loading = styled.p`
    font-size:70px;
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
`;

const GameField = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initialFunction();
    })

    const initialFunction = () =>{
        const gameItem = document.querySelectorAll(".gameItem");
        gameItem.forEach((ele)=>{
            ele.addEventListener("click", (e)=> hoverEffectOn(e));
            ele.addEventListener("keyup", (e)=> keyUpHandler(e));
        })

        //Function for generate complete Sudoku board
        setAllNumbers();
    }
    
    const keyUpHandler = (e) => {
        if(e.target.value.length > 1){
            e.target.value = e.target.value[1];
        }

        if(e.target.value == "0"){
            e.target.value = "";
        }

        const targetCol = e.target.classList[5];
        const targetRow = e.target.classList[6];
        const targetSquare = e.target.classList[7];

        const colItems = [...document.querySelectorAll(`.${targetCol}`)];
        const isColReject = colItems.filter((ele)=>{
            if(ele.value === e.target.value && ele.value !== "") return true;
        });

        const rowItems = [...document.querySelectorAll(`.${targetRow}`)];
        const isRowReject = rowItems.filter((ele)=>{
            if(ele.value === e.target.value && ele.value !== "") return true;
        });

        const squareItems = [...document.querySelectorAll(`.${targetSquare}`)];
        const isSquareReject = squareItems.filter((ele)=>{
            if(ele.value === e.target.value && ele.value !== "") return true;
        });
        
        if(isColReject.length > 1 || isRowReject.length > 1 || isSquareReject.length > 1){
            e.target.classList.add("wrong");
        }else{
            e.target.classList.remove("wrong");
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


    const setAllNumbers = () => {
        //Loop for every digit in Sudoku
        for(let i = 1; i <= 9; i++){
            let currentRejectClass = [];

            //Loop for every BIG SQUAR in Sudoku
            //Take every children of BIG SQUAR, check if this children is empty and allow to take
            for(let e = 1; e <= 9; e++){
                const currentSquar = document.querySelector(`.squar${e}`);
                const currentSquarChildren = [...currentSquar.children];
                const emptySquarChildren = currentSquarChildren.filter((child)=>{
                    const notAllowCol = currentRejectClass.filter(ele => ele === child.classList[5]);
                    const notAllowRow = currentRejectClass.filter(ele => ele === child.classList[6]);
                    if(child.value === "" && notAllowCol.length === 0  && notAllowRow.length === 0 ){
                        return true;
                    }else{
                        return false;
                    }
                });
                
                //Generate random index for any of previous choosed empty fields for current digit ( current loop). Get every row and col number, and reject in every next digit ( every next loop)
                const index = Math.floor(Math.random() * (emptySquarChildren.length - 0) + 0);
                if(emptySquarChildren[index]){
                currentRejectClass.push(emptySquarChildren[index].classList[5]);
                currentRejectClass.push(emptySquarChildren[index].classList[6]);
                emptySquarChildren[index].value = i;

                }else{
                //If random generate go wrong, reset everything and start again
                i = 1;
                e = 1;
                currentRejectClass = [];
                const gameItem = document.querySelectorAll(".gameItem");
                gameItem.forEach(ele => ele.value = "");
                }
            }
         }
         hideSomeFileds();
    }


    const hideSomeFileds = () => {
        const gameItem = document.querySelectorAll(".gameItem");

        for(let i=0; i < 40; i++){
            const index = Math.floor(Math.random() * (gameItem.length - 0) + 0);
            gameItem[index].value = "";

        }
    }

    return (
        <>
        <Game className="container col-12 d-flex flex-column justify-content-center gameField">
        <div className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar1" bgColor>
                    <GameItem className="px-0 text-center gameItem col1 row1 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row1 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row1 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row2 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row2 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row2 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row3 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row3 sq1" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row3 sq1" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar2">
                    <GameItem className="px-0 text-center gameItem col4 row1 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row1 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row1 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row2 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row2 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row2 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row3 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row3 sq2" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row3 sq2" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar3" bgColor>
                    <GameItem className="px-0 text-center gameItem col7 row1 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row1 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row1 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row2 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row2 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row2 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row3 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row3 sq3" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row3 sq3" type="number"/>
            </GameSquar>
        </div>

        <div className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar4">
                    <GameItem className="px-0 text-center gameItem col1 row4 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row4 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row4 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row5 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row5 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row5 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row6 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row6 sq4" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row6 sq4" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar5" bgColor>
                    <GameItem className="px-0 text-center gameItem col4 row4 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row4 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row4 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row5 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row5 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row5 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row6 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row6 sq5" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row6 sq5" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar6">
                    <GameItem className="px-0 text-center gameItem col7 row4 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row4 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row4 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row5 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row5 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row5 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row6 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row6 sq6" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row6 sq6" type="number"/>
            </GameSquar>
        </div>

        <div className="container d-flex justify-content-center">
            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar7" bgColor>
                    <GameItem className="px-0 text-center gameItem col1 row7 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row7 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row7 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row8 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row8 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row8 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col1 row9 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col2 row9 sq7" type="number"/>
                    <GameItem className="px-0 text-center gameItem col3 row9 sq7" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar8">
                    <GameItem className="px-0 text-center gameItem col4 row7 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row7 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row7 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row8 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row8 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row8 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col4 row9 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col5 row9 sq8" type="number"/>
                    <GameItem className="px-0 text-center gameItem col6 row9 sq8" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center px-0 mx-0 squar9" bgColor>
                    <GameItem className="px-0 text-center gameItem col7 row7 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row7 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row7 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row8 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row8 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row8 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col7 row9 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col8 row9 sq9" type="number"/>
                    <GameItem className="px-0 text-center gameItem col9 row9 sq9" type="number"/>
            </GameSquar>
        </div>
        </Game>
        </>
    )
}

export default GameField
