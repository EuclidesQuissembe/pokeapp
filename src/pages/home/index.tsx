import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PokeItem from "./components/pokeItem";
import { ApplicationState } from "../../store/index";
import * as PokemonsActions from "../../store/ducks/pokemons/actions";

import { Props } from "./types";

import { Container, Row, Col, Button } from "./styles";
import { useCallback } from "react";
import { Pokemon } from "../../store/ducks/pokemons/types";

const Home: React.FC<Props> = ({ data, loadRequest, addToCollection }) => {
  const limit = 100;

  const [offset, setOffset] = useState<number>(0);
  const [page, setPage] = useState<number>(0);

  const getPokemons = useCallback(() => {
    loadRequest({ limit, offset });
  }, [offset, loadRequest]);

  useEffect(() => {
    getPokemons();
  }, [offset, getPokemons]);

  function handlePrevPage() {
    if (!data.data.pokemons.previous) return;

    changePage(page - 1);
  }

  function handleNextPage() {
    if (!data.data.pokemons.next) return;

    changePage(page + 1);
  }

  function changePage(p: number) {
    setOffset(limit * p);
    setPage(p);
  }

  function addToPokemonCollection(pokemon: Pokemon) {
    addToCollection(pokemon.name);
  }

  if (data.error) return <h1>Erro</h1>;

  return (
    <>
      <Navbar />
      {data.loading ? (
        <h1>Carregando...</h1>
      ) : (
        <Container>
          <Row>
            {data.data.pokemons.results.map((res) => (
              <Col key={res.id} onClick={() => addToPokemonCollection(res)}>
                <PokeItem data={res} />
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <Button onClick={handlePrevPage}>Anterior</Button>
      <Button onClick={handleNextPage}>Próximo</Button>
      <Footer />
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
