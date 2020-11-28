import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import userLoginRequest from '../../api/userLoginRequest';
import './loginPageContainer.css';

const LoginPageContainer = ({ userLoginRequest, userInfo }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [userType, setUserType] = useState('patient');

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleUserTypeChange = e => {
    setUserType(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userObj = { [userType]: user };
    userLoginRequest(userObj, userType);

    setUser({
      email: '',
      password: '',
    });
  };

  let customLogin;
  if (userInfo.token) {
    customLogin = <Redirect to="/dashboard" />;
  } else {
    customLogin = (
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input name="email" type="email" id="email" placeholder="Email address" onChange={handleChange} />
          </label>

          <label htmlFor="password">
            <input name="password" id="password" type="password" placeholder="Password" onChange={handleChange} />
          </label>

          <select value={userType} onChange={handleUserTypeChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <button type="submit">LOGIN</button>
        </form>
        <span>
          Register ?
          {' '}
          <Link to="/patient-register">Patient</Link>
          {' Or '}
          <Link to="/doctor-register">Doctor</Link>
        </span>
      </div>
    );
  }

  return (
    <div>
      <div className="login-left" />
      <div className="login-right">
        { customLogin }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData.user,
});

const mapDispatchToProps = {
  userLoginRequest,
};

LoginPageContainer.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  userLoginRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);