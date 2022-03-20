import React from "react";
import septicTank2 from "../../../../assets/images/septicTank2.jpg";
import septicTank3 from "../../../../assets/images/septicTank3.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const ReconstitutedStones = () => {
  const ReconstitutedStonesData = [
    {
      img: septicTank2,
      imgName: "Article",
      link: "L'installation d'une fosse septique, combien ça coûte ?",
      des: "Montant de l'intervention du maçon, coût de la fosse septique toutes eaux, capacité à prévoir : zoom sur les éléments à prévoir pour découvrir combien coûte l'installation d'une fosse septique et budgétiser son projet.",
    },
    {
      img: septicTank2,
      imgName: "guide rex prix",
      link: "Prix de l'installation d'une fosse septique",
      des: "Estimation de prix de l'installation d'une fosse septique selon la dimension de la fosse, les matériaux, la composition du sol et les exigences de permis.",
    },
    {
      img: septicTank3,
      imgName: "guide rex prix",
      link: "Prix de la vidange d’une fosse septique",
      des: "Découvrez l'estimation de prix de la vidange d'une fosse septique, étape nécessaire pour garantir son bon fonctionnement.",
    },
  ];
  return (
    <div className="h-650 mt-30 box-shadow">
      <div className="container pt-90">
        <div className="row">
          <div className="col-md-7">
            <h3 className="me-5 compoTitle">Pose ou rénovation de pierres naturelles ou reconstituées</h3>
          </div>
          <div className="col-md-5 d-flex justify-content-end">
            <button className="buttonBg">
              Publiez votre projet gratuitement
            </button>
          </div>
        </div>
      </div>
      <DetailsCartParent data={ReconstitutedStonesData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};
export default ReconstitutedStones;