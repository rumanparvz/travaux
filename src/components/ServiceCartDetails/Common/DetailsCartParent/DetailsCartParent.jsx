import React from "react";
import DetailsCart from "../DetailsCart/DetailsCart";

const DetailsCartParent = ({ data }) => {
  return (
    <div className="details_cart_parent mt-35">
      <div className="container">
        <div className="row">
          {data.map((data) => (
            <DetailsCart data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsCartParent;
