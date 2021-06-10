import React, { useState } from 'react';
import validate from '../../utils/validate';

const AddContact = () => {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) =>
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    const resErrors = validate({ name: inputs.name });
    setErrors(resErrors);

    if (resErrors === 0) {
      // API Call
    }
  };

  return (
    <div className="form col-md-5 mb-5">
      <div className="form-heading mb-4 text-center">
        <h1>
          <span className="heading-default-primary"> Add Contact</span>
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-section">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              className="form-control input"
              type="text"
              name="name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control input"
              name="email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control input bfh-phone"
              name="phone"
              value={inputs.phone}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="personal"
                onChange={handleChange}
              />
              <label className="form-check-label">Personal</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="professional"
                onChange={handleChange}
              />
              <label className="form-check-label">Professional</label>
            </div>
          </div>

          <button type="submit" className=" submit btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
