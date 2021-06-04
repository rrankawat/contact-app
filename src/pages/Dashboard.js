import React from 'react';
import { HiMail } from 'react-icons/hi';
import { AiTwotonePhone } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className="row">
      <div className="form col-md-5 mb-5">
        <div className="form-heading mb-4 text-center">
          <h1>
            <span className="heading-default-primary"> Add Contact</span>
          </h1>
        </div>
        <div className="form-section">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input className="form-control input" type="text" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control input" />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control input bfh-phone"
              data-format="+91 (ddd) ddd-dddd"
            />
          </div>
          <div className="mb-3 ">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="personal"
              />
              <label className="form-check-label">Personal</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                value="professional"
              />
              <label className="form-check-label">Professional</label>
            </div>
          </div>
          <button type="submit" className=" submit btn btn-primary">
            Submit
          </button>
        </div>
      </div>
      <div className="form col-md-6 offset-md-1">
        <input
          className="form-control input"
          type="text"
          placeholder="Filter Contact"
        />
        <div className="contact-list-body card mt-3">
          <div className="card mb-3 ">
            <div className="card-body">
              <div className="card-title">
                Meenu <span className="badge bg-success">Professional</span>
              </div>

              <p className="contact-mail">
                <HiMail /> meenurana32@gmail.com
              </p>
              <p className="contact-number">
                <AiTwotonePhone /> 9999-999-999
              </p>
              <button type="button" className="btn btn-edit btn-sm btn-primary">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-delete btn-sm btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
          <div className="card mb-3 ">
            <div className="card-body">
              <div className="card-title">
                Reena <span className="badge bg-primary">Personal</span>
              </div>

              <p className="contact-mail">
                <HiMail /> meenurana32@gmail.com
              </p>
              <p className="contact-number">
                <AiTwotonePhone /> 9999-999-999
              </p>
              <button type="button" className="btn btn-edit btn-sm btn-primary">
                Edit
              </button>
              <button
                type="button"
                className="btn btn-delete btn-sm btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
