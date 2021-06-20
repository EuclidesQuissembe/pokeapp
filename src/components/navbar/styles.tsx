import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #00002e;
  position: fixed;
  top: 0;
  z-index: 99;
  box-shadow: 0 1px 5px #616161;
`;

export const Center = styled.div`
  width: 1200px;
  height: 60px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Home = styled.h3`
  color: white;
  cursor: pointer;
`;

export const Right = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
