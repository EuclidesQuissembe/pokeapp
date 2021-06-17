import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px;
  box-shadow: 0 0 3px 1px #000;
`;

export const Name = styled.h1`
  font-size: 14pt;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 7px;
  font-size: 14pt;
  background-color: "#0087a8";

  &:hover {
    cursor: pointer;
  }
`;
