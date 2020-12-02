import * as action from '../../actions/scheduleActions';

describe('Test fetchSchedule action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Ramesh' };
    const result = action.fetchScheduleSuccess(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Ramesh' };
    const expectedResult = {
      type: 'FETCH_SCHEDULE_SUCCESS',
      payload: data,
    };
    expect(action.fetchScheduleSuccess(data)).toEqual(expectedResult);
  });
});
