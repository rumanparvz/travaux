import React from "react";
import NavBar from "../Common/NavBar/NavBar";

const Register = () => {
  return (
    <div className="register_section">
      <NavBar />
      <div className="row container-fluid">
        <div className="col-md-6">
          <img
            src="https://www.travaux.com/static/service-pro/register-landing-page/bgImgDesktop.png"
            alt=""
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="pt-5 mt-5" style={{ fontSize: "50px" }}>
            Votre prochain <br /> chantier est proche <br /> de chez vous
          </h1>
          <p className="my-4" style={{ fontSize: "17px " }}>
            Il y a plein de chantiers autour de chez vous mais en gagner un est
            plus facile à dire qu'à faire. Sur Travaux.com, vous déterminez
            votre zone de travail afin que tous les projets de chantiers que
            vous recevez soient exactement là où vous voulez intervenir.
          </p>
          <button className="primary_button">S’inscrire maintenant</button>
        </div>
      </div>
      <div className="middle_content text-center py-5">
        <h1>La simplicité du paiement à la carte</h1>
        <p className="py-5">
          Il n'y a pas d’abonnement ni de frais d'inscription. <br />{" "}
          Travaux.com facture un faible montant pour la mise en relation lorsque
          vous et <br /> le propriétaire êtes prêts à échanger vos coordonnées.
        </p>
      </div>
      <div className="image_service container pb-5">
        <div className="row text-center d-flex justify-content-center align-items-center">
          <div className="col-md-4 ">
            <img className="img-fluid w-50 "
              src="https://www.travaux.com/static/service-pro/register-landing-page/onboarding_step1.avif"
              alt=""
            />
            <div className="content mt-5 ">
              <h5>Choisissez les projets que vous voulez</h5>
              <p>
                Recevez les projets de chantier dans votre zone d’intervention.
                Envoyez un message à ceux qui vous intéressent.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <img className="img-fluid  w-50"
              src="https://www.travaux.com/static/service-pro/register-landing-page/onboarding_step2.avif"
              alt=""
            />
            <div className="content mt-5">
              <h5>
                Les propriétaires choisissent de partager leurs coordonnées
              </h5>
              <p>
                Les propiétaires sélectionnent les professionnels avec qui ils
                veulent entrer en contact.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <img className="img-fluid  w-50"
              src="https://www.travaux.com/static/service-pro/register-landing-page/onboarding_step3.avif"
              alt=""
            />
            <div className="content mt-5">
              <h5>Appelez pour établir un devis</h5>
              <p>
                Une fois selectionné, nous vous facturons un faible montant et
                vous mettons en relation avec le propriétaire. mb-3
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
