import styled from "styled-components";

type TypeProps = {
  color?: string;
};

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 70px auto;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const ContainerType = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

export const Name = styled.p``;

export const Type = styled.span<TypeProps>`
  background-color: ${(props) => props.color};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px 5px;
`;
