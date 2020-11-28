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
    getPatientBookings(userInfo.user.id);
  }, [userInfo.user.id]);

  let customAppointmentComponent;
  if (appointmentsInfo.loading) {
    customAppointmentComponent = <div>Loading..... </div>;
  }
  if (appointmentsInfo.appointments) {
    customAppointmentComponent = appointmentsInfo.appointments.map(
      booking => <BookingCardComponent key={booking.id} booking={booking} />,
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
      <h1>Patient Bookings</h1>
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
