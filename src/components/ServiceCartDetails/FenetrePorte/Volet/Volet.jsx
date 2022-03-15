import React from "react";
import img1 from "../../../../assets/images/Volet3.jpg";
import img2 from "../../../../assets/images/Volet2.jpg";
import img3 from "../../../../assets/images/Volet3.jpg";
import img4 from "../../../../assets/images/Volet4.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const Volet = () => {
  const waterHeaterData = [
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
    {
      img: img3,
      imgName: "guide des prix",
      link: "Prix des volets en PVC",
      des: "Le prix des volets en PVC va dépendre du niveau de gamme du volet, de sa taille mais aussi de son type d'ouverture (volets battants, pliants, roulants…).",
    },
    {
      img: img4,
      imgName: "guide des prix",
      link: "Tout savoir pour bien choisir ses volets",
      des: "Envie d'une façade contemporaine ou plutôt classique ? Les volets se déclinent sous de nombreuses formes, sont manuels ou motorisés. Pour vous aider à faire un choix sur le matériau des volets et le type de fermeture idéal, Travaux.com répond pour vous à des questions ciblées et pertinentes. Pour bien choisir vos volets, découvrez les avantages et inconvénients de chaque catégorie.",
    },
  ];
  return (
    <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Volet</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default Volet;