import axios from 'axios';

function postAppointment(patientId, obj) {
  const url = `https://docapp-api.herokuapp.com/api/v1/patients/${patientId}/appointments`;
  axios
    .post(url, obj)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

export default postAppointment;
