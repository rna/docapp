import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import postAppointment from '../../api/postAppointment';

const TimeslotComponent = ({ user, slot }) => {
  const appObj = { appointment: { doctor_id: slot.doctor_id, schedule_id: slot.id } };
  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    postAppointment(user.id, appObj);
    history.push({ pathname: '/bookings' });
  };

  const timeSlot = slot.time.split(' ')[1];

  return (
    <button type="button" onClick={handleClick}>
      {' '}
      {timeSlot}
    </button>
  );
};

const mapStateToProps = state => ({
  user: state.userData.user,
});

TimeslotComponent.propTypes = {
  slot: PropTypes.instanceOf(Object).isRequired,
  user: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps)(TimeslotComponent);
