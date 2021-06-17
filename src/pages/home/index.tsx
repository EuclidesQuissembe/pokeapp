import React from "react";

import PokeItem from "./components/pokeItem";

import { Pokemon } from "./types";

import Navbar from "../../components/navbar/navbar";

import { Row, Col } from "./styles";

const home: React.FC = () => {
  const pokemons: Pokemon[] = [
    {
      id: 11,
      url: "https://pokeapi.co/api/v2/pokemon/11/",
      name: "metapod",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/11.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
    },
    {
      id: 12,
      url: "https://pokeapi.co/api/v2/pokemon/12/",
      name: "butterfree",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/12.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
    },
    {
      id: 13,
      url: "https://pokeapi.co/api/v2/pokemon/13/",
      name: "weedle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/13.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
    },
    {
      id: 14,
      url: "https://pokeapi.co/api/v2/pokemon/14/",
      name: "kakuna",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/14.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
    },
    {
      id: 15,
      url: "https://pokeapi.co/api/v2/pokemon/15/",
      name: "beedrill",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/15.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
    },
    {
      id: 16,
      url: "https://pokeapi.co/api/v2/pokemon/16/",
      name: "pidgey",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/16.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
    },
    {
      id: 17,
      url: "https://pokeapi.co/api/v2/pokemon/17/",
      name: "pidgeotto",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
    },
    {
      id: 18,
      url: "https://pokeapi.co/api/v2/pokemon/18/",
      name: "pidgeot",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/18.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
    },
    {
      id: 19,
      url: "https://pokeapi.co/api/v2/pokemon/19/",
      name: "rattata",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/19.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
    },
    {
      id: 20,
      url: "https://pokeapi.co/api/v2/pokemon/20/",
      name: "raticate",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
      artwork:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/20.png",
      dreamworld:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
    },
  ];
  return (
    <>
      <Navbar />
      <Row>
        {pokemons.map((pokemon) => (
          <Col>
            <PokeItem key={pokemon.id} data={pokemon} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default home;
