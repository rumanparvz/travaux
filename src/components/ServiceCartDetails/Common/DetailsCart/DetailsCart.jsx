import React from "react";
import { Link } from "react-router-dom";

const DetailsCart = ({ data }) => {
  return (
    <div className="col-md-3 details_cart">
      <div className="details_caer_thamb">
        <img src={data.img} alt="" />
        <div className="img_name">{data.imgName}</div>
      </div>
      <Link to="">{data.link}</Link>
      <p>{data.des}</p>
    </div>
  );
};

export default DetailsCart;
