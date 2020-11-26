import { createUserLogin } from '../actions/userActions';

function userLoginRequest(loginInfo) {
  return dispatch => {
    const url = 'https://docapp-api.herokuapp.com/api/v1/patient/login';
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(loginInfo),
    }).then(res => res.json())
      .then(data => {
        // eslint-disable-next-line
        console.log(data);
        localStorage.setItem('token', data.token);
        dispatch(createUserLogin(data));
      });
  };
}

export default userLoginRequest;
