function postSchedule(doctorId, obj) {
  const url = `https://docapp-api.herokuapp.com/api/v1/doctors/${doctorId}/schedules`;
  // eslint-disable-next-line
  console.log(obj);
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

export default postSchedule;
