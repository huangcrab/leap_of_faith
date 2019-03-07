import React, { Component } from "react";
import Navbar from "../layout/Navbar";

import EnvPick from "./EnvPick";
import HistorySearch from "./HistorySearch";
import HistoryMain from "./HistoryMain";
import HistoryAna from "./HistoryAna";

import "./history.css";
export default class History extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row history">
          <Navbar active="history" logo={true} />
        </div>
        <div className="row history">
          <div className="col s12 m3 history-sections ">
            <div className="history-search history-container">
              <EnvPick />
              <HistorySearch />
            </div>
          </div>
          <div className="col s12 m6 history-sections ">
            <div className="history-main history-container">
              <HistoryMain />
            </div>
          </div>
          <div className=" col s12 m3 history-sections ">
            <HistoryAna />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
