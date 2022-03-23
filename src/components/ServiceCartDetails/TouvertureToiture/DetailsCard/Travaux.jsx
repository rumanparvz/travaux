import React from 'react';
import ParentDetailsCard from '../../Common/DetailsCard/ParentDetailsCard';

const Travaux = () => {
    
  const garage = [
    {
      id: 1,
      title:
        "Réduction d'impôt pour les petits travaux d'entretien et de bricolage ",
      img: "https://www.travaux.com/images/cms/original/f7613599-febe-4d4c-8775-8e71aecef150.jpeg",
      content:
        "Certains petits travaux d'entretien peuvent vous permettre de bénéficier d'un crédit ou d'une réduction d'impôt. Services à la personne, aide au bricolage et petits dépannage, toutes ces petites prestations peuvent être amorties par ce dispositif si vous passez par les bons professionnels et respectez les modalités. Détails.   ",
      name: "Article",
    },
    {
      id: 2,
      title:
        "Réduction d'impôt pour les petits travaux d'entretien et de bricolage ",
      img: "https://www.travaux.com/images/cms/original/f7613599-febe-4d4c-8775-8e71aecef150.jpeg",
      content:
        "Certains petits travaux d'entretien peuvent vous permettre de bénéficier d'un crédit ou d'une réduction d'impôt. Services à la personne, aide au bricolage et petits dépannage, toutes ces petites prestations peuvent être amorties par ce dispositif si vous passez par les bons professionnels et respectez les modalités. Détails.   ",
      name: "Article",
    }
  ];
    return (
        <div className='my-2'>
            <ParentDetailsCard data={garage} title="Etanchéité toiture terrasse"/>
        </div>
    );
};

export default Travaux;