import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import PokeItem from "./components/pokeItem";
import { ApplicationState } from "../../store/index";
import * as PokemonsActions from "../../store/ducks/pokemons/actions";

import { Props } from "./types";

import { Container, Button, ContainerButton } from "./styles";
import { Row, Col } from "../../styles/styles";

import { useCallback } from "react";
import { Pokemon } from "../../store/ducks/pokemons/types";
import Loading from "../../components/loading";

const Home: React.FC<Props> = ({ data, loadRequest, addToCollection }) => {
  const limit = 50;

  const [offset, setOffset] = useState<number>(0);

  const getPokemons = useCallback(() => {
    loadRequest({ limit, offset });
  }, [offset, loadRequest]);

  useEffect(() => {
    getPokemons();
  }, [offset, getPokemons]);

  function handlePrevPage() {
    if (!data.data.pokemons.previous) return;

    changePage(data.data.pokemons.prevOffset);
  }

  function handleNextPage() {
    if (!data.data.pokemons.next) return;

    changePage(data.data.pokemons.nextOffset);
  }

  function changePage(offset: number) {
    setOffset(offset);
  }

  function addToPokemonCollection(pokemon: Pokemon) {
    addToCollection(pokemon.name);
  }

  if (data.error) return <h1>Erro</h1>;

  return (
    <>
      {data.loading ? (
        <Loading />
      ) : (
        <Container>
          <Row>
            {data.data.pokemons.results.map((res) => (
              <Col key={res.id} sm={12} md={4} lg={4}>
                <PokeItem
                  data={res}
                  addToCollection={() => addToPokemonCollection(res)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      )}
      <ContainerButton>
        <Button onClick={handlePrevPage}>Anterior</Button>
        <Button onClick={handleNextPage}>Próximo</Button>
      </ContainerButton>
    </>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokemonsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
