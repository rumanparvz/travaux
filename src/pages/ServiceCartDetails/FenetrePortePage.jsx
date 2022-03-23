import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Blindage from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Blindage';
import FenetrePortCatagoryLink from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/FenetrePortCatagoryLink';
import FenetrePortServiceLink from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/FenetrePortServiceLink';
import FentrporteTitle from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/FentrporteTitle';
import Garage from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Garage';
import Portail from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Portail';
import Props from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Props';
import Roulant from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Roulant';
import Véranda from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Veranda';
import Volet from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Volet';
import WIndow from '../../components/ServiceCartDetails/FenetrePorte/DetailsCard/Window';

const FenetrePortePage = () => {
    return (
        <div>
            <NavBar />
            <FentrporteTitle />
            <WIndow />
            <FenetrePortCatagoryLink />
            <Blindage />
            <Garage />
            <Véranda />
            <Volet />
            <Portail />
            <Props />
            <Roulant />
            <FenetrePortServiceLink />
            <Footer />
        </div>
    );
};

export default FenetrePortePage;