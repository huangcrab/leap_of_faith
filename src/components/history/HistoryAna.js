import React, { Component } from "react";

import { connect } from "react-redux";
import styled from "styled-components";
import { getFullAnalytic } from "../helper/Helper";

class HistoryAna extends Component {
  state = {
    history_detail: {},
    history_detail_loading: false,
    history_detail_id_loading: false
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      history_detail: nextProps.history_detail,
      history_detail_loading: nextProps.history_detail_loading,
      history_detail_id_loading: nextProps.history_detail_id_loading
    };
  }

  render() {
    const { history_detail, history_detail_loading } = this.state;
    return (
      <div className="history-analytic history-container">
        <div className="center analytic-title">Analytics</div>
        <div className="analytic-data">
          <div className="collection-one collection">
            {history_detail.analytic
              ? Object.keys(history_detail.analytic).map(item => {
                  return item !== "integration" ? (
                    <div key={item} className="collection-item">
                      <span className="badge">
                        {history_detail.analytic[item]}
                      </span>
                      {item}:
                    </div>
                  ) : null;
                })
              : null}
          </div>
          <div className="collection-two collection">
            {history_detail.analytic ? (
              <div className="collection-item">
                <span className="badge">
                  {history_detail.analytic.integration}
                </span>
                Integration/Data Step:
              </div>
            ) : null}
            {history_detail.fullAnalytics.length > 0 ? (
              <React.Fragment>
                <div className="collection-item">
                  <span className="badge">
                    {getFullAnalytic("overlay", history_detail.fullAnalytics)}
                  </span>
                  Overlay Step:
                </div>
                <div className="collection-item">
                  <span className="badge">
                    {getFullAnalytic("image", history_detail.fullAnalytics)}
                  </span>
                  Image Step:
                </div>
                <div className="collection-item">
                  <span className="badge">
                    {getFullAnalytic("link", history_detail.fullAnalytics)}
                  </span>
                  Link Step:
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div className="step-number center">
            {!history_detail_loading && history_detail.detail
              ? history_detail.detail.length
              : ""}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history_detail: state.history.history_detail,
  history_detail_loading: state.history.history_detail_loading,
  history_detail_id_loading: state.history.history_detail_id_loading
});

export default connect(
  mapStateToProps,
  {}
)(HistoryAna);
