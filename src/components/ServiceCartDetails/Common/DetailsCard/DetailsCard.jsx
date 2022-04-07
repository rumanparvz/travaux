import React from "react";
import { Link } from "react-router-dom";

const DetailsCard = ({product}) => {
  console.log('accaLP',product);
  return (
    <div className="col-md-4 col-lg-3 col-sm-6 col-xs-12 details_cart mt-3">
      <div className="details_caer_thamb">
        <img src={product?.mesonry?.img || "https://www.travaux.com/images/cms/medium/c2a2c609-b21b-492b-8372-60967b5b91a5.jpg"} alt="" />
        <div className="img_name">Article </div>
      </div>
      <Link to="">{product.subCategoryName}</Link>
      <p>{product?.categoryDescription}</p>
    </div>
  );
};

export default DetailsCard;
