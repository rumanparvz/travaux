import React from 'react';
import DetailsCardHeader from '../../Common/DetailsCardHeader/DetailsCardHeader';

const FentrporteTitle = () => {
    const content={
        title:'Fenêtre et porte : Prix, comparatifs et conseils        ',
        description:"Vous voulez en savoir plus sur les travaux de fenêtres et portes, les volets, vérandas ou encore portes de garage ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos professionnels peuvent faire pour vous et des coûts que vous pouvez prendre en compte. "       
    }
    return (
        <div>
           <DetailsCardHeader content={content} />
        </div>
    );
};

export default FentrporteTitle;