import React from 'react';
import PropTypes from 'prop-types';
import {
  currentTime, today, tomorrow, thirdDay,
} from '../../helpers/dateHelper';
import timeSlotHelper from '../../helpers/timeSlotHelper';

const ScheduleComponent = ({ schedule }) => {
  const todaySlots = timeSlotHelper(schedule, today, currentTime);
  const tomorrowSlots = timeSlotHelper(schedule, tomorrow, today);
  const thirdDaySlots = timeSlotHelper(schedule, thirdDay, tomorrow);
  // eslint-disable-next-line
  console.log(todaySlots || 'No Slots available');
  return (
    <div>
      <h1>Doctor Schedule</h1>
      <h3>Next three days availability</h3>
      <table>
        <thead>
          <tr>
            <th>Today</th>
            <th>Tomorrow</th>
            <th>{thirdDay.toLocaleDateString()}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{todaySlots || 'No slots available'}</td>
            <td>{tomorrowSlots || 'No slots available'}</td>
            <td>{thirdDaySlots || 'No slots available'}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ScheduleComponent.propTypes = {
  schedule: PropTypes.instanceOf(Array).isRequired,
};

export default ScheduleComponent;
