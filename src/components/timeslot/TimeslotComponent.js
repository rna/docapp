import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import postAppointment from '../../api/postAppointment';
import './timeSlotComponent.css';

const TimeslotComponent = ({ user, slot }) => {
  const appObj = { appointment: { doctor_id: slot.doctor_id, schedule_id: slot.id } };
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    postAppointment(user.id, appObj);
    confirmAlert({
      title: 'Appointment confirmed!!!',
      buttons: [
        {
          label: 'Close',
        },
      ],
    });
    history.push({ pathname: '/bookings' });
  };

  const timeSlot = slot.time.split(' ')[1];

  const slotClass = slot.available ? 'slot-not-booked' : 'slot-booked';
  return (
    <button className={slotClass} type="button" onClick={slot.available ? handleClick : null}>
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
