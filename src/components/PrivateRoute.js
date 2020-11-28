/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated === true ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{ pathname: '/login', state: { from: props.location } }}
      />
    ))}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.instanceOf(Object),
  isAuthenticated: PropTypes.bool,
  location: PropTypes.instanceOf(Object),
};

PrivateRoute.defaultProps = {
  component: {},
  isAuthenticated: false,
  location: null,
};

export default PrivateRoute;
