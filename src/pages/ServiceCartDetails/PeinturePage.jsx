import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Decorative from '../../components/ServiceCartDetails/Peinture/DetailsCard/Decorative';
import Lambris from '../../components/ServiceCartDetails/Peinture/DetailsCard/Lambris';
import Painting from '../../components/ServiceCartDetails/Peinture/DetailsCard/Painting';
import Papier from '../../components/ServiceCartDetails/Peinture/DetailsCard/Papier';
import Peinture from '../../components/ServiceCartDetails/Peinture/DetailsCard/Peinture';
import PeintureCatagoryLink from '../../components/ServiceCartDetails/Peinture/DetailsCard/PeintureCatagoryLink';
import PeintureTitle from '../../components/ServiceCartDetails/Peinture/DetailsCard/PeintureTitle';

const PeinturePage = () => {
    return (
        <div>
            <NavBar />
            <PeintureTitle />
            <Peinture />
            <PeintureCatagoryLink />
            <Painting />
            <Papier />
            <Decorative />
            <Lambris />
            <Footer />
        </div>
    );
};

export default PeinturePage;