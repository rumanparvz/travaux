import React from "react";
import img1 from "../../../../assets/images/WindowDoor1.jpg";
import img2 from "../../../../assets/images/WindowDoor2.jpg";
import img3 from "../../../../assets/images/WindowDoor3.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const WindowDoor = () => {
  const waterHeaterData = [
    {
      img: img1,
      imgName: "guide rex prix",
      link: "Prix de remplacement d'une fenêtre",
      des: "Le remplacement d’une fenêtre comprend le prix de la fenêtre ainsi que le coût de la pose et de la dépose. Les tarifs suivants concernent le remplacement d'une fenêtre de dimension standard.",
    },
    {
      img: img2,
      imgName: "Article",
      link: "Changer ses fenêtres en bénéficiant du crédit d'impôt.",
      des:"Le poste des fenêtres, ou parois vitrées, totalise à lui seul plus de 10% des déperditions thermiques d'une maison. Changer ses vitrages pour des modèles plus performants est donc synonyme d'économie d'énergie. Si ces travaux représentent un coût, la nouvelle formule du crédit d'impôt permet toujours de profiter de coup de pouce avantageux. A conditions de respecter des modalités devenues plus sévères. Détails.",
    },
    {
      img: img3,
      imgName: "guide rex prix",
      link: "Prix des chauffe-eau thermodynamique",
      des: "Le prix des chauffe-eaux thermodynamiques va dépendre de plusieurs facteurs : la puissance, le nombre de personnes, et le niveau de gamme de l'équipement.",
    },
    {
      img: img2,
      imgName: "guide rex prix",
      link: "Prix d'une fenêtre en PVC",
      des: "Le PVC est le matériau le plus utilisé pour la fabrication de fenêtre. Le prix d'une fenêtre en PVC varie en fonction des spécificités de la fenêtre : dimension, couleur, ouverture....",
    },
  ];
  return (
    <div className="h-650 box-shadow">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Fenêtre - Porte fenêtre</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={waterHeaterData} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
  );
};

export default WindowDoor;