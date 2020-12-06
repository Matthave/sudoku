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
  background-color: #f00 !important;
}

.crashElement{
  background-color:#fdd !important;
}

.col1,.col2,.col4,.col5,.col7,.col8{
  border-right:1px solid #ccc;
}

.row1,.row2,.row4,.row5,.row7,.row8{
  border-bottom:1px solid #ccc;
}
`;

export default GlobalStyle;
