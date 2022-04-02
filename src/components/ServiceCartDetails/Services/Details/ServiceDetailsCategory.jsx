import React from "react";
import CategoryLinkDetails from "../../Common/CategoryLinkDetails";

const ServiceDetailsCategory = ({cateGoryLink}) => {

  return (
    <div className="container my-5">
      <div className="row">
        <CategoryLinkDetails id={cateGoryLink.id} link={cateGoryLink} />
      </div>
    </div>
  );
};

export default ServiceDetailsCategory;
