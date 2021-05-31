import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillContacts } from 'react-icons/ai';
import { BiLogOutCircle } from 'react-icons/bi';

const Topbar = () => {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <AiFillContacts size={25} /> Contact Keeper
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-light " to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="#">
                  <BiLogOutCircle size={25} /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
