import React from "react";
import img1 from "../../../../assets/images/WaterSoftener.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const WaterSoftener = () => {
  const waterSoftener = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix de l'installation d'un adoucisseur d'eau",
      des: "Estimation de prix pour l'installation d'un adoucisseur d'eau : le prix varie selon la capacité de l'adoucisseur et aussi de l'artisan choisi.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Chauffe-eau</h3>
        <button className="buttonBg ">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterSoftener} />
    </div>
  );
};

export default WaterSoftener;
