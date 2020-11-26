import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import userLoginRequest from '../api/userLoginRequest';

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
    // eslint-disable-next-line
    console.log(userObj);
    userLoginRequest(userObj);

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
      <div>
        <h1> Login Page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">
            {' '}
            Email ID
            <input name="email" type="email" id="email" placeholder="Email address" onChange={handleChange} />
          </label>

          <label htmlFor="password">
            {' '}
            Password
            <input name="password" id="password" type="password" placeholder="Password" onChange={handleChange} />
          </label>

          <select value={userType} onChange={handleUserTypeChange}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
          </select>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      { customLogin }
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
  userInfo: PropTypes.instanceOf(Object).isRequired,
  userLoginRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPageContainer);
