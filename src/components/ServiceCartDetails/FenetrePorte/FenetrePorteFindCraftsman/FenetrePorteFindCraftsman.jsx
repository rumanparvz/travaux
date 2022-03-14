import React from 'react';
import FindCraftsman from '../../Common/FindCraftsman/FindCraftsman';

const FenetrePorteFindCraftsman = () => {
    const plomberieFindCraftsmandata = {
        title:"Trouvez le bon artisan",
        des:"Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.",
        link:"Voir tous les travaux vitrier - miroitier"
    }
    return (
        <div>
            <FindCraftsman data={plomberieFindCraftsmandata} />
        </div>
    );
};
export default FenetrePorteFindCraftsman;