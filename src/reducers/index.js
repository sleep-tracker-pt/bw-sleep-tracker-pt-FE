import { SOME_ACTION } from "../actions";

const initialState = {
  state: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOME_ACTION:
      return state;
    default:
      return state;
  }
};
