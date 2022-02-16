import { setUsername } from '../actions/userAction';

export const fetchLoginUser = () => async (dispatch) => {
  try {
    dispatch(setUsername);
  } catch (e) {}
};
