import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="row d-flex border rounded blue-glassmorphism p-2 m-2">
    <div
      className={`col-2 d-flex justify-content-center align-items-center ${color}`}
      style={{ width: "54px", borderRadius: "50px" , height: "50px" }}
    >
      {icon}
    </div>
    <div className="col-10">
      <h5 className="title">{title}</h5>
      <div className="subtitle">{subtitle}</div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div>
      <div className="row" style={{ color: "white" }}>
        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center" style={{paddingLeft: "50px"}}>
          <div className="">
            <h1 className="my-3">
              Services That We
              <br />
              Continue to improve
            </h1>
            <p className="my-3">
              The Best choice to Buying and Selling Your Crypto assets, with
              <br /> the various super friendly Services We offer
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 p-5">
          <ServiceCard
            color="bg-primary"
            title="Security guarantee"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-warning"
            title="Best exchange rates"
            icon={<BiSearchAlt fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
          <ServiceCard
            color="bg-danger"
            title="Fastest transactions"
            icon={<RiHeart2Fill fontSize={21} className="text-white" />}
            subtitle="Security is guaranteed. We always maintain privacy and maintain the quality of our products"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
