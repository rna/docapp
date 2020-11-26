import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getScheduleRequest from '../api/getScheduleRequest';
import ScheduleComponent from '../components/schedule/ScheduleComponent';

const AppointmentPageContainer = ({
  schedule, loading, error, getScheduleRequest,
}) => {
  const { doctorId } = useParams();

  useEffect(() => {
    getScheduleRequest(doctorId);
  }, []);

  let customScheduleComponent;
  if (loading) {
    customScheduleComponent = <div>Loading..... </div>;
  }
  if (schedule) {
    customScheduleComponent = <ScheduleComponent schedule={schedule} />;
  }
  if (error) {
    customScheduleComponent = (
      <div>
        Error!
        {error.message}
      </div>
    );
  }

  return (
    <div>
      {customScheduleComponent}
    </div>
  );
};

const mapStateToProps = state => ({
  schedule: state.scheduleData.schedule,
  loading: state.scheduleData.loading,
  error: state.scheduleData.error,
});

const mapDispatchToProps = {
  getScheduleRequest,
};

AppointmentPageContainer.propTypes = {
  schedule: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Array),
  ]).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  getScheduleRequest: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppointmentPageContainer);
