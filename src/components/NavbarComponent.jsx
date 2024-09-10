import React from 'react';

const NavbarComponent = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'rgba(251, 67, 0, 1)' }}>
    <div className="container-fluid">
      {/* Branding */}
      <a className="navbar-brand text-white" href="#home"><b>FinProH8</b></a>

      {/* Toggler for mobile view */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar links and search form */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="d-flex justify-content-lg-end justify-content-center text-light w-100">
          <form className="d-flex">
            <div className="input-group input-group-sm">
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                aria-label="Search"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-dark"
                type="button"
                id="button-addon2"
                aria-label="Search"
              >
                SEARCH
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </nav>
);

export default NavbarComponent;
