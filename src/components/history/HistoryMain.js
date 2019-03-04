import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import HistoryDetailItem from "./HistoryDetailItem";

const Main = styled.div`
  display: table;
  background: #bcdaf2;
  width: 100%;
  padding: 15px 9px;
`;

const Header = styled.div`
  display: table-row;
  margin: 0;
  padding: 0 8px;
  height: 30px;
  font-weight: bold;
`;

const Footer = styled.div`
  display: table-row;
  height: 30px;
`;

class HistoryMain extends Component {
  state = {
    history_detail: {},
    history_detail_loading: false,
    history_detail_id_loading: false
  };

  static getDerivedStateFromProps(props) {
    return {
      history_detail: props.history_detail,
      history_detail_id_loading: props.history_detail_id_loading,
      history_detail_loading: props.history_detail_loading
    };
  }

  render() {
    const {
      history_detail,
      history_detail_loading,
      history_detail_id_loading
    } = this.state;
    return (
      <React.Fragment>
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
        <div className="history-list">
          <ul className="collapsible">
            {history_detail.detail &&
            !history_detail_loading &&
            !history_detail_id_loading
              ? history_detail.detail.map((item, index) => (
                  <HistoryDetailItem
                    item={item}
                    item_id={history_detail.detail_with_id[index].stepId}
                    dynamic={item.dynamicContentParameters}
                  />
                ))
              : null}
          </ul>
        </div>

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
      </React.Fragment>
    );
  }
}

HistoryMain.propTypes = {
  history_detail: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  history_detail: state.history.history_detail,
  history_detail_loading: state.history.history_detail_loading,
  history_detail_id_loading: state.history.history_detail_id_loading
});

export default connect(
  mapStateToProps,
  {}
)(HistoryMain);
