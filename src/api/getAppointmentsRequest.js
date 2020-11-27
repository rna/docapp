import axios from 'axios';
import * as action from '../actions/appointmentActions';

function getPatientBookings(id) {
  return dispatch => {
    dispatch(action.fetchPatientBookingsBegin());
    const url = `https://docapp-api.herokuapp.com/api/v1/patients/${id}/appointments`;
    axios
      .get(url)
      .then(res => {
        const bookingsList = res.data;
        dispatch(action.fetchPatientBookingsSuccess(bookingsList));
      })
      .catch(err => dispatch(action.fetchPatientBookingsFailure(err)));
  };
}

function getDoctorBookings(id) {
  return dispatch => {
    dispatch(action.fetchDoctorBookingsBegin());
    const url = `https://docapp-api.herokuapp.com/api/v1/doctors/${id}/appointments`;
    axios
      .get(url)
      .then(res => {
        const bookingsList = res.data;
        dispatch(action.fetchDoctorBookingsSuccess(bookingsList));
      })
      .catch(err => dispatch(action.fetchDoctorBookingsFailure(err)));
  };
}

export { getPatientBookings, getDoctorBookings };
