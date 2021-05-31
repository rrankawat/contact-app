import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ type, msg }) => {
  return (
    <div
      className={`alert alert-dismissible fade show alert-${type}`}
      role="alert"
    >
      {msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

Alert.propType = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Alert;
