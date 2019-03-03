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
              <div className="env-pick">
                <div className="input-field col s12 env-select center">
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
              <div className="search-bar col s12 center row">
                <div className="input-field inline history-search-bar col s6 offset-s2">
                  <input type="text" required />
                </div>
                <div className="col s2">
                  <img src={SearchIcon} alt="search" className="search-icon" />
                </div>
              </div>
              <div className="search-result col s12">
                <ul className="result-collection">
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item focus">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                  <li className="result-item field">
                    <div className="upper">
                      FTTH Assurance<span className="right">2/21/2019</span>
                    </div>

                    <div className="lower">
                      <span className="right">BELL\b67221</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* <div className="search-pagination">
                <div className="prev left">
                  <img src={Prev} alt="prev" />
                </div>
                <div className="next right">
                  <img src={Next} alt="next" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="col s12 m6 history-sections ">
            <div className="history-main history-container">
              <div className="header row">
                <div className="col s12 m4 left-align">FTTH Assruance</div>
                <div className="col s12 m4 center-align">02-97365471823</div>
                <div className="col s12 m4 right-align">BELL\B67221</div>
              </div>
              <div className="history-list">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header focus">
                      <div className="result-item">
                        <div className="upper">
                          Do you want to see the Blueprint with or without
                          Integration?
                          <div className="right">
                            <div className="icon-group">
                              <img className="icon" src={EditIcon} alt="edit" />
                              <img
                                className="icon"
                                src={LanguageIcon}
                                alt="language"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="lower">
                          With
                          <span className="right">
                            <div className="icon-group">
                              <img
                                className="icon"
                                src={IntegrationIcon}
                                alt="integration"
                              />
                              <img
                                className="icon"
                                src={VideoIcon}
                                alt="overlay"
                              />
                              <img
                                className="icon"
                                src={ImageIcon}
                                alt="image"
                              />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="collapsible-body">
                      <span>Lorem ipsum dolor sit amet.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="row footer">
                <div className="col s12 m6 left-align ">FTTH Assruance</div>
                <div className="col s12 m6 right-align ">BELL\B67221</div>
              </div>
            </div>
          </div>
          <div className=" col s12 m3 history-sections ">
            <div className="history-analytic history-container">Search</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
