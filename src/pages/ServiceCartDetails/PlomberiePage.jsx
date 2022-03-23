import React from 'react';
import Footer from '../../components/Common/Footer/Footer';
import NavBar from '../../components/Common/NavBar/NavBar';
import Adoucisseur from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Adoucisseur';
import Baignoire from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Baignoire';
import Chauffeeau from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Chauffeeau';
import Fosse from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Fosse';
import MiniStation from '../../components/ServiceCartDetails/Plomberie/DetailsCard/MiniStation';
import Petits from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Petits';
import PloberieTItle from '../../components/ServiceCartDetails/Plomberie/DetailsCard/PloberieTItle';
import Plomberie from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Plomberie';
import PlomberieServiceLink from '../../components/ServiceCartDetails/Plomberie/DetailsCard/PlomberieServiceLink';
import PlomilsCardLink from '../../components/ServiceCartDetails/Plomberie/DetailsCard/PlomilsCardLink';
import Septique from '../../components/ServiceCartDetails/Plomberie/DetailsCard/Septique';
const PlomberiePage = () => {
    return (
        <div>
            <NavBar />
            <PloberieTItle />
            <Chauffeeau />
            <PlomilsCardLink />
            <Fosse />
            <Adoucisseur />
            <Plomberie />
            <MiniStation />
            <Baignoire />
            <Petits />
            <Septique />
            <PlomberieServiceLink />
            <Footer />
        </div>
    );
};

export default PlomberiePage;