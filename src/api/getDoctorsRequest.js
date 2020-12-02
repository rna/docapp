import axios from 'axios';
import * as action from '../actions/doctorsActions';

function getDoctorsRequest() {
  return dispatch => {
    dispatch(action.fetchDoctorsBegin());
    const url = 'https://docapp-api.herokuapp.com/api/v1/doctors';
    axios
      .get(url)
      .then(res => {
        const doctorsList = res.data;
        dispatch(action.fetchDoctorsSuccess(doctorsList));
      })
      .catch(err => dispatch(action.fetchDoctorsFailure(err)));
  };
}

export default getDoctorsRequest;
