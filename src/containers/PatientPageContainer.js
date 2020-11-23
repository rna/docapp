import React from 'react';
import DoctorCardComponent from '../components/doctorCard/DoctorCardComponent';
import doctors from '../api/doctorsDemoData';

const PatientPageContainer = () => (
  <div>
    <h1> Patient Page </h1>
    <DoctorCardComponent doctor={doctors[0]} />

  </div>

);

export default PatientPageContainer;
