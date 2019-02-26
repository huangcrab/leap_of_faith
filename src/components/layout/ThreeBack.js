import React, { Component } from "react";
import * as THREE from "three";
import back from "../../assets/img/spiderverse.svg";
import {
  BloomEffect,
  EffectComposer,
  EffectPass,
  RenderPass
} from "postprocessing";

import "./scene.css";
export default class ThreeBack extends Component {
  static getDerivedStateFromProps(props, state) {}

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
    const effectPass = new EffectPass(
      this.camera,
      new BloomEffect({
        //dithering: true
      })
    );
    effectPass.renderToScreen = true;

    //ADD CUBE
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: "#433F81" });
    // this.cube = new THREE.Mesh(geometry, material);
    // this.scene.add(this.cube);

    let vHeight = 2 * Math.tan(THREE.Math.degToRad(this.camera.fov) / 2) * 5;

    const geometry = new THREE.PlaneBufferGeometry(
      ((vHeight * width) / height) * 1.1,
      vHeight * 1.22,
      100,
      100
    );

    const texture = new THREE.TextureLoader().load(back);
    const material = new THREE.MeshBasicMaterial({
      map: texture
      //wireframe: true
    });
    material.map.minFilter = THREE.LinearFilter;

    this.plane = new THREE.Mesh(geometry, material);

    this.scene.add(this.plane);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.composer.addPass(effectPass);
    this.start();
  }
  componentWillUnmount() {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
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
    this.composer.render(this.scene, this.camera);
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
