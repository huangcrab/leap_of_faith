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
  RESET_HISTORY
} from "./types";

import axios from "axios";
import { getEnvUrl } from "../apis";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtpZC1ibHVlcHJpbnRzIn0.eyJzdWIiOiJCZWxsXFxiNjcyMjEiLCJqdGkiOiJmZmQ5M2ZmMi1jYzQyLTRlNTQtYjBjMS1lNTQ3Nzg1MTQzMzEiLCJpYXQiOjE1NTM2MDgwNDQsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJCZWxsXFxiNjcyMjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQkxVRVBSSU5UU19BR0VOVCIsIkJMVUVQUklOVFNfQVVUSE9SIl0sIm5iZiI6MTU1MzYwODA0NCwiZXhwIjoxNTUzNjA4MzQ0LCJpc3MiOiJCUEkiLCJhdWQiOiJCUEkiLCJhZEdyb3VwcyI6WyJCUF9BVVRIT1JfRlNfQlRTX1dSSVRFIiwiQlBfQVVUSE9SX0ZJRUxEU0VSVklDRVNfV1JJVEUiLCJCUF9BVVRIT1JfRklFTERTRVJWSUNFU19SRUFEIiwiQlBfQUdFTlRfQURHUk9VUFRFU1QiLCJCUF9BR0VOVF9UQ1NQRUNJQUxQUk9KRUNUMyIsIkJQX0FHRU5UX0JVU05BVCIsIkJQX0FHRU5UX0JUU19DUk9SUVIiLCJCUF9BR0VOVF9CVFMiLCJCUF9BR0VOVF9QSUxPVDEyIiwiQlBfQUdFTlRfRklFTERTRVJWSUNFUyIsIkJQX0FVVEhPUl9GSUVMRFNFUlZJQ0VTIl0sImdpdmVuTmFtZSI6IlhpZSIsInN1ck5hbWUiOiJIdWFuZyIsInByZWZlcnJlZExhbmd1YWdlIjoiRU4iLCJlbXBsb3llZU51bWJlciI6IjQzNjcyMjEiLCJsZWdhY3lQZWluIjoiQjY3MjIxIn0.pc5_cbQvCM1MjG9R_G7RLgsNxfLAK5g79t4YQQhBFLw";

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

export const getHistoryDetail = (id, info, env) => dispatch => {
  dispatch(setHistoryDetailLoading());
  const apiUrl = getEnvUrl(env);
  const option =
    env === "PROD"
      ? { withCredentials: true }
      : { headers: { Authorization: "Bearer " + token } };
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
        payload: { getDetail_err: err.response.data }
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
        payload: { getDetail_err: err.response.data }
      })
    );
};

export const getHistorySearch = (id, env) => dispatch => {
  if (id === "") {
    dispatch({
      type: HISTORY_ERROR,
      payload: { input_error: "Value can not be empty" }
    });
  } else {
    dispatch(setHistorySearchLoading());
    const data = {
      credentials: [id],
      startIndex: 0,
      numberOfRecords: 21
    };

    const apiUrl = getEnvUrl(env);
    const option =
      env === "PROD"
        ? { withCredentials: true }
        : { headers: { Authorization: "Bearer " + token } };
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
          payload: { search_err: err.response.data }
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
