import React from "react";
import { AiFillStar } from "react-icons/ai";
const Banner = ({ findData }) => {
  return (
    <div className="py-5 banner mx-2">
      <div className="banner_wrapper">
        <img src={findData.img} alt="" className="w-100" />
      </div>
      <div className="p-4" style={{border:'1px solid #ddd'}}>
        <div className="content container-fluid row  w-75 m-auto ">
          <div className="col-md-6 d-flex justify-content-center align-items-center gap-3">
            <div className="rating p-md-4 ">
              <h1 style={{ display: "inline" }}>4.5</h1>

              <AiFillStar style={{ color: "green" }} />
              <AiFillStar style={{ color: "green" }} />
              <AiFillStar style={{ color: "green" }} />
              <AiFillStar style={{ color: "green" }} />
            </div>
            <div className="description">
              <h4>Les peintres les mieux notés</h4>
              <p>
                Nos peintres, sont notés 4.6 sur 5 sur la base de 591 avis de la
                part de consommateurs.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center gap-3">
            <div
              className="image p-md-4"
              style={{ backgroundColor: "#f9f8f6" }}
            >
              <img
                style={{ width: "150px" }}
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt=""
                className="img-fluid w "
              />
            </div>
            <div className="content">
              <h4>Contrôle de qualité</h4>
              <p>
                Tous les professionnels de notre réseau ont un numéro
                d’inscription à la chambre de commerce (SIRET).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
