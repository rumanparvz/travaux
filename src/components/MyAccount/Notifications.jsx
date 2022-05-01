import React, { useState } from "react";
import { Switch } from "antd";

const Notifications = () => {
  const [isSwitch, setIsSwitch] = useState(false);

  const toggler = () => {
    isSwitch ? setIsSwitch(false) : setIsSwitch(true);
  };
  return (
    <div>
      <h1 className="mb-4">Notifications</h1>
      <h3>E-mail</h3>
      <div className="d-flex justify-content-between mb-2">
        <p>
          Recevez un email chaque fois qu'un nouveau projet de chantier est
          publié
        </p>
        <Switch className="switch_btn" onClick={toggler} />
      </div>
      <div className="d-flex justify-content-between">
        <p>Recevez un résumé quotidien des projets de chantiers publiés</p>
        <Switch className="switch_btn" onClick={toggler} />
      </div>
      <h3 className="mt-4">SMS</h3>
      <div className="d-flex justify-content-between">
        <p>Recevez un SMS pour chaque demande directe</p>
        <Switch className="switch_btn" onClick={toggler} />
      </div>
      <p>
        Les demandes directes sont des invitations envoyées par les
        propriétaires intéressés par votre profil.
      </p>
    </div>
  );
};

export default Notifications;
