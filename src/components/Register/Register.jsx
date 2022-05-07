/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar";
const Register = () => {
  return (
    <div className="register_section ">
      <NavBar />
      <div className="row container-fluid">
        <div className="col-md-6">
          <img
            className="img-fluid"
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
          <Link to="/job/registration">
            <button className="primary_button">S’inscrire maintenant</button>
          </Link>
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
            <img
              className="img-fluid w-50 "
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
            <img
              className="img-fluid  w-50"
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
            <img
              className="img-fluid  w-50"
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
      <div className="mid_content container ">
        <div className="row">
          <div className="col-md-6">
            <h1>La façon la plus rentable de remporter des chantiers</h1>
            <p>
              Avec Travaux.com, envoyer un premier message aux propriétaires est
              gratuit. Vous êtes facturé uniquement si le propriétaire vous
              choisit et que vos coordonnées sont échangées. Les prix de
              contacts varient de 6€ à 75€ selon l'importance du chantier. Il
              n'y a pas d’abonnement ni de frais d'inscription.
            </p>
          </div>
          <div className="col-md-6 p-4 ">
            <div
              className=" gap-2 d-flex justify-content-center align-items-center w-75 ms-4"
              style={{ border: "1px solid #ddd" }}
            >
              <div className="title">
                <p>4 pièces : peinture mur et plafond</p>
                <p>Entretien de jardin : 500 m²</p>
                <p>Réparer une fuite: maison individuelle</p>
              </div>
              <div className="price">
                <p>24.00 €</p>
                <p>43.00 €</p>
                <p>50.00 €</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row d-flex justify-content-between py-5 "
          style={{ backgroundColor: "#ffffff" }}
        >
          <div className="col-md-6">
            <h3>Recevez des projets de chantier dans votre zone</h3>
          </div>
          <div className="col-md-6 ">
            <Link to="/job/registration">
              <button className="primary_button">S’inscrire maintenant</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mobile-image container py-5">
        <div className="row">
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="	https://www.travaux.com/static/service-pro/register-landing-page/fr/mobile.avif"
              alt=""
            />
          </div>
          <div className="col-md-6 py-3">
            <h1>Remplissez votre planning</h1>
            <p>
              Même lorsque votre agenda est bien rempli, nous vous aidons à
              optimiser votre temps de travail. Lorsque vous avez des
              annulations de dernière minute ou du temps libre, Travaux.com sera
              là pour vous fournir des projets de chantier qui peuvent remplir
              votre planning.
            </p>
          </div>
        </div>
      </div>
      <div className="vidio container pb-4">
        <div className="row">
          <div className="col-md-7">
            <h2>Ce que disent les professionnels...</h2>
            <p>
              “C'est vraiment facile de se faire de nouveaux clients, il y a
              énormément de nouveaux projets chaque jour. Vous obtenez des
              coordonnées de clients très rapidement. Et ensuite il faut tout
              simplement établir son devis, et faire du travail de qualité.”
            </p>
            <div className="py-5">
              <h5>Jeremy, plombier</h5>
              <p className="text-secondary">Membre Travaux.com depuis 2018</p>
            </div>
          </div>
          <div className="col-md-5">
            <iframe
              width="400"
              height="300"
              src="https://www.youtube.com/embed/QKaxlHU23s4"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div
        className="register_footer pb-5 "
        style={{ backgroundColor: "#f9f8f6" }}
      >
        <div
          className="container"
          style={{ borderBottom: "8px solid #94d3ff" }}
        >
          <div className="row  d-flex justify-content-between py-5 ">
            <div className="col-md-6">
              <h3>Recevez des projets de chantier dans votre zone</h3>
            </div>

            <div className="col-md-6 ">
              <Link to="/job/registration">
                <button className="primary_button">S’inscrire maintenant</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-3">
              <a href="/" className="text-primary mx-4">
                Besoin d'aide
              </a>
              <a href="/" className="text-primary mx-3">
                Confidentialité et gestion des cookies
              </a>{" "}
              <br />
              <a href="/" className="text-primary mx-4">
                Conditions Générales d'Utilisation
              </a>
            </div>
            <div className="col-md-6 py-3">
              <p className="text-secondary p">Copyright© Travaux.com - 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
