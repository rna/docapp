import React from 'react';
import PropTypes from 'prop-types';
import './doctorCard.styles.css';

const DoctorCardComponent = ({ doctor }) => (
  <div className="doctor-card">
    <div className="doctor-image">
      <img src={doctor.image} alt={doctor.name} />
    </div>
    <div className="doctor-info">
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
    <div className="doctor-link">
      <a href="/appointments">Book an Appointment</a>
    </div>
  </div>
);

DoctorCardComponent.propTypes = {
  doctor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    specialization: PropTypes.string.isRequired,
    experience: PropTypes.number.isRequired,
    fee: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default DoctorCardComponent;
