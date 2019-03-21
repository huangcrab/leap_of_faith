import React, { Component } from "react";
import back from "../../assets/img/spiderverse.svg";
import styled, { keyframes, css } from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./background.css";

const Glitch = keyframes`
0% {
    background-position: 50% 50%;
    filter: hue-rotate(0deg);
  }
  10% {
    background-position: calc(50% + 5px) 50%;
  }
  20% {
    background-position: calc(50% - 5px) 50%;
  }
  30% {
    background-position: calc(50% + 15px) 50%;
  }
  40% {
    background-position: calc(50% - 5px) 50%;
  }
  50% {
    background-position: calc(50% - 25px) 50%;
  }
  60% {
    background-position: calc(50% - 50px) 50%;
  }
  70% {
    background-position: 50% calc(50% - 20px);
  }
  80% {
    background-position: calc(50% - 60px) calc(50% - 20px);
  }
  81% {
    background-position: 50% 50%;
  }
  100% {
    background-position: 50% 50%;
    filter: hue-rotate(360deg);
  }

`;
const Animation = css`
  animation: ${Glitch} 0.2s linear infinite;
`;
const BackgroundImage = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background: url(${back});
  background-position: 50% 50%;

  &::after {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    ${props => {
      return props.glitch ? Animation : null;
    }};
    ${props => {
      return css`
        animation-delay: ${props.delay}ms;
      `;
    }};

    background: url(${back});
    background-position: 50% 50%;
    opacity: 0.5;
    mix-blend-mode: hard-light;
  }
`;

class Background extends Component {
  state = {
    glitch: false
  };

  constructor(props) {
    super(props);
    this.back = React.createRef();
  }

  static getDerivedStateFromProps(props) {
    return { glitch: props.glitch };
  }

  componentDidMount() {
    window.onmousemove = this.onmousemove;
  }

  componentWillUnmount() {
    window.onmousemove = this.back.onmousemove;
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
    //return <img src={back} alt="back" className="background" ref={this.back} />;
    return (
      <BackgroundImage
        glitch={this.state.glitch}
        delay={Math.random() * 1500}
        className="background-block"
        ref={this.back}
      />
    );
  }
}
Background.proptype = {
  glitch: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({ glitch: state.ux.isGlitch });

export default connect(
  mapStateToProps,
  {}
)(Background);
