import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.primary};
`;

export const Name = styled.h1`
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  font-size: 14pt;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  font-size: 14pt;
  margin-top: 30px;
  color: ${(props) => props.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }

  &:active {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => shade(0.1, props.theme.colors.primary)};
  }
`;
