import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Spinner from "../helper/Spinner";
import { displayError } from "../helper/Helper";
import HistorySearchItem from "./HistorySearchItem";

const SearchResult = styled.div`
  height: 80%;
  overflow-y: scroll;
  & .result-collection {
    margin-top: 0;
  }
`;
class HistorySearchResult extends Component {
  state = {
    env: "",
    loading_result: false,
    history_search: [],
    error: {}
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      env: nextProps.history.environment,
      error: nextProps.history.error,
      loading_result: nextProps.history.history_search_loading,
      history_search: nextProps.history.history_search,
      token: nextProps.token
    };
  }
  render() {
    const { loading_result, error, history_search, env, token } = this.state;
    return (
      <SearchResult className="search-result col s12">
        {error ? displayError(error) : null}
        {loading_result ? (
          <Spinner />
        ) : (
          <ul className="result-collection">
            {history_search.map((history, index) => (
              <HistorySearchItem
                key={index}
                item={history}
                env={env}
                token={token}
              />
            ))}
          </ul>
        )}
      </SearchResult>
    );
  }
}

HistorySearchResult.propTypes = {
  history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  history: state.history,
  token: state.token.token
});

export default connect(
  mapStateToProps,
  {}
)(HistorySearchResult);
