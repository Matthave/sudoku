import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

const Game = styled.div`
position: fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
opacity: ${(props) => (props.visibility ? 1 : 0)};
transition: opacity 1s linear;
width:300px;
min-width:300px;

@media ${device.xsmall} {
    width:360px;
  }

@media ${device.small} {
    width:555px;
}
`;

const GameSquar = styled.div`
width:100px;
height:100px;

@media ${device.xsmall} {
    width:120px;
    height:120px;
  }

  @media ${device.small} {
    width:180px;
    height:180px;
  } 
`;

const GameItem = styled.input`
width:32px;
height:32px;
cursor: pointer;
caret-color:transparent;
font-weight:100;
color:#344861;
margin:0;

&:hover{
    background-color:#BBDEFB !important;
}
@media ${device.xsmall} {
    height:38.5px;
    width:38.5px;
    font-size:22.5px;
  }

  @media ${device.small} {
    width:58.5px;
    height:58.5px;
    line-height:60px;
    font-size:40px;
  } 
`;

const Loading = styled.p`
    font-size:70px;
    position: fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:1;
`;

const GameField = ({chooseLevel}) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initialFunction();
    })

    const initialFunction = () =>{
        const gameItem = document.querySelectorAll(".gameItem");
        gameItem.forEach((ele)=>{
            ele.addEventListener("click", (e)=> markEffectOn(e));
            ele.addEventListener("keyup", (e)=> keyUpHandler(e));
        })

        //Function for generate complete Sudoku board
        if(!isReady){
            setAllNumbers();
        }
    }
    
    const keyUpHandler = (e) => {
        if(e.target.value.length > 1){
            e.target.value = e.target.value[1];
        }

        if(e.target.value === "0" || e.target.value === 0){
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

    const markEffectOn = (e) => {
        const gameItems = document.querySelectorAll(".gameItem");
        gameItems.forEach((item)=>{
        item.style.backgroundColor = "initial";
        item.style.color = "#344861";
        });

        if(e.target.classList[5]){
            const everyCurrentCol = document.querySelectorAll(`.${e.target.classList[5]}`);
            everyCurrentCol.forEach((col)=>{
                col.style.backgroundColor = "#E2E7ED"
            })
         }

        if(e.target.classList[6]){
           const everyCurrentRow = document.querySelectorAll(`.${e.target.classList[6]}`);
           everyCurrentRow.forEach((row)=>{
               row.style.backgroundColor = "#E2E7ED"
           })
        }

        if(e.target.classList[7]){
            const everyCurrentSquar = document.querySelectorAll(`.${e.target.classList[7]}`);
            everyCurrentSquar.forEach((row)=>{
                row.style.backgroundColor = "#E2E7ED"
            })
        }

        e.target.style.backgroundColor = "#BBDEFB"
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
         setIsReady(true);
    }


    const hideSomeFileds = () => {
        for(let i = 1; i <= 9; i++){
            const gameRowItem = [...document.querySelectorAll(`.row${i}`)];
            const allowIndex = [1,2,3,4,5,6,7,8,9];

            for(let j = 0; j < parseInt(chooseLevel); j++){
                const index = Math.floor(Math.random() * (allowIndex.length - 0) + 0);
                const filtredRowElements = gameRowItem.findIndex(ele => ele.value === allowIndex[index].toString());
                allowIndex.splice(index,1);

                if(filtredRowElements !== -1) gameRowItem[filtredRowElements].value = "";
            }
        }
    }

    return (
        <>
        {isReady ? null : <Loading>LOADING...</Loading> }
        <Game className="container col-12 d-flex flex-column justify-content-center px-0 py-0 gameField" visibility={isReady ? "true" : ""}>
        <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar1" bgColor>
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar2">
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar3" bgColor>
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

        <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar4">
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar5" bgColor>
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar6">
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

        <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar7" bgColor>
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar8">
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

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar9" bgColor>
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
