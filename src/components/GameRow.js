import React from 'react';
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

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

const GameRow = () => {
    return (
        <>
         <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar1" bgColor>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row1 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row1 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row1 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row2 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row2 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row2 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row3 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row3 sq1" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row3 sq1" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar2">
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row1 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row1 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row1 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row2 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row2 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row2 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row3 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row3 sq2" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row3 sq2" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar3" bgColor>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row1 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row1 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row1 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row2 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row2 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row2 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row3 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row3 sq3" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row3 sq3" type="number"/>
            </GameSquar>
        </div>

        <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar4">
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row4 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row4 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row4 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row5 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row5 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row5 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row6 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row6 sq4" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row6 sq4" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar5" bgColor>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row4 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row4 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row4 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row5 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row5 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row5 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row6 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row6 sq5" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row6 sq5" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar6">
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row4 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row4 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row4 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row5 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row5 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row5 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row6 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row6 sq6" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row6 sq6" type="number"/>
            </GameSquar>
        </div>

        <div className="container d-flex justify-content-center w-100 px-0 py-0">
            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar7" bgColor>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row7 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row7 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row7 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row8 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row8 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row8 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col1 row9 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col2 row9 sq7" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col3 row9 sq7" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar8">
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row7 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row7 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row7 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row8 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row8 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row8 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col4 row9 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col5 row9 sq8" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col6 row9 sq8" type="number"/>
            </GameSquar>

            <GameSquar className="container d-flex flex-wrap align-items-center justify-content-center px-0 mx-0 squar9" bgColor>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row7 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row7 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row7 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row8 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row8 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row8 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col7 row9 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col8 row9 sq9" type="number"/>
                    <GameItem name="password" autocomplete="new-password" className="px-0 text-center gameItem col9 row9 sq9" type="number"/>
            </GameSquar>
        </div>   
        </>
    )
}

export default GameRow
