import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import logo from "../../assets/img/logo.svg";
import "./landing.css";
export default class Landing extends Component {
  onMouseEnter = e => {
    console.log(e);
  };
  onMouseLeave = e => {
    console.log(e);
  };

  render() {
    return (
      <div>
        <div className="center brand">
          <img className="brand-img" src={logo} alt="AuthorMaster" />
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
