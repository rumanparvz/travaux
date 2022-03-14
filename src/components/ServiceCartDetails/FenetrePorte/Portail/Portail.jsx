import React from "react";
import img1 from "../../../../assets/images/Portail3.jpg";
import img2 from "../../../../assets/images/Portail2.jpg";
import img3 from "../../../../assets/images/Portail3.jpg";
import img4 from "../../../../assets/images/Portail4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const Portail = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "Guide des prix",
      link: "Prix de la pose d'un portail",
      des: "Le prix de la pose d'un portail va dépendre du type d'ouverture, du matériau du portail et des éventuels travaux à prévoir, notamment dans le cadre du remplacement d'un ancien portail.",
    },
    {
      img: img2,
      imgName: "Guide des prix",
      link: "Prix d'un portail électrique",
      des:"L'installation d'un portail électrique peut représenter une solution efficace de sécurité pour protéger l'accès à votre logement."
    },
    {
      img: img3,
      imgName: "Guide des prix",
      link: "Prix de la réparation de portail",
      des: "Le prix d'une réparation de portail varie principalement selon le corps de métier concerné et en fonction du poste à réparer : motorisation, guidage, portes, etc., des électriciens ou des forgerons pourront être appelés, à des tarifs différents.",
    },
    {
      img: img4,
      imgName: "Guide des prix",
      link: "Prix d'un portail sur mesure",
      des: "Le prix d'un portail sur-mesure est largement influencé par le matériau et sa qualité, par le type d'ouverture, par les spécificités des accessoires et si le portail est motorisé. Le coût du portail sur-mesure dépend en plus des tarifs pratiqués par l'art",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Portail
</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default Portail;