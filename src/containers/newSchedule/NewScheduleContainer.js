import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import postSchedule from '../../api/postSchedule';
import './newScheduleContainer.css';

const NewScheduleContainer = ({ user }) => {
  const [schedule, setSchedule] = useState({
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    duration: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setSchedule({ ...schedule, [name]: value });
  };
  const type = 'schedule';

  const handleSubmit = e => {
    e.preventDefault();
    const scheduleObj = { [type]: schedule };
    postSchedule(user.doctor.id, scheduleObj);
    setSchedule({
      start_date: '',
      start_time: '',
      end_date: '',
      end_time: '',
      duration: '',
    });
    confirmAlert({
      title: 'New Schedule Added!!!',
      buttons: [
        {
          label: 'Close',
        },
      ],
    });
  };

  return (
    <div className="new-schedule">
      <h2>Add new schedule</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="start_date">
          Available from date:
          <input name="start_date" type="date" id="start_date" value={schedule.start_date} onChange={handleChange} required />
        </label>

        <label htmlFor="start_time">
          Daily start time:
          <input name="start_time" type="time" id="start_time" value={schedule.start_time} onChange={handleChange} required />
        </label>

        <label htmlFor="end_date">
          {' '}
          Available upto date:
          <input name="end_date" type="date" id="end_date" value={schedule.end_date} onChange={handleChange} required />
        </label>

        <label htmlFor="end_time">
          Daily closing time:
          <input name="end_time" type="time" id="end_time" value={schedule.end_time} onChange={handleChange} required />
        </label>

        <label htmlFor="duration">
          Duration (minutes):
          <input name="duration" type="number" id="duration" value={schedule.duration} onChange={handleChange} required />
        </label>

        <button type="submit">Add Schedule</button>
      </form>
      <p>NOTE: This will create automatic slots for the patient</p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.userData.user,
});

NewScheduleContainer.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(NewScheduleContainer);
