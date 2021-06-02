import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import validate from '../utils/validate';
import { API_URL } from '../utils/Config';

import Alert from '../components/Alert';

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState({
    display: false,
    type: '',
    msg: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check
    const resErrors = validate({ name, email, password, confirmPassword });
    setErrors(resErrors);

    if (resErrors.count === 0) {
      const payload = {
        name,
        email,
        password,
      };

      try {
        const res = await axios.post(`${API_URL}/api/v1/users`, payload, {
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
        } else {
          localStorage.removeItem('token');
        }

        // Redirect & Reset
        history.push('/');

        handleReset();
      } catch (err) {
        console.log(err.response.data.message);
        if (!err.response.data.success) {
          setAlert({
            display: true,
            type: 'danger',
            msg: err.response.data.message,
          });
        }

        console.log(err);
      }
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setAlert({
      display: false,
      type: '',
      msg: '',
    });
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="form col-md-6">
        {alert.display && <Alert type={alert.type} msg={alert.msg} />}

        <div className="form-heading mb-4 text-center">
          <h1>
            Account <span className="heading-default-primary">Register</span>
          </h1>
        </div>

        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                className={`form-control input ${
                  errors.name ? 'is-invalid' : ''
                }`}
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.name && errors.name}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="type"
                className={`form-control input ${
                  errors.email ? 'is-invalid' : ''
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.email && errors.email}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className={`form-control input ${
                  errors.password ? 'is-invalid' : ''
                }`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.password && errors.password}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control input ${
                  errors.confirmPassword ? 'is-invalid' : ''
                }`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <div className="invalid-feedback">
                {errors.confirmPassword && errors.confirmPassword}
              </div>
            </div>

            <button type="submit" className="submit btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
