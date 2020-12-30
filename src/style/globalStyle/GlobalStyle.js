import { createGlobalStyle } from "styled-components";
import bg from '../../assets/images/bg.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: "Source Sans Pro", sans-serif;
    box-sizing:border-box !important;
    border:none;
    outline: transparent;
  }

  body{
    min-height:100vh;
    background-image: url(${bg});
    background-position:center;
    background-size:cover;
    background-repeat:no-repeat;
  }

  .startScreenOff{
    opacity:0 !important;
  }

  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

.gameItem{
  border:none;
}

.wrong{
  background-color: #F7CFD6 !important;
  color:#f00 !important;
}

.crashElement{
  background-color:#fdd !important;
}

.row2, .row5, .row8{
  border-top: 0.5px solid rgba(52, 72, 97,0.25);
  border-bottom: 0.5px solid rgba(52, 72, 97,0.25);
}

.col2, .col5, .col8{
  border-right: 0.5px solid rgba(52, 72, 97,0.25);
  border-left: 0.5px solid rgba(52, 72, 97,0.25);
}

.squar1{
  border-top:2px solid #344861;
  border-left:2px solid #344861;
  border-right: 2px solid #344861;
}

.squar2{
  border-top:2px solid #344861;
  border-right: 2px solid #344861;
}

.squar3{
  border-top:2px solid #344861;
  border-right:2px solid #344861;
}

.squar4{
  border-top:2px solid #344861;
  border-left:2px solid #344861;
  border-right:2px solid #344861;
}

.squar5{
  border-top:2px solid #344861;
  border-right:2px solid #344861;
}

.squar6{
  border-top:2px solid #344861;
  border-right:2px solid #344861;
}

.squar7{
  border-top:2px solid #344861;
  border-bottom:2px solid #344861;
  border-left:2px solid #344861;
  border-right:2px solid #344861;
}

.squar8{
  border-top:2px solid #344861;
  border-bottom:2px solid #344861;
  border-right:2px solid #344861;
}

.squar9{
  border-top:2px solid #344861;
  border-bottom:2px solid #344861;
  border-right:2px solid #344861;
}
`;

export default GlobalStyle;
