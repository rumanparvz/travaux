import React from 'react';
// import MorePlumbingServices from '../../components/ServiceCartDetails/Common/MorePlumbingServices/MorePlumbingServices';
import GreaseTrap from '../../components/ServiceCartDetails/Plomberie/GreaseTrap/GreaseTrap';
import InstallationWhirlpoolBath from '../../components/ServiceCartDetails/Plomberie/InstallationWhirlpoolBath/InstallationWhirlpoolBath';
import MiniStation from '../../components/ServiceCartDetails/Plomberie/MiniStation/MiniStation';
import MorePlumbingServices from '../../components/ServiceCartDetails/Plomberie/MorePlumbingServices/MorePlumbingServices';
import PlomberieFindCraftsman from '../../components/ServiceCartDetails/Plomberie/PlomberieFindCraftsman/PlomberieFindCraftsman';
import PlomberieHeader from '../../components/ServiceCartDetails/Plomberie/PlomberieHeader/PlomberieHeader';
import Plumbing from '../../components/ServiceCartDetails/Plomberie/Plumbing/Plumbing';
import SepticTank from '../../components/ServiceCartDetails/Plomberie/SepticTank/SepticTank';
import SmallPlumbingJobs from '../../components/ServiceCartDetails/Plomberie/SmallPlumbingJobs/SmallPlumbingJobs';
import WaterHeater from '../../components/ServiceCartDetails/Plomberie/WaterHeater/WaterHeater';
import WaterSoftener from '../../components/ServiceCartDetails/Plomberie/WaterSoftener/WaterSoftener';
import Footer from '../../components/Common/Footer/Footer';

const PlomberiePage = () => {
    return (
        <div className="lightBgColor">
            <PlomberieHeader />
            <WaterHeater />
            <PlomberieFindCraftsman />
            <SepticTank />
            <WaterSoftener />
            <Plumbing />
            <MiniStation />
            <InstallationWhirlpoolBath />
            <SmallPlumbingJobs />
            <GreaseTrap />
            <MorePlumbingServices />
            <Footer />
        </div>
    );
};

export default PlomberiePage;