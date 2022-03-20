import React from 'react';
import FindCraftsman from '../../Common/FindCraftsman/FindCraftsman';

const PeintureFindCraftsman = () => {
    const peintureFindCraftsmandata = {
        title:"Trouvez le bon artisan",
        des:"Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.",
        link:"Voir tous les travaux plombiers"
    }
    return (
        <div>
            <FindCraftsman data={peintureFindCraftsmandata} />
        </div>
    );
};

export default PeintureFindCraftsman;