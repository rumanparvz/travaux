import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Aménagement from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Aménagement';
import Appartement from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Appartement';
import CatragoryLink from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/CatragoryLink';
import ConstructionRénovationMaison from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/ConstructionRénovationMaison';
import Escaliers from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Escaliers';
import ExtensionMission from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/ExtensionMission';
import Garage from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Garage';
import Gros from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Gros';
import Masonry from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/Masonry';
import MoreServiceLink from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/MoreServiceLink';
import SawingAndCoring from '../../components/ServiceCartDetails/ConstructionRénovationMaison/DetailsCard/SawingAndCoring';

const ConstructionRénovationMaisonPage = () => {
    return (
        <div>
            <NavBar  />
            <ConstructionRénovationMaison />
            <Masonry />
            <CatragoryLink />
            <Garage />
            <Escaliers />
            <SawingAndCoring />
            <Appartement />
            <ExtensionMission />
            <Aménagement />
            <Gros />
            <MoreServiceLink />
            <Footer />
        </div>
    );
};

export default ConstructionRénovationMaisonPage;