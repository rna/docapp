import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDoctorBookings } from '../api/getAppointmentsRequest';
import BookingCardComponent from '../components/bookingCard/BookingCardComponent';

const DoctorDashboardPage = ({
  appointments, loading, error,
  getDoctorBookings, userInfo,
}) => {
  useEffect(() => {
    getDoctorBookings(userInfo.user.id);
  }, [userInfo.user.id]);

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
      <h1>Appointments Booked</h1>
      {customAppointmentComponent}
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData,
  appointments: state.appointmentsData.appointments,
  loading: state.appointmentsData.loading,
  error: state.appointmentsData.error,
});

const mapDispatchToProps = {
  getDoctorBookings,
};

DoctorDashboardPage.propTypes = {
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
  getDoctorBookings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDashboardPage);
