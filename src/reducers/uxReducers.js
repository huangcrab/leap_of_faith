import { SET_GLITCH } from "../actions/types";

const initialState = {
  isGlitch: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GLITCH:
      return {
        ...state,
        isGlitch: !state.isGlitch
      };
    default:
      return state;
  }
}
