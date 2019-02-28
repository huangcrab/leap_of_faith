import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import M from "materialize-css";
import "./history.css";
export default class History extends Component {
  constructor(props) {
    super(props);
  }
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
              <div className="env-pick">
                <div className="input-field col s12 env-select">
                  <select>
                    <option defaultValue="" disabled selected>
                      Choose your Environment
                    </option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </select>
                </div>
              </div>
              {/* <div className="search-bar">search-bar</div>
              <div className="search-result">search-result</div> */}
            </div>
          </div>
          <div className=" col s12 m6 history-sections ">
            <div className="history-main history-container ">Search</div>
          </div>
          <div className=" col s12 m3 history-sections ">
            <div className="history-analytic history-container ">Search</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
