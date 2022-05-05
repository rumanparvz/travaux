import React from 'react';
import { Button } from 'react-bootstrap';

const PromoCode = () => {
    return (
      <div>
        <h1>Utiliser un code promo</h1>
        <p>
          Entrez votre code promotionnel ici pour ajouter des crédits au solde
          de votre compte.
        </p>
        <input className="promoCode" type="text" name="" id="" />
      <br />
        
          <Button className="mt-4 ">Ajouter un code promotionnel</Button>
      
      </div>
    );
};

export default PromoCode;