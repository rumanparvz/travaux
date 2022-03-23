import React from 'react';
import MoreServiceCard from '../../Common/MoreService/MoreServiceCard';

const FenetrePortServiceLink = () => {
    const services = [
        {
          id: 1,
          title: "Plus de services fenêtre et porte      ",
          links: [
            { id: 1, title: "   Porte d'intérieur " },
            { id: 2, title: "Remplacement de vitre" },
            { id: 3, title: "Installer ou remplacer une serrure" },
            { id: 4, title: "Store " },
            { id: 5, title: "Fenêtre de toit" },
            { id: 6, title: "Vitrine de magasin" },
          ],
        },
      ];
    return (
        <div>
            
            <MoreServiceCard services={services} />
            
        </div>
    );
};

export default FenetrePortServiceLink;