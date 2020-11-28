export const createUserLoginBegin = () => ({
  type: 'CREATE_USER_LOGIN_BEGIN',
});

export const createUserLoginSuccess = data => ({
  type: 'CREATE_USER_LOGIN_SUCCESS',
  payload: data,
});

export const createUserLoginFailure = error => ({
  type: 'CREATE_USER_LOGIN_FAILURE',
  payload: error,
});

export const createUserLogout = () => ({
  type: 'CREATE_USER_LOGOUT',
});
