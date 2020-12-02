import * as action from '../../actions/userActions';

describe('Test createUserLogin action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Ramesh' };
    const userType = 'doctor';
    const result = action.createUserLoginSuccess(data, userType);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Ramesh' };
    const userType = 'doctor';
    const expectedResult = {
      type: 'CREATE_USER_LOGIN_SUCCESS',
      payload: data,
      userType,
    };
    expect(action.createUserLoginSuccess(data, userType)).toEqual(expectedResult);
  });
});

describe('Test createUserLogout action', () => {
  it('should dispatch correct payload', () => {
    const expectedResult = {
      type: 'CREATE_USER_LOGOUT',
    };
    expect(action.createUserLogout()).toEqual(expectedResult);
  });
});
