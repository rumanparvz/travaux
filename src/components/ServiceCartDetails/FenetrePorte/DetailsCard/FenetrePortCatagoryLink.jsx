import React from "react";
import CategoryLinkDetails from "../../Common/CategoryLinkDetails";

const FenetrePortCatagoryLink = () => {
  const cateGoryLink = [
    {
      id: 1,
      name: "Trouvez le bon artisan  ",
      title:
        "Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.        ",
      links: [
        {
          title: "Voir tous les travaux vitrier - miroitier",
        }
      ],
    },
  ];
  return (
    <div className="container my-5">

      <div className="row">
          {
              cateGoryLink?.map((link)=><CategoryLinkDetails id={link.id} link={link} />)
          }
      </div>
    </div>
  );
};

export default FenetrePortCatagoryLink;
