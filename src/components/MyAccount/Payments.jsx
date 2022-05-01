import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar.jsx";

import { FiChevronsRight } from "react-icons/fi";
const Payments = () => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div>
          <Link className="text_blue text-decoration-underline" to="/">
            Accueil
          </Link>
          <span className="mx-2">
            <FiChevronsRight />
          </span>
          <span>Saisissez votre mot de passe</span>
        </div>
        <h1>Saisissez votre mot de passe</h1>
        <p>
          Nous prenons très au sérieux la sécurité des comptes. Pour protéger
          votre compte, nous vous demandons de saisir votre mot de passe.
        </p>
        <div>
          <span>
            <label htmlFor="">Mot de passe</label>
            <br />
            <input type="text" />
          </span>
          <Link className="text_blue text-decoration-underline" to="/demander">
            Mot de passe oublié ?
          </Link>
        </div>
        <button>
          <span>Continuer</span> <FiChevronsRight />
        </button>
      </div>
    </div>
  );
};

export default Payments;
