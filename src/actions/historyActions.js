import {
  SET_ENV,
  GET_HISTORY_SEARCH,
  HISTORY_SEARCH_LOADING,
  HISTORY_ERROR,
  HISTORY_DETAIL_LOADING,
  GET_HISTORY_DETAIL,
  GET_HISTORY_DETAIL_ID,
  HISTORY_DETAIL_ID_LOADING,
  SET_BASIC_ANALYTICS,
  SET_FULL_ANALYTICS,
  RESET_HISTORY,
  TOKEN_ERROR
} from "./types";

import axios from "axios";
import { getEnvUrl } from "../apis";

export const setEnvironmnet = env => dispatch => {
  dispatch({
    type: SET_ENV,
    payload: env
  });
};

export const resetHistory = () => dispatch => {
  dispatch({
    type: RESET_HISTORY
  });
};

export const getHistoryDetail = (id, info, env, token) => dispatch => {
  dispatch(setHistoryDetailLoading());
  const apiUrl = getEnvUrl(env);
  const option = { headers: { Authorization: "Bearer " + token } };
  axios
    .get(`${apiUrl}/app/GetFlowDetails?flowId=${id}`, option)
    .then(res => {
      dispatch({
        type: GET_HISTORY_DETAIL,
        payload: {
          info: info,
          detail: res.data
        }
      });
      dispatch(pullBasicAnalytics(res.data));
    })
    .catch(err =>
      dispatch({
        type: HISTORY_ERROR,
        payload: { getDetail_err: err.response.data.message }
      })
    );
  dispatch(setHistoryDetailIDLoading());

  axios
    .get(
      `${apiUrl}/CustomerHistory?taskIdAndAcronym=${id}&api_key=undefined`,
      option
    )
    .then(res => {
      dispatch({
        type: GET_HISTORY_DETAIL_ID,
        payload: {
          detail_with_id: res.data
        }
      });
    })
    .catch(err =>
      dispatch({
        type: HISTORY_ERROR,
        payload: { getDetail_err: err.response.data.message }
      })
    );
};

export const getHistorySearch = (id, env, token) => dispatch => {
  if (id === "") {
    dispatch({
      type: HISTORY_ERROR,
      payload: { input_error: "Value can not be empty" }
    });
  } else if (token === "") {
    dispatch({
      type: TOKEN_ERROR,
      payload: { input_error: "Token can not be empty" }
    });
  } else {
    dispatch(setHistorySearchLoading());
    const data = {
      credentials: [id],
      startIndex: 0,
      numberOfRecords: 21
    };

    const apiUrl = getEnvUrl(env);
    const option = { headers: { Authorization: "Bearer " + token } };
    axios
      .post(`${apiUrl}/history/searchCustomerHistory`, data, option)
      .then(res =>
        dispatch({
          type: GET_HISTORY_SEARCH,
          payload: res.data.records
        })
      )
      .catch(err => {
        dispatch({
          type: HISTORY_ERROR,
          payload: { search_err: err.response.data.message }
        });
      });
  }
};

export const updateFullAnalytics = (validation, index) => dispatch => {
  dispatch({
    type: SET_FULL_ANALYTICS,
    id: index,
    payload: validation
  });
};

export const pullBasicAnalytics = data => {
  const result = data
    .map(item => item.type)
    .reduce((acc, item2) => {
      acc[item2] = (acc[item2] || 0) + 1;
      return acc;
    }, {});

  result.integration = data.filter(
    item =>
      item.dynamicContentParameters &&
      item.dynamicContentParameters.length > 0 &&
      item.dynamicContentParameters[0].key !== ""
  ).length;

  return {
    type: SET_BASIC_ANALYTICS,
    payload: { analytic: result }
  };
};

export const setHistorySearchLoading = () => {
  return {
    type: HISTORY_SEARCH_LOADING
  };
};

export const setHistoryDetailLoading = () => {
  return {
    type: HISTORY_DETAIL_LOADING
  };
};

export const setHistoryDetailIDLoading = () => {
  return {
    type: HISTORY_DETAIL_ID_LOADING
  };
};
