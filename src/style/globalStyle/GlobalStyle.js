import { createGlobalStyle } from "styled-components";
import bg from '../../assets/images/bg.png';

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    font-family: "Source Sans Pro", sans-serif;
    box-sizing:border-box;
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
`;

export default GlobalStyle;
