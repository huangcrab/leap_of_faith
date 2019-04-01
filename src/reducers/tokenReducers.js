import { UPDATE_TOKEN } from "../actions/types";

const initialState = {
  token: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOKEN:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
