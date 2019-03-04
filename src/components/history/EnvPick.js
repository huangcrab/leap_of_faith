import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";
import { setEnvironmnet } from "../../actions/historyActions";

const EnvSelect = styled.div`
  &.input-field {
    margin: 0;
  }
  & .select-wrapper .select-dropdown {
    color: white;
    border-bottom: 2px solid;
    font-size: 12px;
  }
  & .select-wrapper .dropdown-trigger {
    height: 30px;
  }
  & .select-wrapper .select-dropdown:focus {
    border-bottom: 2px solid var(--secondary-color);
  }
  & .select-wrapper .caret {
    fill: white;
    zoom: 1.5;
  }
`;

class EnvPick extends Component {
  onSelection = e => {
    console.log(e.target.value);
    this.props.setEnvironmnet(e.target.value);
  };

  render() {
    return (
      <EnvSelect className="input-field col s12">
        <select onChange={this.onSelection}>
          <option defaultValue="PROD">Environment: PROD</option>
          <option value="BTE1">Environment: BTE1</option>
          <option value="BTE2">Environment: BTE2</option>
          <option value="AGENT">Environment: AGENT</option>
        </select>
      </EnvSelect>
    );
  }
}

EnvPick.propTypes = {
  setEnvironmnet: PropTypes.func.isRequired
};

export default connect(
  null,
  { setEnvironmnet }
)(EnvPick);
