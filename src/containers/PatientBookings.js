import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getPatientBookings from '../api/getAppointmentsRequest';
import BookingCardComponent from '../components/bookingCard/BookingCardComponent';

const PatientBookings = ({
  appointments, loading, error,
  getPatientBookings, userInfo,
}) => {
  let userid;
  if (userInfo) {
    userid = userInfo.id;
  }

  useEffect(() => {
    getPatientBookings(userid);
  }, [userid]);

  let customAppointmentComponent;
  if (loading) {
    customAppointmentComponent = <div>Loading..... </div>;
  }
  if (appointments) {
    customAppointmentComponent = appointments.map(
      booking => <BookingCardComponent key={booking.id} booking={booking} />,
    );
  }
  if (error) {
    customAppointmentComponent = (
      <div>
        Error!
        {error.message}
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
  userInfo: state.userData && state.userData.user,
  appointments: state.appointmentsData.appointments,
  loading: state.appointmentsData.loading,
  error: state.appointmentsData.error,
});

const mapDispatchToProps = {
  getPatientBookings,
};

PatientBookings.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  appointments: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getPatientBookings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientBookings);
