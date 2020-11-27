export const fetchPatientBookingsBegin = () => ({
  type: 'FETCH_PATIENT_APPOINTMENT_BEGIN',
});

export const fetchPatientBookingsSuccess = data => ({
  type: 'FETCH_PATIENT_APPOINTMENT_SUCCESS',
  payload: data,
});

export const fetchPatientBookingsFailure = error => ({
  type: 'FETCH_PATIENT_APPOINTMENT_FAILURE',
  payload: error,
});

export const fetchDoctorBookingsBegin = () => ({
  type: 'FETCH_DOCT_APPOINTMENT_BEGIN',
});

export const fetchDoctorBookingsSuccess = data => ({
  type: 'FETCH_DOCT_APPOINTMENT_SUCCESS',
  payload: data,
});

export const fetchDoctorBookingsFailure = error => ({
  type: 'FETCH_DOCT_APPOINTMENT_FAILURE',
  payload: error,
});
