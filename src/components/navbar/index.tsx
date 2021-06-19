import React from "react";

import Search from "../search";
import Cart from "../cart";

import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Search />
      <Cart />
    </Container>
  );
};

export default Navbar;
