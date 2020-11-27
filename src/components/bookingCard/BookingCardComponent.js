import React from 'react';
import PropTypes from 'prop-types';

const BookingCardComponent = ({ booking }) => (
  <div>
    <h1>{booking.time}</h1>
  </div>
);

BookingCardComponent.propTypes = {
  booking: PropTypes.instanceOf(Object).isRequired,
};

export default BookingCardComponent;
