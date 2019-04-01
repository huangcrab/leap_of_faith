import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TokenTimer from "./TokenTimer";
import { updateToken } from "../../actions/tokenActions";
import { extractTime } from "../helper/Helper";

import classnames from "classnames";

class TokenInject extends Component {
  state = {
    token: "",
    countDown: 0
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onTokenClick = () => {
    const { token } = this.state;
    this.props.updateToken(token);
  };

  render() {
    const { token, countDown } = this.state;
    return (
      <>
        <div className="fixed-action-btn">
          <div
            data-target="modal1"
            className={classnames(
              token === "" ? "red" : "green",
              "btn-floating btn-large modal-trigger"
            )}
          >
            <i className="large material-icons">vpn_key</i>
          </div>
        </div>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>Input your key</h4>

            <div className="row">
              <div className="input-field col s12">
                <textarea
                  id="textarea1"
                  className="materialize-textarea"
                  onChange={this.onChange}
                  value={token}
                  name="token"
                />
                <label for="textarea1">Input Your Key</label>
              </div>
            </div>
          </div>
          {token ? <TokenTimer time={extractTime(token)} /> : null}
          <div class="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
              onClick={this.onTokenClick}
            >
              OK
            </a>
          </div>
        </div>
      </>
    );
  }
}

TokenInject.propTypes = {
  updateToken: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  token: state.token.token
});

export default connect(
  mapStateToProps,
  { updateToken }
)(TokenInject);
