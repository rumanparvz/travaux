import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import Charpente from '../../components/ServiceCartDetails/CouvertureToiture/Charpente/Charpente';
import CouvertureFindCraftsman from '../../components/ServiceCartDetails/CouvertureToiture/CouvertureFindCraftsman/CouvertureFindCraftsman';
import Demoussage from '../../components/ServiceCartDetails/CouvertureToiture/Demoussage/Demoussage';
import Etancheite from '../../components/ServiceCartDetails/CouvertureToiture/Etancheite/Etancheite';
import Gouttieres from '../../components/ServiceCartDetails/CouvertureToiture/Gouttieres/Gouttieres';
import Installation from '../../components/ServiceCartDetails/CouvertureToiture/Installation/Installation';
import Toiture from '../../components/ServiceCartDetails/CouvertureToiture/Toiture/Toiture';
import Travaux from '../../components/ServiceCartDetails/CouvertureToiture/Travaux/Travaux';
import FenetrePorteHeader from '../../components/ServiceCartDetails/FenetrePorte/FenetrePorteHeader/FenetrePorteHeader';

const CouvertureToiturePage = () => {
    return (
        <div className="lightBgColor">
            <FenetrePorteHeader />
            <Installation />
            <CouvertureFindCraftsman />
            <Gouttieres />
            <Etancheite />
            <Demoussage />
            <Charpente />
            <Toiture />
            <Travaux />
            <Footer />
        </div>
    );
};

export default CouvertureToiturePage;