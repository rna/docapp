export const createUserLoginBegin = () => ({
  type: 'CREATE_USER_LOGIN_BEGIN',
});

export const createUserLoginSuccess = (data, userType) => ({
  type: 'CREATE_USER_LOGIN_SUCCESS',
  payload: data,
  userType,
});

export const createUserLoginFailure = error => ({
  type: 'CREATE_USER_LOGIN_FAILURE',
  payload: error,
});

export const createUserLogout = () => ({
  type: 'CREATE_USER_LOGOUT',
});
