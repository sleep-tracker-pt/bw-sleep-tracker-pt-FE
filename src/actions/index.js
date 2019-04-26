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
      localStorage.setItem("token", res.data);
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
