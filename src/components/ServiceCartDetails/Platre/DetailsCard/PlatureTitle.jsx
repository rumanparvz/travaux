import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const PlatureTitle = () => {
    const content={
        title:'Travaux de plâtre : Prix, comparatifs et conseils        ',
        description:"Seriez-vous intéressé par des informations sur le prix concernant ces travaux ? Pour vous donner une idée de ce que les professionnels peuvent réaliser et des prix moyens pratiqués, nous avons sélectionné une liste d'articles.  "       
    }
    return (
        <div>
           <DetailsCardHeader content={content} />
        </div>
    );
};

export default PlatureTitle;