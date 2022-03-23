import React from "react";
import CategoryLinkDetails from "../../Common/CategoryLinkDetails";

const CatragoryLink = () => {
  const cateGoryLink = [
    {
      id: 1,
      name: "Trouvez le bon artisan ",
      title:
        "Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.  ",
      links: [
        {
          title: "Voir tous les travaux Architectes ",
        },
        {
          title: "Voir tous les travaux décorateurs - architectes d'intérieur",
        },
        {
          title: "Voir tous les travaux façadiers  ",
        },
        {
          title: "Voir tous les travaux ferronniers - métalliers - zingueurs",
        },
        {
          title: "Voir tous les travaux maçons ",
        },

        {
          title: " Voir tous les travaux professionnels second œuvre",
        },
        {
          title: "Voir tous les travaux professionnels tout corps d'etat",
        },
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

export default CatragoryLink;
