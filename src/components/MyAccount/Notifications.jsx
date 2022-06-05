import React, { useState } from "react";
import { Switch } from "antd";
import axios from "axios";

const Notifications = ({ notifications, userId }) => {
  const [isSwitch, setIsSwitch] = useState({
    email: false,
    sms: false,
  });

  const toggler = async (e, id) => {
    console.log(e, id);
    if (id === 'email') {
      await axios.patch(`https://ancient-gorge-88070.herokuapp.com/auth/updateNotification/${userId}`, {
        email: e,
        sms: notifications?.sms
      });
    } else if (id === 'sms') {
      await axios.patch(`https://ancient-gorge-88070.herokuapp.com/auth/updateNotification/${userId}`, {
        sms: e,
        email: notifications?.email
      });
    }
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
        <Switch defaultChecked={notifications?.email} className="switch_btn" onChange={(e) => toggler(e, 'email')} />
      </div>
      <div className="d-flex justify-content-between">
        <p>Recevez un résumé quotidien des projets de chantiers publiés</p>
        <Switch className="switch_btn" defaultChecked={notifications?.email} onChange={(e) => toggler(e, 'email')} />
      </div>
      <h3 className="mt-4">SMS</h3>
      <div className="d-flex justify-content-between">
        <p>Recevez un SMS pour chaque demande directe</p>
        <Switch className="switch_btn" defaultChecked={notifications?.sms} onChange={(e) => toggler(e, 'sms')} />
      </div>
      <p>
        Les demandes directes sont des invitations envoyées par les
        propriétaires intéressés par votre profil.
      </p>
    </div>
  );
};

export default Notifications;
