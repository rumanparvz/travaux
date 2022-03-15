import React from 'react';
import DoorShield from '../../components/ServiceCartDetails/FenetrePorte/DoorShield/DoorShield';
import FenetrePorteFindCraftsman from '../../components/ServiceCartDetails/FenetrePorte/FenetrePorteFindCraftsman/FenetrePorteFindCraftsman';
import FenetrePorteHeader from '../../components/ServiceCartDetails/FenetrePorte/FenetrePorteHeader/FenetrePorteHeader';
import GarageDoor from '../../components/ServiceCartDetails/FenetrePorte/GarageDoor/GarageDoor';
import GardeCorps from '../../components/ServiceCartDetails/FenetrePorte/GardeCorps/GardeCorps';
import Portail from '../../components/ServiceCartDetails/FenetrePorte/Portail/Portail';
import Veranda from '../../components/ServiceCartDetails/FenetrePorte/Veranda/Veranda';
import Volet from '../../components/ServiceCartDetails/FenetrePorte/Volet/Volet';
import WindowDoor from '../../components/ServiceCartDetails/FenetrePorte/WindowDoor/WindowDoor';
const FenetrePortePage = () => {
    return (
        <div className="lightBgColor">
            <FenetrePorteHeader />
            <WindowDoor />
            <FenetrePorteFindCraftsman />
            <DoorShield />
            <GarageDoor />
            <Veranda />
            <Volet />
            <Portail />
            <GardeCorps />
        </div>
    );
};


export default FenetrePortePage;