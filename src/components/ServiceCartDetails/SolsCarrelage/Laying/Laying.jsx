import React from "react";
import septicTank2 from "../../../../assets/images/septicTank2.jpg";
import septicTank3 from "../../../../assets/images/septicTank3.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const Laying = () => {
  const LayingData = [
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
    {
      img: septicTank2,
      imgName: "Article",
      link: "L'assainissement individuel (autonome) : comment ça marche ?",
      des: "Chaque jour, vous utilisez de l'eau pour la vaisselle, la douche, la lessive, les WC… et produisez des 'eaux usées domestiques'. Polluées, elles doivent être épurées avant d'être rejetées dans le milieu naturel. C'est le rôle de la fosse septique et de la fosse toutes eaux. Quelques conseils pour une installation bien conçue.",
    },
  ];
  return (
    <div className="h-650 mt-100 box-shadow">
      <div className="container pt-90">
        <div className="row">
          <div className="col-md-6">
            <h3 className="me-5 compoTitle">
            Pose ou rénovation d'un carrelage
            </h3>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button className="buttonBg">
              Publiez votre projet gratuitement
            </button>
          </div>
        </div>
      </div>
      <DetailsCartParent data={LayingData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default Laying;