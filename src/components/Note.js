import React from 'react';
import styled from "styled-components";
import { device } from "../style/mediaQuery/mediaQuery";

const NoteWrapper = styled.div`
display:flex;
flex-direction:column;
margin-top:25px;

@media ${device.large} {
    margin-left:25px;
  }
`;

const NoteDiv = styled.div`
position:relative;
width:300px;
height:300px;
background-color: ${(props) => (props.backgroundColor ? "#fff" : "#fafafa")};
border-collapse:collapse;
border:1px solid #344861;


`;

const NoteInput = styled.input`
position:absolute;
top: ${(props) => (props.first ? "25px" : "calc(100% - 160px)")};
left: ${(props) => (props.first ? "25px" : "calc(100% - 125px)")};

width:100px;
height:135px;
padding: 5px;
font-size:75px;
text-align:center;
color:#344861;

&:disabled{
    background-color:#fafafa;
}
`;

const NoteTitle = styled.h5`
font-size:30px;
width:100%;
text-align:center;
margin:10px 0px;
color:#344861;
`;


const Line = styled.div`
position:absolute;
top:100%;
transform:rotate(-45deg);
transform-origin: left;

width:423px;
height:1px;
background-color: #000;
`;

const Note = ({gameItemIsSelect,currentGameItemSelected,gameFields}) => {

    const onChangeNoteCurrentField = (e,whichInput) => {
        if(whichInput === "first"){
            gameFields[currentGameItemSelected - 1].note[0] = e.target.value;
        }else{
            gameFields[currentGameItemSelected - 1].note[1] = e.target.value;
        }
    }

    return (
        <NoteWrapper>
            <NoteTitle>Your Note</NoteTitle>
            <NoteDiv className="note" backgroundColor={gameItemIsSelect}>
                <Line></Line>
                <NoteInput name="password" autocomplete="new-password" type="number" onChange={(e)=> onChangeNoteCurrentField(e,"first")} className="note__firstInput" first disabled={!gameItemIsSelect}/>
                <NoteInput name="password" autocomplete="new-password" type="number" onChange={(e)=> onChangeNoteCurrentField(e,"second")} className="note__secondInput" disabled={!gameItemIsSelect}/>
            </NoteDiv>
        </NoteWrapper>
    )
}

export default Note;
