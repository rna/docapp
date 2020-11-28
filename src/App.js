/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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
import PrivateRoute from './components/PrivateRoute';

const App = ({ autoLoginRequest, userInfo }) => {
  const usertype = localStorage.getItem('usertype');
  const usertoken = localStorage.getItem('token');

  if (usertype && usertoken) {
    useEffect(() => {
      autoLoginRequest(usertype);
    }, [autoLoginRequest]);
  }

  const homeRoute = (usertype === 'patient') ? <Redirect to="/home" /> : <Redirect to="/dashboard" />;

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (userInfo.isLoggedIn ? homeRoute : <Redirect to="/login" />)} />
        <Route path="/login" component={LoginPageContainer} />
        <Route path="/patient-register" component={PatientRegisterPage} />
        <Route path="/doctor-register" component={DoctorRegisterPage} />
        <PrivateRoute path="/bookings" isAuthenticated={userInfo.isLoggedIn} component={PatientBookings} />
        <PrivateRoute path="/home" isAuthenticated={userInfo.isLoggedIn} component={PatientPageContainer} />
        <PrivateRoute path="/dashboard" isAuthenticated={userInfo.isLoggedIn} component={DoctorDashboardPage} />
        <PrivateRoute path="/:doctorId/book-appointment" isAuthenticated={userInfo.isLoggedIn} component={SchedulePageContainer} />
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
