import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Routes from "./routes";

import { Container } from "./styles";
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: 'border-box';
    outline: none;
    font-family: 'Roboto', sans-serif;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}

export default App;
