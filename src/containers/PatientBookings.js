import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPatientBookings } from '../api/getAppointmentsRequest';
import BookingCardComponent from '../components/bookingCard/BookingCardComponent';

const PatientBookings = ({
  appointmentsInfo,
  getPatientBookings, userInfo,
}) => {
  useEffect(() => {
    getPatientBookings(userInfo.user.patient.id);
  }, [getPatientBookings, userInfo.user.patient.id]);

  let customAppointmentComponent;
  if (appointmentsInfo.loading) {
    customAppointmentComponent = <div className="loading-container"><div className="loading" /></div>;
  }
  if (appointmentsInfo.appointments) {
    customAppointmentComponent = (
      <div className="booking-container">
        {appointmentsInfo.appointments.map(
          booking => <BookingCardComponent key={booking.id} booking={booking} />,
        )}
      </div>
    );
  }
  if (appointmentsInfo.error) {
    customAppointmentComponent = (
      <div>
        Error!
        {appointmentsInfo.error.message}
      </div>
    );
  }
  return (
    <div>
      <h1>My appointments</h1>
      {customAppointmentComponent}
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData,
  appointmentsInfo: state.appointmentsData,
});

const mapDispatchToProps = {
  getPatientBookings,
};

PatientBookings.propTypes = {
  userInfo: PropTypes.instanceOf(Object).isRequired,
  appointmentsInfo: PropTypes.instanceOf(Object).isRequired,
  getPatientBookings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientBookings);
