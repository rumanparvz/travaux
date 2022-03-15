import React from 'react';
import img1 from "../../../../assets/images/SmallPlumbingJobs1.jpg";
import img2 from "../../../../assets/images/SmallPlumbingJobs2.jpg";
import img3 from "../../../../assets/images/SmallPlumbingJobs3.jpg";
import img4 from "../../../../assets/images/SmallPlumbingJobs4.jpg";
import DetailsCartParent from '../../Common/DetailsCartParent/DetailsCartParent';
const SmallPlumbingJobs = () => {
    const smallPlumbingJobs = [
        {
          img: img4,
          imgName: "Guide des prix",
          link: "Exemple de devis mini-station d'épuration",
          des: "Notre exemple de devis mini-station d'épuration (ou micro-station d'épuration) reprend les principales phases de l'installation d'une mini-station",
        },
        {
          img: img2,
          imgName: "Guide des prix",
          link: "Exemple de devis mini-station d'épuration",
          des: "Notre exemple de devis mini-station d'épuration (ou micro-station d'épuration) reprend les principales phases de l'installation d'une mini-station",
        },
        {
          img: img3,
          imgName: "Guide des prix",
          link: "Exemple de devis mini-station d'épuration",
          des: "Notre exemple de devis mini-station d'épuration (ou micro-station d'épuration) reprend les principales phases de l'installation d'une mini-station",
        },
        {
          img: img4,
          imgName: "Guide des prix",
          link: "Installer une mini station d'épuration: ce qu'il faut savoir",
          des: "Si votre habitat n'est pas relié au tout à l'égout,l'installation d'une mini station d'épuration pour traiter les eaux usées",
        },
      ];
    return (
        <div className="h-650 box-shadow mt-30">
      <div className="container  d-flex align-items-center pt-90 mb-80">
        <h3 className="me-5 compoTitle">Petits travaux de plomberie</h3>
        <button className="buttonBg">Publiez votre projet gratuitement</button>
      </div>
      <DetailsCartParent data={smallPlumbingJobs} />
      <div className="borderBtnAlign">
        <button className="buttonBorder">En voir plus</button>
      </div>
    </div>
    );
};

export default SmallPlumbingJobs;
// export default SmallPlumbingJobs;