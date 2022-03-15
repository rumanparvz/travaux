import React from "react";
import heater1 from "../../../../assets/images/heater1.jpg";
import heater2 from "../../../../assets/images/heater2.jpg";
import heater3 from "../../../../assets/images/heater3.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const PeintureInterieur = () => {
  const peintureInterieurData = [
    {
      img: heater1,
      imgName: "guide rex prix",
      link: "Prix de l'installation et du remplacement d'un chauffe-eau",
      des: "Estimation et comparatif des prix de l'entretien d'un chauffe-eau qui va dépendre du type de prestation, mais aussi de",
    },
    {
      img: heater2,
      imgName: "Article",
      link: "Top 3 des chauffe-eau les plus économiques",
      des: "Votre eau est de moins en moins chaude. La quantité produite est de moins en moins satisfaisante. De la rouille est présente dans votre vieux chauffe-eau au gaz?. Ces signes indiquent qu'il est temps de changer d'appareil de production d'eau chaude sanitaire.",
    },
    {
      img: heater3,
      imgName: "guide rex prix",
      link: "Prix des chauffe-eau thermodynamique",
      des: "Le prix des chauffe-eaux thermodynamiques va dépendre de plusieurs facteurs : la puissance, le nombre de personnes, et le niveau de gamme de l'équipement.",
    },
    {
      img: heater2,
      imgName: "guide rex prix",
      link: "Prix de l'entretien d'un chauffe-eau",
      des: "Estimation et comparatif des prix de l'entretien d'un chauffe-eau qui va dépendre du type de prestation, mais aussi des conditions d'interventions.",
    },
  ];
  return (
    <div className="h-650 box-shadow">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Peinture intérieur</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={peintureInterieurData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default PeintureInterieur;