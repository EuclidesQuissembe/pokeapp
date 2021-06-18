import React from "react";

import { Pokemon } from "../../../../store/ducks/pokemons/types";

import { Container, Name, Avatar, Button } from "./styles";

interface Props {
  data: Pokemon;
}

const PokeItem: React.FC<Props> = ({ data: { name, dreamworld } }) => {
  return (
    <Container>
      <Avatar src={dreamworld} alt={name} />
      <Name>{name}</Name>
      <Button>Adicionar ao carrinho</Button>
    </Container>
  );
};

export default PokeItem;
