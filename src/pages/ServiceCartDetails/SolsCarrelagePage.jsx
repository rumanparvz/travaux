import React from 'react';
import PlomberieHeader from '../../components/ServiceCartDetails/Plomberie/PlomberieHeader/PlomberieHeader';
import Chape from '../../components/ServiceCartDetails/SolsCarrelage/Chape/Chape';
import ConcreteFloor from '../../components/ServiceCartDetails/SolsCarrelage/ConcreteFloor/ConcreteFloor';
import InstallationParquet from '../../components/ServiceCartDetails/SolsCarrelage/InstallationParquet/InstallationParquet';
import Laying from '../../components/ServiceCartDetails/SolsCarrelage/Laying/Laying';
import MoreFloorTileServices from '../../components/ServiceCartDetails/SolsCarrelage/MoreFloorTileServices/MoreFloorTileServices';
import PlasticFloor from '../../components/ServiceCartDetails/SolsCarrelage/PlasticFloor/PlasticFloor';
import ReconstitutedStones from '../../components/ServiceCartDetails/SolsCarrelage/ReconstitutedStones/ReconstitutedStones';
import RenovationParquetFloor from '../../components/ServiceCartDetails/SolsCarrelage/RenovationParquetFloor/RenovationParquetFloor';
import ResinFloor from '../../components/ServiceCartDetails/SolsCarrelage/ResinFloor/ResinFloor';
import SolsCarrelageFindCraftsman from '../../components/ServiceCartDetails/SolsCarrelage/SolsCarrelageFindCraftsman/SolsCarrelageFindCraftsman';
import Footer from '../../components/Common/Footer/Footer';
const SolsCarrelagePage = () => {
    return (
        <div>
            <PlomberieHeader />
            <InstallationParquet />
            <SolsCarrelageFindCraftsman />
            <Laying />
            <RenovationParquetFloor />
            <Chape />
            <ResinFloor />
            <ConcreteFloor />
            <ReconstitutedStones />
            <PlasticFloor />
            <MoreFloorTileServices />
            <Footer />
        </div>
    );
};

export default SolsCarrelagePage;