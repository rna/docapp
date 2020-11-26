import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
      <Link to={`/${doctor.id}/book-appointment`}>Book an Appointment</Link>
    </div>
  </div>
);

DoctorCardComponent.propTypes = {
  doctor: PropTypes.instanceOf(Object).isRequired,
};

export default DoctorCardComponent;
