import React from 'react';
import FindCraftsman from '../../Common/FindCraftsman/FindCraftsman';

const SolsCarrelageFindCraftsman = () => {
    const SolsCarrelageFindCraftsmanData = {
        title:"Trouvez le bon artisan",
        des:"Trouvez rapidement l'artisan qu'il vous faut pour votre projet sur Travaux.com.",
        link:"Voir tous les travaux carreleurs",
        link1:"Voir tous les travaux marbriers - tailleurs de pierre",
        link2:"Voir tous les travaux soliers - moquettistes "
    }
    return (
        <div>
            <FindCraftsman data={SolsCarrelageFindCraftsmanData} />
        </div>
    );
};
export default SolsCarrelageFindCraftsman;