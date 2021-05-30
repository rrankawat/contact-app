import React, { useState } from 'react';
import { isEmail } from '../utils/Validation';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailErr, setEmailErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '') {
      setEmailErr('Email is required');
    } else if (!isEmail(email)) {
      setEmailErr('Email is not valid');
    } else {
      setEmailErr(null);
    }

    if (password === '') {
      setPasswordErr('Password is required');
    } else if (password.length < 6) {
      setPasswordErr('Password should have 6 characters length');
    } else {
      setPasswordErr(null);
    }

    // API Call
    if (emailErr === '' && passwordErr === '') {
      console.log('API Call');
    }
  };

  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
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
