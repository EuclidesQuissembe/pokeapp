import React from "react";
import { SearchData } from "../../store/ducks/search/types";

import { Container, Name, Avatar, Type, ContainerType } from "./styles";

const PokeDeatil: React.FC<SearchData> = (props) => {
  const { name, types, sprites } = props;

  return (
    <Container>
      <Avatar src={sprites?.front_default} />
      <Name>{name}</Name>

      <ContainerType>
        {types?.map((type, index) => (
          <Type key={index}>{type.type.name}</Type>
        ))}
      </ContainerType>
    </Container>
  );
};

export default PokeDeatil;
