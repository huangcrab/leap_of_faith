import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

import "./navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
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
          <li className={this.props.active === "history" ? "active" : ""}>
            <Link className="white-text" to="/History">
              History
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
