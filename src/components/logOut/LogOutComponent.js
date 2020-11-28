import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { createUserLogout } from '../../actions/userActions';

const LogOutComponent = ({ createUserLogout }) => {
  const [logged, setLogged] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setLogged(true);
    createUserLogout();
  };

  if (logged) {
    return <Redirect to="/login" />;
  }

  return (
    <button type="button" onClick={handleClick}>
      LOG OUT
    </button>
  );
};

const mapDispatchToProps = {
  createUserLogout,
};

LogOutComponent.propTypes = {
  createUserLogout: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LogOutComponent);
