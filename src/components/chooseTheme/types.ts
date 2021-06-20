import { DefaultTheme } from "styled-components";

export interface DispatchProps {
  changeTheme: (theme: DefaultTheme) => void;
}

export type Props = DefaultTheme & DispatchProps;
