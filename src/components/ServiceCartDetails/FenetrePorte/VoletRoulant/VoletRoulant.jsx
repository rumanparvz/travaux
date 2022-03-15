import React from "react";
import img1 from "../../../../assets/images/Volet3.jpg";
import img2 from "../../../../assets/images/Volet2.jpg";
import img3 from "../../../../assets/images/Volet3.jpg";
import img4 from "../../../../assets/images/Volet4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const VoletRoulant = () => {
  const voletRoulantData = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix des volets en aluminium",
      des: "Estimation et comparatif de prix des volets en aluminium, leurs prix va dépendre du niveau de gamme, de la taille, du type d'ouverture (volets battants, pliants, roulants…) et des finitions du volets.",
    },
    {
      img: img2,
      imgName: "guide des prix",
      link: "Installation de volets : Aides et crédits d'impôt",
      des:"L'installation de volets isolants permet de bénéficier d’aides nationales qui vous permettront d'amoindrir le prix de votre installation de volets. Retour sur les dispositifs existants.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Volet roulant</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={voletRoulantData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default VoletRoulant;