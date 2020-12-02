export const fetchScheduleBegin = () => ({
  type: 'FETCH_SCHEDULE_BEGIN',
});

export const fetchScheduleSuccess = data => ({
  type: 'FETCH_SCHEDULE_SUCCESS',
  payload: data,
});

export const fetchScheduleFailure = error => ({
  type: 'FETCH_SCHEDULE_FAILURE',
  payload: error,
});
