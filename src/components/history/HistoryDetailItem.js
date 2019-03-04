import React, { Component } from "react";

import styled from "styled-components";

import EditIcon from "../../assets/img/edit.svg";
import ImageIcon from "../../assets/img/image.svg";
import IntegrationIcon from "../../assets/img/integration.svg";
import LanguageIcon from "../../assets/img/language.svg";
import VideoIcon from "../../assets/img/video.svg";

const Item = styled.li`
  border: none !important;
`;

class HistoryDetailItem extends Component {
  state = {
    content: {},
    loading: false,
    err: "",
    fr: false
  };

  componentDidMount() {}

  render() {
    const { question, answer } = this.props.item;
    const id = this.props.item_id;
    return (
      <Item>
        <div className="collapsible-header">
          <div className="result-item">
            <div className="upper">
              {question}
              <div className="right">
                <div className="icon-group">
                  <img className="icon" src={EditIcon} alt="edit" />
                  <img className="icon" src={LanguageIcon} alt="language" />
                </div>
              </div>
            </div>

            <div className="lower">
              {answer}
              <span className="right">
                <div className="icon-group">
                  <img
                    className="icon"
                    src={IntegrationIcon}
                    alt="integration"
                  />
                  <img className="icon" src={VideoIcon} alt="overlay" />
                  <img className="icon" src={ImageIcon} alt="image" />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="collapsible-body">
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </Item>
    );
  }
}

export default HistoryDetailItem;
