import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as SearchActions from "../../store/ducks/search/actions";
import { ApplicationState } from "../../store";

import { Props } from "./types";

import PokeDetail from "../../components/pokeDeatil";
import Loading from "../../components/loading";

// import { Container } from './styles';

const Search: React.FC<Props> = ({ search, loadRequest }) => {
  const s = useLocation().search;
  const q = new URLSearchParams(s).get("q");

  useEffect(() => {
    loadRequest(q);
  }, [loadRequest, q]);

  if (search.loading) return <Loading />;

  if (search.error) return <h1>Error</h1>;

  return <PokeDetail {...search.data.pokemon} />;
};

const mapStateToProps = (state: ApplicationState) => {
  console.log(state);
  return {
    search: state.search,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SearchActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
