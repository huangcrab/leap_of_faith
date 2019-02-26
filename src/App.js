import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/layout/Landing";
import History from "./components/history/History";
import Logic from "./components/logic/Logic";
import Background from "./components/layout/Background";
import ThreeBack from "./components/layout/ThreeBack";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ThreeBack />
          {/* <Background /> */}
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/content" component={Content} />
          <Route exact path="/logic" component={Logic} /> */}
          <Route exact path="/history" component={History} />
          {/* <Route exact path="/automation" component={Automation} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
