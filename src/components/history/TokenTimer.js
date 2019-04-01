import React, { Component } from "react";
import Timer from "react-compound-timer";

class TokenTimer extends Component {
  render() {
    console.log(this.props.time);
    //console.log(Math.round(new Date().getTime() / 1000);

    const time = this.props.time - Math.round(new Date().getTime() / 1000);
    return (
      <Timer initialTime={1554152600} direction="backward">
        {() => (
          <React.Fragment>
            <Timer.Seconds /> seconds
          </React.Fragment>
        )}
      </Timer>
    );
  }
}

export default TokenTimer;
