import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import "./history.css";
export default class History extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar active="history" />
        <div className="row history">
          <div className=" col s12 m3 history-sections ">
            <div className="history-search history-container grey">Search</div>
          </div>
          <div className=" col s12 m6 history-sections ">
            <div className="history-main history-container grey">Search</div>
          </div>
          <div className=" col s12 m3 history-sections ">
            <div className="history-analytic history-container grey">
              Search
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
