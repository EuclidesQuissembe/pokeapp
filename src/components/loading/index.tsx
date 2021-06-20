import React from "react";
import ReactLoading from "react-loading";

import { Container } from "./styles";

const Loading: React.FC = () => (
  <Container>
    <ReactLoading type="spin" width={30} height={30} color="#000" />
  </Container>
);

export default Loading;
