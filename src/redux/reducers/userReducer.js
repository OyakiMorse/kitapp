import { createStore } from 'redux';
import {
  SET_USER_USERNAME,
  SET_USER_PASSWORD,
  SET_USER_BILL,
} from '../actions/userAction';

const initState = {
  username: null,
  password: null,
  bill: 0,
};

function userReducer(state = initState, action) {
  switch (action.type) {
    case SET_USER_USERNAME:
      return { ...state, username: action.payload };
    case SET_USER_PASSWORD:
      return { ...state, password: action.payload };
    case SET_USER_BILL:
      return { ...state, bill: action.payload };
    default:
      return state;
  }
}

export default userReducer;
