import React from 'react';
import PropTypes from 'prop-types';
// import postAppointment from '../../api/postAppointment';

const TimeslotComponent = ({ slot }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const timeSlot = slot.time.split(' ')[1];

  return <button type="button" onClick={e => handleSubmit(e)}>{timeSlot}</button>;
};

TimeslotComponent.propTypes = {
  slot: PropTypes.instanceOf(Object).isRequired,
};

export default TimeslotComponent;
