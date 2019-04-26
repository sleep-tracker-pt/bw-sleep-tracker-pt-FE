import { LOGIN_SUCCESS,
  LOGIN_FETCHING,
  LOGIN_FAILURE,} from "../actions";

const initialState = {
  state: [],
  loggingIn: false,
  isFetching:false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FETCHING:
    return{
        ...state,
        loggingIn: false,
        isFetching: true,
    }
    case LOGIN_SUCCESS:
    return{
        ...state,
        loggingIn: true,
        isFetching: false,
    }
    case LOGIN_FAILURE:
    return{
        ...state,
        loggingIn:false,
        isFetching: false,
        err: "Please try again"
    }
   
  }
};
