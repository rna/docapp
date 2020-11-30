import React from 'react';
import PropTypes from 'prop-types';
import './bookCardComponent.css';

const BookingCardComponent = ({ booking }) => {
  const bdate = booking.time.split(' ')[0];
  const btime = booking.time.split(' ')[1];

  return (
    <section className="booking-card">
      <p>Booking Status: Confirmed</p>
      <p>
        Date:
        {bdate}
      </p>
      <p>
        Time:
        {btime}
      </p>
    </section>
  );
};

BookingCardComponent.propTypes = {
  booking: PropTypes.instanceOf(Object).isRequired,
};

export default BookingCardComponent;
