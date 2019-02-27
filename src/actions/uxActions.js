import { SET_GLITCH } from "./types";

export const setGlitch = () => dispatch => {
  dispatch({
    type: SET_GLITCH
  });
};
