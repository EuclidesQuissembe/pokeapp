import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { ApolloProvider } from "@apollo/client";

import Routes from "./routes";

import apolloClient from "./configs/apollo-client";

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
      <ApolloProvider client={apolloClient}>
        <Container>
          <Routes />
        </Container>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
