import React from "react";
import img1 from "../../../../assets/images/WindowDoor3.jpg";
// import img2 from "../../../../assets/images/DoorShield2.jpg";
// import img3 from "../../../../assets/images/DoorShield3.jpg";
// import img4 from "../../../../assets/images/DoorShield4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const DoorShield = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix du remplacement d'une porte d'entrée",
      des: "Conseils et estimation de prix pour le remplacement d'une porte d'entrée. Le prix du remplacement de la porte dépendra de la difficulté du chantier, du matériau de la porte et de l'entreprise contactée.",
    },
    {
      img: img1,
      imgName: "Article",
      link: "Prix des portes blindées",
      des:"L'installation d'une porte blindée, contrairement à l'opération de blindage de porte existante, nécessite de remplacer totalement votre porte par un bloc porte blindée.",
    },
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix d'une porte d'entrée en aluminium",
      des: "Estimation de prix d'une porte d'entrée en aluminium, le prix de la porte va dépendre du type de gamme de la porte, de son design, ainsi que de ses options (formes, loquets, poignées, etc.). Détails ici.",
    },
    {
      img: img1,
      imgName: "guide des prix",
      link: "Porte d'entrée : aides, crédit d’impôt et TVA",
      des: "La pose ou le remplacement d'une porte d'entrée permet de bénéficier du crédit d'impôt à 30%, du taux de TVA réduite et d'autres aides, cela à condition de répondre à des critères précis. Explications :",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-100">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Porte d'entrée / Blindage porte</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default DoorShield;