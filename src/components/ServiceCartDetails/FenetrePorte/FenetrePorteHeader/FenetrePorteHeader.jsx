import React from 'react';
import HeaderParent from '../../Common/HeaderParent/HeaderParent';
const FenetrePorteHeader = () => {
    const data ={
        title:"Fenêtre et porte : Prix, comparatifs et conseils",
        des:"Vous voulez en savoir plus sur les travaux de fenêtres et portes, les volets, vérandas ou encore portes de garage ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos professionnels peuvent faire pour vous et des coûts que vous pouvez prendre en compte."
    }
    return (
        <div className="">
            <HeaderParent data={data} />
        </div>
    );
};

export default FenetrePorteHeader;