import React, { Component } from "react";

import { ResultItem } from "./ResultItem";
import PropTypes from "prop-types";
import classnames from "classnames";
import { connect } from "react-redux";
import { getHistoryDetail } from "../../actions/historyActions";

class HistorySearchItem extends Component {
  state = {
    focus: false
  };
  onResultItemClick = () => {
    const { env } = this.props;
    const { item } = this.props;
    const start = new Date(item.bpStartTime);
    const end = new Date(item.bpEndTime);

    const info = {
      flowName: item.flowName,
      snapshotId: item.bpmSnapshotId,
      processId: item.bpmProcessId,
      start: start.toLocaleDateString() + " " + start.toLocaleTimeString(),
      end: end.toLocaleDateString() + " " + end.toLocaleTimeString(),
      agent: item.agentId,
      instance: item.bpmInstanceId,
      bitsType: item.bitsType
    };
    this.setState({ focus: true });
    this.props.getHistoryDetail(item.bpmInstanceId, info, env);
  };

  render() {
    const {
      flowName,
      agentId,
      bitsType,

      bpStartTime
    } = this.props.item;
    const start = new Date(bpStartTime);
    return (
      <ResultItem
        className={classnames(
          bitsType === "FSTECH" ? "field" : "",
          this.state.focus ? "focus" : ""
        )}
        onClick={this.onResultItemClick}
      >
        <div className="upper">
          {flowName}
          <span className="right">{start.toLocaleDateString()}</span>
        </div>

        <div className="lower">
          <span className="right">{agentId}</span>
        </div>
      </ResultItem>
    );
  }
}
HistorySearchItem.propTypes = {
  getHistoryDetail: PropTypes.func.isRequired
};

export default connect(
  null,
  { getHistoryDetail }
)(HistorySearchItem);
