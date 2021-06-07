import React, { useState, useEffect } from 'react';
import validate from '../utils/validate';
import { loginUser } from '../redux/auth/authActions';
import { useDispatch, useSelector } from 'react-redux';

import Alert from '../components/Alert';

const Login = () => {
  const dispatch = useDispatch();

  const login = useSelector((state) => state.loginUser);
  const { loading } = login;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});

  const [alert, setAlert] = useState({
    display: false,
    type: '',
    msg: '',
  });

  useEffect(() => {
    return () => {
      setEmail('');
      setPassword('');
      setAlert({
        display: false,
        type: '',
        msg: '',
      });
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check
    const resErrors = validate({ email, password });
    setErrors(resErrors);

    // Call to action
    if (resErrors.count === 0) {
      dispatch(loginUser({ email, password }));
    }
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="row d-flex justify-content-center main-col ">
      <div className="form col-md-6">
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

            <button type="submit" className="submit btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
