import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
const MoreServices = ({ data }) => {
  return (
    <li className="more_services">
      <Link to={data.path} className="d-flex justify-content-between align-items-center"><span>{data.title}</span><span><BsArrowRight/></span></Link>
    </li>
  );
};

export default MoreServices;
