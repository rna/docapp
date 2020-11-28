import axios from 'axios';
import * as action from '../actions/userActions';
import headers from '../helpers/headers';

function autoLoginRequest(userType) {
  return dispatch => {
    dispatch(action.createUserLoginBegin());
    const url = `https://docapp-api.herokuapp.com/api/v1/${userType}/auto_login`;
    axios
      .get(url, { headers })
      .then(res => dispatch(action.createUserLoginSuccess(res.data)))
      .catch(err => dispatch(action.createUserLoginFailure(err)));
  };
}

export default autoLoginRequest;
