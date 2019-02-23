import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.svg";
import "./landing.css";
export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="row center brand">
          <img src={logo} alt="AuthorMaster" />
        </div>
        <div className="row navbar">
          <ul className="center">
            <li>
              <Link className="white-text" to="/automation">
                Automation
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/content">
                Content
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/logic">
                Logic
              </Link>
            </li>
            <li>
              <Link className="white-text" to="/History">
                History
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
