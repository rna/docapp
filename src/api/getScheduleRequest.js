import axios from 'axios';
import * as action from '../actions/scheduleActions';

function getScheduleRequest(id) {
  return dispatch => {
    dispatch(action.fetchScheduleBegin());
    const url = `https://docapp-api.herokuapp.com/api/v1/doctors/${id}/schedules`;
    axios
      .get(url)
      .then(res => {
        const scheduleList = res.data;
        dispatch(action.fetchScheduleSuccess(scheduleList));
      })
      .catch(err => dispatch(action.fetchScheduleFailure(err)));
  };
}

export default getScheduleRequest;
