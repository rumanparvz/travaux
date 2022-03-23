import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const PeintureTitle = () => {
    const content={
        title:'Peinture : Prix, comparatifs et conseils        ',
        description:"Vous voulez en savoir plus sur le domaine de la peinture intérieur et extérieure, le papier peint et le lambris ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos peintres peuvent faire pour vous et des coûts que vous pouvez prendre en compte.        "       
    }
    return (
        <div>
           <DetailsCardHeader content={content} />
        </div>
    );
};

export default PeintureTitle;