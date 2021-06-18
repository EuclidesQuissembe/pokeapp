import React from "react";
import { gql, useQuery } from "@apollo/client";

import PokeItem from "./components/pokeItem";

import { Pokemon } from "./types";

import Navbar from "../../components/navbar/navbar";

import { Row, Col } from "./styles";

interface PokemonsResponse {
  count: number;
  next: string;
  previous: string;
  status: boolean;
  results: Pokemon[];
}

interface Pokemons {
  pokemons: PokemonsResponse;
}

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        id
        url
        name
        image
        artwork
        dreamworld
      }
    }
  }
`;
const gqlVariables = {
  limit: 50,
  offset: 1,
};

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<Pokemons>(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <h1>Carregando...</h1>;

  if (error) return <h1>Error.</h1>;

  return (
    <>
      <Navbar />
      <Row>
        {data?.pokemons.results.map((pokemon) => (
          <Col key={pokemon.id}>
            <PokeItem data={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
