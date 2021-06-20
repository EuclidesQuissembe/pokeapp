import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding-top: 80px;
  }
`;
