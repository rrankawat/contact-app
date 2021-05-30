import React from 'react';
import { HiMail } from 'react-icons/hi';
import { AiTwotonePhone } from 'react-icons/ai';

const AddContact = () => {
  return (
    <div className="container">
      <div className="row w-100 d-flex space-between justify-content-center main-col ">
        <div className="form col-12 col-md-8 col-xxl-5 ">
          <div className="form-heading mb-4 text-center">
            <h1>
              <span className="heading-default-primary"> Add Contact</span>
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
                Phone Number
              </label>
              <input
                type="text"
                class="form-control bfh-phone"
                data-format="+91 (ddd) ddd-dddd"
              />
            </div>
            <div className="mb-3 ">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" value="personal" />
                <label class="form-check-label" for="inlineCheckbox1">
                  Personal
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  value="professional"
                />
                <label class="form-check-label" for="inlineCheckbox2">
                  Professional
                </label>
              </div>
            </div>
            <button type="submit" class=" submit btn btn-primary">
              Submit
            </button>
          </div>
        </div>
        <div className="form col-12 col-md-8 col-xxl-5 ">
          <input
            class="form-control input"
            type="text"
            placeholder="Filter Contact"
          />
          <div className="contact-list-body card mt-3">
            <div class="card">
              <div class="card-body">
                <div class="card-title">Meenu</div>
                <span class="badge bg-secondary">New</span>

                <p class="contact-mail">
                  <HiMail /> meenurana32@gmail.com
                </p>
                <p class="contact-number">
                  <AiTwotonePhone /> 9999-999-999
                </p>
                <button type="button" class="btn btn-edit btn-sm btn-primary">
                  Edit
                </button>
                <button type="button" class="btn btn-delete btn-sm btn-primary">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
