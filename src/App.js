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
import HeaderComponent from './components/header/HeaderComponent';
import SidebarComponent from './components/sidebar/SidebarComponent';
import NewScheduleContainer from './containers/newSchedule/NewScheduleContainer';

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
    <main className="App">
      {userInfo.isLoggedIn ? <HeaderComponent /> : null}
      {userInfo.isLoggedIn ? <SidebarComponent userType={usertype} /> : null}
      <SidebarComponent />
      <div className="right-container">
        <Switch>
          <Route exact path="/" render={() => (userInfo.isLoggedIn ? homeRoute : <Redirect to="/login" />)} />
          <Route exact path="/login" component={LoginPageContainer} />
          <Route exact path="/patient-register" component={PatientRegisterPage} />
          <Route exact path="/doctor-register" component={DoctorRegisterPage} />
          <PrivateRoute exact path="/bookings" isAuthenticated={userInfo.isLoggedIn} component={PatientBookings} />
          <PrivateRoute exact path="/home" isAuthenticated={userInfo.isLoggedIn} component={PatientPageContainer} />
          <PrivateRoute exact path="/dashboard" isAuthenticated={userInfo.isLoggedIn} component={DoctorDashboardPage} />
          <PrivateRoute exact path="/new-schedule" isAuthenticated={userInfo.isLoggedIn} component={NewScheduleContainer} />
          <PrivateRoute exact path="/:doctorId/book-appointment" isAuthenticated={userInfo.isLoggedIn} component={SchedulePageContainer} />
        </Switch>
      </div>
    </main>
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
