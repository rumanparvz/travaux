import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const TruvertUreToiureTitle = () => {
    const content={
        title:'Couverture - Toiture : Prix, comparatifs et conseils        ',
        description:"Vous voulez en savoir plus sur les travaux de couverture-toiture ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos couvreurs et charpentiers peuvent faire pour vous et des coûts que vous pouvez prendre en compte."       
    }
    return (
        <div>
           <DetailsCardHeader content={content} />
        </div>
    );
};

export default TruvertUreToiureTitle;