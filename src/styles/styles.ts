import styled from "styled-components";

type ColProps = {
  sm: number;
  md: number;
  lg: number;
};

function getWithGrid(value: number) {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%;`;
}

export const Row = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div<ColProps>`
  padding: 10px;

  @media only screen and (max-width: 768px) {
    ${({ sm }: ColProps) => sm && getWithGrid(sm)}
  }

  @media only screen and (min-width: 769px) {
    ${({ md }: ColProps) => md && getWithGrid(md)}
  }

  @media only screen and (min-width: 1000px) {
    ${({ lg }: ColProps) => lg && getWithGrid(lg)}
  }
`;
