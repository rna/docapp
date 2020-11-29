import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import userRegisterRequest from '../../api/userRegisterRequest';
import './doctorRegisterPage.css';
import logo from '../../assets/logo.png';

const DoctorRegisterPage = ({ userRegisterRequest, userInfo }) => {
  const [user, setUser] = useState({
    name: '',
    specialization: '',
    experience: '',
    fee: '',
    image: '',
    email: '',
    password: '',
  });

  const userType = 'doctor';

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
      specialization: '',
      experience: '',
      fee: '',
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
      <div className="doctor-register-form">
        <img alt="logo" className="logo" src={logo} />
        <h1> Doctor Registration</h1>
        <form onSubmit={handleSubmit}>
          <label className="required" htmlFor="name">
            <input name="name" type="text" id="name" placeholder="Your Full Name" onChange={handleChange} required />
          </label>

          <label className="required" htmlFor="specialization">
            <input name="specialization" type="text" id="specialization" placeholder="Specialization" onChange={handleChange} required />
          </label>

          <label className="required" htmlFor="experience">
            <input name="experience" type="number" id="experience" placeholder="Experience (in Years)" onChange={handleChange} required />
          </label>

          <label className="required" htmlFor="fee">
            <input name="fee" type="number" id="fee" placeholder="Consulation Fee (in USD)" onChange={handleChange} required />
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
    <div>
      <div className="doctor-register-left" />
      <div className="doctor-register-right">
        { customRegister }
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userInfo: state.userData.user,
});

const mapDispatchToProps = {
  userRegisterRequest,
};

DoctorRegisterPage.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Object),
  ]).isRequired,
  userRegisterRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorRegisterPage);
