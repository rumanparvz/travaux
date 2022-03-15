import React from 'react';
import FindCraftsman from '../../Common/FindCraftsman/FindCraftsman';

const PlatreFindCraftsman = () => {
    const platreFindCraftsmandata = {
        title:"Trouvez le bon artisan",
        des:"Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.",
        link:"Voir tous les travaux plombiers"
    }
    return (
        <div>
            <FindCraftsman data={platreFindCraftsmandata} />
        </div>
    );
};

export default PlatreFindCraftsman;