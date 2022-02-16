export const SET_USER_USERNAME = 'SET_USER_USERNAME';
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD';
export const SET_USER_BILL = 'SET_USER_BILL';


export const setUsername = username => dispatch => {
  dispatch({
    type: SET_USER_USERNAME,
    payload: username
  })
}

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_USER_PASSWORD,
    payload: password
  })
}

export const setBill = bill => dispatch => {
  dispatch({
    type: SET_USER_BILL,
    payload: bill
  })
}