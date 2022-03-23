import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const PloberieTItle = () => {
    const content={
        title:'Travaux de plomberie : Prix, comparatifs et conseils ',
        description:"Vous voulez en savoir plus sur les travaux de plomberie ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos plombiers peuvent faire pour vous et des coûts que vous pouvez prendre en compte.        "       
    }
    return (
        <div>
           <DetailsCardHeader content={content} />
        </div>
    );
};

export default PloberieTItle;