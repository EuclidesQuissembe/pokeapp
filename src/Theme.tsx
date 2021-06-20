import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import Routes from "./routes";

import GlobalStyle from "./styles/global";

import Navbar from "./components/navbar";

import { Container } from "./styles";
import { ApplicationState } from "./store";

const Theme: React.FC<DefaultTheme> = (defaultTheme) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Routes />
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  ...state.theme,
});

export default connect(mapStateToProps)(Theme);
