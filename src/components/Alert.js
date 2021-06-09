import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetAlert } from '../redux/alert/alertActions';
import PropTypes from 'prop-types';

const Alert = () => {
  const dispatch = useDispatch();

  const alert = useSelector((state) => state.alerts.alert);

  return (
    <div
      className={`alert alert-dismissible fade show alert-${
        alert.success === true ? 'success' : 'danger'
      }`}
      role="alert"
    >
      {alert.message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => dispatch(resetAlert())}
      ></button>
    </div>
  );
};

Alert.propType = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
};

export default Alert;
