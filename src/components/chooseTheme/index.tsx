import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { DefaultTheme } from "styled-components";
import { Container, ContainerLabel, InputLabel } from "./styles";

import { Props } from "./types";

import usePersistedState from "../../hooks/usePersistedState";

/**
 * Themes
 */
import dTheme from "../../styles/themes/default";
import orange from "../../styles/themes/orange";
import yellow from "../../styles/themes/yellow";

import * as ThemeActions from "../../store/ducks/theme/actions";
import { ApplicationState } from "../../store";
import { Constants } from "../../utils/constants";

const ChooseTheme: React.FC<Props> = ({ changeTheme, ...defaultTheme }) => {
  const [checked, setChecked] = useState("");

  const [theme, setTheme] = usePersistedState(
    Constants.SAVED_THEME,
    defaultTheme
  );

  const themes = [
    {
      label: "green",
      theme: dTheme,
    },
    {
      label: "orange",
      theme: orange,
    },
    {
      label: "yellow",
      theme: yellow,
    },
  ];

  function handleChangeTheme(t: any, th: DefaultTheme) {
    setChecked(t.label);

    setTheme(th);
  }

  useEffect(() => {
    changeTheme(theme);
    setChecked(theme.title);
  }, [theme, changeTheme]);

  return (
    <Container>
      <ContainerLabel>
        {themes.map((t) => (
          <div key={t.label}>
            <InputLabel
              htmlFor={t.label}
              checked={t.label === checked}
              color={t.label}
            ></InputLabel>
            <input
              type="radio"
              hidden
              onChange={() => handleChangeTheme(t, t.theme)}
              name="theme"
              value={t.label}
              id={t.label}
            />
          </div>
        ))}
      </ContainerLabel>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  ...state.theme,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(ThemeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChooseTheme);
