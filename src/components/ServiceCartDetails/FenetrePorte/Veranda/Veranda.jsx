import React from "react";
import img1 from "../../../../assets/images/Veranda3.jpg";
import img2 from "../../../../assets/images/Veranda2.jpg";
import img3 from "../../../../assets/images/Veranda3.jpg";
import img4 from "../../../../assets/images/Veranda4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const Veranda = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Guide des prix véranda 2021",
      des: "Le guide des prix véranda vous permet d'avoir une estimation du coût de l'achat et de l'installation de votre véranda et vous aide à trouver la véranda adaptée à vos envies et à votre budget.",
    },
    {
      img: img2,
      imgName: "guide des prix",
      link: "Règlementation véranda",
      des:"Votre projet d'installation de véranda doit s'accompagner de la réalisation de formalités obligatoires que vous devez connaître avant de vous lancer dans votre projet de travaux.",
    },
    {
      img: img3,
      imgName: "guide des prix",
      link: "Prix des vérandas en kit",
      des: "Quel est le prix des vérandas en kit  ? Sont-elles les moins chères du marché ? Explication et comparatif dans notre guide de prix des vérandas en kit.",
    },
    {
      img: img4,
      imgName: "guide des prix",
      link: "Véranda et impôts",
      des: "La création de véranda nécessite l'achat de parois vitrées, souvent très performantes. Pour autant il n'est pas systématiquement possible de bénéficier de crédit d'impôt pour sa réalisation.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Véranda</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default Veranda;