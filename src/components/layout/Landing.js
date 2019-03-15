import React, { Component } from "react";

import Navbar from "./Navbar";
import logo from "../../assets/img/logo.svg";

import { setGlitch } from "../../actions/uxActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
//import ThreeBack from "../layout/ThreeBack";

import "./landing.css";
class Landing extends Component {
  onMouseEnter = e => {
    this.props.setGlitch();
  };
  onMouseLeave = e => {
    this.props.setGlitch();
  };

  render() {
    return (
      <div>
        {/* <ThreeBack /> */}
        <div className="center brand-landing">
          <img className="brand-img valign" src={logo} alt="AuthorMaster" />
        </div>
        <Navbar />
        <div className="landing-title">
          <h1 onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            "Leap of Faith"
          </h1>
          <p className="right">--- The power is within you</p>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  setGlitch: PropTypes.func.isRequired
};

export default connect(
  null,
  { setGlitch }
)(Landing);
