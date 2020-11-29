import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './doctorCard.styles.css';
import defaultImg from '../../assets/default-image.png';

const DoctorCardComponent = ({ doctor }) => (
  <div className="doctor-card">
    <div className="doctor-image">
      <img src={doctor.image ? doctor.image : defaultImg} alt={doctor.name} />
    </div>
    <div className="doctor-info">
      <h3>{doctor.name}</h3>
      <p className="spec">{doctor.specialization}</p>
      <p>
        Overall experience
        {' '}
        <span>{doctor.experience}</span>
        {' '}
        years
      </p>
      <p>
        Consultaion fee
        {' '}
        <span>{doctor.fee}</span>
        {' '}
        USD
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
