/* eslint-disable no-loop-func */
import React, {useEffect, useState} from 'react';
import GameRow from "./GameRow";
import Note from "./Note";
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

const GameWrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
opacity: ${(props) => (props.visibility ? 1 : 0)};
transition: 1s linear;

@media ${device.large} {
    flex-direction:row;
  }
`;

const Game = styled.div`
width:300px;
min-width:300px;

@media ${device.xsmall} {
    width:360px;
  }

@media ${device.small} {
    width:555px;
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
    const [gameItemIsSelect, setGameItemIsSelect] = useState(false);
    const [currentGameItemSelected, setCurrentGameItemSelected] = useState("");
    let [gameFields, setGameFields] = useState([]);

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
            else return false;
        });

        const rowItems = [...document.querySelectorAll(`.${targetRow}`)];
        const isRowReject = rowItems.filter((ele)=>{
            if(ele.value === e.target.value && ele.value !== "") return true;
            else return false;
        });

        const squareItems = [...document.querySelectorAll(`.${targetSquare}`)];
        const isSquareReject = squareItems.filter((ele)=>{
            if(ele.value === e.target.value && ele.value !== "") return true;
            else return false;
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

        e.target.style.backgroundColor = "#BBDEFB";
        setGameItemIsSelect(true);

        //Get note, and upload data from current clicked/marked filed
        const idOfClickedElement = e.target.id;
        const matchedGameFiled = gameFields[idOfClickedElement -1];

        const noteFirstInput = document.querySelector(".note__firstInput");
        const noteSecondInput = document.querySelector(".note__secondInput");

        setCurrentGameItemSelected(idOfClickedElement);
        noteFirstInput.value = matchedGameFiled.note[0];
        noteSecondInput.value = matchedGameFiled.note[1];

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
         
         //Save every fields value and note value
         const getEveryField = [...document.querySelectorAll(".gameItem")];
         getEveryField.forEach((ele,index)=>{
             gameFields.push({position:index + 1, value:ele.value, note:["",""]});
             ele.setAttribute("id",index + 1);
         })
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
        <GameWrapper className="gameWrapper" visibility={isReady ? "true" : ""}>
        <Game className="container d-flex flex-column justify-content-center align-items-center px-0 py-0 mx-0 gameField">
            <GameRow/>
        </Game>
        <Note gameItemIsSelect={gameItemIsSelect} currentGameItemSelected={currentGameItemSelected} gameFields={gameFields}/>
        </GameWrapper>
        </>
    )
}

export default GameField
