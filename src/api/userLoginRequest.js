import axios from 'axios';
import * as action from '../actions/userActions';
import headers from '../helpers/headers';

function userLoginRequest(loginInfo, userType) {
  return dispatch => {
    dispatch(action.createUserLoginBegin());
    const url = `https://docapp-api.herokuapp.com/api/v1/${userType}/login`;
    axios
      .post(url, loginInfo, { headers })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('usertype', userType);
        dispatch(action.createUserLoginSuccess(res.data));
      })
      .catch(err => dispatch(action.createUserLoginFailure(err)));
  };
}

export default userLoginRequest;
