import React from "react";
import { NavLink } from "reactstrap";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <a className="navbar-brand" href="#" style={{ color: "white" }}>
        <img
          src="../../images/logo.png"
          height={40}
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" style={{ flexDirection: "row-reverse" }}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" href="#" style={{ color: "white" }}>
              Market
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" style={{ color: "white" }}>
              Exchange
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" style={{ color: "white" }}>
              Wallet
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#" style={{ color: "white" }}>
              Tutorial
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
