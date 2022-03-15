import React from 'react';
import HeaderParent from '../../Common/HeaderParent/HeaderParent';
const PeintureHeader = () => {
    const data ={
        title:"Peinture : Prix, comparatifs et conseils",
        des:"Vous voulez en savoir plus sur le domaine de la peinture intérieur et extérieure, le papier peint et le lambris ? Grâce à nos articles, nous pouvons vous donner une idée de ce que nos peintres peuvent faire pour vous et des coûts que vous pouvez prendre en compte."
    }
    return (
        <div>
            <HeaderParent data={data} />
        </div>
    );
};
export default PeintureHeader;