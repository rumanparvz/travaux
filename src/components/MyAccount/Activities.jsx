import React, { useState } from "react";
import { Switch } from "antd";

const Activities = () => {
     const [isSwitch, setIsSwitch] = useState(false);

    const toggler = () => {
        isSwitch ? setIsSwitch(false) : setIsSwitch(true);
    }
    
    return (
      <div>
        <div>
          <h1>Activities</h1>
          <p>
            Sélectionnez toutes les activités que vous proposez pour voir des
            projets intéressants.
          </p>
        </div>
        <h1>Architecte</h1>
        <hr />
        <div className="d-flex justify-content-between">
          <p>Aménagement ou architecte d'intérieur</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Aménagement de combles</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Architecte (projet de rénovation, construction)</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Maître d'oeuvre</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Bureau d'études - Ingénierie</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Diagnostic performance énergétique (DPE)</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Installation ou rénovation d'une cuisine</p>
          <Switch onClick={toggler} />
        </div>
        <div className="d-flex justify-content-between">
          <p>Architecte paysagiste</p>
          <Switch onClick={toggler} />
        </div>
        <div>
          <p>
            Si vous souhaitez modifier ou ajouter des métiers, veuillez nous
            contacter à partir de notre
            <span className="text_blue">formulaire de contact en ligne.</span>
          </p>
        </div>
      </div>
    );
};

export default Activities;
