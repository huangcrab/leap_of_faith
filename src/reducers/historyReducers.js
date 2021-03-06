import {
  SET_ENV,
  GET_HISTORY_SEARCH,
  HISTORY_SEARCH_LOADING,
  HISTORY_ERROR,
  HISTORY_DETAIL_LOADING,
  HISTORY_DETAIL_ID_LOADING,
  GET_HISTORY_DETAIL_ID,
  GET_HISTORY_DETAIL,
  SET_BASIC_ANALYTICS,
  RESET_HISTORY,
  SET_FULL_ANALYTICS
} from "../actions/types";

const initialState = {
  environment: "PROD",
  history_search: [],
  history_detail: { fullAnalytics: [] },
  history_search_loading: false,
  history_detail_loading: false,
  history_detail_id_loading: false,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_HISTORY:
      return {
        ...state,
        history_search: [],
        history_detail: {
          fullAnalytics: []
        },
        error: {}
      };

    case HISTORY_ERROR:
      return {
        ...state,
        error: { ...state.error, ...action.payload },
        history_search_loading: false,
        history_detail_loading: false,
        history_detail_id_loading: false
      };
    case SET_ENV:
      return {
        ...state,
        error: {},
        environment: action.payload
      };
    case HISTORY_DETAIL_LOADING:
      return {
        ...state,
        history_detail_loading: true
      };
    case HISTORY_DETAIL_ID_LOADING:
      return {
        ...state,
        history_detail_id_loading: true
      };
    case HISTORY_SEARCH_LOADING:
      return {
        ...state,
        history_search_loading: true
      };
    case GET_HISTORY_SEARCH:
      return {
        ...state,
        history_search: action.payload,
        history_search_loading: false
      };
    case GET_HISTORY_DETAIL:
      return {
        ...state,
        history_detail: {
          ...state.history_detail,
          ...action.payload,
          fullAnalytics: []
        },
        history_detail_loading: false
      };
    case GET_HISTORY_DETAIL_ID:
      return {
        ...state,
        history_detail: {
          ...state.history_detail,
          ...action.payload
        },
        history_detail_id_loading: false
      };
    case SET_BASIC_ANALYTICS:
      return {
        ...state,
        history_detail: {
          ...state.history_detail,
          ...action.payload
        }
      };

    case SET_FULL_ANALYTICS: {
      const x = state.history_detail.fullAnalytics;
      console.log(state.history_detail.fullAnalytics);
      x.push(action.payload);

      return {
        ...state,
        history_detail: { ...state.history_detail, fullAnalytics: x }
      };
    }

    default:
      return state;
  }
}
