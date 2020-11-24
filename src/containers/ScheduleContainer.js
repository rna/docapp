import React from 'react';
import PropTypes from 'prop-types';
import {
  currentTime, today, tomorrow, thirdDay,
} from '../helpers/dateHelper';
import timeSlotFilter from '../helpers/timeSlotFilter';
import TimeSlotComponent from '../components/timeslot/TimeslotComponent';

const ScheduleContainer = ({ schedule }) => {
  const todaySlots = timeSlotFilter(schedule, today, currentTime);
  const tomorrowSlots = timeSlotFilter(schedule, tomorrow, today);
  const thirdDaySlots = timeSlotFilter(schedule, thirdDay, tomorrow);

  let customTodaySlots = 'No Slots Available';
  let customTomorrowSlots = 'No Slots Available';
  let customThirdDaySlots = 'No Slots Available';

  if (todaySlots) {
    customTodaySlots = todaySlots.map(s => <TimeSlotComponent key={s.id} slot={s} />);
  }

  if (tomorrowSlots) {
    customTomorrowSlots = tomorrowSlots.map(s => <TimeSlotComponent key={s.id} slot={s} />);
  }

  if (thirdDaySlots) {
    customThirdDaySlots = thirdDaySlots.map(s => <TimeSlotComponent key={s.id} slot={s} />);
  }

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
            <td>{customTodaySlots}</td>
            <td>{customTomorrowSlots}</td>
            <td>{customThirdDaySlots}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

ScheduleContainer.propTypes = {
  schedule: PropTypes.instanceOf(Array).isRequired,
};

export default ScheduleContainer;
