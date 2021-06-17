import styled from "styled-components";

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
