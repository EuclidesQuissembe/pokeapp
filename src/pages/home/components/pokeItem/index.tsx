import React from "react";

import { Pokemon } from "../../../../store/ducks/pokemons/types";

import { Container, Name, Avatar, Button } from "./styles";

interface Props {
  data: Pokemon;
  addToCollection: (pokenName: string) => void;
}

const PokeItem: React.FC<Props> = ({
  data: { name, dreamworld },
  addToCollection,
}) => {
  return (
    <Container>
      <Avatar src={dreamworld} alt={name} />
      <Name>{name}</Name>
      <Button onClick={() => addToCollection(name)}>Colecionar</Button>
    </Container>
  );
};

export default PokeItem;
