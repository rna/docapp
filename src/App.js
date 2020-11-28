import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SchedulePageContainer from './containers/SchedulePageContainer';
import PatientPageContainer from './containers/PatientPageContainer';
import LoginPageContainer from './containers/loginPage/LoginPageContainer';
import autoLoginRequest from './api/autoLoginRequest';
import PatientRegisterPage from './containers/patientRegisterPage/PatientRegisterPage';
import DoctorRegisterPage from './containers/doctorRegisterPage/DoctorRegisterPage';
import PatientBookings from './containers/PatientBookings';
import DoctorDashboardPage from './containers/DoctorDashboardPage';

const App = ({ autoLoginRequest, userInfo }) => {
  const usertype = localStorage.getItem('usertype');
  const usertoken = localStorage.getItem('token');

  if (usertype && usertoken) {
    useEffect(() => {
      autoLoginRequest(usertype);
    }, [autoLoginRequest]);
  }

  let dashboardRoute;
  if (userInfo.isLoggedIn) {
    if (usertype === 'doctor') {
      dashboardRoute = <DoctorDashboardPage />;
    }

    if (usertype === 'patient') {
      dashboardRoute = <PatientPageContainer />;
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {dashboardRoute || <LoginPageContainer />}
        </Route>
        <Route exact path="/dashboard">
          {dashboardRoute}
        </Route>
        <Route exact path="/:doctorId/book-appointment">
          <SchedulePageContainer />
        </Route>
        <Route exact path="/patient-register">
          <PatientRegisterPage />
        </Route>
        <Route exact path="/doctor-register">
          <DoctorRegisterPage />
        </Route>
        <Route exact path="/bookings">
          <PatientBookings />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData,
});

const mapDispatchToProps = {
  autoLoginRequest,
};

App.propTypes = {
  autoLoginRequest: PropTypes.func.isRequired,
  userInfo: PropTypes.instanceOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
