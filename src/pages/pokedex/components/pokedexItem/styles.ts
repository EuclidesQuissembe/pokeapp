import styled from "styled-components";
import { shade } from "polished";

type TypeProps = {
  color: string;
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 70px 0;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContainerType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
`;

export const Type = styled.span<TypeProps>`
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 5px;
`;

export const Name = styled.h4`
  font-size: 20pt;
`;

export const Amount = styled.p`
  position: absolute;
  top: 10px;
  left: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Remove = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 25px;
  background-color: #0ff;

  &:hover {
    cursor: pointer;
    background-color: ${shade(0.1, "#030")};
  }
`;
