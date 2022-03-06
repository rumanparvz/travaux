import React from "react";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import { BsFacebook, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    { title: "Besoin d'aide", path: "/" },
    { title: "Qui sommes-nous ?", path: "/" },
    { title: "Presse et médias", path: "/" },
    { title: "Nous rejoindre", path: "/" },
  ];
  return (
    <div
      className="container footer py-5"
      style={{ borderTop: "6px solid #ededed" }}
    >
      <div className="row">
        <div className="col-md-4">
          {data.map(({ title, path }) => (
            <p className="text-primary" key={title}>
              <Link to={path}>{title} </Link>{" "}
            </p>
          ))}
        </div>
        <div className="col-md-4">
          <p className="text-primary">
            <Link to="/">Nos partenaires</Link>
          </p>
          <p>
            <Link to="/">Charte qualité</Link>
          </p>
        </div>
        <div className="col-md-4">
          <div className="footer_div ">
            <p>Vous êtes un professionnel ?</p>
            <Link
              to="/professionnel/inscription/nouvelle"
              className="text-white py-5"
            >
              <BsFillArrowRightCircleFill
                style={{ fontSize: "25px", color: "#e5cb4e" }}
              />
              <h6 className="text-primary d-inline ps-2"> Inscrivez-vous</h6>
            </Link>
          </div>
        </div>
        <div className="icons pt-4">
          <ul>
            <li>
              <Link to="/facebook">
                <BsFacebook />
              </Link>
            </li>
            <li>
              <Link to="/twitter">
                <AiFillTwitterCircle />
              </Link>
            </li>
            <li>
              <Link to="/youtube">
                <AiFillYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="text-primary py-3">
          Filiale du groupe HomeAdvisor International
        </p>

        <p>
          {" "}
          Etats-Unis:{" "}
          <a
            href="https://www.homeadvisor.com/"
            target="_blank"
            rel="noreferrer"
          >
            Homeadvisor
          </a>
          <a href="https://www.angi.com/" target="_blank" rel="noreferrer">
            Angi
          </a>
          Angleterre:
          <a href="https://www.mybuilder.com/" target="_blank" rel="noreferrer">
            MyBuilder
          </a>
          :Canada
          <a href="https://homestars.com/" target="_blank" rel="noreferrer">
            Homestars
          </a>
          France:
          <a href="https://www.123devis.com/" target="_blank" rel="noreferrer">
            123 Devis
          </a>
          Allemagne:
          <a href="https://www.my-hammer.de/" target="_blank" rel="noreferrer">
            MyHammer
          </a>{" "}
          L'Autriche:
          <a href="https://www.my-hammer.at/" target="_blank" rel="noreferrer">
            MyHammer
          </a>
          Italie:
          <a href="https://www.instapro.it/" target="_blank" rel="noreferrer">
            Instapro
          </a>
          Hollande:
          <a href="https://www.werkspot.nl/" target="_blank" rel="noreferrer">
            Werkspot
          </a>
        </p>
        <nav>
          <p>
            <a href="https://www.travaux.com/metiers">Professions</a>{" "}
            <a href="https://www.travaux.com/activites">Activities</a>{" "}
            <a href="https://www.travaux.com/toutes-villes">Location</a>{" "}
            <a href="https://www.travaux.com/guides-des-prix">Price</a>{" "}
            <a href="https://www.travaux.com/politique-confidentialite">per</a>{" "}
            <a href="https://www.travaux.com/conditions-generales">activity</a>{" "}
            <a href="https://www.travaux.com/conditions-generales">
              Confidentiality
            </a>{" "}
            <a href="https://www.travaux.com/conditions-generales">and</a>{" "}
            <a href="https://www.travaux.com/conditions-generales">cookie</a>{" "}
            <a href="https://www.travaux.com/conditions-generales">
              management{" "}
            </a>
            <a href="https://www.travaux.com/conditions-generales">
              Terms of Service
            </a>{" "}
            <a href="https://www.travaux.com/conditions-generales">
              {" "}
              Terms of Sales
            </a>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
