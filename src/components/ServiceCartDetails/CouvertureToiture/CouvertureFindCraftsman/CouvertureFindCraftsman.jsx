import React from 'react';
import FindCraftsman from '../../Common/FindCraftsman/FindCraftsman';

const CouvertureFindCraftsman = () => {
    const couvertureFindCraftsman = {
        title:"Trouvez le bon artisan",
        des:"Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.",
        link:"Voir tous les travaux vitrier - miroitier"
    }
    return (
        <div>
            <FindCraftsman data={couvertureFindCraftsman} />
        </div>
    );
};
export default CouvertureFindCraftsman;