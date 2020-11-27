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

export default getPatientBookings;
