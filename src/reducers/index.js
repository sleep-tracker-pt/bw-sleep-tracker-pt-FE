import {
  LOGIN_SUCCESS,
  LOGIN_FETCHING,
  LOGIN_FAILURE,
  ADD_USER_START,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FETCHING,
  GET_USERS_FAILURE,
  GET_SLEEPDATA_SUCCESS,
  GET_SLEEPDATA_FETCHING,
  GET_SLEEPDATA_FAILURE,
  SEND_SLEEPSESSION_SUCCESS,
  SLEEPSESSION_SENDING,
  SEND_SLEEPSESSION_FAILURE,
  TRANSFORM_SLEEPDATA_TO_GRAPH,
  APPLY_RECENT_FILTER,
  LOGOUT,
  GET_USERDATA,
  UPDATE_USER,
  UPDATE_USER_FAILURE,
  CHECKLOGIN_SUCCESS,
  CHECKLOGIN_FAILURE
} from "../actions";

import moment from "moment";

const initialState = {
  isSending: true,
  loggingIn: false,
  isFetching: false,
  isUpdating: false,
  error: null,
  sleepData: [],
  transformedSleepData: [],
  filteredSleepData: [],
  postResponse: [],
  userData: []
};

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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggingIn: false,
        isFetching: false
      };
    case LOGIN_FETCHING:
      return {
        ...state,
        loggingIn: false,
        isFetching: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true,
        isFetching: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false,
        isFetching: false,
        error: action.payload
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false
      };
    case GET_USERS_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    case ADD_USER_START:
      return {
        ...state,
        isSending: true,
        err: ""
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        isSending: false
      };

    case ADD_USER_FAILURE:
      return {
        ...state,
        isSending: false,
        err: action.payload
      };
    case GET_SLEEPDATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        sleepData: action.payload
      };
    case GET_SLEEPDATA_FETCHING:
      return {
        ...state,
        isFetching: true
      };
    case GET_SLEEPDATA_FAILURE:
      return {
        ...state,
        gettingUsers: false,
        error: action.payload
      };
    case SEND_SLEEPSESSION_SUCCESS:
      return {
        ...state,
        isSending: false,
        sleepData: action.payload
      };
    case SLEEPSESSION_SENDING:
      return {
        ...state,
        isSending: true
      };
    case SEND_SLEEPSESSION_FAILURE:
      return {
        ...state,
        isSending: false,
        error: action.payload
      };
    case TRANSFORM_SLEEPDATA_TO_GRAPH:
      return {
        ...state,
        transformedSleepData: action.payload
          .map(item => ({
            ...item,
            emojiBed: emojify(item.bed_t_rating),
            emojiWork: emojify(item.work_t_rating),
            emojiAverage: emojify(item.average_rating),
            startDate: dateTransform(item.start)
          }))
          .reverse()
      };
    case APPLY_RECENT_FILTER:
      return {
        ...state,
        filteredSleepData: action.payload
          .map(item => ({
            ...item,
            emojiBed: emojify(item.bed_t_rating),
            emojiWork: emojify(item.work_t_rating),
            emojiAverage: emojify(item.average_rating),
            startDate: dateTransform(item.start)
          }))
          .reverse()
          .filter(item => {
            return (
              moment(item.startDate, "YYYY-MM-DD").isAfter(
                moment().subtract(7, "days")
              ) && moment(item.startDate, "YYYY-MM-DD").isBefore(moment())
            );
          })
      };
    case GET_USERDATA:
      return {
        ...state,
        userData: action.payload,
        isUpdating: false
      };
    case UPDATE_USER:
      return {
        ...state,
        userData: action.payload,
        isUpdating: false
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isSending: false,
        err: action.payload
      };
    case CHECKLOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: true
      };
    case CHECKLOGIN_FAILURE:
      return {
        ...state,
        loggingIn: false
      };

    default:
      return state;
  }
};

export default reducer;
