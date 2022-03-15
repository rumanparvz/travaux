import React from "react";
import img1 from "../../../../assets/images/GardeCorps3.jpg";
import img2 from "../../../../assets/images/GardeCorps2.jpg";
import img3 from "../../../../assets/images/GardeCorps3.jpg";
// import img4 from "../../../../assets/images/GardeCorps4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const GardeCorps = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "Guide des prix",
      link: "Garde-corps et législation",
      des: "La conception et la pose de garde-corps sécuritaire sont strictement encadrées, aussi bien dans un bâtiment recevant du public que dans une maison ou un immeuble d'habitation collectif. Les obligations légales sont très précises. Explications.",
    },
    {
      img: img2,
      imgName: "Guide des prix",
      link: "Prix d’un garde-corps en aluminium",
      des:"Le prix d'un garde-corps en aluminium se calcul au mètre linéaire,  son prix varie en fonction de sa configuration (barreaux verticaux ou horizontaux), des dimensions (hauteur, largeur) ainsi que des caractéristiques et des options choisies."
    },
    {
      img: img3,
      imgName: "Guide des prix",
      link: "Prix d’un garde-corps en verre",
      des: "Le prix d'un garde-corps en verre dépend de l'épaisseur du verre, des dimensions totales (hauteur et largeur), de la configuration à adopter, du type d'encadrement (bois, aluminium, inox, etc.) ou encore du type d'isolation incluse.",
    },
    {
      img: img2,
      imgName: "Guide des prix",
      link: "Guide des prix garde-corps",
      des: "Le guide des prix garde-corps vous donne des informations sur les différents matériaux utilisés pour les garde-corps, sur les prix moyens pratiqués pour leur fabrication et leur installation et vous apporte des éclaircissements concernant la législation.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Garde corps
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

export default GardeCorps;