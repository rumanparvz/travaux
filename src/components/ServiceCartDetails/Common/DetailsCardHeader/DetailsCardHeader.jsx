import React from "react";

const DetailsCardHeader = ({ content }) => {
    console.log(content);
  return (
    <div className=" w-75 m-auto py-5 ">
      <h1 style={{ fontSize: "50px" }}>{content?.categoryTitle}</h1>
      <p className="w-50 py-2">{content?.categoryDescription}</p>
    </div>
  );
};

export default DetailsCardHeader;
