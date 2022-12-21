import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #121215;
    width: 100vw;
    height: 100vh;
    font-family: 'Manrope', sans-serif;
    color: #F4F4F4;
  }
`