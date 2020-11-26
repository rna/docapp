import { createUserLogin } from '../actions/userActions';

function userRegisterRequest(loginInfo, userType) {
  return dispatch => {
    const url = `https://docapp-api.herokuapp.com/api/v1/${userType}s`;
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginInfo),
    }).then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('usertype', userType);
        dispatch(createUserLogin(data));
      });
  };
}

export default userRegisterRequest;
