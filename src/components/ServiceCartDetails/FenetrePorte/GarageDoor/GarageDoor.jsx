import React from "react";
import img1 from "../../../../assets/images/WindowDoor3.jpg";
import img2 from "../../../../assets/images/GarageDoor2.jpg";
import img3 from "../../../../assets/images/GarageDoor3.jpg";
// import img4 from "../../../../assets/images/GarageDoor4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const GarageDoor = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "guide des prix",
      link: "Prix d'une porte de garage automatique",
      des: "La porte de garage automatique présente de nombreux avantages. Son prix va dépendre du type de motorisation, du type de fermeture, de son matériau ainsi que du niveau de gamme et des possibles options.",
    },
    {
      img: img2,
      imgName: "Article",
      link: "Prix du remplacement d'une porte de garage",
      des:"Estimation de prix du remplacement d'une porte de garage, dont le prix dépend des côtes de la porte, du matériau, de l'ouverture et du système d'automatisation ou pas.",
    },
    {
      img: img3,
      imgName: "guide des prix",
      link: "Prix de la pose d'une porte de garage",
      des: "Le prix de la pose d'une porte de garage dépend de la main d’œuvre du professionnel, du matériau (alu, bois, pvc etc..), de la taille de la porte,du type d'ouverture et des options (motorisation ou pas).",
    },
    {
      img: img2,
      imgName: "guide des prix",
      link: "Aides et porte de garage",
      des: "L'installation de porte de garage, ne permet pas de bénéficier de crédit d'impôt ou d'aides (éco-primes, eco-PTZ) L'achat et la pose d'une porte de garage, peut vous permettre de bénéficier d'un taux de TVA à taux réduit.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-100">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Porte de garage</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default GarageDoor;