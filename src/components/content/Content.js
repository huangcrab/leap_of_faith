import React, { Component } from "react";
import Navbar from "../../components/layout/Navbar";
import styled from "styled-components";
import classnames from "classnames";

const Row = styled.div`
  width: 95%;
`;

const Grid = styled.div`
  display: grid;
  position: relative;
  margin-top: 20%;
  left: -10%;

  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto;
  grid-gap: 1rem;
  transform: rotate(-45deg);

  & .grid-item {
    margin: 0;
    font-size: 5vh;
    border-bottom: 2px solid;
    transition: all 200ms ease-in-out;
  }

  & .grid-item:hover {
    transform: scale(1.2, 1.2);
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  & .grid-item.activated {
    color: var(--primary-color);
    transform: scale(1.2, 1.2);
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  }

  & .grid-item:nth-child(1) {
    grid-column: 3 /4;
    grid-row: 3/4;
    transform: rotate(45deg);
    transform-origin: center;
    text-align: center;
  }

  & .grid-item:nth-child(2) {
    grid-column: 2 /3;
    grid-row: 1/4;
    writing-mode: vertical-lr;
    justify-self: end;
    text-align: right;
  }

  & .grid-item:nth-child(3) {
    grid-column: 3/6;
    grid-row: 2/3;
  }

  & .grid-item:nth-child(4) {
    grid-column: 4/5;
    grid-row: 3/6;
    writing-mode: vertical-lr;
  }

  & .grid-item:nth-child(5) {
    grid-column: 1/4;
    grid-row: 4/5;
    justify-self: end;
  }

  & .grid-item:nth-child(6) {
    grid-column: 3/6;
    grid-row: 1/2;
    writing-mode: vertical-lr;
    justify-self: start;
    margin-top: 0;
  }
`;

const Control = styled.div``;

class Content extends Component {
  state = {
    checkAll: false,
    search: "",
    hasLink: false,
    hasImage: false,
    hasMarkdown: false,
    hasOverlay: false,
    hasIntegration: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onOverlayClick = () => {
    this.setState({ hasOverlay: !this.state.hasOverlay });
  };
  onIntegrationClick = () => {
    this.setState({ hasIntegration: !this.state.hasIntegration });
  };
  onImageClick = () => {
    this.setState({ hasImage: !this.state.hasImage });
  };
  onLinkClick = () => {
    this.setState({ hasLink: !this.state.hasLink });
  };
  onMarkdownClick = () => {
    this.setState({ hasMarkdown: !this.state.hasMarkdown });
  };

  render() {
    const {
      search,
      hasLink,
      hasImage,
      hasMarkdown,
      hasIntegration,
      hasOverlay
    } = this.state;

    return (
      <>
        <Row className="row">
          <Navbar active="content" logo={true} color="black" />
        </Row>
        <div className="row">
          <div className="col s12 m2 l4 control">
            <div className="row">
              <div className="input-field">
                <input
                  type="text"
                  name="search"
                  value={search}
                  onChange={this.onChange}
                />
              </div>
            </div>
            <div className="row">
              <Grid className="selection-grid">
                <div />
                <div
                  onClick={this.onOverlayClick}
                  className={classnames(
                    "grid-item",
                    hasOverlay ? "activated" : ""
                  )}
                >
                  Overlay
                </div>
                <div
                  onClick={this.onImageClick}
                  className={classnames(
                    "grid-item",
                    hasImage ? "activated" : ""
                  )}
                >
                  Image
                </div>
                <div
                  onClick={this.onMarkdownClick}
                  className={classnames(
                    "grid-item",
                    hasMarkdown ? "activated" : ""
                  )}
                >
                  Markdown
                </div>
                <div
                  onClick={this.onIntegrationClick}
                  className={classnames(
                    "grid-item",
                    hasIntegration ? "activated" : ""
                  )}
                >
                  Integration
                </div>
                <div
                  onClick={this.onLinkClick}
                  className={classnames(
                    "grid-item",
                    hasLink ? "activated" : ""
                  )}
                >
                  Link
                </div>
              </Grid>
            </div>
          </div>
          <div className="col s12 m10 l8">{"Content"}</div>
        </div>
      </>
    );
  }
}

export default Content;
