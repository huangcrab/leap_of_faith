import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import M from "materialize-css";

import HistoryDetailItem from "./HistoryDetailItem";
import Spinner from "../helper/Spinner";

const Main = styled.div`
  display: table;
  background: #bcdaf2;
  width: 100%;
  height: 100%;
  padding: 0px 9px;
`;

const Header = styled.div`
  display: table-row;
  margin: 0;
  padding: 0 8px;
  height: 30px;
  font-weight: bold;
`;

const Collapsible = styled.ul`
  border: none !important;
  box-shadow: none !important;
  border-radius: 8px;

  & li {
    border: none !important;
  }
`;

const HistoryList = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 0 9px;
`;

const Footer = styled.div`
  display: table-row;
  height: 30px;
  & .left-align,
  & .right-align {
    padding-top: 8px !important;
  }
`;

class HistoryMain extends Component {
  state = {
    history_detail: {},
    history_detail_loading: false,
    history_detail_id_loading: false
  };

  constructor(props) {
    super(props);
    this.collapse = React.createRef();
  }

  componentDidMount() {
    M.Collapsible.init(this.collapse.current, {
      accordion: false
    });
  }

  static getDerivedStateFromProps(props) {
    return {
      history_detail: props.history_detail,
      history_detail_id_loading: props.history_detail_id_loading,
      history_detail_loading: props.history_detail_loading,
      token: props.token
    };
  }

  render() {
    const {
      history_detail,
      history_detail_loading,
      history_detail_id_loading,
      token
    } = this.state;
    return (
      <Main>
        <Header className="row">
          {history_detail.info ? (
            <React.Fragment>
              <div className="col s12 m4 left-align">
                {history_detail.info.flowName}
              </div>
              <div className="col s12 m4 center-align">
                {history_detail.info.instance}
              </div>
              <div className="col s12 m4 right-align">
                {history_detail.info.agent}
              </div>
            </React.Fragment>
          ) : null}
        </Header>
        <HistoryList className="history-list">
          {history_detail_loading || history_detail_id_loading ? (
            <Spinner />
          ) : null}
          <Collapsible className="collapsible" ref={this.collapse}>
            {history_detail.detail &&
            !history_detail_loading &&
            !history_detail_id_loading
              ? history_detail.detail.map((item, index) => (
                  <HistoryDetailItem
                    key={index}
                    item={item}
                    item_id={history_detail.detail_with_id[index].stepId}
                    dynamic={item.dynamicContentParameters}
                    token={token}
                  />
                ))
              : null}
          </Collapsible>
        </HistoryList>

        <Footer className="row footer">
          {history_detail.info ? (
            <React.Fragment>
              <div className="col s12 m6 left-align ">
                {history_detail.info.start}
              </div>
              <div className="col s12 m6 right-align ">
                {history_detail.info.end}
              </div>
            </React.Fragment>
          ) : null}
        </Footer>
      </Main>
    );
  }
}

HistoryMain.propTypes = {
  history_detail: PropTypes.object.isRequired,
  history_detail_loading: PropTypes.bool.isRequired,
  history_detail_id_loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  history_detail: state.history.history_detail,
  history_detail_loading: state.history.history_detail_loading,
  history_detail_id_loading: state.history.history_detail_id_loading,
  token: state.token.token
});

export default connect(
  mapStateToProps,
  {}
)(HistoryMain);
