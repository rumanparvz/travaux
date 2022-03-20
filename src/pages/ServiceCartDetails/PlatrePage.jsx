import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import Cloison from '../../components/ServiceCartDetails/Platre/Cloison/Cloison';
import FacadeCoating from '../../components/ServiceCartDetails/Platre/FacadeCoating/FacadeCoating';
import FalseCeiling from '../../components/ServiceCartDetails/Platre/FalseCeiling/FalseCeiling';
import Plasterboard from '../../components/ServiceCartDetails/Platre/Plasterboard/Plasterboard';
import PlasterWork from '../../components/ServiceCartDetails/Platre/PlasterWork/PlasterWork';
import PlatreFindCraftsman from '../../components/ServiceCartDetails/Platre/PlatreFindCraftsman/PlatreFindCraftsman';
import PlatreHeader from '../../components/ServiceCartDetails/Platre/PlatreHeader/PlatreHeader';

const PlatrePage = () => {
    return (
        <div className="lightBgColor">
            <PlatreHeader />
            <PlasterWork />
            <PlatreFindCraftsman />
            <Plasterboard />
            <FacadeCoating />
            <FalseCeiling />
            <Cloison />
            <Footer />
        </div>
    );
};

export default PlatrePage;