import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Charpente from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Charpente';
import Defoaming from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Defoaming';
import Gutters from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Gutters';
import Installation from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Installation';
import Terrasse from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Terrasse';
import Toiture from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/Toiture';
import TouvertureToiureCardLink from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/TouvertureToiureCardLink';
import TruvertUreToiureTitle from '../../components/ServiceCartDetails/TouvertureToiture/DetailsCard/TruvertUreToiureTitle';
const CouvertureToiture = () => {
    return (
        <div>
            <NavBar />
            <TruvertUreToiureTitle />
            <Installation />
            <TouvertureToiureCardLink />
            <Gutters />
            <Terrasse />
            <Defoaming />
            <Charpente />
            <Toiture />
            <Footer />
        </div>
    );
};

export default CouvertureToiture;