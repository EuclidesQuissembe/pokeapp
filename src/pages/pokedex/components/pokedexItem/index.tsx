import React from "react";

import { Pokedex } from "../../../../store/ducks/pokedex/types";

// import { Container } from './styles';

interface Props {
  data: Pokedex;
}

const PokedexItem: React.FC<Props> = ({ data: pokedex }) => {
  return <h1>{pokedex.name}</h1>;
};

export default PokedexItem;
