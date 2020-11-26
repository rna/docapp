import { createUserLogin } from '../actions/userActions';

function autoLoginRequest(userType) {
  return dispatch => {
    const url = `https://docapp-api.herokuapp.com/api/v1/${userType}/auto_login`;
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then(res => res.json())
      .then(data => {
        dispatch(createUserLogin(data));
      });
  };
}

export default autoLoginRequest;
