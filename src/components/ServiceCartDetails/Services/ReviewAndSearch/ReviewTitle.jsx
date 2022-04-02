import React from "react";
import { Link } from "react-router-dom";

const ReviewTitle = ({ findData }) => {
  console.log("findData", findData);

  return (
    <div className="container">
      <p className="py-4 " style={{ textTransform: "capitalize" }}>
        <Link to="/" className="text-primary">
          Accueil
        </Link>
        /
        <Link to={`/${findData.path}`} className="text-primary">
          {findData.path}
        </Link>{" "}
        /{findData.subDescription.path}
      </p>

      <h1 style={{ fontSize: "50px" }}>
        Vous cherchez un plombier près de chez vous ?
      </h1>
      <p className="py-4">
        Décrivez votre projet de chantier sur travaux.com et nous vous mettrons
        en contact avec des plombiers.
      </p>
    </div>
  );
};

export default ReviewTitle;
