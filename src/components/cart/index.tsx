import React from "react";
import { connect } from "react-redux";

import { Props } from "./types";
import { ApplicationState } from "../../store";
// import { Container } from './styles';

const Cart: React.FC<Props> = ({ data }) => {
  return <div>{data.pokedexes.length}</div>;
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.pokedex,
});

export default connect(mapStateToProps)(Cart);
