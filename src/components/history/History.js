import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import EditIcon from "../../assets/img/edit.svg";
import ImageIcon from "../../assets/img/image.svg";
import IntegrationIcon from "../../assets/img/integration.svg";
import LanguageIcon from "../../assets/img/language.svg";
import VideoIcon from "../../assets/img/video.svg";
import SearchIcon from "../../assets/img/search-solid.svg";
import Prev from "../../assets/img/prev.svg";
import Next from "../../assets/img/next.svg";

import EnvPick from "./EnvPick";
import HistorySearch from "./HistorySearch";
import HistoryMain from "./HistoryMain";

import M from "materialize-css";
import "./history.css";
export default class History extends Component {
  componentDidMount() {
    M.AutoInit();
  }
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
            <div className="history-analytic history-container">
              <div className="center analytic-title">Analytics</div>
              <div className="analytic-data">
                <div className="collection-one collection">
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                </div>
                <div className="collection-two collection">
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                  <div className="collection-item">
                    <span className="badge">15</span>Info:
                  </div>
                </div>

                <div className="step-number center">25</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
