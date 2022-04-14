import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({product}) => {
  console.log('accaLP',product);
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 details_cart mt-3">
      <div className="details_caer_thamb">
        <img src={product?.bannerImage || "https://www.travaux.com/images/cms/medium/c2a2c609-b21b-492b-8372-60967b5b91a5.jpg"} alt="" />
        <div className="img_name">{product?.type === 'price_guide'? 'price guide': product?.type} </div>
      </div>
      <Link to="">{product.title}</Link>
      <p>{product?.description}</p>
    </div>
  );
};

export default DetailsCard;
