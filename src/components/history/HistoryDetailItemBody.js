import React, { Component } from "react";
import { getLinkUrl } from "../../apis";
import styled from "styled-components";

class HistoryDetailItemBody extends Component {
  state = {
    fr: false
  };

  static getDerivedStateFromProps(nextProps) {
    return { fr: nextProps.fr };
  }

  render() {
    const { content } = this.props;
    const { fr } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">{content.block_name}</div>
          <div className="col s12 m6">{content.step_id}</div>
        </div>
        <div className="row">
          <div className="col s12">
            {fr ? content.body_fr : content.body_en}
          </div>
        </div>
        <div className="row">
          <div className="col s12">Options</div>
        </div>
      </div>
    );
  }
}

export default HistoryDetailItemBody;
