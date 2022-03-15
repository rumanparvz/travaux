import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import Lambris from '../../components/ServiceCartDetails/Peinture/Lambris/Lambris';
import PapierPeint from '../../components/ServiceCartDetails/Peinture/PapierPeint/PapierPeint';
import PeintureDecorative from '../../components/ServiceCartDetails/Peinture/PeintureDecorative/PeintureDecorative';
import PeintureExterieure from '../../components/ServiceCartDetails/Peinture/PeintureExterieure/PeintureExterieure';
import PeintureFindCraftsman from '../../components/ServiceCartDetails/Peinture/PeintureFindCraftsman/PeintureFindCraftsman';
import PeintureHeader from '../../components/ServiceCartDetails/Peinture/PeintureHeader/PeintureHeader';
import PeintureInterieur from '../../components/ServiceCartDetails/Peinture/PeintureInterieur/PeintureInterieur';

const PeinturePage = () => {
    return (
        <div className="lightBgColor">
            <PeintureHeader />
            <PeintureInterieur />
            <PeintureFindCraftsman />
            <PeintureExterieure />
            <PapierPeint />
            <PeintureDecorative />
            <Lambris />
            <Footer />
        </div>
    );
};

export default PeinturePage;