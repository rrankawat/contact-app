import React from 'react';
import { HiMail } from 'react-icons/hi';
import { AiTwotonePhone } from 'react-icons/ai';

import AddContact from '../components/add_contact/AddContact';

const Dashboard = () => {
  return (
    <div className="row">
      <AddContact />

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
