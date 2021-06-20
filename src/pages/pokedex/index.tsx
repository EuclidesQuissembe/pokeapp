import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { ApplicationState } from "../../store";
import { Line } from "@ant-design/charts";

import { Props } from "./types";

import PokedexItem from "./components/pokedexItem";

import { Container, Header } from "./styles";
import { Row, Col } from "../../styles/styles";

import * as PokedexActions from "../../store/ducks/pokedex/actions";
import { useCallback } from "react";

type Data = {
  type: string;
  total: number;
};

type LineConfig = {
  data: Data[];
  height: number;
  xField: string;
  yField: string;
  point: {
    size: number;
    shape: string;
  };
  label: {
    style: {
      fill: string;
    };
  };
};

const INITIAL_LINE_CONFIG: LineConfig = {
  data: [],
  height: 300,
  xField: "year",
  yField: "value",
  point: {
    size: 5,
    shape: "diamond",
  },
  label: {
    style: {
      fill: "#aaa",
    },
  },
};

const Pokedex: React.FC<Props> = ({ data: { pokedexes } }) => {
  const [config, setConfig] = useState<LineConfig>(INITIAL_LINE_CONFIG);

  const handleChart = useCallback(() => {
    const data: Data[] = [];

    pokedexes.forEach((pokedex) => {
      pokedex.types.forEach(({ type }) => {
        let position = -1;

        for (var i = 0; i < data.length; i++) {
          if (data[i].type === type.name) {
            position = i;
            break;
          }
        }

        if (position >= 0) {
          data[position].total += pokedex.amount;
        } else {
          data.push({
            type: type.name,
            total: pokedex.amount,
          });
        }
      });
    });

    const config = {
      data,
      height: 300,
      xField: "type",
      yField: "total",
      point: {
        size: 5,
        shape: "diamond",
      },
      label: {
        style: {
          fill: "#aaa",
        },
      },
    };

    setConfig(config);
  }, [pokedexes]);

  useEffect(() => {
    handleChart();
  }, [handleChart]);

  return (
    <Container>
      <Header>Pokedex</Header>
      <Line {...config} />
      <Row>
        {pokedexes.map((pokedex) => (
          <Col key={pokedex.id} sm={12} md={6} lg={4}>
            <PokedexItem key={pokedex.id} data={pokedex} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  data: state.pokedex,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(PokedexActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex);
