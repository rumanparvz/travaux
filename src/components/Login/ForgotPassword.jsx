import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../Common/NavBar/NavBar.jsx";

const ForgotPassword = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div>
            <h2>Demander un nouveau mot de passe</h2>
            <p className="m-0">
              Entrez votre adresse e-mail. Nous vous enverrons un lien pour
              créer un nouveau mot de passe.
            </p>

            <div className="my-5">
              <label htmlFor="">
                Adresse e-mail <span className="text-danger">*</span>
              </label>
              <br />
              <input className="forget_input" type="email" name="" id="" />
            </div>
            <Link to="/resetPassword">
              <button className="btn btn-primary rounded-pill px-3 py-2">
                Envoyer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
