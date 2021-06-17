import React from "react";
import { Route, Routes } from "react-router-dom";

/**
 * Pages
 */
import Home from "./pages/home";

const RouteContainer: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RouteContainer;
