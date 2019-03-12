import React, { Component } from "react";

import styled from "styled-components";
import classnames from "classnames";

import { getActionUrl } from "../../apis";
import EditIcon from "../../assets/img/edit.svg";
import ImageIcon from "../../assets/img/image.svg";
import IntegrationIcon from "../../assets/img/integration.svg";
import LanguageIcon from "../../assets/img/language.svg";
import VideoIcon from "../../assets/img/video.svg";

import HistoryDetailItemBody from "./HistoryDetailItemBody";
import DynamicParams from "./DynamicParams";

import { validateContent } from "../helper/Validation";

import { ResultItem } from "./ResultItem";
import axios from "axios";

const Item = styled.li`
  border: none !important;
`;

const CollapsibleHeader = styled.div`
  position: relative;
  border-radius: 8px;
  display: block !important;
  box-shadow: none;
  display: block;
  margin-bottom: 10px;
  padding: 0 !important;
  z-index: 1;
  border-bottom-color: white;

  &.focus {
    border: 1px solid #46adb2;
  }

  & ${ResultItem} {
    margin-bottom: 0;

    &:hover {
      background: #454545;
      color: white;
    }

    & .upper {
      border-bottom: 1px solid #a2d6d8;
      padding-bottom: 3px;
    }

    & .lower {
      color: #fd7f80;
      /* font-weight: bold; */
      padding-top: 2px;
    }

    & .lower .left {
      width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

const CollapsibleBody = styled.div`
  z-index: 0;
  position: relative;
  top: -20px;
  border-radius: 8px;
  background: white;
  border: 1px solid #46adb2;
  box-shadow: none;
`;

class HistoryDetailItem extends Component {
  state = {
    foucs: false,
    content: {},
    loading: false,
    err: "",
    fr: false,
    validation: {
      hasImage: false,
      hasIntegration: false,
      hasOverlay: false,
      hasLink: false
    }
  };

  componentDidMount() {
    if (
      this.props.dynamic !== null &&
      this.props.dynamic.length > 0 &&
      this.props.dynamic[0].key !== ""
    ) {
      this.setState({ validation: { hasIntegration: true } });
    }

    const id = this.props.item_id;
    const apiUrl = getActionUrl("content");
    if (apiUrl) {
      this.setState({ loading: true });
      axios
        .get(`${apiUrl}/getContent/${id}`)
        .then(res => {
          const { body_en } = res.data;
          const { overlay_id } = res.data;
          this.setState({ validation: validateContent(body_en) });

          if (overlay_id !== "") {
            this.setState({
              validation: { ...this.state.validation, hasOverlay: true }
            });
          }

          this.setState({ content: res.data });
          this.setState({ loading: false });
          this.setState({ err: "" });
        })
        .catch(err => {
          this.setState({
            err: err.response ? err.response.data.message : "Network Error"
          });
          this.setState({ content: {} });
          this.setState({ loading: false });
        });
    } else {
      this.setState({ err: "api url does not exist!" });
    }
  }

  onFocusClick = () => {
    this.setState({ focus: !this.state.focus });
  };
  render() {
    const { question, answer } = this.props.item;

    const { focus, content } = this.state;
    const {
      hasImage,
      hasIntegration,
      hasOverlay,
      hasLink
    } = this.state.validation;
    return (
      <Item>
        <CollapsibleHeader
          className={classnames("collapsible-header", focus ? "focus" : "")}
          onClick={this.onFocusClick}
        >
          <ResultItem className="result-item">
            <div className="upper">
              {question}
              <div className="right">
                <div
                  className={classnames(
                    "icon-group",
                    content.content_id ? "" : "disable"
                  )}
                >
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={`https://ae-adminui-bp.int.bell.ca/#/app/2066.663df20f-f401-479f-9639-57e28e349386/snapshot/${
                      content.snapshot_id
                    }/process/${content.block_id}?step=${content.content_id}`}
                  >
                    <img className="icon" src={EditIcon} alt="edit" />
                  </a>

                  <img className="icon" src={LanguageIcon} alt="language" />
                </div>
              </div>
            </div>

            <div className="lower">
              <div className="left">{answer}</div>
              <span className="right">
                <div
                  className={classnames(
                    "icon-group",
                    content.content_id ? "" : "disable"
                  )}
                >
                  {hasIntegration ? (
                    <img
                      className="icon"
                      src={IntegrationIcon}
                      alt="integration"
                    />
                  ) : null}
                  {hasOverlay ? (
                    <img className="icon" src={VideoIcon} alt="overlay" />
                  ) : null}
                  {hasImage ? (
                    <img className="icon" src={ImageIcon} alt="content_image" />
                  ) : null}
                </div>
              </span>
            </div>
          </ResultItem>
        </CollapsibleHeader>
        <CollapsibleBody className="collapsible-body">
          {content != {} ? <HistoryDetailItemBody content={content} /> : null}
          <DynamicParams dynamic={this.props.dynamic} />
        </CollapsibleBody>
      </Item>
    );
  }
}

export default HistoryDetailItem;
