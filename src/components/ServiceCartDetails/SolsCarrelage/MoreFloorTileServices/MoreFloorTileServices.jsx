import React from 'react';
import MoreServicesParent from '../../Common/MoreServicesParent/MoreServicesParent';

const MoreFloorTileServices = () => {
    const MoreFloorTileServicesData = 
        {
            title: "Plus de services plomberie",
            services:[
                {
                    title:"Canalisation (nettoyage, curage, débouchage)",
                    path:"/"
                },
                {
                    title:"Drainage",
                    path:"/"
                },
                {
                    title:"Canalisation (pose, remplacement, réparation)",
                    path:"/"
                },
                {
                    title:"Brumisateur",
                    path:"/"
                },
                {
                    title:"Fontaine d'eau",
                    path:"/"
                }
            ]
        }
    return (
        <div className="container">
            <h4 className="mt-65">{MoreFloorTileServicesData.title}</h4>
            <MoreServicesParent data={MoreFloorTileServicesData} />
        </div>
    );
};
export default MoreFloorTileServices;