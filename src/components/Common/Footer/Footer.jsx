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
        <p className=" py-3">
          Filiale du groupe HomeAdvisor International
        </p>
        <p>Etats-Unis: <Link to='/'>Homeadvisor</Link> & <Link to='/'> Angi</Link> Angleterre: <Link to='/'>MyBuilder</Link> Canada: <Link to='/'> Homestars</Link>France: <Link to='/'>123 Devis</Link> Allemagne: <Link to='/'>MyHammer</Link> L'Autriche: <Link to='/'>MyHammer</Link> Italie: <Link to='/'>Instapro</Link> Hollande: <Link to='/'>Werkspot</Link></p>

      </div>
      <div className="item">
        <ul className="d-md-flex align-items-center gap-4" >
          <li><Link to='/' className="text-primary">Métiers</Link></li>
          <li><Link to='/' className="text-primary">Activités</Link></li>
          <li><Link to='/' className="text-primary">Localisation</Link></li>
          <li><Link to='/' className="text-primary">Prix ​​par activité</Link></li>
        </ul>
        <ul className="d-md-flex align-items-center gap-4 py-1 pb-2" >
          <li><Link to='/' className="text-primary">Confidentialité et gestion des cookies</Link></li>
          <li><Link to='/' className="text-primary">Conditions Générales d'Utilisation</Link></li>
        </ul>
        <p><Link to='/'>Conditions générales de vente</Link></p>
      </div>
    </div>
  );
};

export default Footer;
