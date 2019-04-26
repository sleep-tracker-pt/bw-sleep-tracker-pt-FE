import {
  LOGIN_SUCCESS,
  LOGIN_FETCHING,
  LOGIN_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_FETCHING,
  GET_USERS_FAILURE
} from "../actions";

const initialState = {
  state: [],
  loggingIn: false,
  isFetching: false,
  error: null,
  gettingUsers: false
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
        gettingUsers: false
      };
    case GET_USERS_FETCHING:
      return {
        ...state,
        gettingUsers: true
      };
    case GET_USERS_FAILURE:
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
