import React from "react";
import img1 from "../../../../assets/images/plumbing1.jpg";
import img2 from "../../../../assets/images/plumbing2.jpg";
import img3 from "../../../../assets/images/plumbing3.jpg";
import img4 from "../../../../assets/images/plumbing4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const Plumbing = () => {
  const plumbing = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix de l’installation d’une douche",
      des: "La rénovation de votre salle de bains constitue un projet d’aménagement présentant un excellent retour sur investissement pour votre habitation.",
    },
    {
      img: img2,
      imgName: "guide des prix",
      link: "Prix d’un plombier",
      des: "Estimation du coût de l'intervention d'un plombier selon le type de travail, l’heure de la journée ou le lieu d’intervention.",
    },
    {
      img: img3,
      imgName: "guide des prix",
      link: "Prix de la pose d’une canalisation",
      des: "Les canalisations constituent une partie importante d’une maison, l'installation nécessite une bonne communication avec votre municipalité.",
    },
    {
      img: img4,
      imgName: "guide des prix",
      link: "Prix de l'installation d'une nouvelle tuyauterie",
      des: "Estimation de prix de l'installation d'une nouvelle tuyauterie selon la taille de l'habitation, le nombre d'étages, les matériaux et la dépose. Tous les détails sont ici.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Plomberie (neuf et rénovation)</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={plumbing} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default Plumbing;
