export const fetchDoctorsBegin = () => ({
  type: 'FETCH_DOCTORS_BEGIN',
});

export const fetchDoctorsSuccess = data => ({
  type: 'FETCH_DOCTORS_SUCCESS',
  payload: data,
});

export const fetchDoctorsFailure = error => ({
  type: 'FETCH_DOCTORS_FAILURE',
  payload: error,
});
