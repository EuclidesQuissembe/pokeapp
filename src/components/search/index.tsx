import React from "react";
import { useNavigate } from "react-router";

import { Container, Input } from "./styles";

const Search: React.FC = () => {
  const navigate = useNavigate();

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key.toLowerCase() === "enter") {
      const q = e.currentTarget.value;

      navigate(`/pesquisar?q=${q}`);
    }
  }

  return (
    <Container>
      <Input
        type="text"
        onKeyPress={handleKeyPress}
        placeholder="Search a pokemon"
      />
    </Container>
  );
};

export default Search;
