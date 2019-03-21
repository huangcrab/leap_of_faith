import React, { Component } from "react";

import Navbar from "./Navbar";
import logo from "../../assets/img/logo.svg";

import { setGlitch } from "../../actions/uxActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Backgound from "./Background";

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
      <>
        <Backgound />
        <div className="center brand-landing">
          {/* <img className="brand-img valign" src={logo} alt="AuthorMaster" /> */}
          <svg
            className="brand-img"
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="64"
            viewBox="0 0 246 64"
          >
            <g id="Group_2" data-name="Group 2" transform="translate(-838 -40)">
              <g id="Group_1" data-name="Group 1">
                <text
                  id="Author_Master"
                  data-name="Author Master"
                  transform="translate(842 56)"
                  fill="#fff"
                  font-size="30"
                  font-family="Arial-BoldMT, Arial"
                  font-weight="700"
                >
                  <tspan x="16.825" y="27">
                    Author Master
                  </tspan>
                </text>
                <rect
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  width="9"
                  height="46"
                  rx="4.5"
                  transform="translate(838 57)"
                  fill="#fb0102"
                />
                <path
                  id="Path_12"
                  data-name="Path 12"
                  d="M4.5,0A4.5,4.5,0,0,1,9,4.5v113a4.5,4.5,0,0,1-9,0V4.5A4.5,4.5,0,0,1,4.5,0Z"
                  transform="translate(960 95) rotate(90)"
                  fill="#fc0002"
                />
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M4.5,0A4.5,4.5,0,0,1,9,4.5v113a4.5,4.5,0,0,1-9,0V4.5A4.5,4.5,0,0,1,4.5,0Z"
                  transform="translate(1084 40) rotate(90)"
                  fill="#00ffed"
                />
                <path
                  id="Path_3"
                  data-name="Path 3"
                  d="M4.5,0A4.5,4.5,0,0,1,9,4.5v37a4.5,4.5,0,0,1-9,0V4.5A4.5,4.5,0,0,1,4.5,0Z"
                  transform="translate(1075 40)"
                  fill="#00ffed"
                />
              </g>
            </g>
          </svg>
        </div>
        <Navbar />
        <div className="landing-title">
          <h1 onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
            "Leap of Faith"
          </h1>
          <p className="right">--- The power is within you</p>
        </div>
      </>
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
