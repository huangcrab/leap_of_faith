import React, { Component } from "react";
import { Link } from "react-router-dom";
//import logo_img from "../../assets/img/logo.svg";
import styled from "styled-components";

import "./navbar.css";

const Logo = styled.svg`
  & #Author_Master {
    fill: ${props => (props.color === "black" ? "black" : "white")};
  }
`;

class Navbar extends Component {
  render() {
    const { logo } = this.props;
    return (
      <div className="navbar">
        {logo ? (
          <Link to="/" className="nav-logo left">
            {/* <img className="brand-img" src={logo_img} alt="AuthorMaster" /> */}
            <Logo
              className="brand-img"
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="64"
              viewBox="0 0 246 64"
              color={this.props.color}
            >
              <g
                id="Group_2"
                data-name="Group 2"
                transform="translate(-838 -40)"
              >
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
            </Logo>
          </Link>
        ) : null}

        <ul className="center">
          <li className={this.props.active === "automation" ? "active" : ""}>
            <Link
              className={
                this.props.color === "black" ? "black-text" : "white-text"
              }
              to="/automation"
            >
              Automation
            </Link>
          </li>
          <li className={this.props.active === "content" ? "active" : ""}>
            <Link
              className={
                this.props.color === "black" ? "black-text" : "white-text"
              }
              to="/content"
            >
              Content
            </Link>
          </li>
          <li className={this.props.active === "logic" ? "active" : ""}>
            <Link
              className={
                this.props.color === "black" ? "black-text" : "white-text"
              }
              to="/logic"
            >
              Logic
            </Link>
          </li>
          <li className={this.props.active === "history" ? "active" : ""}>
            <Link
              className={
                this.props.color === "black" ? "black-text" : "white-text"
              }
              to="/History"
            >
              History
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
