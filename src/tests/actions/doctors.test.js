import * as action from '../../actions/doctorsActions';

describe('Test fetchDoctors action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Ramesh' };
    const result = action.fetchDoctorsSuccess(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Ramesh' };
    const expectedResult = {
      type: 'FETCH_DOCTORS_SUCCESS',
      payload: data,
    };
    expect(action.fetchDoctorsSuccess(data)).toEqual(expectedResult);
  });
});
