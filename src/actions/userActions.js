export const createUserLogin = data => ({
  type: 'CREATE_USER_LOGIN',
  payload: data,
});

export const createUserLogout = () => ({
  type: 'CREATE_USER_LOGOUT',
});
