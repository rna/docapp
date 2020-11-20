import React from 'react';
import PropTypes from 'prop-types';
import {
  currentTime, today, tomorrow, thirdDay,
} from '../helpers/dateHelper';

const DoctorCardComponent = ({ doctor, schedule }) => {
  const todaySchedules = schedule.filter(d => today >= new Date(d) && new Date(d) > currentTime).map(t => (t.split(' '))[1]);
  const tomorrowSchedules = schedule.filter(d => tomorrow >= new Date(d) && new Date(d) > today).map(t => (t.split(' '))[1]);
  const thirdDaySchedules = schedule.filter(d => thirdDay >= new Date(d) && new Date(d) > tomorrow).map(t => (t.split(' '))[1]);
  return (
    <>
      <tr>
        <td>
          <div>
            <h3>{doctor.name}</h3>
            <p>{doctor.specialization}</p>
            <p>
              Overall experience
              {doctor.experience}
              {' '}
              years
            </p>
            <p>
              Consultaion fee-USD
              {doctor.fee}
              {' '}
              years
            </p>
          </div>
        </td>
        <td>{todaySchedules.map(el => <p key={el}>{el}</p>)}</td>
        <td>{tomorrowSchedules.map(el => <p key={el}>{el}</p>)}</td>
        <td>{thirdDaySchedules.map(el => <p key={el}>{el}</p>)}</td>
      </tr>
    </>
  );
};

DoctorCardComponent.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
  }).isRequired,
  schedule: PropTypes.instanceOf(Array).isRequired,
};

export default DoctorCardComponent;
