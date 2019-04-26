import {
  LOGIN_SUCCESS,
  LOGIN_FETCHING,
  LOGIN_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FETCHING,
  GET_USERS_FAILURE,
  GET_SLEEPDATA_SUCCESS,
  GET_SLEEPDATA_FETCHING,
  GET_SLEEPDATA_FAILURE,
  
} from "../actions";

const initialState = {
  state: [],
  loggingIn: false,
  isFetching: false,
  error: null,
  sleepData: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        isFetching: true,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        gettingUsers: false,
        error: action.payload
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
        isFetching: true,
      };
    case GET_SLEEPDATA_FAILURE:
      return {
        ...state,
        gettingUsers: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
