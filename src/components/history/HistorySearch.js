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

import HistorySearchResult from "./HistorySearchResult";

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

class HistorySearch extends Component {
  state = {
    env: "",
    tn: "",
    token: ""
  };

  componentDidMount() {
    this.setState({ env: this.props.history.environment });
  }

  static getDerivedStateFromProps(nextProps) {
    return {
      env: nextProps.history.environment,
      token: nextProps.token
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSearchClick = () => {
    this.props.resetHistory();
    const { tn, env, token } = this.state;

    if (this.state.tn.indexOf("-") !== -1) {
      this.props.getHistoryDetail(tn, {}, env, token);
    } else {
      this.props.getHistorySearch(tn, env, token);
    }
  };

  render() {
    const { tn } = this.state;
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

        <HistorySearchResult />
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
  history: state.history,
  token: state.token.token
});

export default connect(
  mapStateToProps,
  { getHistoryDetail, getHistorySearch, resetHistory }
)(HistorySearch);
