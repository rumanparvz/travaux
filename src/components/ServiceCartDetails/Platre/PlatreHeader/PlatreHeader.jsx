import React from 'react';
import HeaderParent from '../../Common/HeaderParent/HeaderParent';
const PlatreHeader = () => {
    const data ={
        title:"Travaux de plâtre : Prix, comparatifs et conseils",
        des:"Vous voulez en savoir plus sur les travaux de plomberie ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos plombiers peuvent faire pour vous et des coûts que vous pouvez prendre en compte."
    }
    return (
        <div>
            <HeaderParent data={data} />
        </div>
    );
};

export default PlatreHeader;