import React, { Component } from "react";
import * as THREE from "three";
import back from "../../assets/img/spiderverse.svg";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass,
  GlitchEffect,
  GlitchMode
} from "postprocessing";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./scene.css";
class ThreeBack extends Component {
  state = {
    isGlitch: false
  };

  componentDidMount() {
    window.onresize = this.onWindowResize;
    window.onmousemove = this.onMouseMove;

    this.clock = new THREE.Clock();
    this.mousePosition = {
      x: 0,
      y: 0
    };

    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;
    //ADD SCENE
    this.scene = new THREE.Scene();
    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setClearColor("#000000");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);
    this.composer = new EffectComposer(this.renderer);

    //Post Effect
    this.effectPass = new EffectPass(
      this.camera,
      new BloomEffect({
        //dithering: true
      })
    );
    this.effectPass.renderToScreen = true;
    const glitchEffect = new GlitchEffect();
    //glitchEffect.mode = GlitchMode.CONSTANT_MILD;
    this.glitcheffectPass = new EffectPass(this.camera, glitchEffect);

    //calculate height of the plane
    let vHeight = 2 * Math.tan(THREE.Math.degToRad(this.camera.fov) / 2) * 5;

    const geometry = new THREE.PlaneBufferGeometry(
      ((vHeight * width) / height) * 1.1,
      vHeight * 1.22,
      1,
      1
    );

    const texture = new THREE.TextureLoader().load(back);
    const material = new THREE.MeshBasicMaterial({
      map: texture
    });
    material.map.minFilter = THREE.LinearFilter;

    this.plane = new THREE.Mesh(geometry, material);

    this.scene.add(this.plane);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(this.effectPass);

    this.start();
  }
  componentWillUnmount() {
    this.stop();
    window.onresize = this.mount.onresize;
    this.mount.removeChild(this.composer.domElement);
  }
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isGlitch) {
      this.effectPass.renderToScreen = false;
      this.glitcheffectPass.renderToScreen = true;
      this.composer.addPass(this.glitcheffectPass);
    } else {
      this.composer.removePass(this.glitcheffectPass);
      this.glitcheffectPass.renderToScreen = false;
      this.effectPass.renderToScreen = true;
    }
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  };
  stop = () => {
    cancelAnimationFrame(this.frameId);
  };
  animate = () => {
    // this.plane.rotation.x += 0.01;
    // this.plane.rotation.y += 0.01;

    this.updateCameraPositionRelativeToMouse();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };
  renderScene = () => {
    //this.renderer.render(this.scene, this.camera);
    this.composer.render(this.clock.getDelta());
  };

  onWindowResize = () => {
    const { clientWidth, clientHeight } = this.mount;
    this.camera.aspect = clientWidth / clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(clientWidth, clientHeight);
  };

  onMouseMove = ({ screenX, screenY }) => {
    this.mousePosition.x = screenX - Math.round(this.mount.offsetWidth / 2);
    this.mousePosition.y = screenY - Math.round(this.mount.offsetHeight / 2);
  };

  updateCameraPositionRelativeToMouse = () => {
    this.camera.position.x =
      (this.mousePosition.x * 0.01 - this.camera.position.x) * 0.01;
    this.camera.position.y =
      (-(this.mousePosition.y * 0.01) - this.camera.position.y) * 0.01;
    //this.camera.lookAt(origin);
  };
  render() {
    return (
      <div
        style={{ width: "100vw", height: "100vh" }}
        ref={mount => (this.mount = mount)}
        className="scene"
      />
    );
  }
}

const mapStateToProps = state => ({ isGlitch: state.ux.isGlitch });

export default connect(
  mapStateToProps,
  null
)(ThreeBack);
