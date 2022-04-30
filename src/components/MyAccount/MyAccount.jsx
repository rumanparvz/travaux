import React, { useState } from 'react';
import Footer from '../Common/Footer/Footer.jsx';
import NavBar from '../Common/NavBar/NavBar.jsx';
import Activities from './Activities.jsx';
import CompanyDetails from "./CompanyDetails.jsx";

const MyAccount = () => {
  const [tab, setTab] = useState("CompanyDetails");
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <div className="row ">
          <div className="col col-sm-12 col-md-4 col-lg-4">
            <p
              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              Coordonnées de l'entreprise
            </p>
            <p className="myAccount_btn" onClick={() => setTab("Activities")}>
              Activités
            </p>
            <p className="myAccount_btn" onClick={() => setTab("modifier")}>
              Zone d'intervention
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              Paramètres de notification
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              Mon solde
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              Utiliser un code promo
            </p>
            <p
              className="myAccount_btn"
              onClick={() => setTab("CompanyDetails")}
            >
              Paiements
            </p>
          </div>
          <div className="col col-sm-12 col-md-8 col-lg-8">
            {tab === "CompanyDetails" && <CompanyDetails />}
            {tab === "Activities" && <Activities />}
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAccount;