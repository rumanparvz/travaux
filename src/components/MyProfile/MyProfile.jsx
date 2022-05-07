import React from "react";
import Footer from "../Common/Footer/Footer.jsx";
import NavBar from "../Common/NavBar/NavBar.jsx";
import {FaRegEye} from 'react-icons/fa'
import { AiFillStar } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import UploadAndDisplayImage from "./UploadAndDisplayImage.jsx";
import { Button } from "react-bootstrap";
import { MdOutlineEdit } from "react-icons/md";
const MyProfile = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-4">
        <div>
          <span className="text-primary">Nouveaux projets</span>
          <span className="mx-2">/</span>
          <span>Mon profil</span>
        </div>
        <h1 className="my-5">Mon profil</h1>
        <p>Complétez votre profil pour vous présenter aux particuliers.</p>
        <h6 className="text-primary">
          <FaRegEye /> <span>Voir mon profil en tant que particulier</span>
        </h6>
        <div className="text-center">
          <div>
            <div className="mb-5 d-flex justify-content-center align-items-center">
              <UploadAndDisplayImage />
            </div>
            <div>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span>
                <AiFillStar />
              </span>
              <span className="ms-2">Lire les avis</span>
            </div>
            <p>
              <span className="me-2">
                <ImLocation2 />
              </span>
              75001 Paris 01
            </p>
          </div>
        </div>

        <div>
          <h5>Avis clients</h5>
          <p>
            Les professionnels avec 5 avis ou plus augmentent leurs chances
            d'être sélectionnés par les particuliers.
          </p>
          <p>
            Obtenez jusqu'à 5 avis externes publiés sur votre profil en envoyant
            des demandes à vos anciens clients.
          </p>
          <Button className="rounded-pill p-3 mb-5 mt-3">
            Demander un avis
          </Button>
        </div>
        <div>
          <div className="d-flex justify-content-between mb-3">
            <h3>Description de votre entreprise</h3>
            <h6 className="text-primary">
              <span>
                <MdOutlineEdit />
              </span>
              Modifier
            </h6>
          </div>
          <p className="m-0">
            répond à votre demande de Architecte à 75005, Paris et ses
            alentours. A votre écoute pour vous accompagner dans vos projets de
            Architecte (projet de rénovation, construction), Aménagement ou
            architect…
          </p>
          <h6 className="text-primary">Lire la suite</h6>
        </div>
        <div>
          <h2 className="mt-5">Portfolio</h2>
          <UploadAndDisplayImage />
          <span>
            Sélectionnez votre fichier ou faites-le glisser (png, jpg)
          </span>
          <h2 className="mb-3">Garantie</h2>
          <p>
            La garantie est très importante pour les utilisateurs de
            Travaux.com. Nous informons toujours nos utilisateurs que la
            garantie peut différer selon le projet et le service. Par
            conséquent, il est très important de se mettre d'accord au préalable
            avec le professionnel.
          </p>
          <p>
            Attention : en choisissant l'option "Oui, je propose une assurance",
            cette information sera visible sur votre profil pour les
            particuliers.
          </p>
          <div className="mt-4 d-flex">
            <span className="me-5 d-flex align-items-center">
              <input
                style={{ width: "24px", height: "24px" }}
                className=" me-2 d-inline-block rounded-circle"
                type="checkbox"
                name=""
                id=""
              />
              <span>Oui, je propose une assurance</span>
            </span>
            <span className="d-flex align-items-center">
              <input
                style={{ width: "24px", height: "24px" }}
                className=" me-2 rounded-pill"
                type="checkbox"
                name=""
                id=""
              />
              <span>Non, je ne propose pas d'assurance</span>
            </span>
          </div>
          <h1 className="my-5">Avis (0)</h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyProfile;
