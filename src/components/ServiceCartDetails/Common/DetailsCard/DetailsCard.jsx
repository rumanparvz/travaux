import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = (props) => {
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 details_cart mt-3">
      <div className="details_caer_thamb">
        <img src={props?.mesonry?.img} alt="" />
        <div className="img_name">{props?.mesonry?.name} </div>
      </div>
      <Link to="">{props?.mesonry?.title}</Link>
      <p>{props?.mesonry?.content}</p>
    </div>
  );
};

export default DetailsCard;
