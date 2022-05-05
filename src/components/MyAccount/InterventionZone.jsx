import React, { useState } from 'react';

const InterventionZone = () => {
    const [isHide, setIsHide] = useState("text");
    const [setIsClose] = useState(true);
    const toggler = () => {
      setIsHide("input");
      setIsClose(false);
    };
    return (
      <div>
        <h3 className='mb-4'>Zone d'intervention</h3>
        <h5>Votre localisation actuelle</h5>
        <p>75005, Paris</p>
        {isHide === "text" && (
          <h6 onClick={toggler} className="text-primary select_cursor my-4">
            Changer de localisation
          </h6>
        )}
        {isHide === "input" && (
          <div className="mb-4">
            <h5>Changer de localisation</h5>
            <div className="select_cursor">
              <p className="m-0">
                Rechercher un lieu ou une adresse (facultatif)
              </p>
              <input className="search_input" type="search" name="" id="" />
            </div>
          </div>
        )}

        <h5>Définir la distance</h5>
        <p>
          Distance maximum des projets de chantier depuis votre localisation
          actuelle, en kilomètres à vol d'oiseau.
        </p>
      </div>
    );
};

export default InterventionZone;