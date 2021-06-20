import { action } from "typesafe-actions";
import { DefaultTheme } from "styled-components";
import { ThemeTypes } from "./types";

export const changeTheme = (theme: DefaultTheme) =>
  action(ThemeTypes.CHANGE_THEME, theme);
