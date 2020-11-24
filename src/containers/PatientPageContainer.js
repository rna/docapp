import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DoctorCardComponent from '../components/doctorCard/DoctorCardComponent';
import getDoctorsRequest from '../api/getDoctorsRequest';

const PatientPageContainer = ({
  doctors, loading, error, getDoctorsRequest,
}) => {
  useEffect(() => {
    getDoctorsRequest();
  }, [getDoctorsRequest]);

  let customDoctorCard;
  if (loading) {
    customDoctorCard = <div>Loading..... </div>;
  }
  if (doctors) {
    customDoctorCard = doctors.map(d => <DoctorCardComponent key={d.name} doctor={d} />);
  }
  if (error) {
    customDoctorCard = (
      <div>
        Error!
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1> Patient Page </h1>
      {customDoctorCard}
    </div>
  );
};

const mapStateToProps = state => ({
  doctors: state.doctorsData.doctors,
  loading: state.doctorsData.loading,
  error: state.doctorsData.error,
});

const mapDispatchToProps = {
  getDoctorsRequest,
};

PatientPageContainer.propTypes = {
  doctors: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getDoctorsRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PatientPageContainer);
