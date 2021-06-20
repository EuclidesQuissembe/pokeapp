import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { useNavigate } from "react-router";

import { Props } from "./types";
import { ApplicationState } from "../../store";
import * as PokedexActions from "../../store/ducks/pokedex/actions";

import { Container, Button } from "./styles";

const Cart: React.FC<Props> = ({ data, loadFromDB }) => {
  const navigate = useNavigate();

  useEffect(() => {
    loadFromDB();
  }, [loadFromDB]);

  return (
    <Container>
      <Button type="button" onClick={() => navigate("/pokedexes")}>
        Pokedex: {data.pokedexes.length}
      </Button>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.pokedex,
});

const mapDispatchToProps = (dispath: Dispatch) =>
  bindActionCreators(PokedexActions, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
