import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const ContainerButton = styled.div`
  width: 100%;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  &:hover {
    cursor: pointer;

    background-color: ${(props) => shade(0.4, props.theme.colors.primary)};
  }
`;
