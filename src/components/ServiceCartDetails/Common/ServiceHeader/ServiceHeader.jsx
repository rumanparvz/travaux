import React from "react";
import NavBar from "../../../Common/NavBar/NavBar";

const ServiceHeader = ({ data }) => {
  return (
    <div className="service_cart_details_header">
      <NavBar />
      <div className="container header_wrraper">
        <div className="header_content">
        <h4>{data.title}</h4>
        <p>{data.des}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
