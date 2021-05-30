import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="row w-100 d-flex justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          <div className="form-heading mb-4 text-center">
            <h1>
              Account <span className="heading-default-primary">Register</span>
            </h1>
          </div>
          <div class="form-section">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input class="form-control input" type="text" />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control input"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input type="password" class="form-control input" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Confirm Password
              </label>
              <input type="password" class="form-control input" />
            </div>

            <button type="submit" class="submit btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
