import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { isEmail } from '../utils/Validation';
import { URL } from '../utils/Config';

import Alert from '../components/Alert';

const Register = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameErr, setNameErr] = useState(null);
  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);
  const [confirmPasswordErr, setConfirmPasswordErr] = useState(null);

  const [alert, setAlert] = useState({
    display: false,
    type: '',
    msg: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '') {
      setNameErr('Enter your name');
    } else {
      setNameErr(null);
    }

    if (email === '') {
      setEmailErr('Enter your email');
    } else if (!isEmail(email)) {
      setEmailErr('Please enter valid email id');
    } else {
      setEmailErr(null);
    }

    if (password === '') {
      setPasswordErr('Enter password');
    } else if (password.length < 6) {
      setPasswordErr('Password length should exceed 8');
    } else {
      setPasswordErr(null);
    }

    if (confirmPassword === '') {
      setConfirmPasswordErr(`Confirm password can't be blank`);
    } else if (confirmPassword !== password) {
      setConfirmPasswordErr('Invalid or mismatch password');
    } else {
      setConfirmPasswordErr(null);
    }

    if (name !== '' && email !== '' && password !== '') {
      const payload = {
        name,
        email,
        password,
      };

      try {
        const res = await axios.post(`${URL}/api/v1/users`, payload, {
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
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
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
                    nameErr !== null ? 'is-invalid' : ''
                  }`}
                  value={name}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="invalid-feedback">
                  {nameErr !== null && nameErr}
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="type"
                  className={`form-control input ${
                    emailErr !== null ? 'is-invalid' : ''
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="invalid-feedback">
                  {emailErr !== null && emailErr}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className={`form-control input ${
                    passwordErr !== null ? 'is-invalid' : ''
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="invalid-feedback">
                  {passwordErr !== null && passwordErr}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className={`form-control input ${
                    confirmPasswordErr !== null ? 'is-invalid' : ''
                  }`}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div className="invalid-feedback">
                  {confirmPasswordErr !== null && confirmPasswordErr}
                </div>
              </div>

              <button type="submit" className="submit btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
