import React from "react";
import { NavLink } from "reactstrap";
// import logo from '../../images'

const Footer = () => {
  return (
    <div className="mt-4">
      <div className="d-flex  justify-content-around">
        <img src="../../images/logo.png" height={40}></img>
        <NavLink className="nav-link" href="#" style={{ color: "white" }}>
          Market
        </NavLink>
        <NavLink className="nav-link" href="#" style={{ color: "white" }}>
          Exchange
        </NavLink>
        <NavLink className="nav-link" href="#" style={{ color: "white" }}>
          Wallet
        </NavLink>
      </div>
      <div className="d-flex justify-content-center align-items-center text-white mt-2">
        info@kryptomastery.com
      </div>
    </div>
  );
};

export default Footer;
