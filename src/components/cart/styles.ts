import styled from "styled-components";

export const Container = styled.div`
  margin: 0 20px;
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  border: 1px solid #eee;
  padding: 10px;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
`;
