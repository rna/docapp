import * as action from '../../actions/appointmentActions';

describe('Test fetchPatientBookings action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Ramesh' };
    const result = action.fetchPatientBookingsSuccess(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Ramesh' };
    const expectedResult = {
      type: 'FETCH_PATIENT_APPOINTMENT_SUCCESS',
      payload: data,
    };
    expect(action.fetchPatientBookingsSuccess(data)).toEqual(expectedResult);
  });
});

describe('Test fetchDoctorBookings action', () => {
  it('should return an object', () => {
    const data = { id: 1, name: 'Ramesh' };
    const result = action.fetchDoctorBookingsSuccess(data);
    expect(typeof result).toBe('object');
  });

  it('should dispatch correct payload', () => {
    const data = { id: 1, name: 'Ramesh' };
    const expectedResult = {
      type: 'FETCH_DOCTOR_APPOINTMENT_SUCCESS',
      payload: data,
    };
    expect(action.fetchDoctorBookingsSuccess(data)).toEqual(expectedResult);
  });
});
