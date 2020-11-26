import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginPageContainer from './containers/LoginPageContainer';
import AppointmentPageContainer from './containers/AppointmentPageContainer';
import PatientPageContainer from './containers/PatientPageContainer';
import DoctorPageContainer from './containers/DoctorPageContainer';
import autoLoginRequest from './api/autoLoginRequest';

const App = ({ autoLoginRequest, userInfo }) => {
  const usertype = localStorage.getItem('usertype');
  useEffect(() => {
    autoLoginRequest(usertype);
  }, [autoLoginRequest]);

  let dashboardRoute;
  if (usertype === 'patient') {
    dashboardRoute = <PatientPageContainer />;
  }

  if (usertype === 'doctor') {
    dashboardRoute = <DoctorPageContainer />;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {userInfo.token || dashboardRoute ? dashboardRoute : <LoginPageContainer />}
        </Route>
        <Route exact path="/dashboard">{dashboardRoute}</Route>
        <Route exact path="/:doctorId/book-appointment">
          <AppointmentPageContainer />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData.user,
});

const mapDispatchToProps = {
  autoLoginRequest,
};

App.propTypes = {
  autoLoginRequest: PropTypes.func.isRequired,
  userInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
