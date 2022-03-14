import React from 'react';
import img1 from "../../../../assets/images/miniStation1.jpg";
import img2 from "../../../../assets/images/miniStation2.jpg";
import DetailsCartParent from "../../Common/DetailsCartParent/DetailsCartParent";
const MiniStation = () => {
    const miniStation = [
        {
          img: img1,
          imgName: "Article",
          link: "Exemple de devis mini-station d'épuration",
          des: "Notre exemple de devis mini-station d'épuration (ou micro-station d'épuration) reprend les principales phases de l'installation d'une mini-station",
        },
        {
          img: img2,
          imgName: "Article",
          link: "Installer une mini station d'épuration: ce qu'il faut savoir",
          des: "Si votre habitat n'est pas relié au tout à l'égout,l'installation d'une mini station d'épuration pour traiter les eaux usées",
        },
      ];
    return (
        <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Mini station d'épuration
</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={miniStation} />
    </div>
    );
};

export default MiniStation;