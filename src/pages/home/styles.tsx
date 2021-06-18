import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  width: 100%;
  flex: 1;
  @media (max-width: 512px) {
  }
`;

export const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
