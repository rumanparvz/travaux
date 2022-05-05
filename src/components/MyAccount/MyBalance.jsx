import React from 'react';

const MyBalance = () => {
    return (
      <div>
        <div className="d-flex justify-content-between">
          <h1>My balance</h1>
          <h1>0,00 €</h1>
        </div>
        <p>Tous les prix sont hors taxe</p>
        <p>Aucune transaction trouvée.</p>
      </div>
    );
};

export default MyBalance;