
import React from "react";
import NavBar from "../Common/NavBar/NavBar.jsx";

const ResetPassword = () => {
  return (
    <div>
      <NavBar />
      <div className="d-flex justify-content-center mt-5">
        <div>
          <div>
            <h2>Demander un nouveau mot de passe</h2>
            <p>
              S'il y a un compte associé à admin@admin.com, vous recevrez un
              email avec un <br /> lien pour réinitialiser votre mot de passe.
            </p>
            <p>
              Si vous n'avez pas reçu d'email, merci de vérifier votre dossier
              SPAM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
