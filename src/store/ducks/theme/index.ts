import { Reducer } from "redux";
import { DefaultTheme } from "styled-components";
import defaultTheme from "../../../styles/themes/default";
import { ThemeTypes } from "./types";

const reducer: Reducer<DefaultTheme> = (state = defaultTheme, action) => {
  switch (action.type) {
    case ThemeTypes.CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
