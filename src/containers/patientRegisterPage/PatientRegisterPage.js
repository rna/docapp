import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import userRegisterRequest from '../../api/userRegisterRequest';
import './patientRegisterPage.css';
import logo from '../../assets/logo.png';

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
    customRegister = <Redirect to="/home" />;
  } else {
    customRegister = (
      <div className="patient-register-form">
        <img alt="logo" className="logo" src={logo} />
        <h1> Patient Registration</h1>
        <form onSubmit={handleSubmit}>
          <label className="required" htmlFor="name">
            <input name="name" type="text" id="name" placeholder="Your Full Name" onChange={handleChange} required />
          </label>

          <label htmlFor="image">
            <input name="image" type="text" id="image" placeholder="Image url" onChange={handleChange} />
          </label>

          <label className="required" htmlFor="email">
            <input name="email" type="email" id="email" placeholder="Email address" onChange={handleChange} required />
          </label>

          <label className="required" htmlFor="password">
            <input name="password" id="password" type="password" placeholder="Password" onChange={handleChange} required />
          </label>

          <button type="submit">Register</button>
        </form>
        {userInfo.error ? (<div className="error-class"><p>{userInfo.error}</p></div>) : null}
        <span>
          {'Already registered? '}
          <Link to="/login">Click Here</Link>
        </span>
      </div>
    );
  }

  return (
    <section>
      <div className="patient-register-left" />
      <div className="patient-register-right">
        { customRegister }
      </div>
    </section>
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
