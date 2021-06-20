import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as PokedexActions from "../../../../store/ducks/pokedex/actions";
import { Pokedex } from "../../../../store/ducks/pokedex/types";

import {
  Container,
  ContainerType,
  Avatar,
  Type,
  Name,
  Amount,
  Remove,
} from "./styles";

interface Props {
  data: Pokedex;
  removeFromCollection: (pokedexId: number) => void;
}

const PokedexItem: React.FC<Props> = ({
  data: pokedex,
  removeFromCollection,
}) => {
  return (
    <Container>
      <Avatar src={pokedex.sprites.front_default} />
      <ContainerType>
        {pokedex.types.map((type) => (
          <Type color={type.type.name}>{type.type.name}</Type>
        ))}
      </ContainerType>
      <Name>{pokedex.name}</Name>
      <Amount>{pokedex.amount}</Amount>
      <Remove onClick={() => removeFromCollection(pokedex.id)}>X</Remove>
    </Container>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokedexActions, dispatch);

export default connect(null, mapDispatchToProps)(PokedexItem);
