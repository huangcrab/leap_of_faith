import React, { Component } from "react";

import styled from "styled-components";
import { parseContent } from "../helper/Helper";
import AdditionalInfo from "./AdditionalInfo";

const Main = styled.div`
  color: black;
  font-size: 12px;
`;

const Option = styled.div`
  position: relative;

  & ::after {
    content: "";
    position: absolute;
    display: block;
    top: 7px;
    left: -15px;
    height: 5px;
    width: 10px;
    border-radius: 8px;
    background-color: #fd7f80;
  }
`;

const Bottom = styled.div`
  border-top: 2px dashed #a2d6d8;
  padding: 5px;
`;

const Top = styled.div`
  margin-top: -22px;
  font-size: 12px;
  background: #bcdaf2;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Middle = styled.div``;

class HistoryDetailItemBody extends Component {
  state = {
    fr: false
  };

  static getDerivedStateFromProps(nextProps) {
    return { fr: nextProps.fr };
  }

  render() {
    const { content, type } = this.props;
    const { fr } = this.state;
    const body = fr ? content.body_fr : content.body_en;

    return (
      <Main>
        <Top className="row top">
          <div className="col s12 m6">{content.block_name}</div>
          <div className="col s12 m6">{content.step_id}</div>
        </Top>
        <Middle className="row">
          <div className="col s12">
            {parseContent(body, content.is_markdown)}
          </div>
        </Middle>
        <Bottom className="row">
          <div className="col s12">
            {content.options && content.options.length > 0
              ? content.options.map((option, index) => (
                  <Option key={index}>
                    {fr
                      ? parseContent(option.option_body_fr, content.is_markdown)
                      : parseContent(
                          option.option_body_en,
                          content.is_markdown
                        )}
                    <AdditionalInfo fr={fr} option={option} />
                  </Option>
                ))
              : type + " Step"}
          </div>
        </Bottom>
      </Main>
    );
  }
}

export default HistoryDetailItemBody;
