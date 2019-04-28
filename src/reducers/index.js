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
  
} from "../actions";

const initialState = {
  isSending: true,
  loggingIn: false,
  isFetching: false,
  error: null,
  sleepData: [],
  transformedSleepData: [],
  filteredSleepData: []
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
        isSending: false,
      };

      case ADD_USER_FAILURE:
        return {
          ...state,
          isSending: false,
          err: "Please try Again"
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
      case SEND_SLEEPSESSION_SUCCESS:
      return {
        ...state,
        isSending: false,
      };
    case SLEEPSESSION_SENDING :
      return {
        ...state,
        isSending: true,
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
      };
      case APPLY_RECENT_FILTER: 
      return { 
        ...state,
        filteredSleepData: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
