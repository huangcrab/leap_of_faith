import React, { Component } from "react";
import { Markdown } from "react-showdown";
import styled from "styled-components";

const Click = styled.p`
  float: right;
  margin-top: -30px;
  text-decoration: underline;
  &:hover {
    cursor: cell;
  }
`;

class AdditionalInfo extends Component {
  state = {
    show: false,
    fr: false
  };

  static getDerivedStateFromProps(nextProps) {
    return {
      show: nextProps.show,
      fr: nextProps.fr
    };
  }

  toggleDisplay = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { option } = this.props;
    return (
      <React.Fragment>
        <Click onClick={this.toggleDisplay}>
          {this.state.fr ? option.ad_title_fr : option.ad_title_en}
        </Click>
        {this.state.show ? (
          <Markdown
            markup={this.state.fr ? option.ad_body_fr : option.ad_body_en}
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default AdditionalInfo;
