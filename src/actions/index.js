import axios from "axios";
import moment from "moment";

export const LOGOUT = "LOGOUT";

export const logout = res => dispatch => {
  localStorage.removeItem("token");
  // localStorage.removeItem("userId", res.data.id);
  dispatch({ type: LOGOUT });
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const loginSuccess = index => dispatch => {
  dispatch({ type: LOGIN_FETCHING });

  return axios
    .post("https://sleeptrack.herokuapp.com/api/login", index)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.id);
      alert("Logged in");
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      alert("invalid username or password");
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.message
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
      alert("Yay Success!");
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      alert("something went wrong please try again");
      dispatch({
        type: ADD_USER_FAILURE,
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
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
      dispatch({ type: GET_USERS_FAILURE, payload: err.data });
    });
};

export const GET_SLEEPDATA_SUCCESS = "GET_SLEEPDATA_SUCCESS";
export const GET_SLEEPDATA_FETCHING = "GET_SLEEPDATA_FETCHING";
export const GET_SLEEPDATA_FAILURE = "GET_SLEEPDATA_FAILURE";
export const TRANSFORM_SLEEPDATA_TO_GRAPH = "TRANSFORM_SLEEPDATA_TO_GRAPH";
export const APPLY_RECENT_FILTER = "APPLY_RECENT_FILTER";
export const GET_USERDATA = "GET_USERDATA";

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
      dispatch({
        type: GET_SLEEPDATA_SUCCESS,
        payload: res.data.sleepData
      });
      const emojify = value => {
        switch (value) {
          case "1":
            return "🙁";
          case "2":
            return "😕";
          case "3":
            return "🙂";
          case "4":
            return "😁";
          default:
            return value;
        }
      };
      const dateTransform = date =>
        moment(date, "YYYY-MM-DD HH:mm").format("YYYY-MM-DD");
      const result = res.data.sleepData
        .map(item => ({
          ...item,
          emojiBed: emojify(item.bed_t_rating),
          emojiWork: emojify(item.work_t_rating),
          emojiAverage: emojify(item.average_rating),
          startDate: dateTransform(item.start)
        }))
        .reverse();
      dispatch({
        type: TRANSFORM_SLEEPDATA_TO_GRAPH,
        payload: result
      });
      dispatch({
        type: GET_USERDATA,
        payload: {
          username: res.data.username,
          password: res.data.password,
          birthdate: res.data.birthdate
        }
      });
      const pastWeek = result.filter(item => {
        return (
          moment(item.startDate, "YYYY-MM-DD").isAfter(
            moment().subtract(7, "days")
          ) && moment(item.startDate, "YYYY-MM-DD").isBefore(moment())
        );
      });
      dispatch({
        type: APPLY_RECENT_FILTER,
        payload: pastWeek
      });
    })
    .catch(err => {
      if (err.status === 401) {
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
        bed_t_rating: sleepSession.bed_t_rating,
        work_t_rating: sleepSession.work_t_rating,
        average_rating: sleepSession.average_rating
      },
      {
        headers: { authorize: localStorage.getItem("token") }
      }
    )
    .then(res => {
      dispatch({
        type: SEND_SLEEPSESSION_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      if (err.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
      }
      dispatch({ type: SEND_SLEEPSESSION_FAILURE, payload: err });
    });
};
