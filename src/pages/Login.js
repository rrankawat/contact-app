import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { isEmail } from '../utils/Validation';
import { API_URL } from '../utils/Config';

import Alert from '../components/Alert';

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const [alert, setAlert] = useState({
    display: false,
    type: '',
    msg: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    let flagEmail = false;
    let flagPassword = false;

    if (email === '') {
      setEmailErr('Email is required');
      flagEmail = true;
    } else if (!isEmail(email)) {
      setEmailErr('Email is not valid');
      flagEmail = true;
    } else {
      setEmailErr(null);
      flagEmail = false;
    }

    if (password === '') {
      setPasswordErr('Password is required');
      flagPassword = true;
    } else if (password.length < 6) {
      setPasswordErr('Password should have 6 characters length');
      flagPassword = true;
    } else {
      setPasswordErr(null);
      flagPassword = false;
    }

    // API Call
    if (flagEmail === false && flagPassword === false) {
      const payload = {
        email,
        password,
      };

      try {
        const res = await axios.post(`${API_URL}/api/v1/auth`, payload, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
        } else {
          localStorage.removeItem('token');
        }

        // Redirect
        history.push('/');

        // Reset vars
        setEmail('');
        setPassword('');
        setAlert({
          display: false,
          type: '',
          msg: '',
        });
      } catch (err) {
        if (!err.response.data.success) {
          setAlert({
            display: true,
            type: 'danger',
            msg: err.response.data.message,
          });
        }
      }
    }
  };

  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          {alert.display && <Alert type={alert.type} msg={alert.msg} />}

          <div className="form-heading mb-4 text-center">
            <h1>
              Account <span className="heading-default-primary">Login</span>
            </h1>
          </div>

          <div className="form-section">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
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

export default Login;
