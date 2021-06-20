/**
 * Modules
 */
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Components
 */
import Loading from "./components/loading";

/**
 * Pages
 */
const Home = lazy(() => import("./pages/home"));
const Detail = lazy(() => import("./pages/detail"));
const Pokedex = lazy(() => import("./pages/pokedex"));
const Search = lazy(() => import("./pages/search"));

const RouteContainer: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Detail />} />
        <Route path="/pokedexes" element={<Pokedex />} />
        <Route path="/pesquisar" element={<Search />} />
      </Routes>
    </Suspense>
  );
};

export default RouteContainer;
