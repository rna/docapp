import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './sidebarComponent.css';

const SidebarComponent = ({ userType }) => {
  let customSidebar;

  if (userType === 'patient') {
    customSidebar = (
      <div className="sidebar">
        <NavLink exact to="/home" activeClassName="selected">
          Home
        </NavLink>
        <NavLink exact to="/bookings" activeClassName="selected">
          My Appointments
        </NavLink>
      </div>
    );
  }

  if (userType === 'doctor') {
    customSidebar = (
      <div className="sidebar">
        <NavLink to="/dashboard" activeClassName="selected">
          Dashboard
        </NavLink>
        <NavLink to="/new-schedule" activeClassName="selected">
          New Schedule
        </NavLink>
      </div>
    );
  }
  return (
    <div className="left-container">
      {customSidebar}
    </div>
  );
};

SidebarComponent.propTypes = {
  userType: PropTypes.string,
};

SidebarComponent.defaultProps = {
  userType: null,
};

export default SidebarComponent;
