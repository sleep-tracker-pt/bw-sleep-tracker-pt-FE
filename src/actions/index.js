import axios from "axios";
import moment from "moment";

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
      localStorage.setItem("userId", res.data.id);
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

export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";
export const addUser = newUser => dispatch => {
  dispatch({ type: ADD_USER_START });
  axios
    .post("https://sleeptrack.herokuapp.com/api/register", newUser)
    .then(res => {
      console.log(res);
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: ADD_USER_FAILURE,
        payload: err
      })
    );
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
        localStorage.removeItem("userId");
      }
      dispatch({ type: GET_USERS_FAILURE, payload: err.data });
    });
};

export const GET_SLEEPDATA_SUCCESS = "GET_SLEEPDATA_SUCCESS";
export const GET_SLEEPDATA_FETCHING = "GET_SLEEPDATA_FETCHING";
export const GET_SLEEPDATA_FAILURE = "GET_SLEEPDATA_FAILURE";
export const TRANSFORM_SLEEPDATA_TO_GRAPH = "TRANSFORM_SLEEPDATA_TO_GRAPH"

export const getSleepData = () => dispatch => {
  dispatch({ type: GET_SLEEPDATA_FETCHING });
  return axios
    .get(
      `https://sleeptrack.herokuapp.com/api/user/${localStorage.getItem(
        "userId"
      )}`,
      {
        headers: { authorize: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_SLEEPDATA_SUCCESS,
        payload: res.data.sleepData
      });
      const emojify = value => {
        switch (value) {
          case 1:
            return "🙁";
          case 2:
            return "😕";
          case 3:
            return "🙂";
          case 4:
            return "😁";
          default:
            return value;
        }}
        const dateTransform = date => moment(date).toDate();
        const result = res.data.sleepData.map(item => ({
          ...item,
          scale: emojify(item.scale),
          start: dateTransform(item.start)
        }));
      dispatch({
        type: TRANSFORM_SLEEPDATA_TO_GRAPH,
        payload: result
      })
    })



    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
      dispatch({ type: GET_SLEEPDATA_FAILURE, payload: err.data });
    });
};

export const SEND_SLEEPSESSION_SUCCESS = "SEND_SLEEPSESSION_SUCCESS";
export const SLEEPSESSION_SENDING = "SLEEPSESSION_SENDING";
export const SEND_SLEEPSESSION_FAILURE = "SEND_SLEEPSESSION_FAILURE";

export const addNewSession = sleepSession => dispatch => {
  dispatch({ type: SLEEPSESSION_SENDING });
  return axios
    .post(
      "https://sleeptrack.herokuapp.com/api/sleepData",
      {
        userID: localStorage.getItem("userId"),
        start: sleepSession.startDate,
        end: sleepSession.endDate,
        hours: sleepSession.hours,
        scale: sleepSession.selectedMood
      },
      {
        headers: { authorize: localStorage.getItem("token") }
      }
    )
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SEND_SLEEPSESSION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.response.status === 403) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
      dispatch({ type: SEND_SLEEPSESSION_FAILURE, payload: err.response });
    });
};

