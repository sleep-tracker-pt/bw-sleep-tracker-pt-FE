import axios from "axios";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = index => dispatch => {
  dispatch({ type: LOGIN_FETCHING });

  return axios
    .post("https://sleeptrack.herokuapp.com/api/login", index)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId",res.data.id)
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err
      });
    });
};

export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_FETCHING = "GET_USERS_FETCHING";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_FETCHING });
  return axios
    .get("https://sleeptrack.herokuapp.com/api/users/", {
      headers: { authorize: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
      }
      dispatch({ type: GET_USERS_FAILURE, payload: err.data });
    });
};
