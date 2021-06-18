import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Navbar from "../../components/navbar/navbar";
import PokeItem from "./components/pokeItem";
import { ApplicationState } from "../../store/index";
import * as PokemonsActions from "../../store/ducks/pokemons/actions";

import { Props } from "./types";

import { Row, Col } from "./styles";

const Home: React.FC<Props> = ({ pokemons }) => {
  return (
    <>
      <Navbar />
      <Row>
        {pokemons.results.map((res) => (
          <Col key={res.id}>
            <PokeItem data={res} />
          </Col>
        ))}
      </Row>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  pokemons: state.pokemons.data.pokemons,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
