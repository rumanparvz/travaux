import React from 'react';
import MoreServicesParent from '../../Common/MoreServicesParent/MoreServicesParent';

const MoreFenetrePorteServices = () => {
    const moreFenetrePorteServices = 
        {
            title: "Plus de services fenêtre et porte",
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
            <h4 className="mt-65">{moreFenetrePorteServices.title}</h4>
            <MoreServicesParent data={moreFenetrePorteServices} />
        </div>
    );
};
export default MoreFenetrePorteServices;