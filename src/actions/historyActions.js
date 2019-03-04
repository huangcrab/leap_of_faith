import {
  SET_ENV,
  GET_HISTORY_SEARCH,
  HISTORY_SEARCH_LOADING,
  HISTORY_ERROR,
  HISTORY_INPUT_ERROR,
  HISTORY_DETAIL_LOADING,
  GET_HISTORY_DETAIL,
  GET_HISTORY_DETAIL_ID,
  HISTORY_DETAIL_ID_LOADING
} from "./types";

import axios from "axios";
import { getEnvUrl } from "../apis";

export const setEnvironmnet = env => dispatch => {
  dispatch({
    type: SET_ENV,
    payload: env
  });
};

export const getHistoryDetail = (id, info, env) => dispatch => {
  dispatch(setHistoryDetailLoading());
  const apiUrl = getEnvUrl(env);
  axios
    .get(`${apiUrl}/app/GetFlowDetails?flowId=${id}`, {
      withCredentials: true
    })
    .then(res => {
      dispatch({
        type: GET_HISTORY_DETAIL,
        payload: {
          info: info,
          detail: res.data
        }
      });
    })
    .catch(err =>
      dispatch({
        type: HISTORY_ERROR,
        payload: err.data
      })
    );
  dispatch(setHistoryDetailIDLoading());
  axios
    .get(`${apiUrl}/CustomerHistory?taskIdAndAcronym=${id}&api_key=undefined`, {
      withCredentials: true
    })
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
        payload: err.data
      })
    );
};

export const getHistorySearch = (id, env) => dispatch => {
  if (id === "") {
    dispatch({
      type: HISTORY_INPUT_ERROR,
      payload: "Value can not be empty"
    });
  } else {
    dispatch(setHistorySearchLoading());
    const data = {
      credentials: [id],
      startIndex: 0,
      numberOfRecords: 21
    };

    const apiUrl = getEnvUrl(env);

    axios
      .post(`${apiUrl}/history/searchCustomerHistory`, data, {
        withCredentials: true
      })
      .then(res =>
        dispatch({
          type: GET_HISTORY_SEARCH,
          payload: res.data.records
        })
      )
      .catch(err =>
        dispatch({
          type: HISTORY_ERROR,
          payload: err.data
        })
      );
  }
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
