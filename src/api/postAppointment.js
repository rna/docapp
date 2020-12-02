function postAppointment(patientId, obj) {
  const url = `https://docapp-api.herokuapp.com/api/v1/patients/${patientId}/appointments`;
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
    body: JSON.stringify(obj),
  }).then(res => res.json());
}

export default postAppointment;
