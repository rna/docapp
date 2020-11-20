import React from 'react';
import DoctorCardComponent from '../components/DoctorCardComponent';
import doctor from '../api/doctorDemoData';
import schedule from '../api/scheduleDemoData';

const PatientPageContainer = () => (
  <div>
    <h1> Patient Page </h1>
    <table>
      <thead />
      <tbody>
        <DoctorCardComponent doctor={doctor} schedule={schedule} />
      </tbody>

    </table>

  </div>

);

export default PatientPageContainer;
