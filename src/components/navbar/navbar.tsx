import React from "react";

import Search from "../search";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default Navbar;
