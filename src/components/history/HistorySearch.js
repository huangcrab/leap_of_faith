import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  resetHistory,
  getHistorySearch,
  getHistoryDetail
} from "../../actions/historyActions";

import SearchIcon from "../../assets/img/search-solid.svg";

import HistorySearchItem from "./HistorySearchItem";

const Searchbar = styled.div`
  margin-bottom: 0 !important;
  & .input-field input[type="text"] {
    height: 20px;
    color: white;
    font-size: 20px;
    padding-bottom: 5px;
  }

  & .input-field input[type="text"]:focus {
    border-bottom: 2px solid var(--secondary-color) !important;
  }

  & img {
    position: relative;
    top: 5px;
    height: 20px;
  }

  & button {
    background: var(--primary-color);
    top: 10px;
  }
`;

const SearchResult = styled.div`
  height: 80%;
  overflow-y: scroll;
  & .result-collection {
    margin-top: 0;
  }
`;

class HistorySearch extends Component {
  state = {
    env: "",
    tn: "",
    loading_result: false,
    history_search: [],
    error: {}
  };

  componentDidMount() {
    this.setState({ env: this.props.history.environment });
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      env: nextProps.history.environment,
      error: nextProps.history.error,
      loading_result: nextProps.history.history_search_loading,
      history_search: nextProps.history.history_search
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSearchClick = () => {
    this.props.resetHistory();

    if (this.state.tn.indexOf("-") !== -1) {
      this.props.getHistoryDetail(this.state.tn, {}, this.state.env);
    } else {
      this.props.getHistorySearch(this.state.tn, this.state.env);
    }
  };

  render() {
    const { tn, loading_result, error, history_search, env } = this.state;
    return (
      <React.Fragment>
        <Searchbar className="col s12 center row">
          <div className="input-field col s9 ">
            <input
              type="text"
              name="tn"
              required
              value={tn}
              onChange={this.onChange}
            />
          </div>
          <div className="col s2">
            <button
              className="btn waves-effect waves-light"
              onClick={this.onSearchClick}
            >
              <img src={SearchIcon} alt="search" />
            </button>
          </div>
        </Searchbar>

        <SearchResult className="search-result col s12">
          <ul className="result-collection">
            {loading_result
              ? "Loading"
              : history_search.map((history, index) => (
                  <HistorySearchItem key={index} item={history} env={env} />
                ))}
          </ul>
        </SearchResult>
      </React.Fragment>
    );
  }
}

HistorySearch.propTypes = {
  history: PropTypes.object.isRequired,
  getHistoryDetail: PropTypes.func.isRequired,
  getHistorySearch: PropTypes.func.isRequired,
  resetHistory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  history: state.history
});

export default connect(
  mapStateToProps,
  { getHistoryDetail, getHistorySearch, resetHistory }
)(HistorySearch);
