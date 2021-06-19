import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";

import { Props } from "./types";

import * as PokedexActions from "../../store/ducks/pokedex/actions";

import PokedexItem from "./components/pokedexItem";

const Pokedex: React.FC<Props> = ({ data }) => {
  return (
    <>
      {data.pokedexes.map((pokedex) => (
        <PokedexItem key={pokedex.id} data={pokedex} />
      ))}
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.pokedex,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokedexActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
