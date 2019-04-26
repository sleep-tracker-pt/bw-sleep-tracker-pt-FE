import { LOGIN_SUCCESS, LOGIN_FETCHING, LOGIN_FAILURE, ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../actions";

const initialState = {
  users: [],
  loggingIn: false,
  isFetching: false,
  addUser: false,
  error: null
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
        err: "Please try again"
      };

      case ADD_USER_START:
        return {
          ...state,
          addUser: true,
          err: ""
        };

      case ADD_USER_SUCCESS:
        return {
          ...state,
          isFetching: false,
          state: action.payload
        };

        case ADD_USER_FAILURE:
          return {
            ...state,
            isFetching: false,
            err: "Please try Again"
          };
    default:
      return state;
  }
};

export default reducer;
