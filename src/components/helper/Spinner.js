import React from "react";
import spinner from "../../assets/loading2.gif";
import styled from "styled-components";

const Spinner = styled.img`
  position: relative;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;

const Overlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
`;

export default () => {
  return (
    <Overlay>
      <Spinner src={spinner} alt="Loading..." />
    </Overlay>
  );
};
