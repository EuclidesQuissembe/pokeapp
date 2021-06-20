import styled from "styled-components";
import { shade } from "polished";

type LabelProps = {
  color: string;
  checked: boolean;
};

export const Container = styled.div``;

export const ContainerLabel = styled.div`
  display: flex;
`;

export const InputLabel = styled.label<LabelProps>`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 25px;
  background-color: ${(props) => props.color};
  margin: 5px;

  border: 5px solid
    ${(props) => (props.checked ? shade(0.3, props.color) : "transparent")};

  &:hover {
    cursor: pointer;
    border-color: ${(props) => shade(0.3, props.color)};
  }
`;
