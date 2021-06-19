import React from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Pages
 */
import Home from "./pages/home";
import Pokedex from "./pages/pokedex";

const RouteContainer: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedexes" element={<Pokedex />} />
    </Routes>
  );
};

export default RouteContainer;
