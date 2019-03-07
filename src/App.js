import React, { Component } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Landing from "./components/layout/Landing";
import History from "./components/history/History";

import Background from "./components/layout/Background";
//import ThreeBack from "./components/layout/ThreeBack";

import { Provider } from "react-redux";
import store from "./store";

import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {/* <ThreeBack /> */}
            <Background />
            <Route exact path="/" component={Landing} />

            {/* <Route exact path="/content" component={Content} />
          <Route exact path="/logic" component={Logic} /> */}

            <Route exact path="/history" component={History} />

            {/* <Route exact path="/automation" component={Automation} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
