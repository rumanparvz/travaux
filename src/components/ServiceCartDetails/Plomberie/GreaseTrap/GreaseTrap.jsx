import React from "react";
import door from "../../../../assets/images/tc-25-600w.avif";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const GreaseTrap = () => {
  const greaseTrap = [
    {
      img: door,
      imgName: "Article",
      link: "Assainissement : Les nouvelles normes de fosses septiques",
      des: "Depuis 2006 et la nouvelle loi sur l’eau, la réglementation a changé en ce qui concerne l’assainissement des",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30 ">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <div className="row">
          <div className="col-md-6">
            <h3 className="me-5 compoTitle">
              Fosse septique - Bac à graisse (vidange, entretien)
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="buttonBg">
              Publiez votre projet gratuitement
            </button>
          </div>
        </div>
      </div>
      <DetailsCartParent data={greaseTrap} />
    </div>
  );
};

export default GreaseTrap;
