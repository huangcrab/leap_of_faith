import React, { Component } from "react";
import back from "../../assets/img/spiderverse.svg";
import "./background.css";

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.back = React.createRef();
  }

  componentDidMount() {
    window.onmousemove = this.onmousemove;
  }

  onmousemove = e => {
    const pageX = e.pageX - Math.round(this.back.current.offsetWidth / 2);
    const pageY = e.pageY - Math.round(this.back.current.offsetHeight / 2);

    const newvalueX =
      (25 / this.back.current.width) * pageX * -1 +
      Math.round(this.back.current.offsetWidth / 2) -
      (this.back.current.width / 2 - window.innerWidth / 2);
    const newvalueY =
      (25 / this.back.current.height) * pageY * -1 +
      Math.round(this.back.current.offsetHeight / 2) -
      (this.back.current.height / 2 - window.innerHeight / 2);
    //console.log(newvalueX, newvalueY);

    this.back.current.style.left = newvalueX + "px";
    this.back.current.style.top = newvalueY + "px";
    //this.back.current.style.positionY = newvalueY + "px";
    //this.back.currentSrc.style.backgroundPositionY = newvalueY;
    //this.back.css("background-position", newvalueX + "px  " + newvalueY + "px");
  };
  render() {
    return <img src={back} alt="back" className="background" ref={this.back} />;
  }
}
