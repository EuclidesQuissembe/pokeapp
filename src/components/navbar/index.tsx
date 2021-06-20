import React from "react";
import { useNavigate } from "react-router-dom";

import Search from "../search";
import Cart from "../cart";

import ChooseTheme from "../chooseTheme";

import { Container, Center, Home, Right } from "./styles";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Center>
        <Home onClick={() => navigate("/")}>HOME</Home>
        <Right>
          <Search />
          <Cart />
          <ChooseTheme />
        </Right>
      </Center>
    </Container>
  );
};

export default Navbar;
