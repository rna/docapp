import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import userRegisterRequest from '../api/userRegisterRequest';

const PatientRegisterPage = ({ userRegisterRequest, userInfo }) => {
  const [user, setUser] = useState({
    name: '',
    image: '',
    email: '',
    password: '',
  });

  const userType = 'patient';

  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userObj = { [userType]: user };
    userRegisterRequest(userObj, userType);
    setUser({
      name: '',
      image: '',
      email: '',
      password: '',
    });
  };

  let customRegister;
  if (userInfo.token) {
    customRegister = <Redirect to="/dashboard" />;
  } else {
    customRegister = (
      <div>
        <h1> Registration Page for Patients</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            {' '}
            Name
            <input name="name" type="text" id="name" placeholder="Your Full Name" onChange={handleChange} />
          </label>

          <label htmlFor="image">
            {' '}
            Image Link
            <input name="image" type="text" id="image" placeholder="Image Link" onChange={handleChange} />
          </label>

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

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      { customRegister }
      <p>
        Already registered?
        <Link to="/">Click Here</Link>
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData.user,
});

const mapDispatchToProps = {
  userRegisterRequest,
};

PatientRegisterPage.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  userRegisterRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientRegisterPage);
